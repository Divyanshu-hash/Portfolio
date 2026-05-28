import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import '@styles/global.css';
import '@styles/themes.css';

// Theme Init
const THEME_NAME_KEY = 'divyanshugiri-portfolio-theme-name';
const savedTheme = localStorage.getItem(THEME_NAME_KEY) || 'default';
document.documentElement.classList.remove('theme-default');
document.documentElement.classList.add(`theme-${savedTheme}`);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
