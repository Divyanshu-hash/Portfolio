import { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { CheckIcon, ClipboardCopyIcon, ExternalLinkIcon } from 'lucide-react';
import CenterTitle from '@/components/UI/CenterTitle';
import SectionTitle from '@/components/UI/SectionTitle';
import { PROJECTS_LIST } from '@/config/ProjectsList';

export default function ProjectDetails() {
  const { projectID } = useParams();

  const [emailCopied, setEmailCopied] = useState(false);
  const [passCopied, setPassCopied] = useState(false);

  // Scroll to top whenever the project page is opened
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [projectID]);

  // Find the project
  const project = PROJECTS_LIST.find(
    (itm) => itm.name.replaceAll(' ', '-').toLowerCase() === projectID
  );

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const handleCopyEmail = () => {
    if (project.demoCredentials?.email) {
      navigator.clipboard.writeText(project.demoCredentials.email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    }
  };

  const handleCopyPass = () => {
    if (project.demoCredentials?.password) {
      navigator.clipboard.writeText(project.demoCredentials.password);
      setPassCopied(true);
      setTimeout(() => setPassCopied(false), 2000);
    }
  };

  return (
    <>
      {/* Project Background Image */}
      <div className="Fade_In flex_center absolute inset-0 w-full h-full z-[-1]">
        <img
          src={project.previewImage as unknown as string}
          alt={`${project.name}_BG_Image`}
          className="w-full h-full opacity-50 blur-md p-6 object-cover"
        />

        {/* Dark Image Overlay */}
        <div style={{ background: 'var(--imgOverlayGradient)' }} className="w-full h-full absolute inset-0"></div>
      </div>

      {/* Main Project Info */}
      <div className="flex_center flex-col gap-4 py-4">
        {/* Project Logo Image */}
        <img
          src={project.logoImage as unknown as string}
          alt={`${project.name}_Image`}
          className="Fade_Up"
          width={100}
          height={100}
          loading="eager"
        />

        {/* Project Title */}
        <h1 className="Fade_Up font-ubuntu text-[1.6em] md:text-[1.8em] tracking-wider md:tracking-[0.2em] text-center">
          {project.name}
        </h1>

        {/* Technologies Icons */}
        <div className="w-full flex_center gap-4">
          {project.technologies?.map((tech, index) => (
            <img
              key={index}
              src={tech.icon as unknown as string}
              alt={`TechIcon_${index}`}
              width={28}
              height={28}
              className="Fade_Stagger"
              loading="eager"
            />
          ))}
        </div>

        {/* Project Links */}
        <div className="flex_center gap-4 text-[1em]">
          <a
            href={project.sourceUrl}
            target="_blank"
            rel="author noreferrer"
            className="Fade_Stagger flex_center gap-2 LinkBtnGradient px-4 py-2 rounded"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              color="#fff"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: 'var(--socialIconColor)' }}
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
            <span>Source Code</span>
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="Fade_Stagger flex_center gap-2 LinkBtnGradient px-4 py-2 rounded"
          >
            <ExternalLinkIcon />
            <span>Live Demo</span>
          </a>
        </div>
      </div>

      <h2 className="Fade_Up font-ubuntu text-[1.5em] pt-4 pb-3 w-full">About the project.</h2>
      <div className="flex justify-center items-center xl:items-start flex-col xl:flex-row gap-4 py-10">
        {/* Project Mockup Image */}
        <img
          src={project.deviceMockupImage as unknown as string}
          alt={`${project.name}_Mockup_Image`}
          width={600}
          className="Fade_Up"
          loading="eager"
        />

        <div className="Fade_Up flex_center flex-col gap-4">
          {/* Demo Credentials */}
          {project.demoCredentials && (
            <div className="flex items-center flex-col gap-4 w-fit px-4 py-2 LinkBtnGradient rounded-md mt-4 lg:mt-0">
              <h3 className="min-w-max my-auto">Demo Credentials</h3>

              <div className="flex justify-evenly w-full flex-col md:flex-row gap-2 text-[0.8em]">
                {/* Copy Email */}
                <div className="flex gap-4 bg-backgroundLite p-2 rounded-md">
                  <span className="min-w-20 md:w-fit">Email : </span>
                  <span className="w-full">{project.demoCredentials.email}</span>

                  <button onClick={handleCopyEmail} className="flex_center relative">
                    <ClipboardCopyIcon className={`absolute transition-opacity ${emailCopied ? 'opacity-0' : 'opacity-100'}`} />
                    <CheckIcon className={`transition-opacity ${emailCopied ? 'opacity-100' : 'opacity-0'}`} />
                  </button>
                </div>

                {/* Copy Password */}
                <div className="flex gap-4 bg-backgroundLite p-2 rounded-md">
                  <span className="min-w-20 md:w-fit">Password : </span>
                  <span className="w-full">{project.demoCredentials.password}</span>

                  <button onClick={handleCopyPass} className="flex_center relative">
                    <ClipboardCopyIcon className={`absolute transition-opacity ${passCopied ? 'opacity-0' : 'opacity-100'}`} />
                    <CheckIcon className={`transition-opacity ${passCopied ? 'opacity-100' : 'opacity-0'}`} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Project Description */}
          <div className="Fade_Up w-full mt-6 px-2 md:px-4">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md p-6 transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">

              {/* Gradient Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-50" />

              {/* Header */}
              <div className="relative flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-primary/10 border border-primary/20">
                  <span className="text-lg">🚀</span>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">
                    Project Overview
                  </p>

                  <h3 className="text-lg font-bold mt-1">
                    About the Project
                  </h3>
                </div>
              </div>

              {/* Content */}
              <p className="relative text-[1rem] md:text-[1.05rem] leading-8 text-muted-foreground">
                {project.description}
              </p>

              {/* Bottom Accent */}
              <div className="mt-5 h-[2px] w-24 bg-gradient-to-r from-primary to-secondary rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Project Features */}
      <SectionTitle title="Features" color="primary">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-6 md:gap-x-10 md:mx-4">
          {project.features.map((item, i) => (
            <div key={i} className="Fade_Up p-2 md:p-4 text-center md:text-start flex flex-col gap-3 border border-primaryLiteAlt sm:border-transparent hover:border-primaryLiteAlt bg-skillGradientAlt rounded-md transition-colors duration-200">
              <span className="font-ubuntu text-[1.125em]">{item.title}</span>
              <p className="md:pl-8 text-center md:text-justify">{item.description}</p>
            </div>
          ))}
        </div>
      </SectionTitle>

      {/* Details of Technologies Used */}
      <CenterTitle title="Tech Stack" color="secondary" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2 mb-96 4xl:mb-[120px]">
        {project.technologies.map((tech, i) => (
          <div key={i} className="Fade_Stagger flex_center flex-col gap-4 p-4 border border-secondaryLiteAlt sm:border-transparent hover:border-secondaryLiteAlt bg-skillGradientAlt rounded-md transition-colors duration-200">
            <div className="flex_center gap-4">
              <img src={tech.icon as unknown as string} alt={tech.title} width={40} height={40} />
              <span className="text-[1.2em]">{tech.title}</span>
            </div>
            <p className="text-center">{tech.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
