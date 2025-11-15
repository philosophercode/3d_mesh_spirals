<!-- ee947094-4820-4f12-a083-98f93303e18a d2493d60-358e-4489-8d72-577dc05a2a6f -->
# Refactor to TypeScript + Vite + Laser Cutting SVG Features

## Project Structure

```
v0.1/
├── index.html              # Main entry point (minimal HTML)
├── src/
│   ├── main.ts            # Application entry point
│   ├── geometry/
│   │   ├── spiral.ts      # Core spiral geometry calculations
│   │   └── crossSection.ts # Cross-section geometry
│   ├── rendering/
│   │   ├── scene.ts       # Three.js scene setup
│   │   ├── mesh.ts        # Mesh building and updates
│   │   └── wireframe.ts   # Wireframe line generation
│   ├── export/
│   │   ├── svg.ts         # SVG export (current)
│   │   └── laserCut.ts    # NEW: Laser cutting SVG export
│   ├── ui/
│   │   ├── controls.ts    # dat.GUI setup
│   │   └── presets.ts     # Preset management
│   └── utils/
│       ├── params.ts      # Parameter types and defaults
│       └── types.ts       # TypeScript type definitions
├── styles/
│   └── main.css           # Basic styling (extracted from inline)
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite configuration
```

## Build Setup

1. **Initialize Vite + TypeScript project**

   - Create `package.json` with Vite, TypeScript, Three.js, @types/three
   - Configure `vite.config.ts` for minimal overhead
   - Setup `tsconfig.json` with appropriate compiler options
   - Install dat.gui via npm for TypeScript support

## Refactoring Tasks

1. **Create TypeScript types** (`src/utils/types.ts`)

   - Define `SpiralParams` interface for all parameters
   - Type definitions for geometry, rendering options, export options
   - Export types for use across modules

2. **Extract geometry logic** (`src/geometry/spiral.ts`)

   - Move `computeRadiusAtU`, `buildGeometry`, `buildThickWallGeometry` functions
   - Export clean functions with proper TypeScript types
   - Keep Three.js dependencies isolated

3. **Extract rendering logic** (`src/rendering/`)

   - `scene.ts`: Camera setup, lighting, grid helper with types
   - `mesh.ts`: `updateMesh` function, material creation
   - `wireframe.ts`: `buildWireframeLines`, `buildCrossSectionWireframe`

4. **Extract UI controls** (`src/ui/controls.ts`)

   - dat.GUI setup and event handlers (keep dat.GUI, add types)
   - Preset application logic

5. **Create main entry point** (`src/main.ts`)

   - Initialize scene, setup controls, start animation loop
   - Coordinate between modules
   - Import CSS file

## Laser Cutting SVG Features

### 1. Clean Cut Paths (`src/export/laserCut.ts`)

   - **Path optimization**: Convert line segments to continuous paths where possible
   - **Stroke-only mode**: Remove fills, ensure all paths are stroke-based
   - **Path simplification**: Reduce redundant points, smooth curves
   - **Cut order optimization**: Order paths for efficient laser cutting

### 2. Layered SVG Export

   - **Layer structure**: Separate SVG groups for:
     - Outer surface cuts
     - Inner surface cuts  
     - Cross-section cuts
     - Engraving patterns (optional)
   - **Layer naming**: Use `<g>` with `id` attributes for each layer
   - **Color coding**: Use SVG `stroke` colors to indicate cut types
   - **Metadata**: Add comments/attributes for laser cutter software

### 3. 2D Projection/Flattening

   - **Unwrap algorithm**: Flatten the 3D spiral to 2D pattern
     - Option 1: Developable surface unwrap (if applicable)
     - Option 2: Orthographic projection with depth sorting
     - Option 3: Cylindrical unwrap (unroll the spiral)
   - **Multiple projection modes**: 
     - Top view (XY plane)
     - Side view (XZ or YZ plane)
     - Unrolled/flattened view
   - **2D layout optimization**: Arrange flattened pieces efficiently

### 4. Export Options UI

   - Add laser cutting export folder to dat.GUI
   - Options:
     - Projection mode selector
     - Layer selection (which layers to include)
     - Path simplification level
     - Cut path optimization toggle
     - Export format (SVG with layers, single path, etc.)

## Implementation Details

- Use TypeScript with Vite for build step and HMR
- Import Three.js and dat.GUI via npm (better TypeScript support)
- Use ES6 modules - Vite handles module resolution
- Maintain backward compatibility with current features
- Add new export button: "Export for Laser Cutting"
- SVG output should be compatible with common laser cutter software (LightBurn, LaserGRBL, etc.)

## Key Files to Create/Modify

- `v0.1/index.html` - Minimal HTML with Vite entry point
- `v0.1/src/main.ts` - Main application coordinator
- `v0.1/src/export/laserCut.ts` - NEW laser cutting export logic
- `v0.1/src/geometry/spiral.ts` - Extracted geometry functions
- `v0.1/src/rendering/mesh.ts` - Extracted mesh building
- `v0.1/src/ui/controls.ts` - Extracted UI setup
- `v0.1/package.json` - Dependencies and scripts
- `v0.1/tsconfig.json` - TypeScript configuration
- `v0.1/vite.config.ts` - Vite configuration

### To-dos

- [ ] Extract geometry functions (computeRadiusAtU, buildGeometry, buildThickWallGeometry) into js/geometry/spiral.js
- [ ] Extract rendering logic into js/rendering/ (scene.js, mesh.js, wireframe.js)
- [ ] Extract UI controls and preset logic into js/ui/controls.js and js/ui/presets.js
- [ ] Create js/main.js entry point that coordinates all modules
- [ ] Create minimal v0.1/index.html with module imports
- [ ] Implement clean cut path optimization in js/export/laserCut.js (path simplification, stroke-only mode)
- [ ] Add layered SVG export with separate groups for outer/inner/cross-section cuts
- [ ] Implement 2D projection/flattening algorithms (top view, side view, unrolled view)
- [ ] Add laser cutting export options to dat.GUI controls