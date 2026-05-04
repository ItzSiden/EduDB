'use client';

import { useMemo, useState } from 'react';
import { ChatMessage } from '@/app/components/chat-message';
import { PromptBox } from '@/app/components/prompt-box';
import { Sidebar } from '@/app/components/sidebar';
import { SkeletonMessage } from '@/app/components/skeleton-message';
import { Topbar } from '@/app/components/topbar';
import { TypingIndicator } from '@/app/components/typing-indicator';
import { useAuth } from '@/app/hooks/use-auth';
import { sendMessage, uploadFile } from '@/app/lib/api';
import { mockMessages, mockThreads } from '@/app/lib/mock-data';
import type { Message } from '@/app/types/chat';

export default function HomePage() {
  const { user } = useAuth();
  const [collapsed, setCollapsed] = useState(false);
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [isResponding, setIsResponding] = useState(false);

  const threadTitle = useMemo(() => messages[0]?.content.slice(0, 50) ?? 'New Chat', [messages]);

  const handleSend = async (content: string) => {
    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: 'user',
      content,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsResponding(true);

    const reply = await sendMessage(content);
    setMessages((prev) => [...prev, reply]);
    setIsResponding(false);
  };

  const handleUpload = async (file: File) => {
    setIsResponding(true);
    const uploaded = await uploadFile(file);
    setMessages((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: `Uploaded: ${uploaded.name} (${Math.round(uploaded.size / 1024)} KB). We'll process this in backend later.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
    setIsResponding(false);
  };

  return (
    <main className="flex h-screen">
      <div className="hidden md:block">
        <Sidebar threads={mockThreads} collapsed={collapsed} onToggle={() => setCollapsed((v) => !v)} />
      </div>

      <section className="flex min-w-0 flex-1 flex-col">
        <Topbar avatar={user.avatar} />

        <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-4 pb-4 pt-4 lg:px-8">
          <div className="mb-4 rounded-xl border border-border bg-card/60 px-4 py-2 text-sm text-foreground/70 backdrop-blur">
            Active: {threadTitle}
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto pb-4">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            {isResponding && (
              <>
                <TypingIndicator />
                <SkeletonMessage />
              </>
            )}
          </div>

          <PromptBox onSend={handleSend} onUpload={handleUpload} disabled={isResponding} />
        </div>
      </section>
    </main>
  );
}
