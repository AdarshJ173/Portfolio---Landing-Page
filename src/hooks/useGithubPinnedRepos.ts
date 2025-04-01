import { useState, useEffect } from 'react';

export const useGithubPinnedRepos = (username: string) => {
  const [pinnedRepos, setPinnedRepos] = useState<string[]>([
    'Vocabify',
    'zephyr',
    'Portfolio---Landing-Page',
    'NutriTech'
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return { pinnedRepos, loading, error };
}; 