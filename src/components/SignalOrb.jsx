import { useEffect, useMemo, useState } from 'react';
import * as amplitude from '@amplitude/unified';

const signals = [
  { id: 'work', label: 'Work', detail: 'Product analytics / data systems' },
  { id: 'study', label: 'Study', detail: 'ML research / technical artifacts' },
  { id: 'play', label: 'Play', detail: 'Film / photography / experiments' },
];

export default function SignalOrb({ onTabChange }) {
  const [pointer, setPointer] = useState({ x: 50, y: 45 });
  const [activeNode, setActiveNode] = useState(null);
  const [engagement, setEngagement] = useState(null);

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPointer({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    });
  };

  const tiltX = ((pointer.y - 50) / 50) * -12;
  const tiltY = ((pointer.x - 50) / 50) * 16;
  const tooltipX = Math.min(94, Math.max(8, pointer.x));
  const tooltipY = Math.min(90, Math.max(12, pointer.y));

  useEffect(() => {
    let isMounted = true;
    fetch('/orb-engagement.json', { cache: 'no-store' })
      .then((response) => (response.ok ? response.json() : null))
      .then((payload) => {
        if (!isMounted || !payload) {
          return;
        }
        setEngagement(payload);
      })
      .catch(() => {
        if (isMounted) {
          setEngagement(null);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const activeNodeInfo = useMemo(
    () => signals.find((signal) => signal.id === activeNode) ?? null,
    [activeNode],
  );

  const globalShare =
    activeNode && engagement?.totals && Number.isFinite(engagement.totals[activeNode])
      ? engagement.totals[activeNode]
      : null;
  const interactionSample = Number(engagement?.sample_size_interactions ?? 0);

  return (
    <div
      className="signal-orb"
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setActiveNode(null)}
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
            className={`signal-node signal-node--${index + 1} ${activeNode === signal.id ? 'signal-node--active' : ''}`}
            key={signal.id}
            onClick={() => { amplitude.track('Signal Orb Node Clicked', { node: signal.id, node_label: signal.label }); onTabChange(signal.id); }}
            onMouseEnter={() => setActiveNode(signal.id)}
            onMouseLeave={() => setActiveNode(null)}
            onFocus={() => setActiveNode(signal.id)}
            onBlur={() => setActiveNode(null)}
            type="button"
          >
            <span>{signal.label}</span>
            <small>{signal.detail}</small>
          </button>
        ))}
      </div>

      {activeNodeInfo ? (
        <div
          className="signal-orb__tooltip"
          style={{
            '--tooltip-x': `${tooltipX}%`,
            '--tooltip-y': `${tooltipY}%`,
          }}
        >
          <strong>{activeNodeInfo.label} Signal</strong>
          {globalShare !== null && interactionSample > 0 ? (
            <p>{globalShare}% of viewers explored {activeNodeInfo.label} in the last {engagement.window_days ?? 30} days.</p>
          ) : (
            <p>Global interest stats are warming up for this zone.</p>
          )}
        </div>
      ) : null}
    </div>
  );
}
