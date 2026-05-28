import { useEffect, useRef } from 'react';
import '@styles/cursor.css';
export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleMouseMove(evt: MouseEvent) {
      if (window.innerWidth < 1024) return;
      
      const cursor = cursorRef.current;
      const dot = cursorDotRef.current;
      
      if (!cursor || !dot) return;

      const x = evt.clientX - cursor.offsetWidth / 2;
      const y = evt.clientY - cursor.offsetHeight / 2;
      const xDot = evt.clientX - dot.offsetWidth / 2;
      const yDot = evt.clientY - dot.offsetHeight / 2;

      cursor.animate(
        { transform: `translate3d(${x}px, ${y}px, 0)` },
        { duration: 500, easing: 'ease-in-out', fill: 'forwards' }
      );
      
      dot.animate(
        { transform: `translate3d(${xDot}px, ${yDot}px, 0)` },
        { duration: 100, easing: 'ease-out', fill: 'forwards' }
      );
    }

    function handleMouseClick() {
      const cursor = cursorRef.current;
      if (!cursor) return;

      const ripple = document.createElement('span');
      ripple.classList.add(
        'absolute',
        'w-[200%]',
        'aspect-square',
        'rounded-full',
        'bg-[var(--orbitDotColor)]',
        'opacity-0',
        'animate-ripple'
      );
      cursor.appendChild(ripple);

      setTimeout(() => {
        if (cursor.contains(ripple)) {
          cursor.removeChild(ripple);
        }
      }, 1000);
    }

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseClick);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseClick);
    };
  }, []);

  return (
    <div className="Cursor-Main hidden lg:block">
      <div id="cursor" ref={cursorRef} className="relative flex_center">
        <div id="cursorView" className="flex_center">View</div>
      </div>
      <div id="cursorDot" ref={cursorDotRef}></div>
    </div>
  );
}
