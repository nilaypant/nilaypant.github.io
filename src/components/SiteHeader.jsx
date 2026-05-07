import { profile, tabs } from '../data/portfolio.js';

export default function SiteHeader({ activeTab, onTabChange }) {
  return (
    <header className="site-header">
      <a className="brand" href="#overview" onClick={() => onTabChange('overview')}>
        <span className="brand__mark">NP</span>
        <span>
          <strong>{profile.name}</strong>
          <small>{profile.role}</small>
        </span>
      </a>

      <nav className="tabs" aria-label="Portfolio sections">
        {tabs.map((tab, index) => (
          <button
            className={activeTab === tab.id ? 'tab tab--active' : 'tab'}
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            type="button"
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            {tab.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
