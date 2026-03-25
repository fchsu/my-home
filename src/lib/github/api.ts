import { CACHE_TIMES } from '../cache';

export async function fetchGitHubAPI<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  const baseUrl = 'https://api.github.com';
  
  const headers = new Headers(options?.headers);
  headers.set('Accept', 'application/vnd.github.v3+json');
  headers.set('X-GitHub-Api-Version', '2022-11-28');

  if (GITHUB_TOKEN) {
    headers.set('Authorization', `Bearer ${GITHUB_TOKEN}`);
  }

  // default to ISR caching for 1 hour if not specified
  const response = await fetch(`${baseUrl}${endpoint}`, {
    ...options,
    headers,
    next: {
      revalidate: CACHE_TIMES.HOUR,
      ...(options as any).next,
    }
  });

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}
