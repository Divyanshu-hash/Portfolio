import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

type Props = {
  className?: string;
};

const THEME_KEY = 'divyanshugiri-portfolio-theme';
const THEME_NAME_KEY = 'divyanshugiri-portfolio-theme-name';

export default function ThemeButton({ className = '' }: Props) {
  const [theme, setThemeState] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_KEY) as 'light' | 'dark' | null;
    const savedThemeName = localStorage.getItem(THEME_NAME_KEY) || 'default';
    const currentTheme = savedTheme || 'dark';

    setThemeState(currentTheme);

    const htmlClasses = Array.from(document.documentElement.classList);
    if (!htmlClasses.some((cls) => cls.startsWith('theme-'))) {
      document.documentElement.classList.add(`theme-${savedThemeName}`);
    }

    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(currentTheme);
  }, []);

  const setTheme = (mode: 'light' | 'dark') => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(mode);
    setThemeState(mode);

    try {
      localStorage.setItem(THEME_KEY, mode);
    } catch (e) {
      console.warn('Failed to save theme:', e);
    }
  };

  const toggleTheme = async (event: React.MouseEvent<HTMLButtonElement>) => {
    const newMode = theme === 'dark' ? 'light' : 'dark';

    if (
      !document.startViewTransition ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setTheme(newMode);
      return;
    }

    const button = event.currentTarget;
    const { top, left, width, height } = button.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    let gsapTweens = gsap.globalTimeline.getChildren(true, true, false);

    const transition = document.startViewTransition(() => {
      setTheme(newMode);
    });

    await transition.ready;

    if (gsapTweens.length > 0) {
      gsapTweens.forEach((tween: any) => {
        if (tween && typeof tween.resume === 'function') {
          tween.resume();
        }
      });
    }

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 800,
        easing: 'ease-in-out',
        pseudoElement: '::view-transition-new(root)',
      }
    );
  };

  return (
    <button
      title="Toggle Theme"
      className={`aspect-square w-8 h-8 outline-2 outline-primaryLiteAlt rounded-full relative flex_center cursor-pointer ${className}`}
      onClick={toggleTheme}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-sun absolute transition-opacity duration-300"
        style={{
          opacity: theme === 'light' ? 1 : 0,
          pointerEvents: theme === 'light' ? 'auto' : 'none',
        }}
      >
        <circle cx="12" cy="12" r="4"></circle>
        <path d="M12 2v2"></path>
        <path d="M12 20v2"></path>
        <path d="m4.93 4.93 1.41 1.41"></path>
        <path d="m17.66 17.66 1.41 1.41"></path>
        <path d="M2 12h2"></path>
        <path d="M20 12h2"></path>
        <path d="m6.34 17.66-1.41 1.41"></path>
        <path d="m19.07 4.93-1.41 1.41"></path>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-moon-star absolute transition-opacity duration-300"
        style={{
          opacity: theme === 'dark' ? 1 : 0,
          pointerEvents: theme === 'dark' ? 'auto' : 'none',
        }}
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9"></path>
        <path d="M20 3v4"></path>
        <path d="M22 5h-4"></path>
      </svg>
    </button>
  );
}
