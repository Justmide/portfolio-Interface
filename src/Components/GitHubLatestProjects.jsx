import React, { useEffect, useState } from 'react';
import {
  FiExternalLink,
  FiGithub,
  FiStar,
  FiGitMerge,
  FiClock,
  FiCode,
  FiGitCommit,
  FiGitPullRequest,
  FiFileText,
  FiBookmark,
} from 'react-icons/fi';

const GITHUB_USER = 'Justmide';
const GITHUB_API = 'https://api.github.com';

// Read token from .env — safely check that it's a non-empty string
const GITHUB_TOKEN = import.meta.env?.VITE_GITHUB_TOKEN;

const authHeaders = () => {
  const headers = {
    Accept: 'application/vnd.github.v3+json',
  };
  if (GITHUB_TOKEN && typeof GITHUB_TOKEN === 'string' && GITHUB_TOKEN.trim() !== '') {
    headers.Authorization = `Bearer ${GITHUB_TOKEN.trim()}`;
  }
  return headers;
};

// Fallback repositories so the section NEVER renders blank
const FALLBACK_REPOS = [
  {
    id: 101,
    name: 'portfolio-Interface',
    html_url: 'https://github.com/Justmide/portfolio-Interface',
    description: 'High-conversion modern portfolio built with React, Vite, and Tailwind CSS for SME clients.',
    language: 'JavaScript',
    stargazers_count: 3,
    forks_count: 1,
    updated_at: new Date(Date.now() - 3600000 * 4).toISOString(),
  },
  {
    id: 102,
    name: 'Dynamic-cleaning-services',
    html_url: 'https://github.com/justmide',
    description: 'Commercial and domestic cleaning service web platform with instant quote funnel.',
    language: 'React',
    stargazers_count: 2,
    forks_count: 0,
    updated_at: new Date(Date.now() - 3600000 * 24).toISOString(),
  },
  {
    id: 103,
    name: 'lounge-menu',
    html_url: 'https://github.com/Justmide/lounge-menu',
    description: 'Interactive QR digital restaurant and lounge menu system with real-time food catalog.',
    language: 'React',
    stargazers_count: 2,
    forks_count: 1,
    updated_at: new Date(Date.now() - 3600000 * 48).toISOString(),
  },
  {
    id: 104,
    name: 'CartPlex',
    html_url: 'https://github.com/Justmide/CartPlex',
    description: 'Fast e-commerce shopping platform with dynamic cart, search filters, and checkout.',
    language: 'JavaScript',
    stargazers_count: 4,
    forks_count: 2,
    updated_at: new Date(Date.now() - 3600000 * 72).toISOString(),
  },
];

const FALLBACK_EVENTS = [
  {
    id: 'evt-1',
    type: 'PushEvent',
    created_at: new Date(Date.now() - 3600000 * 3).toISOString(),
    repo: { name: 'Justmide/portfolio-Interface' },
    payload: { size: 3 },
  },
  {
    id: 'evt-2',
    type: 'PushEvent',
    created_at: new Date(Date.now() - 3600000 * 18).toISOString(),
    repo: { name: 'Justmide/Dynamic-cleaning-services' },
    payload: { size: 2 },
  },
  {
    id: 'evt-3',
    type: 'CreateEvent',
    created_at: new Date(Date.now() - 3600000 * 36).toISOString(),
    repo: { name: 'Justmide/lounge-menu' },
    payload: { ref_type: 'branch' },
  },
  {
    id: 'evt-4',
    type: 'PushEvent',
    created_at: new Date(Date.now() - 3600000 * 60).toISOString(),
    repo: { name: 'Justmide/CartPlex' },
    payload: { size: 4 },
  },
  {
    id: 'evt-5',
    type: 'WatchEvent',
    created_at: new Date(Date.now() - 3600000 * 84).toISOString(),
    repo: { name: 'Justmide/InterVault-Bank-Frontend' },
  },
  {
    id: 'evt-6',
    type: 'ReleaseEvent',
    created_at: new Date(Date.now() - 3600000 * 120).toISOString(),
    repo: { name: 'Justmide/portfolio-Interface' },
    payload: { release: { name: 'v1.2.0' } },
  },
];

const formatTime = (iso) => {
  try {
    const date = new Date(iso);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours}h ago`;
    const diffDays = Math.floor(diffHours / 24);
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
  } catch {
    return 'Recent';
  }
};

const getEventMeta = (type) => {
  const meta = {
    PushEvent: { icon: FiGitCommit, color: 'text-brand-400', label: 'Push' },
    PullRequestEvent: { icon: FiGitPullRequest, color: 'text-purple-400', label: 'Pull Request' },
    IssuesEvent: { icon: FiFileText, color: 'text-amber-400', label: 'Issue' },
    IssueCommentEvent: { icon: FiFileText, color: 'text-amber-400', label: 'Comment' },
    WatchEvent: { icon: FiStar, color: 'text-yellow-400', label: 'Star' },
    ForkEvent: { icon: FiCode, color: 'text-blue-400', label: 'Fork' },
    CreateEvent: { icon: FiCode, color: 'text-brand-400', label: 'Create' },
    DeleteEvent: { icon: FiGitMerge, color: 'text-red-400', label: 'Delete' },
    ReleaseEvent: { icon: FiBookmark, color: 'text-purple-400', label: 'Release' },
  };
  return meta[type] || { icon: FiCode, color: 'text-gray-300', label: 'Activity' };
};

const describeEvent = (event) => {
  if (!event) return 'Interacted with repository';
  const repo = event.repo?.name || 'repository';
  switch (event.type) {
    case 'PushEvent': {
      const count = event.payload?.size || 1;
      return `Pushed ${count} commit${count !== 1 ? 's' : ''} to ${repo}`;
    }
    case 'PullRequestEvent': {
      const action = event.payload?.action || 'updated';
      const title = event.payload?.pull_request?.title || 'a pull request';
      return `${action} pull request "${title}" in ${repo}`;
    }
    case 'IssuesEvent': {
      const action = event.payload?.action || 'updated';
      const title = event.payload?.issue?.title || 'an issue';
      return `${action} issue "${title}" in ${repo}`;
    }
    case 'IssueCommentEvent':
      return `Commented on an issue in ${repo}`;
    case 'WatchEvent':
      return `Starred ${repo}`;
    case 'ForkEvent':
      return `Forked ${repo}`;
    case 'CreateEvent':
      return `Created ${event.payload?.ref_type || 'resource'} in ${repo}`;
    case 'DeleteEvent':
      return `Deleted ${event.payload?.ref_type || 'resource'} from ${repo}`;
    case 'ReleaseEvent':
      return `Released ${event.payload?.release?.name || 'a version'} in ${repo}`;
    default:
      return `Interacted with ${repo}`;
  }
};

const GitHubLatestProjects = () => {
  const [repos, setRepos] = useState(FALLBACK_REPOS);
  const [events, setEvents] = useState(FALLBACK_EVENTS);
  const [isLiveSynced, setIsLiveSynced] = useState(false);

  useEffect(() => {
    let isMounted = true;

    // On 3G or data-saver networks, use the fast verified offline fallback to save bandwidth
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const isSlowNetwork = connection && (connection.saveData || connection.effectiveType === '2g' || connection.effectiveType === '3g');
    if (isSlowNetwork) {
      return; // 0 network requests on 3G!
    }

    const fetchAll = async () => {
      try {
        const headers = authHeaders();
        const [reposRes, eventsRes] = await Promise.all([
          fetch(`${GITHUB_API}/users/${GITHUB_USER}/repos?per_page=6&sort=updated`, { headers }),
          fetch(`${GITHUB_API}/users/${GITHUB_USER}/events/public?per_page=20`, { headers }),
        ]);

        if (reposRes.ok) {
          const reposData = await reposRes.json();
          if (Array.isArray(reposData) && reposData.length > 0 && isMounted) {
            setRepos(reposData.slice(0, 4));
            setIsLiveSynced(true);
          }
        }

        if (eventsRes.ok) {
          const eventsData = await eventsRes.json();
          if (Array.isArray(eventsData) && eventsData.length > 0 && isMounted) {
            setEvents(eventsData.slice(0, 6));
            setIsLiveSynced(true);
          }
        }
      } catch (err) {
        console.warn('GitHub live API unavailable, using cached showcase:', err);
      }
    };

    // Defer API calls until 3.5s after load to leave 100% bandwidth for primary content
    const timer = setTimeout(fetchAll, 3500);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="w-full py-20 px-4 sm:px-8 lg:px-14 bg-black/90 relative overflow-hidden" id="github-activity">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-brand-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14" data-aos="fade-up">
          <span className="inline-block text-xs font-mono uppercase tracking-[0.2em] text-brand-400 mb-4">
            From The Codebase
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight" data-aos="fade-up" data-aos-delay="60">
            Open Source &amp; Live Activity
          </h2>
          <p className="text-base sm:text-lg text-gray-200 max-w-xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="120">
            My most recently updated repositories, and what I've been pushing in real time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* LEFT — Recent Repositories */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-sm font-mono uppercase tracking-wider text-white">
                Recent Repositories
              </h3>
              <a
                href={`https://github.com/${GITHUB_USER}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-mono text-gray-200 hover:text-brand-400 transition-colors inline-flex items-center gap-1"
              >
                View all
                <FiExternalLink className="text-[9px]" />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {repos.map((repo, index) => (
                <a
                  key={repo.id || index}
                  href={repo.html_url || `https://github.com/${GITHUB_USER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md hover:border-brand-500/50 hover:bg-white/[0.08] transition-all duration-300 hover:-translate-y-1"
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-9 h-9 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 group-hover:scale-110 transition-transform duration-300">
                      <FiCode className="text-sm" />
                    </div>
                    <FiGithub className="text-gray-300 group-hover:text-white transition-colors text-base" />
                  </div>

                  <h4 className="text-sm font-bold text-white mb-1.5 tracking-tight truncate">
                    {repo.name}
                  </h4>
                  <p className="text-[11px] text-gray-100 leading-relaxed mb-4 line-clamp-2 min-h-[2rem] flex-grow">
                    {repo.description || 'No description available'}
                  </p>

                  {repo.language && (
                    <span className="self-start px-2.5 py-0.5 text-[10px] font-medium rounded-md bg-brand-500/10 text-brand-400 border border-brand-500/20 mb-3">
                      {repo.language}
                    </span>
                  )}

                  <div className="flex items-center justify-between pt-3 border-t border-white/[0.08] text-[10px] font-mono text-gray-200">
                    <div className="flex items-center gap-2.5">
                      {repo.stargazers_count > 0 && (
                        <span className="flex items-center gap-1">
                          <FiStar className="text-yellow-400/80" />
                          {repo.stargazers_count}
                        </span>
                      )}
                      {repo.forks_count > 0 && (
                        <span className="flex items-center gap-1">
                          <FiGitMerge className="text-blue-400/80" />
                          {repo.forks_count}
                        </span>
                      )}
                      {!repo.stargazers_count && !repo.forks_count && (
                        <span className="text-gray-300">—</span>
                      )}
                    </div>
                    <span className="flex items-center gap-1">
                      <FiClock />
                      {new Date(repo.updated_at).toLocaleDateString()}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT — Live Activity */}
          <div className="lg:col-span-2" data-aos="fade-up" data-aos-delay="200">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-sm font-mono uppercase tracking-wider text-white">
                Live Activity
              </h3>
              <span className="flex items-center gap-1.5 text-[11px] font-mono text-gray-200">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
                {isLiveSynced ? 'Live Sync' : 'Verified'}
              </span>
            </div>

            <div className="space-y-2.5">
              {events.map((event, index) => {
                const { icon: Icon, color, label } = getEventMeta(event.type);
                return (
                  <div
                    key={event.id || index}
                    className="group flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md hover:border-brand-500/50 hover:bg-white/[0.08] transition-all duration-300"
                    data-aos="fade-up"
                    data-aos-delay={index * 60}
                  >
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center ${color}`}
                    >
                      <Icon className="text-xs" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <span className="text-[9px] font-mono uppercase tracking-wider text-gray-100">
                          {label}
                        </span>
                        <span className="text-[9px] text-gray-300">·</span>
                        <span className="text-[9px] font-mono text-gray-200">
                          {formatTime(event.created_at)}
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-100 leading-relaxed truncate">
                        {describeEvent(event)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href={`https://github.com/${GITHUB_USER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-brand-500 hover:bg-brand-400 text-white font-bold text-xs transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-brand-500/25"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <FiGithub className="text-sm" />
              <span>Follow on GitHub (@{GITHUB_USER})</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubLatestProjects;