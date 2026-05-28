import SectionTitle from '@/components/UI/SectionTitle';
import ProjectCard from '@/components/UI/ProjectCard';
import { PROJECTS_LIST } from '@/config/ProjectsList';

export default function ProjectsIndex() {
  const visibleProjects = PROJECTS_LIST.filter(p => !p.isHidden);

  return (
    <SectionTitle title="Projects" color="secondary" className="mb-[120px]">
      {/* Empty Projects Grid */}
      {visibleProjects.length === 0 && (
        <p className="text-center text-muted-foreground mt-10">
          No projects to display at the moment. Please check back later.
        </p>
      )}

      <div className="grid grid-cols-[repeat(auto-fill,minmax(500px,1fr))] gap-x-6 gap-y-3 mt-4">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </SectionTitle>
  );
}
