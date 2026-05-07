import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const zones = ['work', 'study', 'play'];
const parsedLookbackDays = Number.parseInt(process.env.AMPLITUDE_LOOKBACK_DAYS ?? '', 10);
const lookbackDays = Number.isFinite(parsedLookbackDays) && parsedLookbackDays > 0 ? parsedLookbackDays : 30;
const eventType = process.env.AMPLITUDE_ORB_EVENT_NAME ?? 'Signal Orb Node Clicked';
const dashboardApiKey = process.env.AMPLITUDE_DASHBOARD_API_KEY;
const dashboardSecretKey = process.env.AMPLITUDE_DASHBOARD_SECRET_KEY;
const amplitudeProjectId = process.env.AMPLITUDE_PROJECT_ID ?? '';
const amplitudeRegion = (process.env.AMPLITUDE_REGION ?? 'US').toUpperCase();

if (!dashboardApiKey || !dashboardSecretKey) {
  throw new Error(
    'Missing Amplitude credentials. Set AMPLITUDE_DASHBOARD_API_KEY and AMPLITUDE_DASHBOARD_SECRET_KEY.',
  );
}

const baseUrl =
  amplitudeRegion === 'EU'
    ? 'https://analytics.eu.amplitude.com/api/2/events/segmentation'
    : 'https://amplitude.com/api/2/events/segmentation';

const now = new Date();
const start = new Date(now);
start.setUTCDate(start.getUTCDate() - lookbackDays + 1);

function formatDate(date) {
  const yyyy = date.getUTCFullYear();
  const mm = String(date.getUTCMonth() + 1).padStart(2, '0');
  const dd = String(date.getUTCDate()).padStart(2, '0');
  return `${yyyy}${mm}${dd}`;
}

function extractCollapsedValue(payload) {
  const collapsed = payload?.data?.seriesCollapsed?.[0];
  if (typeof collapsed === 'number') {
    return collapsed;
  }

  const series = payload?.data?.series?.[0];
  if (Array.isArray(series)) {
    return series.reduce((sum, value) => sum + Number(value ?? 0), 0);
  }

  return 0;
}

async function fetchZoneCount(zone) {
  const event = {
    event_type: eventType,
    filters: [
      {
        subprop_type: 'event',
        subprop_key: 'node',
        subprop_op: 'is',
        subprop_value: [zone],
      },
    ],
  };

  const params = new URLSearchParams({
    e: JSON.stringify(event),
    start: formatDate(start),
    end: formatDate(now),
    m: 'uniques',
  });

  const response = await fetch(`${baseUrl}?${params.toString()}`, {
    headers: {
      Authorization: `Basic ${Buffer.from(`${dashboardApiKey}:${dashboardSecretKey}`).toString('base64')}`,
    },
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Amplitude request failed for ${zone}: ${response.status} ${text}`);
  }

  const payload = await response.json();
  return Math.max(0, Math.round(extractCollapsedValue(payload)));
}

const countsByZone = Object.fromEntries(
  await Promise.all(
    zones.map(async (zone) => {
      const count = await fetchZoneCount(zone);
      return [zone, count];
    }),
  ),
);

const totalInteractions = Object.values(countsByZone).reduce((sum, value) => sum + value, 0);
const percentages = Object.fromEntries(
  zones.map((zone) => {
    const value = totalInteractions ? Math.round((countsByZone[zone] / totalInteractions) * 100) : 0;
    return [zone, value];
  }),
);

const report = {
  window_days: lookbackDays,
  updated_at: now.toISOString(),
  amplitude_project_id: amplitudeProjectId || null,
  region: amplitudeRegion,
  definition: 'Unique interactions on Signal Orb nodes over the selected lookback window.',
  source_event: eventType,
  totals: percentages,
  sample_size_interactions: totalInteractions,
  raw_counts: countsByZone,
};

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outputPath = path.join(repoRoot, 'public', 'orb-engagement.json');

await mkdir(path.dirname(outputPath), { recursive: true });
await writeFile(outputPath, `${JSON.stringify(report, null, 2)}\n`, 'utf8');

console.log(`Updated ${outputPath}`);
console.log(JSON.stringify(report, null, 2));
