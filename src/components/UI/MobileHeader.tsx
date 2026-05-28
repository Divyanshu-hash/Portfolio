import { useState, useRef, useEffect } from 'react';
import { Download } from 'lucide-react';
import ThemeButton from './ThemeButton';
import ThemeDropdown from './ThemeDropdown';
import { AppConfig } from '@/config/portfolio.config';

type Props = {
  config: AppConfig['header'];
};

export default function MobileHeader({ config }: Props) {
  const showThemeDropdown = import.meta.env.PUBLIC_SHOW_THEME_MENU === 'true';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  
  const navRef = useRef<HTMLElement>(null);
  const hamMenuSvgRef = useRef<SVGSVGElement>(null);
  
  useEffect(() => {
    if (!navRef.current || !hamMenuSvgRef.current) return;
    
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      const headerElement = navRef.current;
      const hamMenuSvg = hamMenuSvgRef.current;
      
      headerElement.style.pointerEvents = 'auto';
      const hamRect = hamMenuSvg.getBoundingClientRect();
      const vv = window.visualViewport;

      const x = hamRect.left + hamRect.width / 2 + (vv?.offsetLeft || 0);
      const y = hamRect.top + hamRect.height / 2 + (vv?.offsetTop || 0);

      const vw = vv?.width || window.innerWidth;
      const vh = vv?.height || window.innerHeight;

      const endRadius = Math.hypot(Math.max(x, vw - x), Math.max(y, vh - y));

      headerElement.animate(
          {
              clipPath: [
                  `circle(0px at ${x}px ${y}px)`,
                  `circle(${endRadius}px at ${x}px ${y}px)`,
              ],
              opacity: [0, 1],
              backgroundColor: ['var(--background)', 'var(--primaryLite)'],
          },
          { duration: 800, easing: 'ease-in-out', fill: 'forwards' }
      );

      const menuItems = headerElement.querySelectorAll('.MobileHeader_Nav');
      menuItems.forEach((item, i) => {
          item.animate(
              {
                  opacity: [0, 1],
                  transform: ['translateY(40px)', 'translateY(0)'],
              },
              {
                  duration: 400,
                  easing: 'ease-out',
                  fill: 'forwards',
                  delay: 200 + i * 80,
              }
          );
      });
    } else {
      document.body.style.overflow = '';
      const headerElement = navRef.current;
      const hamMenuSvg = hamMenuSvgRef.current;
      
      if (headerElement.style.opacity === '1') {
        const hamRect = hamMenuSvg.getBoundingClientRect();
        const vv = window.visualViewport;

        const x = hamRect.left + hamRect.width / 2 + (vv?.offsetLeft || 0);
        const y = hamRect.top + hamRect.height / 2 + (vv?.offsetTop || 0);

        const vw = vv?.width || window.innerWidth;
        const vh = vv?.height || window.innerHeight;

        const endRadius = Math.hypot(Math.max(x, vw - x), Math.max(y, vh - y));

        const menuItems = headerElement.querySelectorAll('.MobileHeader_Nav');
        menuItems.forEach((item, i) => {
            item.animate(
                {
                    opacity: [1, 0],
                    transform: ['translateY(0)', 'translateY(-20px)'],
                },
                {
                    duration: 250,
                    easing: 'ease-in',
                    fill: 'forwards',
                    delay: (menuItems.length - i - 1) * 40,
                }
            );
        });

        const anim = headerElement.animate(
            {
                clipPath: [
                    `circle(${endRadius}px at ${x}px ${y}px)`,
                    `circle(0px at ${x}px ${y}px)`,
                ],
                opacity: [1, 0],
                backgroundColor: ['var(--primaryLite)', 'var(--background)'],
            },
            { duration: 700, easing: 'ease-in-out', fill: 'forwards' }
        );
        
        anim.onfinish = () => {
            headerElement.style.pointerEvents = 'none';
            headerElement.style.opacity = '0';
            headerElement.style.clipPath = 'circle(0px at calc(100% - 45px) 45px)';
            headerElement.style.backgroundColor = 'var(--background)';
        };
      }
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const headerElement = document.querySelector('header.lg\\:hidden');
      if (!headerElement) return;

      const headerHeight = (headerElement as HTMLElement).offsetHeight || 0;
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

    function throttle(func: Function, limit: number) {
      let throttling = false;
      return function (this: any, ...args: any[]) {
        if (!throttling) {
          func.apply(this, args);
          throttling = true;
          setTimeout(() => {
            throttling = false;
          }, limit);
        }
      };
    }

    const throttledScroll = throttle(handleScroll, 16);
    window.addEventListener('scroll', throttledScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="lg:hidden w-full sticky top-0 z-50 headerGradient backdrop-blur-[2px]">
      <div className="flex justify-between items-center py-2 px-4 z-10">
        <a href="#home" className="Fade_In font-satisfy font-bold text-[2em]">
          <span className="gradientText w-fit">{config.logotext}</span>
        </a>

        <div className="flex items-center gap-4">
          {showThemeDropdown && <ThemeDropdown className="Fade_In" idPrefix="Mobile" />}
          <ThemeButton className="Fade_In" />

          <button id="Ham_Menu" aria-label="Toggle Menu" onClick={toggleMenu}>
            <svg
              ref={hamMenuSvgRef}
              viewBox="20 20 60 60"
              width="45"
              className={`Fade_In MobileNav_Ham flex justify-center items-end flex-col gap-2 z-[80] cursor-pointer ${isMenuOpen ? 'isOpen' : ''}`}
            >
              <path
                className="line top"
                d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
              ></path>
              <path className="line middle" d="m 30,50 h 40"></path>
              <path
                className="line bottom"
                d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="backdrop-blur-[2px] absolute inset-0 -z-10"></div>

      <nav
        ref={navRef}
        id="mobileHeaderNav"
        data-menu-controller="inline"
        className="w-full h-[100dvh] flex_center flex-col fixed top-0 right-0 gap-8 z-[60] opacity-0 pointer-events-none"
        style={{ clipPath: 'circle(0px at calc(100% - 45px) 45px)' }}
      >
        <div className="absolute inset-0 bg-background/50 backdrop-blur -z-10"></div>

        <div className="MobileHeader_Nav flex_center opacity-0 translate-y-4">
          <a href="#about" onClick={closeMenu} className={activeSection === '#about' ? 'active' : ''}>About</a>
        </div>

        <div className="MobileHeader_Nav flex_center opacity-0 translate-y-4">
          <a href="#skills" onClick={closeMenu} className={activeSection === '#skills' ? 'active' : ''}>Skills</a>
        </div>

        <div className="MobileHeader_Nav flex_center opacity-0 translate-y-4">
          <a href="#projects" onClick={closeMenu} className={activeSection === '#projects' ? 'active' : ''}>Projects</a>
        </div>

        <div className="MobileHeader_Nav flex_center opacity-0 translate-y-4">
          <a href="#contact" onClick={closeMenu} className={activeSection === '#contact' ? 'active' : ''}>Contact</a>
        </div>

        <div className="MobileHeader_Nav flex_center opacity-0 translate-y-4">
          <a
            className="MobileHeader_ActionBtn flex_center"
            href={config.actionButton.url}
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex_center gap-4">
              <p>{config.actionButton.text}</p>
              <Download />
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}
