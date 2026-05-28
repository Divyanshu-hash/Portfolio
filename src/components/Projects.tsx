import SectionTitle from '@/components/UI/SectionTitle';
import ProjectCard from '@/components/UI/ProjectCard';
import { PROJECTS_LIST } from '@/config/ProjectsList';
import { Link } from 'react-router-dom';

const PROJECT_LIST_LIMIT = 9;

export default function Projects() {
  const visibleProjects = PROJECTS_LIST.filter((p) => !p.isHidden);
  const showAllProjects = visibleProjects.length > PROJECT_LIST_LIMIT;

  return (
    <section id="projects" className="w-full min-h-screen py-4 pt-14 bg-background">
      <SectionTitle title="My Projects" color="secondary">
        {/* Empty Projects Grid */}
        {PROJECTS_LIST.length === 0 && (
          <p className="text-center text-muted-foreground mt-10">
            No projects to display at the moment. Please check back later.
          </p>
        )}

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,500px),1fr))] gap-x-6 gap-y-3 mt-4 mb-8">
          {visibleProjects.slice(0, PROJECT_LIST_LIMIT + 3).map((project, index) => {
            if (index > PROJECT_LIST_LIMIT + 2) return null;
            return <ProjectCard key={project.name} project={project} />;
          })}
        </div>

        {/* View all projects */}
        {showAllProjects && (
          <Link
            to="/projects"
            title="View All Projects"
            className="flex items-center mx-auto w-fit px-4 py-2 bg-footerAlt border border-accent font-medium"
          >
            View All Projects
          </Link>
        )}
      </SectionTitle>
    </section>
  );
}
