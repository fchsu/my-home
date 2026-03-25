import React from 'react';
import ProjectCard from './ProjectCard';
import { Project } from '@/types';

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  if (!projects.length) {
    return (
      <div className="flex items-center justify-center p-8 border border-dashed rounded-lg text-muted-foreground w-full">
        尚無專案資料
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
