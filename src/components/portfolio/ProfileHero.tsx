"use client";

import React from 'react';
import { Profile } from '@/types';
import { buttonVariants } from '@/components/ui/button';
import { FileText, Code, Briefcase } from 'lucide-react';
import Link from 'next/link';

interface ProfileHeroProps {
  profile: Profile;
}

export default function ProfileHero({ profile }: ProfileHeroProps) {
  return (
    <section className="py-12 md:py-24 lg:py-32 flex flex-col items-center text-center max-w-3xl mx-auto">
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-4">
        Hi, I'm {profile.name} <span className="animate-pulse relative inline-block">👋</span>
      </h1>
      <p className="text-xl text-muted-foreground font-medium mb-6">
        {profile.role}
      </p>
      
      <p className="text-base text-foreground/80 mb-2 leading-relaxed">
        {profile.bio}
      </p>
      <p className="text-base text-foreground/80 mb-8 leading-relaxed">
        {profile.experienceSummary}
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link 
          href={profile.socialLinks.resume} 
          target="_blank" 
          rel="noopener noreferrer"
          className={buttonVariants({ variant: 'default', className: 'gap-2' })}
        >
          <FileText className="w-4 h-4" />
          履歷 (Resume)
        </Link>
        <Link 
          href={profile.socialLinks.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className={buttonVariants({ variant: 'outline', className: 'gap-2' })}
        >
          <Code className="w-4 h-4" />
          GitHub
        </Link>
        <Link 
          href={profile.socialLinks.linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          className={buttonVariants({ variant: 'outline', className: 'gap-2' })}
        >
          <Briefcase className="w-4 h-4" />
          LinkedIn
        </Link>
      </div>
    </section>
  );
}
