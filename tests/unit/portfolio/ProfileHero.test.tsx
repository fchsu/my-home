import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProfileHero from '@/components/portfolio/ProfileHero';
import { Profile } from '@/types';

const mockProfile: Profile = {
  name: 'Gavin',
  role: 'Frontend Engineer',
  bio: 'A passionate developer.',
  experienceSummary: '5 years of frontend experience.',
  socialLinks: {
    resume: 'https://resume.com',
    linkedin: 'https://linkedin.com/in/gavin',
    github: 'https://github.com/gavin',
  }
};

describe('ProfileHero Component', () => {
  it('renders the profile name and role correctly', () => {
    render(<ProfileHero profile={mockProfile} />);
    expect(screen.getByText(/Gavin/i)).toBeInTheDocument();
    expect(screen.getByText(/Frontend Engineer/i)).toBeInTheDocument();
  });

  it('renders social links', () => {
    render(<ProfileHero profile={mockProfile} />);
    const githubLink = screen.getByRole('link', { name: /GitHub/i });
    expect(githubLink).toHaveAttribute('href', mockProfile.socialLinks.github);
  });
});
