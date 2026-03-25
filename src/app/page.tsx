import ProfileHero from "@/components/portfolio/ProfileHero";
import ProjectList from "@/components/portfolio/ProjectList";
import { getProfileData } from "@/lib/data/profile";
import { getProjectsData } from "@/lib/data/projects";

export default function Home() {
  const profile = getProfileData();
  const projects = getProjectsData();

  return (
    <div className="flex flex-col gap-16 md:gap-24 pb-16">
      <ProfileHero profile={profile} />
      
      <section id="portfolio" className="scroll-mt-20 w-full">
        <h2 className="text-3xl font-bold tracking-tight mb-8">作品集 (Projects)</h2>
        <ProjectList projects={projects} />
      </section>
    </div>
  );
}
