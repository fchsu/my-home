/**
 * Global ISR cache constants in seconds
 */
export const CACHE_TIMES = {
  MINUTE: 60,
  HOUR: 3600,
  DAY: 86400,
  WEEK: 604800,
} as const;

export const CACHE_TAGS = {
  ARTICLES: 'articles',
  PROFILE: 'profile',
  PROJECTS: 'projects',
} as const;
