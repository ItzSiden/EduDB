'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/app/components/theme-provider';
import { cn } from '@/app/lib/utils';

interface TopbarProps {
  avatar: string;
}

export function Topbar({ avatar }: TopbarProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-20 flex items-center justify-between border-b border-border/70 bg-card/80 px-4 py-3 backdrop-blur lg:px-6">
      <div>
        <h1 className="text-lg font-semibold">Okkhor AI</h1>
        <p className="text-xs text-foreground/60">SSC/HSC Smart Learning Assistant</p>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={toggleTheme}
          className={cn(
            'rounded-full border border-border bg-muted p-2 transition hover:scale-105 hover:bg-primary/15',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50'
          )}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-semibold text-white shadow-lg shadow-primary/30">
          {avatar}
        </div>
      </div>
    </header>
  );
}
