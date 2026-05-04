export type Role = 'user' | 'assistant';

export interface Message {
  id: string;
  role: Role;
  content: string;
  timestamp: string;
  pending?: boolean;
}

export interface ChatThread {
  id: string;
  title: string;
  updatedAt: string;
}
