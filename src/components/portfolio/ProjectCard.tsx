"use client";

import React from 'react';
import { Project } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import { ExternalLink, Code } from 'lucide-react';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden group hover:shadow-lg transition-all">
      <div className="relative w-full h-48 bg-muted overflow-hidden">
        <img 
          src={project.thumbnailUrl} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start gap-4">
          <CardTitle className="text-xl line-clamp-1">{project.title}</CardTitle>
          {project.isFeatured && (
            <Badge variant="secondary" className="bg-primary/10 text-primary whitespace-nowrap">精選</Badge>
          )}
        </div>
        <CardDescription className="line-clamp-2 mt-2">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.techStack.map(tech => (
            <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-4 pt-4 border-t">
        {project.demoUrl && (
          <Link 
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: 'default', size: 'sm', className: 'w-full gap-2' })}
          >
            <ExternalLink className="w-4 h-4" /> Live Demo
          </Link>
        )}
        {project.repoUrl && (
          <Link 
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: 'outline', size: 'sm', className: 'w-full gap-2 flex-1' })}
          >
            <Code className="w-4 h-4" /> GitHub Repo
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}
