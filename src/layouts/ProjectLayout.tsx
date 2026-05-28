import { Outlet } from 'react-router-dom';
import ProjectsHeader from '@components/UI/ProjectsHeader';
import Footer from '@components/Footer';
import Cursor from '@components/UI/Cursor';
import * as config from '@config/portfolio.config';

export default function ProjectLayout() {

  return (
    <div id="home" className="ProjectLayout">
      <ProjectsHeader 
        config={{
          ...config.headerConfig,
          actionButton: { text: "Contact Me", url: "/#contact" }
        }} 
      />

      <main className="max-w-[1450px] mx-auto px-6 mt-10 md:mt-16 lg:mt-24 xl:mt-28 4xl:mt-[150px]">
        <Outlet />
      </main>

      <Cursor />
      <Footer config={config.footerConfig} />
    </div>
  );
}
