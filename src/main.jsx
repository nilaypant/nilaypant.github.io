import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import * as amplitude from '@amplitude/unified';
import App from './App.jsx';
import './styles.css';

amplitude.initAll(import.meta.env.VITE_AMPLITUDE_API_KEY, {
  analytics: {
    remoteConfig: { fetchRemoteConfig: true }, // pull remote SDK config from Amplitude
    autocapture: {
      attribution: true,           // UTM / referrer attribution events
      pageViews: true,             // SPA route changes + initial load
      sessions: true,              // session start / end events
      formInteractions: true,      // form starts + submits
      fileDownloads: true,         // downloads of common file types
      elementInteractions: true,   // click + change on instrumented elements
      frustrationInteractions: true, // rage clicks, dead clicks
      pageUrlEnrichment: true,     // adds path / search to event props
      networkTracking: true,       // XHR + fetch request events
      webVitals: true,             // CWV (LCP, INP, CLS) on page hide
    },
  },
  sessionReplay: { sampleRate: 1 }, // record user sessions; comment out to disable
  engagement: {},                   // in-product Guides & Surveys; comment out to disable
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
