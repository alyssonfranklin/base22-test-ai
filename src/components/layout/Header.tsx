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
            <span className={styles.logoText}>Base22 Portal</span>
          </Link>
        </div>

        <div className={styles.userSection}>
          <div className={styles.searchBar}>
            <input type="text" placeholder="Search..." className={styles.searchInput} />
            <button className={styles.searchButton}>Search</button>
          </div>

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