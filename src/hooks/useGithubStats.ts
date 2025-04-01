import { useState, useEffect } from 'react';

interface GithubStats {
  projects: number;
  contributions: number;
  competitions: number;
}

export const useGithubStats = (username: string) => {
  const [stats, setStats] = useState<GithubStats>({
    projects: 0,
    contributions: 0,
    competitions: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllRepos = async () => {
      let page = 1;
      let allRepos: any[] = [];
      
      while (true) {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?per_page=100&page=${page}`
        );
        const repos = await response.json();
        if (repos.length === 0) break;
        allRepos = [...allRepos, ...repos];
        page++;
      }
      
      return allRepos;
    };

    const fetchContributions = async () => {
      // Get all events (includes commits, PRs, issues)
      const eventsResponse = await fetch(`https://api.github.com/users/${username}/events/public`);
      const events = await eventsResponse.json();
      
      // Get user's profile for total contributions
      const userResponse = await fetch(`https://api.github.com/users/${username}`);
      const userData = await userResponse.json();
      
      return {
        events,
        publicContributions: userData.public_repos + userData.public_gists
      };
    };

    const fetchGithubStats = async () => {
      try {
        // Fetch all repositories with pagination
        const repos = await fetchAllRepos();
        const projectsCount = repos.length;

        // Calculate total stars and forks
        const starsAndForks = repos.reduce((acc, repo) => {
          return acc + repo.stargazers_count + repo.forks_count;
        }, 0);

        // Get contributions data
        const { events, publicContributions } = await fetchContributions();
        
        // Count recent activity
        const recentActivity = events.filter(
          (event: any) => 
            event.type === 'PushEvent' || 
            event.type === 'PullRequestEvent' || 
            event.type === 'IssuesEvent' ||
            event.type === 'CreateEvent' ||
            event.type === 'ForkEvent'
        ).length;

        // Total contributions is sum of:
        // 1. Public repositories and gists
        // 2. Recent activity
        // 3. Stars and forks received
        const totalContributions = publicContributions + recentActivity + starsAndForks;

        // Count competitions/hackathons
        const competitionsCount = repos.filter((repo: any) => {
          const searchTerms = ['competition', 'hackathon', 'challenge', 'contest'];
          const searchText = `${repo.name} ${repo.description || ''}`.toLowerCase();
          return searchTerms.some(term => searchText.includes(term));
        }).length;

        setStats({
          projects: projectsCount,
          contributions: totalContributions,
          competitions: competitionsCount,
        });
        setLoading(false);
      } catch (err) {
        console.error('Error fetching GitHub stats:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch GitHub stats');
        setLoading(false);
      }
    };

    fetchGithubStats();
    
    // Set up polling every 5 minutes to keep stats fresh
    const interval = setInterval(fetchGithubStats, 5 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, [username]);

  return { stats, loading, error };
}; 