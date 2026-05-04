'use client';

import { Paperclip, SendHorizonal } from 'lucide-react';
import { useRef, useState } from 'react';

interface PromptBoxProps {
  onSend: (value: string) => Promise<void>;
  onUpload: (file: File) => Promise<void>;
  disabled?: boolean;
}

export function PromptBox({ onSend, onUpload, disabled }: PromptBoxProps) {
  const [value, setValue] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  const submit = async () => {
    if (!value.trim() || disabled) return;
    const text = value;
    setValue('');
    await onSend(text);
  };

  return (
    <div className="rounded-2xl border border-border bg-card p-2 shadow-lg shadow-primary/10">
      <div className="flex items-end gap-2">
        <button
          onClick={() => fileRef.current?.click()}
          className="rounded-xl p-3 text-foreground/70 transition hover:bg-muted hover:text-foreground"
          aria-label="Upload file"
        >
          <Paperclip size={18} />
        </button>

        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={async (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              await submit();
            }
          }}
          placeholder="Ask anything about SSC/HSC subjects..."
          className="max-h-36 min-h-12 flex-1 resize-none bg-transparent px-2 py-3 text-sm outline-none placeholder:text-foreground/45"
        />

        <button
          onClick={submit}
          disabled={disabled || !value.trim()}
          className="rounded-xl bg-primary p-3 text-white transition enabled:hover:scale-[1.02] enabled:hover:brightness-110 disabled:opacity-40"
          aria-label="Send"
        >
          <SendHorizonal size={18} />
        </button>
      </div>

      <input
        ref={fileRef}
        type="file"
        className="hidden"
        onChange={async (e) => {
          const file = e.target.files?.[0];
          if (!file) return;
          await onUpload(file);
          e.currentTarget.value = '';
        }}
      />
    </div>
  );
}
