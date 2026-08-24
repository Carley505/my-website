'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const NodeGraphVisual: React.FC = () => {
  // Graph Nodes
  const nodes = [
    { id: 1, x: 60, y: 70, label: 'Harvest / Webhooks', color: '#22D3B8', type: 'trigger' },
    { id: 2, x: 200, y: 50, label: 'n8n Engine', color: '#7C6CF6', type: 'process' },
    { id: 3, x: 200, y: 150, label: 'Power Query (M)', color: '#22D3B8', type: 'data' },
    { id: 4, x: 340, y: 100, label: 'OpenAI Agents', color: '#7C6CF6', type: 'ai' },
    { id: 5, x: 460, y: 50, label: 'SharePoint / Teams', color: '#3B82F6', type: 'output' },
    { id: 6, x: 460, y: 160, label: 'Next.js App', color: '#22D3B8', type: 'output' },
  ];

  // Connections
  const connections = [
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 4 },
    { from: 3, to: 4 },
    { from: 4, to: 5 },
    { from: 4, to: 6 },
  ];

  return (
    <div className="relative w-full h-[320px] sm:h-[400px] flex items-center justify-center p-2 select-none overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-radial-gradient opacity-60 pointer-events-none" />

      <svg
        viewBox="0 0 540 220"
        className="w-full h-full max-w-[540px] drop-shadow-[0_0_25px_rgba(34,211,184,0.15)]"
      >
        {/* Connecting Lines */}
        {connections.map((conn, idx) => {
          const source = nodes.find((n) => n.id === conn.from)!;
          const target = nodes.find((n) => n.id === conn.to)!;
          return (
            <g key={`conn-${idx}`}>
              {/* Base line */}
              <line
                x1={source.x}
                y1={source.y}
                x2={target.x}
                y2={target.y}
                stroke="rgba(255, 255, 255, 0.12)"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              {/* Animated Glowing Packet */}
              <motion.circle
                r="3.5"
                fill={source.color}
                initial={{ cx: source.x, cy: source.y }}
                animate={{ cx: [source.x, target.x], cy: [source.y, target.y] }}
                transition={{
                  duration: 2.5 + idx * 0.4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: idx * 0.3,
                }}
              />
            </g>
          );
        })}

        {/* Nodes */}
        {nodes.map((node) => (
          <g key={`node-${node.id}`} className="cursor-pointer group">
            {/* Outer Pulse */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="22"
              fill={node.color}
              fillOpacity="0.08"
              stroke={node.color}
              strokeOpacity="0.3"
              animate={{ r: [20, 26, 20], fillOpacity: [0.05, 0.15, 0.05] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Inner Core */}
            <circle
              cx={node.x}
              cy={node.y}
              r="8"
              fill="#0B0E14"
              stroke={node.color}
              strokeWidth="2.5"
            />

            {/* Center Dot */}
            <circle cx={node.x} cy={node.y} r="3" fill={node.color} />

            {/* Label */}
            <text
              x={node.x}
              y={node.y + 36}
              textAnchor="middle"
              className="fill-brand-text text-[11px] font-mono font-medium tracking-wide drop-shadow"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};
