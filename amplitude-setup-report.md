<wizard-report>
# Amplitude post-wizard report

The wizard has completed a full integration of Amplitude analytics into this React + Vite portfolio site (`nilaypant.github.io`). The `@amplitude/unified` SDK was installed and initialized in `src/main.jsx` — the natural entry point for this project. Session Replay (sampleRate: 1) and Guides & Surveys (engagement) are enabled out of the box alongside the full autocapture suite.

## Events instrumented

| Event Name | Description | File |
|---|---|---|
| Tab Navigated | Fires when a visitor switches to a different portfolio section tab. | `src/App.jsx` |
| Portfolio Area Entered | Fires when a visitor clicks an area card to navigate to Work, Study, or Play. | `src/views/Overview.jsx` |
| External Link Clicked | Fires when a visitor opens an external link such as LinkedIn, GitHub, or a project link. | `src/views/Overview.jsx` |
| Film Watched On YouTube | Fires when a visitor clicks the Watch on YouTube button for a film. | `src/views/Play.jsx` |
| Contact Email Clicked | Fires when a visitor clicks the email address to initiate contact. | `src/views/Overview.jsx` |
| Signal Orb Node Clicked | Fires when a visitor clicks a navigation node on the Signal Orb in the hero. | `src/components/SignalOrb.jsx` |
| Project Link Clicked | Fires when a visitor clicks an external link on a project card. | `src/components/ProjectCard.jsx` |
| Featured Film CTA Clicked | Fires when a visitor clicks 'See it in Play' or 'Watch on YouTube' on the featured film card. | `src/views/Overview.jsx` |
| Contact Initiated | Fires when a visitor clicks the phone number link to contact via phone. | `src/views/Overview.jsx` |

## Analytics dashboard

Dashboard: [nilaypant.github.io Analytics — 2026](https://app.amplitude.com/analytics/nilaypant01/dashboard/okt0nwga)

Charts included:

| Chart | Type | URL | Populates |
|---|---|---|---|
| Daily Unique Visitors | Line | [Open](https://app.amplitude.com/analytics/nilaypant01/chart/yz631a7p) | Immediately (uses `_active`) |
| New vs Returning Visitors | Line | [Open](https://app.amplitude.com/analytics/nilaypant01/chart/4t5czqbx) | Immediately (uses `_new` / `_active`) |
| Visitor Return Retention | Retention | [Open](https://app.amplitude.com/analytics/nilaypant01/chart/0hsmnd5i) | Immediately (uses `_new` / `_active`) |

The charts above use Amplitude's built-in events and will populate as soon as the first visitor hits the deployed site.

Custom event charts (Tab Navigated, Portfolio Area Entered, Film Watched On YouTube, etc.) will populate once those user flows are triggered. Because the project has no prior traffic, those event names were not yet indexed in the Amplitude project at dashboard-creation time — they will appear automatically in the chart builder once real sessions begin.

Session Replay is enabled at 100% sample rate — visit **Session Replay** in the Amplitude sidebar to watch session recordings once traffic arrives.

## Next steps

### Environment variable configuration

The Amplitude API key is stored in `.env.local` as `VITE_AMPLITUDE_API_KEY`. This file is gitignored and local-only.

**For production (GitHub Pages):** GitHub Pages is a static host with no server-side environment injection. The recommended approach is one of:

1. **GitHub Actions secret + build step** — add `VITE_AMPLITUDE_API_KEY` as a repository secret in GitHub Settings → Secrets → Actions, then update your deploy workflow (`yml`) to pass it during `npm run build` via `env: VITE_AMPLITUDE_API_KEY: ${{ secrets.VITE_AMPLITUDE_API_KEY }}`. Vite will bake the value into the bundle at build time.

2. **Inline the key directly** — since this is a public browser key (Amplitude treats it as public; tenant isolation is server-side), you may inline it directly in `src/main.jsx` as a fallback: `amplitude.initAll('7e927ccc7c7cf36eb318385ebd95f9a9', {...})`.

The current `.env.local` approach works correctly in local development (`npm run dev`).

### Session Replay

Session Replay is configured at `sampleRate: 1` (100%). For a high-traffic production portfolio you may want to reduce this — comment out `sessionReplay: { sampleRate: 1 }` or lower the value (e.g. `0.1` = 10%).

### Agent skill

The Amplitude wizard has left an agent skill folder at `.claude/skills/`. You can use this context for further analytics development when using Claude Code.
</wizard-report>
