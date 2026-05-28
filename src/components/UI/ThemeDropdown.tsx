import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { ThemeDropdownOptions } from '@/constants/themeDropdownOptions';

type Props = {
  className?: string;
  idPrefix?: string;
};

const THEME_NAME_KEY = 'divyanshugiri-portfolio-theme-name';

export default function ThemeDropdown({ className = '' }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(ThemeDropdownOptions[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const initTheme = () => {
      const savedThemeName = localStorage.getItem(THEME_NAME_KEY) || 'default';
      const foundTheme = ThemeDropdownOptions.find(t => t.name === savedThemeName);
      if (foundTheme) {
        setCurrentTheme(foundTheme);
      }
    };
    
    initTheme();

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === THEME_NAME_KEY) {
        initTheme();
      }
    };

    const handleCustomEvent = () => initTheme();

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('themeChanged', handleCustomEvent);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('themeChanged', handleCustomEvent);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current && 
        btnRef.current && 
        !dropdownRef.current.contains(e.target as Node) && 
        !btnRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const applyTheme = (theme: typeof ThemeDropdownOptions[0], e?: React.MouseEvent) => {
    const updateDOM = () => {
      const classes = Array.from(document.documentElement.classList);
      classes.forEach(cls => {
        if (cls.startsWith('theme-')) {
          document.documentElement.classList.remove(cls);
        }
      });

      document.documentElement.classList.add(`theme-${theme.name}`);
      setCurrentTheme(theme);
      setIsOpen(false);

      try {
        localStorage.setItem(THEME_NAME_KEY, theme.name);
        window.dispatchEvent(new Event('themeChanged'));
      } catch (e) {
        console.warn('Failed to save theme:', e);
      }
    };

    if (!document.startViewTransition || !e) {
      updateDOM();
      return;
    }

    const x = e.clientX;
    const y = e.clientY;
    
    const transition = document.startViewTransition(updateDOM);

    transition.ready.then(() => {
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`
          ]
        },
        {
          duration: 500,
          easing: 'ease-in-out',
          pseudoElement: '::view-transition-new(root)'
        }
      );
    });
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.stopPropagation();
    if (!dropdownRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = dropdownRef.current;
    const isAtTop = scrollTop === 0;
    const isAtBottom = scrollTop + clientHeight >= scrollHeight;

    if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
      e.preventDefault();
    }
  };

  return (
    <div className={`relative theme-dropdown-container isolate ${className}`}>
      <button
        ref={btnRef}
        type="button"
        className="flex items-center gap-2 px-3 py-2 backdrop-blur-sm border border-white/10 rounded-md transition-all duration-200 min-w-4 md:min-w-32 cursor-pointer"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Select Theme"
        onClick={toggleDropdown}
      >
        <div className="flex items-center gap-2 flex-1">
          <div
            className="w-4 h-4 rounded-full border border-white/30"
            style={{
              background: `linear-gradient(45deg, ${currentTheme.primaryColor}, ${currentTheme.secondaryColor})`
            }}
          ></div>
          <span className="hidden sm:block text-sm font-medium">
            {currentTheme.displayName}
          </span>
        </div>
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>

      <div
        ref={dropdownRef}
        className={`theme-dropdown-menu absolute top-full left-0 mt-2 min-w-32 bg-background/70 backdrop-blur-md border border-white/10 rounded-lg shadow-lg transition-all duration-200 z-[130] max-h-64 ${
          isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2.5'
        }`}
        role="menu"
        onWheel={handleWheel}
        onTouchMove={(e) => e.stopPropagation()}
      >
        <div className="py-2">
          {ThemeDropdownOptions.map((theme) => (
            <button
              key={theme.name}
              type="button"
              className="theme-option w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-white/10 transition-all duration-150 cursor-pointer"
              role="menuitem"
              onClick={(e) => applyTheme(theme, e)}
            >
              <div
                className="w-5 h-5 rounded-full border border-white/30 shrink-0"
                style={{
                  background: `linear-gradient(45deg, ${theme.primaryColor}, ${theme.secondaryColor})`
                }}
              ></div>
              <span className="text-sm font-medium">
                {theme.displayName}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
