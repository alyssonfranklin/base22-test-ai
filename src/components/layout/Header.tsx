'use client';

import { useState } from 'react';
import Link from 'next/link';
import * as Avatar from '@radix-ui/react-avatar';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { userNavigation } from '@/data/navigation';
import styles from './Header.module.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Link href="/" className={styles.logo}>
            <div className={styles.logoText}>
              <span className={styles.logoMain}>HRX</span>
              <span className={styles.logoTagline}>NORTH AMERICA</span>
            </div>
          </Link>
        </div>

        <div className={styles.searchBar}>
          <input 
            type="text" 
            placeholder="Search this site" 
            className={styles.searchInput} 
          />
          <button className={styles.searchButton}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>

        <div className={styles.userSection}>
          <button className={styles.iconButton} aria-label="Help">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
          </button>
          
          <button className={styles.iconButton} aria-label="Bookmarks">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
          </button>

          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button className={styles.userButton}>
                <Avatar.Root className={styles.avatarRoot}>
                  <Avatar.Image
                    className={styles.avatarImage}
                    src="/images/avatar-placeholder.png"
                    alt="User avatar"
                  />
                  <Avatar.Fallback className={styles.avatarFallback}>JD</Avatar.Fallback>
                </Avatar.Root>
                <span className={`${styles.userName} ${styles.desktopOnly}`}>John Doe</span>
              </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content className={styles.dropdownContent} sideOffset={5}>
                <DropdownMenu.Label className={styles.dropdownLabel}>
                  John Doe
                </DropdownMenu.Label>
                
                {userNavigation.map((item) => (
                  <DropdownMenu.Item key={item.href} className={styles.dropdownItem}>
                    <Link href={item.href} className={styles.dropdownLink}>
                      {item.label}
                    </Link>
                  </DropdownMenu.Item>
                ))}
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
      </div>
    </header>
  );
};

export default Header;