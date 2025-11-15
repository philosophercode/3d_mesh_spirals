import * as THREE from 'three';
import type { SpiralParams, ProjectionType } from '../utils/types';
import { buildThickWallGeometry } from '../geometry/spiral';

export interface Point2D {
  x: number;
  y: number;
}

export interface Path2D {
  points: Point2D[];
  layer: 'outer' | 'inner' | 'crossSection';
  closed: boolean;
}

// Trace outer boundary from line segments by finding the outermost path
function traceOuterBoundary(segments: { p1: Point2D; p2: Point2D; z: number }[]): Point2D[] {
  if (segments.length === 0) return [];

  // Create a map of connected points
  const pointConnections = new Map<string, Point2D[]>();
  const allPoints: Point2D[] = [];
  const pointMap = new Map<string, Point2D>();

  // Collect all unique points and their connections
  segments.forEach(seg => {
    const key1 = `${seg.p1.x.toFixed(4)},${seg.p1.y.toFixed(4)}`;
    const key2 = `${seg.p2.x.toFixed(4)},${seg.p2.y.toFixed(4)}`;
    
    if (!pointMap.has(key1)) {
      pointMap.set(key1, seg.p1);
      allPoints.push(seg.p1);
      pointConnections.set(key1, []);
    }
    if (!pointMap.has(key2)) {
      pointMap.set(key2, seg.p2);
      allPoints.push(seg.p2);
      pointConnections.set(key2, []);
    }
    
    pointConnections.get(key1)!.push(seg.p2);
    pointConnections.get(key2)!.push(seg.p1);
  });

  if (allPoints.length === 0) return [];

  // Find the outermost points (furthest from center)
  const center = allPoints.reduce((acc, p) => ({ x: acc.x + p.x, y: acc.y + p.y }), { x: 0, y: 0 });
  center.x /= allPoints.length;
  center.y /= allPoints.length;

  // Find starting point (furthest from center)
  let startPoint = allPoints[0];
  let maxDist = 0;
  allPoints.forEach(p => {
    const dist = (p.x - center.x) ** 2 + (p.y - center.y) ** 2;
    if (dist > maxDist) {
      maxDist = dist;
      startPoint = p;
    }
  });

  // Trace the boundary by always taking the leftmost turn (counter-clockwise)
  const boundary: Point2D[] = [];
  const visited = new Set<string>();
  let currentPoint = startPoint;
  const startKey = `${startPoint.x.toFixed(4)},${startPoint.y.toFixed(4)}`;

  do {
    const currentKey = `${currentPoint.x.toFixed(4)},${currentPoint.y.toFixed(4)}`;
    boundary.push(currentPoint);
    visited.add(currentKey);

    const connections = pointConnections.get(currentKey) || [];
    if (connections.length === 0) break;

    // Find the next point by taking the leftmost turn
    let nextPoint: Point2D | null = null;
    let bestAngle = -Infinity;

    connections.forEach(conn => {
      const connKey = `${conn.x.toFixed(4)},${conn.y.toFixed(4)}`;
      if (visited.has(connKey) && connKey !== startKey) return; // Skip visited except start

      // Calculate angle from current direction
      const dx = conn.x - currentPoint.x;
      const dy = conn.y - currentPoint.y;
      const angle = Math.atan2(dy, dx);
      
      // For counter-clockwise traversal, we want the leftmost (most negative) angle
      // But we need to consider the previous direction
      if (boundary.length > 1) {
        const prevPoint = boundary[boundary.length - 2];
        const prevDx = currentPoint.x - prevPoint.x;
        const prevDy = currentPoint.y - prevPoint.y;
        const prevAngle = Math.atan2(prevDy, prevDx);
        let relativeAngle = angle - prevAngle;
        // Normalize to [-PI, PI]
        while (relativeAngle > Math.PI) relativeAngle -= 2 * Math.PI;
        while (relativeAngle < -Math.PI) relativeAngle += 2 * Math.PI;
        // We want left turns (positive relative angle)
        if (relativeAngle > bestAngle) {
          bestAngle = relativeAngle;
          nextPoint = conn;
        }
      } else {
        // First step, find point with angle closest to -90 degrees (upward)
        const targetAngle = -Math.PI / 2;
        let relativeAngle = angle - targetAngle;
        while (relativeAngle > Math.PI) relativeAngle -= 2 * Math.PI;
        while (relativeAngle < -Math.PI) relativeAngle += 2 * Math.PI;
        if (Math.abs(relativeAngle) < Math.abs(bestAngle) || bestAngle === -Infinity) {
          bestAngle = relativeAngle;
          nextPoint = conn;
        }
      }
    });

    if (!nextPoint) break;
    currentPoint = nextPoint;
  } while (boundary.length < allPoints.length && boundary.length < 10000); // Safety limit

  return boundary.length > 2 ? boundary : [];
}

// Compute alpha shape for better boundary detection
function computeAlphaShape(points: Point2D[], alpha: number): Point2D[] {
  if (points.length < 3) return points;
  
  // For alpha shape, we find edges that can be part of a circle of radius 1/alpha
  // For now, use a simpler approach: find points on the boundary by checking
  // if they can be part of a circle that doesn't contain other points
  
  // First, remove duplicate/very close points
  const uniquePoints: Point2D[] = [];
  const seen = new Set<string>();
  points.forEach(p => {
    const key = `${Math.round(p.x)},${Math.round(p.y)}`;
    if (!seen.has(key)) {
      seen.add(key);
      uniquePoints.push(p);
    }
  });

  if (uniquePoints.length < 3) return uniquePoints;

  // Find boundary points - points that are on the convex hull or close to it
  // Use a combination of convex hull and filtering by distance
  const hull = computeConvexHull(uniquePoints);
  
  // Add more points that are close to the hull but might form concave regions
  const boundaryPoints: Point2D[] = [...hull];
  const hullSet = new Set(hull.map(p => `${p.x},${p.y}`));
  
  // For each point not in hull, check if it's significantly outside
  uniquePoints.forEach(p => {
    const key = `${p.x},${p.y}`;
    if (!hullSet.has(key)) {
      // Check distance to nearest hull point
      let minDist = Infinity;
      hull.forEach(hp => {
        const dist = Math.sqrt((p.x - hp.x) ** 2 + (p.y - hp.y) ** 2);
        if (dist < minDist) minDist = dist;
      });
      // If point is far enough from hull, it might be part of a concave region
      if (minDist > alpha) {
        boundaryPoints.push(p);
      }
    }
  });

  // Sort boundary points by angle from center
  const center = boundaryPoints.reduce((acc, p) => ({ x: acc.x + p.x, y: acc.y + p.y }), { x: 0, y: 0 });
  center.x /= boundaryPoints.length;
  center.y /= boundaryPoints.length;

  boundaryPoints.sort((a, b) => {
    const angleA = Math.atan2(a.y - center.y, a.x - center.x);
    const angleB = Math.atan2(b.y - center.y, b.x - center.x);
    return angleA - angleB;
  });

  return boundaryPoints;
}

// Compute concave hull (alpha shape) for better boundary detection
// Currently unused, but kept for potential future use
// function computeConcaveHull(points: Point2D[], alpha: number): Point2D[] {
//   return computeAlphaShape(points, alpha);
// }

// Compute convex hull using Graham scan algorithm
function computeConvexHull(points: Point2D[]): Point2D[] {
  if (points.length < 3) return [...points];

  // Create a copy to avoid mutating input
  const pointsCopy = points.map(p => ({ ...p }));

  // Find bottom-most point (or leftmost in case of tie)
  let bottomIndex = 0;
  for (let i = 1; i < pointsCopy.length; i++) {
    if (pointsCopy[i].y < pointsCopy[bottomIndex].y || 
        (pointsCopy[i].y === pointsCopy[bottomIndex].y && pointsCopy[i].x < pointsCopy[bottomIndex].x)) {
      bottomIndex = i;
    }
  }

  // Swap bottom point to front
  [pointsCopy[0], pointsCopy[bottomIndex]] = [pointsCopy[bottomIndex], pointsCopy[0]];

  // Sort points by polar angle with respect to bottom point
  const bottom = pointsCopy[0];
  const sorted = pointsCopy.slice(1).sort((a, b) => {
    const angleA = Math.atan2(a.y - bottom.y, a.x - bottom.x);
    const angleB = Math.atan2(b.y - bottom.y, b.x - bottom.x);
    if (angleA !== angleB) return angleA - angleB;
    // If same angle, keep the one further away
    const distA = (a.x - bottom.x) ** 2 + (a.y - bottom.y) ** 2;
    const distB = (b.x - bottom.x) ** 2 + (b.y - bottom.y) ** 2;
    return distB - distA;
  });

  // Build convex hull
  const hull: Point2D[] = [{ ...bottom }];
  
  for (const point of sorted) {
    // Remove points that create clockwise turns
    while (hull.length > 1) {
      const p1 = hull[hull.length - 2];
      const p2 = hull[hull.length - 1];
      const cross = (p2.x - p1.x) * (point.y - p1.y) - (p2.y - p1.y) * (point.x - p1.x);
      if (cross <= 0) {
        hull.pop();
      } else {
        break;
      }
    }
    hull.push({ ...point });
  }

  return hull;
}

// Extract outer boundary from mesh geometry
function extractOuterBoundary(
  meshGroup: THREE.Group,
  params: SpiralParams
): Point2D[] {
  const projection = params.laserCutProjection || 'Top';
  const outerPoints: Point2D[] = [];
  const seenPoints = new Set<string>();

  // Traverse mesh to find outer surface vertices
  meshGroup.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      const geometry = child.geometry;
      const positions = geometry.attributes.position;
      const index = geometry.index;

      if (index) {
        // We need to identify outer surface vertices
        // For thick wall geometry, outer vertices are the first numOuterVerts
        const numOuterVerts = (params.uDiv + 1) * (params.vDiv + 1);
        
        for (let i = 0; i < Math.min(positions.count, numOuterVerts); i++) {
          const point = new THREE.Vector3(
            positions.getX(i),
            positions.getY(i),
            positions.getZ(i)
          );
          point.applyMatrix4(child.matrixWorld);
          
          const projected = project3DTo2D(point, projection, params);
          const key = `${projected.x.toFixed(4)},${projected.y.toFixed(4)}`;
          
          if (!seenPoints.has(key)) {
            seenPoints.add(key);
            outerPoints.push(projected);
          }
        }
      } else {
        // No index, use all vertices
        for (let i = 0; i < positions.count; i++) {
          const point = new THREE.Vector3(
            positions.getX(i),
            positions.getY(i),
            positions.getZ(i)
          );
          point.applyMatrix4(child.matrixWorld);
          
          const projected = project3DTo2D(point, projection, params);
          const key = `${projected.x.toFixed(4)},${projected.y.toFixed(4)}`;
          
          if (!seenPoints.has(key)) {
            seenPoints.add(key);
            outerPoints.push(projected);
          }
        }
      }
    }
  });

  // If no mesh found, fall back to building geometry directly
  if (outerPoints.length === 0) {
    const geometry = buildThickWallGeometry(params);
    const positions = geometry.attributes.position;
    const numOuterVerts = (params.uDiv + 1) * (params.vDiv + 1);
    
    for (let i = 0; i < numOuterVerts; i++) {
      const point = new THREE.Vector3(
        positions.getX(i),
        positions.getY(i),
        positions.getZ(i)
      );
      const projected = project3DTo2D(point, projection, params);
      outerPoints.push(projected);
    }
  }

  // Compute convex hull to get outer boundary
  return computeConvexHull(outerPoints);
}

// Path simplification using Douglas-Peucker algorithm
function simplifyPath(points: Point2D[], tolerance: number): Point2D[] {
  if (points.length <= 2) return points;

  // Find the point with maximum distance from line between first and last
  let maxDist = 0;
  let maxIndex = 0;
  const first = points[0];
  const last = points[points.length - 1];

  for (let i = 1; i < points.length - 1; i++) {
    const dist = pointToLineDistance(points[i], first, last);
    if (dist > maxDist) {
      maxDist = dist;
      maxIndex = i;
    }
  }

  // If max distance is greater than tolerance, recursively simplify
  if (maxDist > tolerance) {
    const left = simplifyPath(points.slice(0, maxIndex + 1), tolerance);
    const right = simplifyPath(points.slice(maxIndex), tolerance);
    return [...left.slice(0, -1), ...right];
  } else {
    return [first, last];
  }
}

function pointToLineDistance(point: Point2D, lineStart: Point2D, lineEnd: Point2D): number {
  const A = point.x - lineStart.x;
  const B = point.y - lineStart.y;
  const C = lineEnd.x - lineStart.x;
  const D = lineEnd.y - lineStart.y;

  const dot = A * C + B * D;
  const lenSq = C * C + D * D;
  let param = -1;
  if (lenSq !== 0) param = dot / lenSq;

  let xx: number, yy: number;

  if (param < 0) {
    xx = lineStart.x;
    yy = lineStart.y;
  } else if (param > 1) {
    xx = lineEnd.x;
    yy = lineEnd.y;
  } else {
    xx = lineStart.x + param * C;
    yy = lineStart.y + param * D;
  }

  const dx = point.x - xx;
  const dy = point.y - yy;
  return Math.sqrt(dx * dx + dy * dy);
}

// Convert line segments to continuous paths
function connectPaths(paths: Path2D[]): Path2D[] {
  const connected: Path2D[] = [];
  const used = new Set<number>();

  for (let i = 0; i < paths.length; i++) {
    if (used.has(i)) continue;

    const path = { ...paths[i], points: [...paths[i].points] };
    used.add(i);

    // Try to connect with other paths
    let changed = true;
    while (changed) {
      changed = false;
      for (let j = 0; j < paths.length; j++) {
        if (used.has(j)) continue;
        if (paths[j].layer !== path.layer) continue;

        const other = paths[j];
        const pathStart = path.points[0];
        const pathEnd = path.points[path.points.length - 1];
        const otherStart = other.points[0];
        const otherEnd = other.points[other.points.length - 1];

        const threshold = 0.01;

        // Check if paths can be connected
        if (distance(pathEnd, otherStart) < threshold) {
          path.points.push(...other.points.slice(1));
          used.add(j);
          changed = true;
        } else if (distance(pathEnd, otherEnd) < threshold) {
          path.points.push(...other.points.slice(0, -1).reverse());
          used.add(j);
          changed = true;
        } else if (distance(pathStart, otherEnd) < threshold) {
          path.points.unshift(...other.points.slice(0, -1).reverse());
          used.add(j);
          changed = true;
        } else if (distance(pathStart, otherStart) < threshold) {
          path.points.unshift(...other.points.slice(1).reverse());
          used.add(j);
          changed = true;
        }
      }
    }

    connected.push(path);
  }

  return connected;
}

function distance(p1: Point2D, p2: Point2D): number {
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;
  return Math.sqrt(dx * dx + dy * dy);
}

// Optimize cut order using nearest neighbor heuristic
function optimizeCutOrder(paths: Path2D[]): Path2D[] {
  if (paths.length <= 1) return paths;

  const ordered: Path2D[] = [];
  const remaining = [...paths];
  let current = remaining.shift()!;
  ordered.push(current);

  while (remaining.length > 0) {
    let nearestIndex = 0;
    let nearestDist = Infinity;
    const currentEnd = current.points[current.points.length - 1];

    for (let i = 0; i < remaining.length; i++) {
      const path = remaining[i];
      const dist1 = distance(currentEnd, path.points[0]);
      const dist2 = distance(currentEnd, path.points[path.points.length - 1]);
      const minDist = Math.min(dist1, dist2);

      if (minDist < nearestDist) {
        nearestDist = minDist;
        nearestIndex = i;
      }
    }

    current = remaining.splice(nearestIndex, 1)[0];
    // Reverse if end is closer than start
    const currentEnd2 = ordered[ordered.length - 1].points[ordered[ordered.length - 1].points.length - 1];
    if (distance(currentEnd2, current.points[current.points.length - 1]) < distance(currentEnd2, current.points[0])) {
      current.points.reverse();
    }
    ordered.push(current);
  }

  return ordered;
}

// Project 3D point to 2D based on projection type
function project3DTo2D(
  point: THREE.Vector3,
  projection: ProjectionType,
  params: SpiralParams
): Point2D {
  switch (projection) {
    case 'Top':
      // XY plane (top view)
      return { x: point.x, y: point.y };
    case 'Side':
      // XZ plane (side view)
      return { x: point.x, y: point.z };
    case 'Unrolled':
      // Cylindrical unwrap
      const u = Math.atan2(point.y, point.x);
      const uMax = 2 * Math.PI * params.N;
      const uNormalized = u < 0 ? u + 2 * Math.PI : u;
      return {
        x: (uNormalized / (2 * Math.PI)) * uMax * params.R,
        y: point.z
      };
    default:
      return { x: point.x, y: point.y };
  }
}

// Extract paths from mesh group for laser cutting
export function extractLaserCutPaths(
  meshGroup: THREE.Group,
  params: SpiralParams
): Path2D[] {
  const paths: Path2D[] = [];
  const projection = params.laserCutProjection || 'Top';

  // Extract true outer boundary using convex hull
  const outerBoundary = extractOuterBoundary(meshGroup, params);
  if (outerBoundary.length > 0) {
    // Close the boundary path
    const closedBoundary = [...outerBoundary, outerBoundary[0]];
    paths.push({
      points: closedBoundary,
      layer: 'outer',
      closed: true
    });
  }

  // Extract line segments from wireframe for inner and cross-section layers
  meshGroup.traverse((child) => {
    if (child instanceof THREE.Line) {
      const positions = child.geometry.attributes.position;
      const points: THREE.Vector3[] = [];

      for (let i = 0; i < positions.count; i++) {
        const point = new THREE.Vector3(
          positions.getX(i),
          positions.getY(i),
          positions.getZ(i)
        );
        point.applyMatrix4(child.matrixWorld);
        points.push(point);
      }

      // Determine layer based on material or other properties
      let layer: 'outer' | 'inner' | 'crossSection' = 'inner';
      const material = child.material as THREE.LineBasicMaterial;
      if (material.color.getHex() === new THREE.Color(params.innerColor).getHex()) {
        layer = 'inner';
      } else if (material.color.getHex() === new THREE.Color(params.crossSectionColor).getHex()) {
        layer = 'crossSection';
      } else {
        // Skip outer lines - we're using the boundary instead
        return;
      }

      // Convert to 2D paths
      for (let i = 0; i < points.length - 1; i++) {
        const p1 = project3DTo2D(points[i], projection, params);
        const p2 = project3DTo2D(points[i + 1], projection, params);
        paths.push({
          points: [p1, p2],
          layer,
          closed: false
        });
      }
    }
  });

  return paths;
}

// Generate laser cutting SVG
export function generateLaserCutSVG(
  paths: Path2D[],
  params: SpiralParams,
  width: number = 1000,
  height: number = 1000
): string {
  // Filter paths based on layer selection
  const layerFilter = params.laserCutLayers || { outer: true, inner: true, crossSection: false };
  
  // Separate outer boundary from other paths
  const outerBoundaryPaths = paths.filter(p => p.layer === 'outer' && p.closed);
  const otherPaths = paths.filter(p => {
    if (p.layer === 'outer' && !p.closed) return false; // Skip old outer wireframe lines
    if (p.layer === 'outer') return layerFilter.outer;
    if (p.layer === 'inner') return layerFilter.inner;
    if (p.layer === 'crossSection') return layerFilter.crossSection;
    return true;
  });

  // Simplify outer boundary if requested (but keep it closed)
  const simplification = params.pathSimplification || 0.5;
  let filteredPaths: Path2D[] = [];
  
  if (layerFilter.outer && outerBoundaryPaths.length > 0) {
    // Use the outer boundary path - use minimal simplification to preserve smooth curves
    const boundaryPath = outerBoundaryPaths[0];
    if (simplification > 0 && boundaryPath.points.length > 2) {
      // Use much lower tolerance for outer boundary to preserve detail
      const boundaryTolerance = simplification * 0.1; // 10% of normal simplification
      const pointsWithoutClose = boundaryPath.points.slice(0, -1);
      const simplified = simplifyPath(pointsWithoutClose, boundaryTolerance);
      filteredPaths.push({
        ...boundaryPath,
        points: [...simplified, simplified[0]] // Close the path
      });
    } else {
      filteredPaths.push(boundaryPath);
    }
  }

  // Process other paths (inner and cross-section)
  if (simplification > 0) {
    otherPaths.forEach(path => {
      filteredPaths.push({
        ...path,
        points: simplifyPath(path.points, simplification)
      });
    });
  } else {
    filteredPaths.push(...otherPaths);
  }

  // Connect paths into continuous paths (but skip outer boundary as it's already closed)
  const outerPaths = filteredPaths.filter(p => p.layer === 'outer' && p.closed);
  const pathsToConnect = filteredPaths.filter(p => !(p.layer === 'outer' && p.closed));
  filteredPaths = [...outerPaths, ...connectPaths(pathsToConnect)];

  // Optimize cut order if requested (but keep outer boundary first)
  if (params.optimizeCutOrder) {
    const outer = filteredPaths.filter(p => p.layer === 'outer' && p.closed);
    const others = filteredPaths.filter(p => !(p.layer === 'outer' && p.closed));
    filteredPaths = [...outer, ...optimizeCutOrder(others)];
  }

  // Calculate bounding box
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  filteredPaths.forEach(path => {
    path.points.forEach(p => {
      minX = Math.min(minX, p.x);
      minY = Math.min(minY, p.y);
      maxX = Math.max(maxX, p.x);
      maxY = Math.max(maxY, p.y);
    });
  });

  const padding = 20;
  const scale = Math.min(
    (width - 2 * padding) / (maxX - minX || 1),
    (height - 2 * padding) / (maxY - minY || 1)
  );
  const offsetX = -minX * scale + padding;
  const offsetY = -minY * scale + padding;

  // Build SVG with layers
  let svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">
  <!-- Laser cutting paths for 3D mesh spiral -->
`;

  // Group by layer
  const layers: { [key: string]: Path2D[] } = {
    outer: [],
    inner: [],
    crossSection: []
  };

  filteredPaths.forEach(path => {
    layers[path.layer].push(path);
  });

  // Output each layer
  Object.entries(layers).forEach(([layerName, layerPaths]) => {
    if (layerPaths.length === 0) return;

    // Use red for outer outline (laser cutting), gray for inner, red for cross-section
    const layerColor = layerName === 'outer' ? '#ff0000' : layerName === 'inner' ? '#666666' : '#ff0000';
    // Make outer boundary thicker for visibility
    const strokeWidth = layerName === 'outer' ? '0.2' : '0.1';
    svg += `  <g id="layer-${layerName}" stroke="${layerColor}" stroke-width="${strokeWidth}" fill="none">\n`;

    layerPaths.forEach(path => {
      if (path.points.length < 2) return;

      const scaledPoints = path.points.map(p => ({
        x: p.x * scale + offsetX,
        y: p.y * scale + offsetY
      }));

      // Use smooth path with curve commands for better quality
      let pathData = '';
      if (scaledPoints.length > 0) {
        pathData = `M ${scaledPoints[0].x.toFixed(3)} ${scaledPoints[0].y.toFixed(3)}`;
        
        if (scaledPoints.length > 2) {
          // Use quadratic curves for smoother lines
          for (let i = 1; i < scaledPoints.length; i++) {
            const p = scaledPoints[i];
            const prevP = scaledPoints[i - 1];
            
            if (i === scaledPoints.length - 1 && path.closed) {
              // Last point connecting to first - use smooth curve
              const cp1x = prevP.x + (p.x - prevP.x) * 0.5;
              const cp1y = prevP.y + (p.y - prevP.y) * 0.5;
              pathData += ` Q ${cp1x.toFixed(3)} ${cp1y.toFixed(3)} ${p.x.toFixed(3)} ${p.y.toFixed(3)}`;
            } else if (i < scaledPoints.length - 1) {
              // Use smooth curve to next point
              const cp1x = prevP.x + (p.x - prevP.x) * 0.5;
              const cp1y = prevP.y + (p.y - prevP.y) * 0.5;
              pathData += ` Q ${cp1x.toFixed(3)} ${cp1y.toFixed(3)} ${p.x.toFixed(3)} ${p.y.toFixed(3)}`;
            } else {
              // Last point - straight line
              pathData += ` L ${p.x.toFixed(3)} ${p.y.toFixed(3)}`;
            }
          }
        } else {
          // For 2 points, just use straight line
          for (let i = 1; i < scaledPoints.length; i++) {
            const p = scaledPoints[i];
            pathData += ` L ${p.x.toFixed(3)} ${p.y.toFixed(3)}`;
          }
        }
      }

      if (path.closed) {
        svg += `    <path d="${pathData} Z" stroke-linejoin="round" stroke-linecap="round"/>\n`;
      } else {
        svg += `    <path d="${pathData}" stroke-linejoin="round" stroke-linecap="round"/>\n`;
      }
    });

    svg += `  </g>\n`;
  });

  svg += `</svg>`;

  return svg;
}

// Preview laser cutting SVG in a modal using current camera view
export function previewLaserCutSVG(
  meshGroup: THREE.Group,
  params: SpiralParams,
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.Camera
): void {
  // Use current camera view instead of laser cutting projection
  const width = window.innerWidth;
  const height = window.innerHeight;

  // Render current frame to ensure camera and scene are synced
  renderer.render(scene, camera);

  // Update camera and scene matrices to match current view
  camera.updateMatrixWorld();
  if (camera instanceof THREE.PerspectiveCamera || camera instanceof THREE.OrthographicCamera) {
    camera.updateProjectionMatrix();
  }
  meshGroup.updateMatrixWorld(true);

  // Helper to project 3D point to 2D screen coordinates using current camera
  function project3DTo2D(point: THREE.Vector3): Point2D {
    const vector = point.clone();
    vector.project(camera);
    const x = (vector.x + 1) / 2 * width;
    const y = (-vector.y + 1) / 2 * height;
    return { x, y };
  }

  // Extract outer boundary by finding silhouette edges from mesh geometry
  const paths: Path2D[] = [];
  const cameraPosition = new THREE.Vector3();
  camera.getWorldPosition(cameraPosition);
  const cameraDirection = new THREE.Vector3(0, 0, -1);
  camera.getWorldDirection(cameraDirection);

  // Collect all outer surface points from mesh with their normals
  interface VertexData {
    position: THREE.Vector3;
    normal: THREE.Vector3;
    projected: Point2D;
    depth: number;
  }

  const outerVertices: VertexData[] = [];
  const edgeMap = new Map<string, { v1: number; v2: number; face1?: number; face2?: number }>();

  meshGroup.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      const geometry = child.geometry;
      const positions = geometry.attributes.position;
      const normals = geometry.attributes.normal;
      const index = geometry.index;
      const numOuterVerts = (params.uDiv + 1) * (params.vDiv + 1);

      // Collect outer vertices
      for (let i = 0; i < Math.min(positions.count, numOuterVerts); i++) {
        const position = new THREE.Vector3(
          positions.getX(i),
          positions.getY(i),
          positions.getZ(i)
        );
        position.applyMatrix4(child.matrixWorld);

        const normal = new THREE.Vector3(
          normals.getX(i),
          normals.getY(i),
          normals.getZ(i)
        );
        normal.transformDirection(child.matrixWorld);

        const projected = project3DTo2D(position);
        const v3d = position.clone().project(camera);
        const depth = -v3d.z;

        // Check if vertex is facing camera (silhouette candidate)
        // const toCamera = cameraPosition.clone().sub(position).normalize();
        // const facingCamera = normal.dot(toCamera) > 0; // Currently unused

        outerVertices.push({
          position,
          normal,
          projected,
          depth
        });
      }

      // Build edge map from triangles to find silhouette edges
      if (index) {
        const faceNormals: THREE.Vector3[] = [];
        
        // Calculate face normals
        for (let i = 0; i < index.count; i += 3) {
          const i1 = index.getX(i);
          const i2 = index.getX(i + 1);
          const i3 = index.getX(i + 2);
          
          if (i1 >= numOuterVerts || i2 >= numOuterVerts || i3 >= numOuterVerts) continue;
          
          const v1 = new THREE.Vector3(positions.getX(i1), positions.getY(i1), positions.getZ(i1));
          const v2 = new THREE.Vector3(positions.getX(i2), positions.getY(i2), positions.getZ(i2));
          const v3 = new THREE.Vector3(positions.getX(i3), positions.getY(i3), positions.getZ(i3));
          
          v1.applyMatrix4(child.matrixWorld);
          v2.applyMatrix4(child.matrixWorld);
          v3.applyMatrix4(child.matrixWorld);
          
          const edge1 = v2.clone().sub(v1);
          const edge2 = v3.clone().sub(v1);
          const normal = edge1.cross(edge2).normalize();
          
          faceNormals.push(normal);
        }

        // Find edges that are on the boundary (only belong to one visible face)
        for (let i = 0; i < index.count; i += 3) {
          const i1 = index.getX(i);
          const i2 = index.getX(i + 1);
          const i3 = index.getX(i + 2);
          
          if (i1 >= numOuterVerts || i2 >= numOuterVerts || i3 >= numOuterVerts) continue;
          
          const faceIdx = i / 3;
          const faceNormal = faceNormals[faceIdx];
          const faceCenter = new THREE.Vector3(
            (positions.getX(i1) + positions.getX(i2) + positions.getX(i3)) / 3,
            (positions.getY(i1) + positions.getY(i2) + positions.getY(i3)) / 3,
            (positions.getZ(i1) + positions.getZ(i2) + positions.getZ(i3)) / 3
          );
          faceCenter.applyMatrix4(child.matrixWorld);
          
          const toCamera = cameraPosition.clone().sub(faceCenter).normalize();
          const isVisible = faceNormal.dot(toCamera) < 0;
          
          if (isVisible) {
            // Add edges of this face
            const edges = [
              [Math.min(i1, i2), Math.max(i1, i2)],
              [Math.min(i2, i3), Math.max(i2, i3)],
              [Math.min(i3, i1), Math.max(i3, i1)]
            ];
            
            edges.forEach(([v1, v2]) => {
              const key = `${v1}-${v2}`;
              if (!edgeMap.has(key)) {
                edgeMap.set(key, { v1, v2, face1: faceIdx });
              } else {
                edgeMap.get(key)!.face2 = faceIdx;
              }
            });
          }
        }
      }
    }
  });

  // Find silhouette edges (edges with only one visible face)
  const silhouetteEdges: { p1: Point2D; p2: Point2D }[] = [];
  edgeMap.forEach((edge) => {
    if (edge.face2 === undefined && edge.face1 !== undefined) {
      // This is a silhouette edge
      const v1 = outerVertices[edge.v1];
      const v2 = outerVertices[edge.v2];
      if (v1 && v2) {
        silhouetteEdges.push({
          p1: v1.projected,
          p2: v2.projected
        });
      }
    }
  });

  // If we found silhouette edges, trace them to form boundary
  if (silhouetteEdges.length > 0) {
    const boundary = traceOuterBoundary(silhouetteEdges.map(e => ({ ...e, z: 0 })));
    if (boundary.length > 0) {
      paths.push({
        points: boundary,
        layer: 'outer',
        closed: true
      });
    }
  } else {
    // Fallback: use outer wireframe lines
    const outerLineSegments: { p1: Point2D; p2: Point2D; z: number }[] = [];
    
    meshGroup.traverse((child) => {
      if (child instanceof THREE.Line) {
        const material = child.material as THREE.LineBasicMaterial;
        const isOuter = material.color.getHex() === new THREE.Color(params.outerColor).getHex();
        
        if (isOuter) {
          const positions = child.geometry.attributes.position;
          for (let i = 0; i < positions.count - 1; i++) {
            const p1_3d = new THREE.Vector3(
              positions.getX(i),
              positions.getY(i),
              positions.getZ(i)
            );
            const p2_3d = new THREE.Vector3(
              positions.getX(i + 1),
              positions.getY(i + 1),
              positions.getZ(i + 1)
            );
            p1_3d.applyMatrix4(child.matrixWorld);
            p2_3d.applyMatrix4(child.matrixWorld);
            
            const p1_2d = project3DTo2D(p1_3d);
            const p2_2d = project3DTo2D(p2_3d);
            const v1 = p1_3d.clone().project(camera);
            const v2 = p2_3d.clone().project(camera);
            const avgZ = -(v1.z + v2.z) / 2;
            
            outerLineSegments.push({ p1: p1_2d, p2: p2_2d, z: avgZ });
          }
        }
      }
    });

    if (outerLineSegments.length > 0) {
      // Sample points along wireframe lines more densely for smoother boundary
      const sampledPoints: Point2D[] = [];
      outerLineSegments.forEach(seg => {
        // Sample multiple points along each segment
        const numSamples = 5;
        for (let j = 0; j <= numSamples; j++) {
          const t = j / numSamples;
          sampledPoints.push({
            x: seg.p1.x + t * (seg.p2.x - seg.p1.x),
            y: seg.p1.y + t * (seg.p2.y - seg.p1.y)
          });
        }
      });

      // Use alpha shape or better boundary detection
      const boundary = computeAlphaShape(sampledPoints, 50);
      if (boundary.length > 0) {
        paths.push({
          points: [...boundary, boundary[0]],
          layer: 'outer',
          closed: true
        });
      }
    }
  }

  // Extract inner and cross-section lines from wireframe using camera projection
  meshGroup.traverse((child) => {
    if (child instanceof THREE.Line) {
      const positions = child.geometry.attributes.position;
      const points: THREE.Vector3[] = [];

      for (let i = 0; i < positions.count; i++) {
        const point = new THREE.Vector3(
          positions.getX(i),
          positions.getY(i),
          positions.getZ(i)
        );
        point.applyMatrix4(child.matrixWorld);
        points.push(point);
      }

      // Determine layer based on material
      let layer: 'outer' | 'inner' | 'crossSection' = 'inner';
      const material = child.material as THREE.LineBasicMaterial;
      if (material.color.getHex() === new THREE.Color(params.innerColor).getHex()) {
        layer = 'inner';
      } else if (material.color.getHex() === new THREE.Color(params.crossSectionColor).getHex()) {
        layer = 'crossSection';
      } else {
        // Skip outer lines - we're using the boundary instead
        return;
      }

      // Convert to 2D paths using camera projection
      for (let i = 0; i < points.length - 1; i++) {
        const p1 = project3DTo2D(points[i]);
        const p2 = project3DTo2D(points[i + 1]);
        paths.push({
          points: [p1, p2],
          layer,
          closed: false
        });
      }
    }
  });

  const svg = generateLaserCutSVG(paths, params, width, height);

  // Create modal overlay
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    cursor: pointer;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  `;

  // Create modal content - matching Tweakpane dark theme
  const modal = document.createElement('div');
  modal.style.cssText = `
    background: #1e1e1e;
    color: #ffffff;
    padding: 0;
    border-radius: 4px;
    max-width: 90%;
    max-height: 90%;
    overflow: hidden;
    cursor: default;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
  `;

  // Create header bar
  const header = document.createElement('div');
  header.style.cssText = `
    background: #2a2a2a;
    padding: 12px 16px;
    border-bottom: 1px solid #3a3a3a;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const title = document.createElement('div');
  title.textContent = 'SVG Export Preview';
  title.style.cssText = `
    font-size: 14px;
    font-weight: 500;
    color: #ffffff;
  `;

  // Create close button - matching Tweakpane style
  const closeBtn = document.createElement('button');
  closeBtn.textContent = '✕';
  closeBtn.style.cssText = `
    background: transparent;
    color: #ffffff;
    border: none;
    padding: 4px 8px;
    border-radius: 2px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    line-height: 1;
    opacity: 0.7;
    transition: opacity 0.2s;
  `;
  closeBtn.onmouseenter = () => { closeBtn.style.opacity = '1'; };
  closeBtn.onmouseleave = () => { closeBtn.style.opacity = '0.7'; };
  closeBtn.onclick = () => {
    document.body.removeChild(overlay);
  };

  header.appendChild(title);
  header.appendChild(closeBtn);

  // Create content area
  const content = document.createElement('div');
  content.style.cssText = `
    padding: 20px;
    overflow: auto;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #1e1e1e;
  `;

  // Create SVG container with white background for SVG visibility
  const svgContainer = document.createElement('div');
  svgContainer.style.cssText = `
    border: 1px solid #3a3a3a;
    background: #ffffff;
    display: inline-block;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  `;
  svgContainer.innerHTML = svg;

  // Create footer with action buttons
  const footer = document.createElement('div');
  footer.style.cssText = `
    background: #2a2a2a;
    padding: 12px 16px;
    border-top: 1px solid #3a3a3a;
    display: flex;
    justify-content: flex-end;
    gap: 8px;
  `;

  // Create download button - matching Tweakpane button style
  const downloadBtn = document.createElement('button');
  downloadBtn.textContent = 'Download SVG';
  downloadBtn.style.cssText = `
    background: #4a9eff;
    color: #ffffff;
    border: none;
    padding: 6px 12px;
    border-radius: 2px;
    cursor: pointer;
    font-size: 12px;
    font-weight: 500;
    transition: background 0.2s;
  `;
  downloadBtn.onmouseenter = () => { downloadBtn.style.background = '#5aaeff'; };
  downloadBtn.onmouseleave = () => { downloadBtn.style.background = '#4a9eff'; };
  downloadBtn.onclick = () => {
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `laser_cut_spiral_${Date.now()}.svg`;
    a.click();
    URL.revokeObjectURL(url);
  };

  footer.appendChild(downloadBtn);

  // Assemble modal
  content.appendChild(svgContainer);
  modal.appendChild(header);
  modal.appendChild(content);
  modal.appendChild(footer);
  overlay.appendChild(modal);

  // Close on overlay click (but not on modal click)
  overlay.onclick = (e) => {
    if (e.target === overlay) {
      document.body.removeChild(overlay);
    }
  };

  // Add to page
  document.body.appendChild(overlay);
}

// Export laser cutting SVG
export function exportLaserCutSVG(
  meshGroup: THREE.Group,
  params: SpiralParams
): void {
  const paths = extractLaserCutPaths(meshGroup, params);
  const svg = generateLaserCutSVG(paths, params);

  const blob = new Blob([svg], { type: 'image/svg+xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `laser_cut_spiral_${Date.now()}.svg`;
  a.click();
  URL.revokeObjectURL(url);
}

