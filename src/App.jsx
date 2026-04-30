import { useEffect, useState } from 'react';
import SiteHeader from './components/SiteHeader.jsx';
import Overview from './views/Overview.jsx';
import Work from './views/Work.jsx';
import Study from './views/Study.jsx';
import Play from './views/Play.jsx';
import { profile, tabs } from './data/portfolio.js';

const views = {
  overview: Overview,
  work: Work,
  study: Study,
  play: Play,
};

function getInitialTab() {
  const hash = window.location.hash.replace('#', '');
  return tabs.some((tab) => tab.id === hash) ? hash : 'overview';
}

export default function App() {
  const [activeTab, setActiveTab] = useState(getInitialTab);
  const ActiveView = views[activeTab] ?? Overview;

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    window.history.replaceState(null, '', `#${tabId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const syncTabFromHash = () => setActiveTab(getInitialTab());
    window.addEventListener('hashchange', syncTabFromHash);
    return () => window.removeEventListener('hashchange', syncTabFromHash);
  }, []);

  return (
    <div className="app-shell">
      <SiteHeader activeTab={activeTab} onTabChange={handleTabChange} />
      <main>
        <ActiveView onTabChange={handleTabChange} />
      </main>
      <footer className="site-footer">
        <p>
          Built as a living portfolio for {profile.name}. Reach out at{' '}
          <a href={`mailto:${profile.email}`}>{profile.email}</a>.
        </p>
      </footer>
    </div>
  );
}
