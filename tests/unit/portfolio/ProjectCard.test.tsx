import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProjectCard from '@/components/portfolio/ProjectCard';
import { Project } from '@/types';

const mockProject: Project = {
  id: 'test-project',
  title: 'Test Project',
  description: 'This is a test project',
  thumbnailUrl: 'https://via.placeholder.com/150',
  techStack: ['React', 'Next.js'],
  demoUrl: 'https://demo.com',
  repoUrl: 'https://github.com/repo',
};

describe('ProjectCard Component', () => {
  it('renders project details correctly', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('This is a test project')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Next.js')).toBeInTheDocument();
  });

  it('renders correct links', () => {
    render(<ProjectCard project={mockProject} />);
    const demoLink = screen.getByRole('link', { name: /Live Demo/i });
    expect(demoLink).toHaveAttribute('href', mockProject.demoUrl);
    
    const repoLink = screen.getByRole('link', { name: /GitHub Repo/i });
    expect(repoLink).toHaveAttribute('href', mockProject.repoUrl);
  });
});
