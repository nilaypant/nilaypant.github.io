import { useState } from 'react';

const signals = [
  { id: 'work', label: 'Work', detail: 'Product analytics / data systems' },
  { id: 'study', label: 'Study', detail: 'ML research / technical artifacts' },
  { id: 'play', label: 'Play', detail: 'Film / photography / experiments' },
];

export default function SignalOrb({ onTabChange }) {
  const [pointer, setPointer] = useState({ x: 50, y: 45 });

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPointer({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    });
  };

  const tiltX = ((pointer.y - 50) / 50) * -12;
  const tiltY = ((pointer.x - 50) / 50) * 16;

  return (
    <div
      className="signal-orb"
      onPointerMove={handlePointerMove}
      style={{
        '--orb-x': `${pointer.x}%`,
        '--orb-y': `${pointer.y}%`,
        '--orb-tilt-x': `${tiltX}deg`,
        '--orb-tilt-y': `${tiltY}deg`,
      }}
    >
      <div className="signal-orb__hud">
        <span>Orbital Viewport</span>
        <strong>Signal Map</strong>
      </div>

      <div className="signal-orb__field" aria-hidden="true">
        <span className="signal-orb__ring signal-orb__ring--outer" />
        <span className="signal-orb__ring signal-orb__ring--inner" />
        <span className="signal-orb__particle signal-orb__particle--one" />
        <span className="signal-orb__particle signal-orb__particle--two" />
        <span className="signal-orb__planet">
          <span className="signal-orb__latitude signal-orb__latitude--one" />
          <span className="signal-orb__latitude signal-orb__latitude--two" />
          <span className="signal-orb__longitude signal-orb__longitude--one" />
          <span className="signal-orb__longitude signal-orb__longitude--two" />
          <span className="signal-orb__core" />
        </span>
      </div>

      <div className="signal-orb__nodes" aria-label="Portfolio navigation">
        {signals.map((signal, index) => (
          <button
            className={`signal-node signal-node--${index + 1}`}
            key={signal.id}
            onClick={() => onTabChange(signal.id)}
            type="button"
          >
            <span>{signal.label}</span>
            <small>{signal.detail}</small>
          </button>
        ))}
      </div>
    </div>
  );
}
