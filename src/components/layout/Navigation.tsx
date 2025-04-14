'use client';

import { useState, createContext, useContext } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { mainNavigation } from '@/data/navigation';
import { Breadcrumb as BreadcrumbType } from '@/types';
import styles from './Navigation.module.css';

type NavigationContextType = {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isDropdownOpen: Record<string, boolean>;
  toggleDropdown: (item: string) => void;
};

const NavigationContext = createContext<NavigationContextType>({
  activeSection: '',
  setActiveSection: () => {},
  isDropdownOpen: {},
  toggleDropdown: () => {},
});

export const useNavigation = () => useContext(NavigationContext);

const Navigation = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(() => {
    // Initialize active section based on the current path
    const currentPath = pathname || '/';
    const section = mainNavigation.find(item => 
      currentPath === item.href || currentPath.startsWith(`${item.href}/`)
    );
    return section?.href || '';
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState<Record<string, boolean>>({});

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDropdown = (item: string) => {
    setIsDropdownOpen(prev => ({
      ...prev,
      [item]: !prev[item]
    }));
  };

  // Generate breadcrumbs based on current path
  const generateBreadcrumbs = (): BreadcrumbType[] => {
    if (!pathname) return [{ label: 'Home', href: '/' }];
    
    const breadcrumbs: BreadcrumbType[] = [{ label: 'Home', href: '/' }];
    
    // Skip if we're on the home page
    if (pathname === '/') return breadcrumbs;
    
    // Find the main section
    const pathParts = pathname.split('/').filter(Boolean);
    const mainSection = mainNavigation.find(item => item.href === `/${pathParts[0]}`);
    
    if (mainSection) {
      breadcrumbs.push({ label: mainSection.label, href: mainSection.href });
      
      // If we have a subsection and the main section has items
      if (pathParts.length > 1 && mainSection.items) {
        const subPath = `/${pathParts[0]}/${pathParts[1]}`;
        const subSection = mainSection.items.find(item => item.href === subPath);
        
        if (subSection) {
          breadcrumbs.push({ 
            label: subSection.label, 
            href: subSection.href,
            isActive: pathname === subSection.href
          });
        }
      }
    }
    
    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <NavigationContext.Provider value={{ 
      activeSection, 
      setActiveSection, 
      isDropdownOpen, 
      toggleDropdown 
    }}>
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
                        onClick={() => {
                          setActiveSection(item.href);
                          toggleDropdown(item.href);
                        }}
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
                                onClick={() => setMobileMenuOpen(false)}
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
                      onClick={() => {
                        setActiveSection(item.href);
                        setMobileMenuOpen(false);
                      }}
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

      {/* Breadcrumb navigation */}
      <div className={styles.breadcrumbContainer}>
        <ul className={styles.breadcrumbList}>
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1;
            
            return (
              <li key={crumb.href} className={styles.breadcrumbItem}>
                {!isLast ? (
                  <Link href={crumb.href} className={styles.breadcrumbLink}>
                    {crumb.label}
                  </Link>
                ) : (
                  <span className={styles.breadcrumbActive}>{crumb.label}</span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </NavigationContext.Provider>
  );
};

export default Navigation;