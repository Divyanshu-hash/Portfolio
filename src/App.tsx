import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from '@/layouts/Layout';
import ProjectLayout from '@/layouts/ProjectLayout';
import Home from '@/pages/Home';
import ProjectsIndex from '@/pages/ProjectsIndex';
import ProjectDetails from '@/pages/ProjectDetails';
import { initAnimations } from '@/script';

export default function App() {
  const location = useLocation();

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    const timer = setTimeout(() => {
      cleanup = initAnimations();
    }, 100);

    return () => {
      clearTimeout(timer);
      if (cleanup) cleanup();
    };
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<ProjectsIndex />} />
      </Route>
      <Route path="/projects/:projectID" element={<ProjectLayout />}>
        <Route index element={<ProjectDetails />} />
      </Route>
      <Route path="*" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
