import { Project } from '@/types';

export const getProjectsData = (): Project[] => {
  return [
    {
      id: 'ai-trading-bot',
      title: 'AI Trading Bot',
      description: 'An automated stock screening and trading bot using Next.js, Playwright, and GitHub Actions.',
      thumbnailUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a223690?q=80&w=600&auto=format&fit=crop',
      techStack: ['Next.js', 'TypeScript', 'Playwright', 'GitHub Actions'],
      repoUrl: 'https://github.com/fchsu/ai-trading-bot',
    },
    {
      id: 'frontend-portfolio',
      title: 'Professional Portfolio',
      description: 'A modern, accessible frontend engineer portfolio with headless GitHub Issues CMS.',
      thumbnailUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop',
      techStack: ['React 19', 'Next.js 16', 'TailwindCSS', 'Zustand'],
      demoUrl: 'https://portfolio.demo.com',
      repoUrl: 'https://github.com/fchsu/my-home',
      isFeatured: true,
    }
  ];
};
