import { useEffect, useState } from 'react';
import { ArrowUpRightIcon, Github } from 'lucide-react';
import type { IProject } from '@/config/ProjectsList';
import { Link } from 'react-router-dom';

type Props = {
  project: IProject;
  className?: string;
};

export default function ProjectCard({ project, className = '' }: Props) {
  const [projectStatus, setProjectStatus] = useState<string>('CHECKING');

  useEffect(() => {
    if (project.status === 'development') {
      setProjectStatus('BUILDING');
      return;
    }

    const checkLiveStatus = async () => {
      try {
        await fetch(project.liveUrl, {
          method: 'HEAD',
          mode: 'no-cors',
        });
        // With no-cors, we can't reliably read res.ok, but if it doesn't throw, 
        // it means the network request succeeded (server is reachable).
        setProjectStatus('LIVE');
      } catch (error) {
        setProjectStatus('DOWN');
      }
    };

    checkLiveStatus();
  }, [project.liveUrl, project.status]);

  return (
    <div
      className={`Project_Stagger Card_Main w-full md:h-[525px] flex flex-col bg-footerAltLite/80 overflow-hidden mt-3 rounded-xl ${className}`}
    >
      <Link
        to={`/projects/${project.name.replaceAll(' ', '-').toLowerCase()}`}
        className="Projects_Preview relative w-full p-1 block"
      >
        <img
          className="Card_Image object-cover object-top aspect-video opacity-100 transition-opacity w-full rounded-lg"
          src={project.previewImage as unknown as string}
          alt={`Project_ScreenShot_${project.name}`}
          loading="lazy"
        />
        <div className="absolute inset-1 bg-foreground dark:bg-background rounded-lg transition-opacity opacity-10 hover:opacity-0 pointer-events-none"></div>
      </Link>

      <div className="relative w-full flex flex-col flex-1 text-[0.95em] p-2 md:px-6 md:py-4 min-h-0">
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center gap-4 max-h-[60px]">
            <img
              src={project.logoImage as unknown as string}
              alt={`Project_Logo_${project.name}`}
              width={60}
              height={60}
              loading="lazy"
              className="max-h-[60px] max-w-[60px] object-contain"
            />
            <div className="flex flex-col">
              <h3 className="font-ubuntu text-[1.2rem] md:text-[1.4rem]">
                {project.name}
              </h3>
            </div>
          </div>

          <div className="flex md:gap-4 items-center">
            {projectStatus !== 'CHECKING' && (
              <div
                className={`flex items-center gap-2 w-fit text-sm tracking-widest align-middle md:px-2 ${
                  projectStatus === 'LIVE'
                    ? 'text-[var(--status-live-fg)]'
                    : projectStatus === 'DOWN'
                    ? 'text-[var(--status-down-fg)]'
                    : 'text-[var(--status-warn-fg)]'
                }`}
              >
                <div
                  className={`size-3 rounded-full ${
                    projectStatus === 'LIVE'
                      ? 'bg-[var(--status-live-fg)]'
                      : projectStatus === 'DOWN'
                      ? 'bg-[var(--status-down-fg)]'
                      : 'bg-[var(--status-warn-fg)]'
                  }`}
                ></div>
                {projectStatus}
              </div>
            )}

            <div className="flex items-center gap-2">
              <a
                href={project.sourceUrl}
                title={`${project.name} - GitHub`}
                target="_blank"
                rel="noreferrer"
                className="Projects_Link flex"
              >
                <Github width={20} height={20} aria-hidden="true" />
                <span className="sr-only">{project.name} - GitHub</span>
              </a>
              <a
                href={project.liveUrl}
                title={`${project.name} Preview`}
                target="_blank"
                rel="noreferrer"
                className="Projects_Link flex"
              >
                <ArrowUpRightIcon aria-hidden="true" />
                <span className="sr-only">{project.name} Preview</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-1 items-center py-2">
          <p className="text-center">{project.shortDescription}</p>
        </div>

        <div className="w-full flex_center gap-4 shrink-0">
          {project.technologies.map((tech, index) => {
            if (!tech) {
              console.warn("Undefined technology in project:", project.name);
              return null;
            }
            if (project.technologies.length > 12) {
              if (index > 12) return null;
              if (index === 12) {
                return (
                  <div key="more" className="flex items-center justify-center w-6 h-6 p-1 text-xs bg-background/60 rounded">
                    +&nbsp;{project.technologies.length - 12}
                  </div>
                );
              }
            }

            return (
              <img
                key={tech.title}
                src={tech.icon as unknown as string}
                alt={`TechIcon ${tech.title}`}
                width={22}
                height={22}
                loading="lazy"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
