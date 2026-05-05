'use client'

interface NodeDef {
  id: string
  x: number
  y: number
}

interface EdgeDef {
  from: string
  to: string
  dur: string
  begin: string
}

const NODES: NodeDef[] = [
  { id: 'i1', x: 65,  y: 80  },
  { id: 'i2', x: 65,  y: 200 },
  { id: 'i3', x: 65,  y: 320 },
  { id: 'h1', x: 190, y: 55  },
  { id: 'h2', x: 190, y: 148 },
  { id: 'h3', x: 190, y: 252 },
  { id: 'h4', x: 190, y: 345 },
  { id: 'h5', x: 320, y: 100 },
  { id: 'h6', x: 320, y: 200 },
  { id: 'h7', x: 320, y: 300 },
  { id: 'o1', x: 445, y: 150 },
  { id: 'o2', x: 445, y: 250 },
]

const PULSE_DURS = [
  '2.0s','2.5s','3.0s','2.3s','1.8s','2.7s',
  '2.1s','2.9s','1.9s','2.4s','2.6s','2.2s',
]

const EDGES: EdgeDef[] = [
  { from: 'i1', to: 'h1', dur: '1.8s', begin: '0.0s'  },
  { from: 'i1', to: 'h2', dur: '2.1s', begin: '0.5s'  },
  { from: 'i1', to: 'h3', dur: '2.4s', begin: '1.0s'  },
  { from: 'i2', to: 'h1', dur: '1.9s', begin: '0.3s'  },
  { from: 'i2', to: 'h2', dur: '2.0s', begin: '0.8s'  },
  { from: 'i2', to: 'h3', dur: '1.7s', begin: '0.2s'  },
  { from: 'i2', to: 'h4', dur: '2.2s', begin: '0.6s'  },
  { from: 'i3', to: 'h3', dur: '1.9s', begin: '0.4s'  },
  { from: 'i3', to: 'h4', dur: '2.3s', begin: '0.9s'  },
  { from: 'h1', to: 'h5', dur: '1.6s', begin: '0.1s'  },
  { from: 'h1', to: 'h6', dur: '2.0s', begin: '0.7s'  },
  { from: 'h2', to: 'h5', dur: '1.8s', begin: '0.4s'  },
  { from: 'h2', to: 'h6', dur: '1.7s', begin: '0.2s'  },
  { from: 'h2', to: 'h7', dur: '2.1s', begin: '0.9s'  },
  { from: 'h3', to: 'h5', dur: '2.3s', begin: '0.6s'  },
  { from: 'h3', to: 'h6', dur: '1.9s', begin: '0.3s'  },
  { from: 'h3', to: 'h7', dur: '2.0s', begin: '0.1s'  },
  { from: 'h4', to: 'h6', dur: '1.7s', begin: '0.5s'  },
  { from: 'h4', to: 'h7', dur: '2.2s', begin: '0.8s'  },
  { from: 'h5', to: 'o1', dur: '1.5s', begin: '0.2s'  },
  { from: 'h5', to: 'o2', dur: '2.0s', begin: '0.7s'  },
  { from: 'h6', to: 'o1', dur: '1.8s', begin: '0.4s'  },
  { from: 'h6', to: 'o2', dur: '1.6s', begin: '0.1s'  },
  { from: 'h7', to: 'o1', dur: '2.1s', begin: '0.6s'  },
  { from: 'h7', to: 'o2', dur: '1.9s', begin: '0.3s'  },
]

const nodeMap = Object.fromEntries(NODES.map(n => [n.id, n]))

export function NeuralAnimation({ className }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className ?? ''}`}>
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(0,194,203,0.07) 0%, transparent 70%)' }}
      />

      <svg
        viewBox="0 0 510 400"
        width="100%"
        height="100%"
        aria-hidden="true"
        style={{ overflow: 'visible' }}
      >
        <defs>
          {/* Path definitions for animateMotion */}
          {EDGES.map(e => {
            const f = nodeMap[e.from]
            const t = nodeMap[e.to]
            return (
              <path
                key={`def-${e.from}-${e.to}`}
                id={`p-${e.from}-${e.to}`}
                d={`M ${f.x} ${f.y} L ${t.x} ${t.y}`}
              />
            )
          })}

          <filter id="nn-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="nn-node-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Layer labels */}
        <text x="65"  y="388" textAnchor="middle" fill="#4a5568" fontSize="9" fontFamily="monospace" letterSpacing="1">INPUT</text>
        <text x="190" y="388" textAnchor="middle" fill="#4a5568" fontSize="9" fontFamily="monospace" letterSpacing="1">CAPA 1</text>
        <text x="320" y="388" textAnchor="middle" fill="#4a5568" fontSize="9" fontFamily="monospace" letterSpacing="1">CAPA 2</text>
        <text x="445" y="388" textAnchor="middle" fill="#4a5568" fontSize="9" fontFamily="monospace" letterSpacing="1">OUTPUT</text>

        {/* Connection lines */}
        {EDGES.map(e => {
          const f = nodeMap[e.from]
          const t = nodeMap[e.to]
          return (
            <line
              key={`line-${e.from}-${e.to}`}
              x1={f.x} y1={f.y}
              x2={t.x} y2={t.y}
              stroke="#00c2cb"
              strokeOpacity="0.1"
              strokeWidth="0.8"
            />
          )
        })}

        {/* Animated particles */}
        {EDGES.map(e => (
          <circle
            key={`pt-${e.from}-${e.to}`}
            r="2.5"
            fill="#00c2cb"
            filter="url(#nn-glow)"
          >
            <animateMotion
              dur={e.dur}
              begin={e.begin}
              repeatCount="indefinite"
            >
              {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
              {/* @ts-ignore – mpath href is valid SVG */}
              <mpath href={`#p-${e.from}-${e.to}`} />
            </animateMotion>
          </circle>
        ))}

        {/* Nodes */}
        {NODES.map((node, i) => (
          <g key={node.id} filter="url(#nn-node-glow)">
            {/* Pulse ring */}
            <circle cx={node.x} cy={node.y} r="12" fill="none" stroke="#00c2cb" strokeOpacity="0.2" strokeWidth="1">
              <animate attributeName="r"            values="12;18;12"    dur={PULSE_DURS[i]} repeatCount="indefinite" />
              <animate attributeName="stroke-opacity" values="0.2;0;0.2" dur={PULSE_DURS[i]} repeatCount="indefinite" />
            </circle>
            {/* Body */}
            <circle cx={node.x} cy={node.y} r="7" fill="#0d1520" stroke="#00c2cb" strokeOpacity="0.55" strokeWidth="1.5" />
            {/* Core dot */}
            <circle cx={node.x} cy={node.y} r="2.2" fill="#00c2cb" opacity="0.85" />
          </g>
        ))}
      </svg>
    </div>
  )
}