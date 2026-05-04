import type { ChatThread, Message } from '@/app/types/chat';

export const mockThreads: ChatThread[] = [
  { id: 't1', title: 'HSC Physics: Motion', updatedAt: '2m ago' },
  { id: 't2', title: 'SSC Chemistry: Acids', updatedAt: '1h ago' },
  { id: 't3', title: 'English Writing Practice', updatedAt: 'Yesterday' }
];

export const mockMessages: Message[] = [
  {
    id: 'm1',
    role: 'assistant',
    content:
      'Assalamu Alaikum! I am Okkhor AI. Ask me any SSC/HSC question from Physics, Chemistry, Biology, Math, or English.',
    timestamp: '09:41 AM'
  }
];
