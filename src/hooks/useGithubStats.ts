import { useState, useEffect } from 'react';

interface GithubStats {
  projects: number;
  contributions: number;
  competitions: number;
}

const CACHE_KEY = 'github_stats_cache';
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

const getHeaders = () => {
  const token = import.meta.env.VITE_GITHUB_TOKEN;
  return {
    Accept: 'application/vnd.github.v3+json',
    ...(token ? { Authorization: `token ${token}` } : {}),
  };
};

export const useGithubStats = (username: string) => {
  const [stats, setStats] = useState<GithubStats>(() => {
    // Initialize with data from cache if available
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const { data, timestamp } = JSON.parse(cached);
      if (Date.now() - timestamp < CACHE_DURATION) {
        return data;
      }
    }
    // Default initial values based on your GitHub profile
    return {
      projects: 11,
      contributions: 247,
      competitions: 2,
    };
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getCachedStats = () => {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const { data, timestamp } = JSON.parse(cached);
        if (Date.now() - timestamp < CACHE_DURATION) {
          return data;
        }
      }
      return null;
    };

    const cacheStats = (data: GithubStats) => {
      localStorage.setItem(
        CACHE_KEY,
        JSON.stringify({
          data,
          timestamp: Date.now(),
        })
      );
    };

    const fetchAllRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?per_page=100&type=all`,
          { headers: getHeaders() }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }

        const repos = await response.json();
        return repos;
      } catch (error) {
        console.error('Error fetching repos:', error);
        throw error;
      }
    };

    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`,
          { headers: getHeaders() }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        return response.json();
      } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
      }
    };

    const fetchContributionsCount = async () => {
      try {
        // Get user's events (includes commits, PRs, issues)
        const eventsResponse = await fetch(
          `https://api.github.com/users/${username}/events?per_page=100`,
          { headers: getHeaders() }
        );

        if (!eventsResponse.ok) {
          throw new Error('Failed to fetch events');
        }

        const events = await eventsResponse.json();
        
        // Count different types of contributions
        return events.reduce((total: number, event: any) => {
          const weights: { [key: string]: number } = {
            PushEvent: 5,
            PullRequestEvent: 10,
            IssuesEvent: 3,
            IssueCommentEvent: 1,
            CreateEvent: 2,
            DeleteEvent: 1,
            ForkEvent: 2,
            WatchEvent: 1,
          };
          return total + (weights[event.type] || 0);
        }, 0);
      } catch (error) {
        console.error('Error fetching contributions:', error);
        throw error;
      }
    };

    const updateStats = async () => {
      try {
        // First check cache
        const cachedStats = getCachedStats();
        if (cachedStats) {
          setStats(cachedStats);
          setLoading(false);
        }

        // Fetch fresh data
        const [repos, userData, contributionsCount] = await Promise.all([
          fetchAllRepos(),
          fetchUserData(),
          fetchContributionsCount(),
        ]);

        const projectsCount = repos.length;
        
        // Calculate total stars and forks
        const starsAndForks = repos.reduce((acc: number, repo: any) => {
          return acc + (repo.stargazers_count || 0) + (repo.forks_count || 0);
        }, 0);

        // Count hackathon/competition repos
        const competitionsCount = repos.filter((repo: any) => {
          const searchTerms = ['hackathon', 'competition', 'challenge', 'contest'];
          const searchText = `${repo.name} ${repo.description || ''}`.toLowerCase();
          return searchTerms.some(term => searchText.includes(term));
        }).length;

        // Calculate total contributions including:
        // 1. Recent activity (weighted)
        // 2. Stars and forks received (weight: 2)
        // 3. Public repos and gists (weight: 5)
        // 4. Followers (weight: 2)
        const totalContributions = 
          contributionsCount + 
          (starsAndForks * 2) + 
          ((userData.public_repos + userData.public_gists) * 5) +
          (userData.followers * 2);

        const newStats = {
          projects: projectsCount,
          contributions: totalContributions,
          competitions: competitionsCount,
        };

        setStats(newStats);
        cacheStats(newStats);
        setLoading(false);
      } catch (err) {
        console.error('Error updating stats:', err);
        // If we have cached stats, keep using them
        const cachedStats = getCachedStats();
        if (cachedStats) {
          setStats(cachedStats);
        }
        setError(err instanceof Error ? err.message : 'Failed to fetch GitHub stats');
        setLoading(false);
      }
    };

    // Initial update
    updateStats();

    // Set up polling
    const interval = setInterval(updateStats, CACHE_DURATION);
    return () => clearInterval(interval);
  }, [username]);

  return { stats, loading, error };
}; 