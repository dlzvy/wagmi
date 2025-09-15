import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { Theme } from '../hooks/useTheme';

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      className={`fixed top-6 right-6 p-3 rounded-full transition-all duration-300 hover:scale-110 ${
        theme === 'light'
          ? 'bg-gray-900 text-white hover:bg-gray-800'
          : 'bg-white text-gray-900 hover:bg-gray-100'
      }`}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5" />
      ) : (
        <Sun className="w-5 h-5" />
      )}
    </button>
  );
}