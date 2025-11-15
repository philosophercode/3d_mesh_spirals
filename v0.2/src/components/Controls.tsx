import { useState, useRef } from 'react';
import * as THREE from 'three';
import type { SpiralParams } from '../utils/types';
import { exportScreenProjectionSVG } from '../export/svg';
import type { SceneSetup } from '../rendering/scene';

interface ControlsProps {
  params: SpiralParams;
  onParamsChange: (params: SpiralParams) => void;
  sceneSetup: SceneSetup | null;
  meshGroup: THREE.Group | null;
}

export function Controls({ params, onParamsChange, sceneSetup, meshGroup }: ControlsProps) {
  const [bgColor, setBgColor] = useState(params.backgroundColor);
  const [isExporting, setIsExporting] = useState(false);
  const exportButtonRef = useRef<HTMLButtonElement>(null);

  // Helper to update params
  const updateParams = (updates: Partial<SpiralParams>) => {
    onParamsChange({ ...params, ...updates });
  };

  // Control 1: Shape - controls R and r0 together
  const handleShapeChange = (value: number) => {
    // Map 0-1 to reasonable ranges
    const R = 0.5 + value * 4.5; // 0.5 to 5.0
    const r0 = 0.1 + value * 1.4; // 0.1 to 1.5
    updateParams({ R, r0 });
  };
  const shapeValue = ((params.R - 0.5) / 4.5 + (params.r0 - 0.1) / 1.4) / 2;

  // Control 2: Turns - controls N
  const handleTurnsChange = (value: number) => {
    const N = 0.5 + value * 5.5; // 0.5 to 6.0
    updateParams({ N });
  };
  const turnsValue = (params.N - 0.5) / 5.5;

  // Control 3: Decay - controls k and rMin together
  const handleDecayChange = (value: number) => {
    const k = value * 0.6; // 0 to 0.6
    const rMin = value * 0.3; // 0 to 0.3
    updateParams({ k, rMin });
  };
  const decayValue = (params.k / 0.6 + params.rMin / 0.3) / 2;

  // Control 4: Complexity - controls uDiv and vDiv together
  const handleComplexityChange = (value: number) => {
    const uDiv = Math.round(16 + value * 464); // 16 to 480, rounded to nearest 8
    const vDiv = Math.round(16 + value * 144); // 16 to 160, rounded to nearest 4
    updateParams({ uDiv: Math.floor(uDiv / 8) * 8, vDiv: Math.floor(vDiv / 4) * 4 });
  };
  const complexityValue = ((params.uDiv - 16) / 464 + (params.vDiv - 16) / 144) / 2;

  // Control 5: Twist - controls twist and h together
  const handleTwistChange = (value: number) => {
    const twist = (value - 0.5) * 4 * Math.PI; // -2π to 2π
    const h = (value - 0.5) * 4; // -2 to 2
    updateParams({ twist, h });
  };
  const twistValue = (params.twist / (4 * Math.PI) + 0.5 + (params.h / 4 + 0.5)) / 2;

  // Export SVG
  const handleExport = async () => {
    if (!sceneSetup || !meshGroup || isExporting) return;
    setIsExporting(true);
    try {
      await exportScreenProjectionSVG(
        sceneSetup.renderer,
        sceneSetup.scene,
        sceneSetup.camera,
        params,
        meshGroup
      );
    } finally {
      setIsExporting(false);
    }
  };

  // Background color change
  const handleBgColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const color = e.target.value;
    setBgColor(color);
    updateParams({ backgroundColor: color });
  };

  const sliderStyle: React.CSSProperties = {
    width: '100%',
    marginBottom: '20px',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    marginBottom: '8px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#333',
  };

  const containerStyle: React.CSSProperties = {
    position: 'fixed',
    top: '20px',
    right: '20px',
    width: '280px',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    zIndex: 1000,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  };

  const buttonStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px',
    marginTop: '10px',
    backgroundColor: '#000000',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
  };

  const colorInputStyle: React.CSSProperties = {
    width: '100%',
    height: '40px',
    marginBottom: '20px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ marginTop: 0, marginBottom: '20px', fontSize: '18px' }}>
        Controls
      </h2>

      <div>
        <label style={labelStyle}>Shape</label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={shapeValue}
          onChange={(e) => handleShapeChange(parseFloat(e.target.value))}
          style={sliderStyle}
        />
      </div>

      <div>
        <label style={labelStyle}>Turns</label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={turnsValue}
          onChange={(e) => handleTurnsChange(parseFloat(e.target.value))}
          style={sliderStyle}
        />
      </div>

      <div>
        <label style={labelStyle}>Decay</label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={decayValue}
          onChange={(e) => handleDecayChange(parseFloat(e.target.value))}
          style={sliderStyle}
        />
      </div>

      <div>
        <label style={labelStyle}>Complexity</label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={complexityValue}
          onChange={(e) => handleComplexityChange(parseFloat(e.target.value))}
          style={sliderStyle}
        />
      </div>

      <div>
        <label style={labelStyle}>Twist</label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={twistValue}
          onChange={(e) => handleTwistChange(parseFloat(e.target.value))}
          style={sliderStyle}
        />
      </div>

      <div>
        <label style={labelStyle}>Background</label>
        <input
          type="color"
          value={bgColor}
          onChange={handleBgColorChange}
          style={colorInputStyle}
        />
      </div>

      <button 
        ref={exportButtonRef}
        onClick={handleExport} 
        disabled={isExporting}
        style={{...buttonStyle, opacity: isExporting ? 0.6 : 1, cursor: isExporting ? 'wait' : 'pointer'}}
      >
        {isExporting ? 'Exporting...' : 'Export SVG'}
      </button>
    </div>
  );
}

