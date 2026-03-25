import { Profile } from '@/types';

export const getProfileData = (): Profile => {
  return {
    name: 'Gavin',
    role: 'Frontend Engineer',
    bio: 'I build modern web applications with focus on top-tier DX and UX. Passionate about Web Performance, UI Architecture, and AI-driven development.',
    experienceSummary: '5+ years of experience specializing in React ecosystem. Track record of delivering scalable frontend architectures and working efficiently across cross-functional teams in agile environments.',
    socialLinks: {
      resume: '/resume.pdf',
      linkedin: 'https://linkedin.com/in/gavin-example',
      github: 'https://github.com/fchsu',
    },
  };
};
