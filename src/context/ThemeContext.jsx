import { createContext, useContext, useEffect, useState } from 'react';
import { theme } from '../config/theme';

const ThemeContext = createContext(null);
const STORAGE_KEY = 'theme-mode';

const systemPrefersDark = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;

function initialMode() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {
    /* storage not available */
  }
  if (theme.defaultMode === 'light' || theme.defaultMode === 'dark') return theme.defaultMode;
  return systemPrefersDark() ? 'dark' : 'light';
}

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState(initialMode);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', mode === 'dark');
  }, [mode]);

  // Follow the device setting until the visitor picks a mode themselves.
  useEffect(() => {
    if (theme.defaultMode !== 'system') return;
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e) => {
      try {
        if (localStorage.getItem(STORAGE_KEY)) return;
      } catch {
        /* ignore */
      }
      setMode(e.matches ? 'dark' : 'light');
    };
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  const toggle = () => {
    const next = mode === 'dark' ? 'light' : 'dark';
    setMode(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  };

  return <ThemeContext.Provider value={{ mode, toggle }}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext);
