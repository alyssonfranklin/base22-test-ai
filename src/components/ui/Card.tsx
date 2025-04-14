'use client';

import { ReactNode } from 'react';
import styles from './Card.module.css';

interface CardProps {
  children: ReactNode;
  title?: string;
  variant?: 'default' | 'outlined' | 'elevated';
  className?: string;
}

const Card = ({ 
  children, 
  title, 
  variant = 'default',
  className = '',
}: CardProps) => {
  return (
    <div className={`${styles.card} ${styles[variant]} ${className}`}>
      {title && <h2 className={styles.cardTitle}>{title}</h2>}
      <div className={styles.cardContent}>
        {children}
      </div>
    </div>
  );
};

export default Card;