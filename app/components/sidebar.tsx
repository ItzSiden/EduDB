'use client';

import { PanelLeftClose, PanelLeftOpen, Plus } from 'lucide-react';
import type { ChatThread } from '@/app/types/chat';
import { cn } from '@/app/lib/utils';

interface SidebarProps {
  threads: ChatThread[];
  collapsed: boolean;
  onToggle: () => void;
}

export function Sidebar({ threads, collapsed, onToggle }: SidebarProps) {
  return (
    <aside
      className={cn(
        'flex h-full flex-col border-r border-border/70 bg-card/70 p-3 transition-all duration-300',
        collapsed ? 'w-20' : 'w-72'
      )}
    >
      <div className="mb-3 flex items-center justify-between">
        <button className="flex items-center gap-2 rounded-xl bg-primary px-3 py-2 text-sm font-medium text-white transition hover:brightness-110">
          <Plus size={16} />
          {!collapsed && 'New chat'}
        </button>
        <button onClick={onToggle} className="rounded-lg p-2 hover:bg-muted" aria-label="Toggle sidebar">
          {collapsed ? <PanelLeftOpen size={16} /> : <PanelLeftClose size={16} />}
        </button>
      </div>

      <p className="mb-2 px-2 text-xs uppercase tracking-wider text-foreground/50">Recent</p>
      <div className="space-y-1 overflow-y-auto">
        {threads.map((thread) => (
          <button
            key={thread.id}
            className="group w-full rounded-xl border border-transparent px-3 py-2 text-left transition hover:border-border hover:bg-muted"
          >
            <p className="truncate text-sm font-medium">{collapsed ? '•••' : thread.title}</p>
            {!collapsed && <p className="text-xs text-foreground/50">{thread.updatedAt}</p>}
          </button>
        ))}
      </div>
    </aside>
  );
}
