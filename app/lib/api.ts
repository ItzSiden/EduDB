import { wait } from '@/app/lib/utils';
import type { Message } from '@/app/types/chat';

/**
 * API placeholder: replace with backend integration.
 */
export async function sendMessage(input: string): Promise<Message> {
  await wait(1200);

  return {
    id: crypto.randomUUID(),
    role: 'assistant',
    content: `Great question. Here's a clear explanation for: "${input}"\n\n1) Core concept\n2) Exam shortcut\n3) Practice tip for SSC/HSC`,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };
}

/**
 * API placeholder: replace with backend file upload endpoint.
 */
export async function uploadFile(file: File): Promise<{ name: string; size: number }> {
  await wait(900);
  return { name: file.name, size: file.size };
}
