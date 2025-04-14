import { ReactNode } from 'react';
import type { Metadata } from 'next';
import PageLayout from '@/components/layout/PageLayout';
import './globals.css';

export const metadata: Metadata = {
  title: 'Base22 Portal',
  description: 'Company intranet portal for employees',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <PageLayout>
          {children}
        </PageLayout>
      </body>
    </html>
  );
}