'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { mainNavigation } from '@/data/navigation';
import styles from './Navigation.module.css';

const Navigation = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={styles.navigation}>
      <div className={styles.container}>
        <button 
          className={styles.mobileMenuButton} 
          onClick={toggleMobileMenu}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <span className={styles.hamburger} />
        </button>

        <NavigationMenu.Root className={`${styles.nav} ${mobileMenuOpen ? styles.mobileOpen : ''}`}>
          <NavigationMenu.List className={styles.navList}>
            {mainNavigation.map((item) => {
              const isActive = pathname === item.href || pathname?.startsWith(`${item.href}/`);
              
              if (item.items) {
                return (
                  <NavigationMenu.Item key={item.href} className={styles.navItem}>
                    <NavigationMenu.Trigger 
                      className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                    >
                      {item.label}
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className={styles.dropdownContent}>
                      <ul className={styles.dropdownList}>
                        {item.items.map((subItem) => (
                          <li key={subItem.href} className={styles.dropdownItem}>
                            <Link 
                              href={subItem.href} 
                              className={styles.dropdownLink}
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenu.Content>
                  </NavigationMenu.Item>
                );
              }
              
              return (
                <NavigationMenu.Item key={item.href} className={styles.navItem}>
                  <Link 
                    href={item.href} 
                    className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                  >
                    {item.label}
                  </Link>
                </NavigationMenu.Item>
              );
            })}
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </div>
    </nav>
  );
};

export default Navigation;