import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import {
  heroConfig,
  aboutConfig,
} from '@/config/portfolio.config';

export default function Home() {
  return (
    <>
      <Hero config={heroConfig} />
      <About config={aboutConfig} />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
