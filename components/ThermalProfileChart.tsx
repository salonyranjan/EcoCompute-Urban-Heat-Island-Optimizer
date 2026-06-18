import React, { useMemo } from 'react';

interface ThermalChartProps {
  canopyCoverage: number;
  concreteRatio: number;
  baseTemp: number;
}

export default function ThermalProfileChart({ canopyCoverage, concreteRatio, baseTemp }: ThermalChartProps) {
  const points = useMemo(() => {
    // Generate a 10-point cross-section of the city
    let rawTemps = Array.from({ length: 10 }, (_, i) => {
      // Deterministic pseudo-random threshold for this slice
      const threshold = (i * 7 + 42) % 100;
      if (threshold < canopyCoverage) {
        return baseTemp - 4.5; // Tree cooling
      } else if (threshold > (100 - concreteRatio)) {
        return baseTemp + 6.2; // Concrete heating
      }
      return baseTemp; // Baseline
    });

    // 1D Thermal Diffusion (Smoothing)
    const smoothedTemps = rawTemps.map((t, i, arr) => {
      const prev = arr[i - 1] ?? t;
      const next = arr[i + 1] ?? t;
      return (prev + t * 2 + next) / 4;
    });

    return smoothedTemps;
  }, [canopyCoverage, concreteRatio, baseTemp]);

  const minTemp = Math.min(...points) - 2;
  const maxTemp = Math.max(...points) + 2;
  const range = maxTemp - minTemp || 1;

  // Map to SVG coordinates (1000x200 canvas)
  const svgPoints = points.map((t, i) => {
    const x = (i / 9) * 1000;
    const y = 200 - ((t - minTemp) / range) * 200;
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="w-full bg-[#101726] border border-slate-800 p-5 mt-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
          Cross-Sectional Thermal Profile
        </h3>
        <div className="text-[10px] font-mono text-slate-500">Slice Z=5</div>
      </div>

      <div className="relative w-full h-[120px]">
        <svg viewBox="0 0 1000 200" preserveAspectRatio="none" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="thermalLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#00F0FF" />
              <stop offset="100%" stopColor="#FF0055" />
            </linearGradient>
            <linearGradient id="thermalFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FF0055" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#00F0FF" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Grid Lines */}
          {[0, 1, 2, 3].map(line => (
            <line key={line} x1="0" y1={line * 50} x2="1000" y2={line * 50} stroke="#1e293b" strokeWidth="2" strokeDasharray="10 10" />
          ))}

          {/* Area Fill */}
          <polygon points={`0,200 ${svgPoints} 1000,200`} fill="url(#thermalFill)" />

          {/* The Data Line */}
          <polyline points={svgPoints} fill="none" stroke="url(#thermalLine)" strokeWidth="4" strokeLinejoin="round" />

          {/* Data Points */}
          {points.map((t, i) => (
            <g key={i} transform={`translate(${(i / 9) * 1000}, ${200 - ((t - minTemp) / range) * 200})`}>
              <circle r="6" fill="#090E17" stroke="#FF0055" strokeWidth="2" />
              <text y="-15" textAnchor="middle" fill="#f8fafc" fontSize="24" fontFamily="monospace" fontWeight="bold">
                {t.toFixed(1)}°
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}