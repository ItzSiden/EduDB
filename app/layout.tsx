import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/app/components/theme-provider';

export const metadata: Metadata = {
  title: 'Okkhor AI — Bangladeshi Learning Assistant',
  description: 'AI tutor for SSC/HSC students with a premium chat learning interface.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
