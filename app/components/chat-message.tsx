import type { Message } from '@/app/types/chat';
import { cn } from '@/app/lib/utils';

export function ChatMessage({ message }: { message: Message }) {
  const isUser = message.role === 'user';

  return (
    <div className={cn('flex w-full', isUser ? 'justify-end' : 'justify-start')}>
      <article
        className={cn(
          'max-w-[80%] rounded-2xl border px-4 py-3 shadow-sm transition hover:shadow-md',
          isUser
            ? 'border-primary/30 bg-primary text-white'
            : 'border-border bg-card text-foreground'
        )}
      >
        <p className="whitespace-pre-line text-sm leading-relaxed">{message.content}</p>
        <p className={cn('mt-2 text-xs', isUser ? 'text-white/80' : 'text-foreground/50')}>{message.timestamp}</p>
      </article>
    </div>
  );
}
