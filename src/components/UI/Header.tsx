import { useEffect, useState } from 'react';
import { Download } from 'lucide-react';
import ThemeDropdown from './ThemeDropdown';
import ThemeButton from './ThemeButton';
import { AppConfig } from '@/config/portfolio.config';

type Props = {
  config: AppConfig['header'];
};

export default function Header({ config }: Props) {
  const [activeSection, setActiveSection] = useState<string>('');
  const showThemeDropdown = import.meta.env.PUBLIC_SHOW_THEME_MENU === 'true';

  useEffect(() => {
    const handleScroll = () => {
      const headerElement = document.getElementById('header');
      if (!headerElement) return;

      const headerHeight = headerElement.offsetHeight;
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= headerHeight && rect.bottom >= headerHeight) {
            setActiveSection(`#${sectionId}`);
          }
        }
      }
    };

    function debounce(func: Function, delay: number) {
      let timeoutId: ReturnType<typeof setTimeout>;
      return function (this: any, ...args: any[]) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      };
    }

    const debouncedScroll = debounce(handleScroll, 10);
    window.addEventListener('scroll', debouncedScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', debouncedScroll);
    };
  }, []);

  return (
    <header id="header" className="hidden lg:block sticky top-0 max-w-[1800px] mx-auto z-50">
      <div className="flex justify-between items-center w-full px-6 py-2 headerGradient backdrop-blur-[2px]">
        <a href="#home" className="Fade_Down_Header font-satisfy font-bold text-[2em]">
          <span className="gradientText w-fit">{config.logotext}</span>
        </a>

        <nav className="Header_Nav relative tracking-wide flex gap-6">
          <a className={`Fade_Down_Header ${activeSection === '#about' ? 'active' : ''}`} href="#about">ABOUT</a>
          <a className={`Fade_Down_Header ${activeSection === '#skills' ? 'active' : ''}`} href="#skills">SKILLS</a>
          <a className={`Fade_Down_Header ${activeSection === '#projects' ? 'active' : ''}`} href="#projects">PROJECTS</a>
          <a className={`Fade_Down_Header ${activeSection === '#contact' ? 'active' : ''}`} href="#contact">CONTACT</a>
        </nav>

        <div className="flex_center gap-4">
          {showThemeDropdown && <ThemeDropdown className="Fade_Down_Header" idPrefix="Desktop" />}
          <ThemeButton className="Fade_Down_Header" />

          <a
            className="Fade_Down_Header Header_ActionBtn relative overflow-hidden rounded-sm flex_center"
            href={config.actionButton.url}
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex_center gap-2">
              <p>{config.actionButton.text}</p>
              <Download size={18} />
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}
