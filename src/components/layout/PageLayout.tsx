'use client';

import { ReactNode } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import styles from './PageLayout.module.css';

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className={styles.layout}>
      <Header />
      <Navigation />
      <main className={styles.main}>
        <div className={styles.container}>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;