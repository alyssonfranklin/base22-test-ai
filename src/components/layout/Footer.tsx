'use client';

import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <div className={styles.footerColumn}>
            <h3 className={styles.footerHeading}>Company</h3>
            <ul className={styles.footerLinks}>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/careers">Careers</Link></li>
            </ul>
          </div>
          
          <div className={styles.footerColumn}>
            <h3 className={styles.footerHeading}>Resources</h3>
            <ul className={styles.footerLinks}>
              <li><Link href="/resources/documents">Documents</Link></li>
              <li><Link href="/resources/forms">Forms</Link></li>
              <li><Link href="/resources/policies">Policies</Link></li>
            </ul>
          </div>
          
          <div className={styles.footerColumn}>
            <h3 className={styles.footerHeading}>Support</h3>
            <ul className={styles.footerLinks}>
              <li><Link href="/help">Help Center</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/support-ticket">Submit a Ticket</Link></li>
            </ul>
          </div>
          
          <div className={styles.footerColumn}>
            <h3 className={styles.footerHeading}>Connect</h3>
            <ul className={styles.footerLinks}>
              <li><Link href="/social/linkedin">LinkedIn</Link></li>
              <li><Link href="/social/twitter">Twitter</Link></li>
              <li><Link href="/social/facebook">Facebook</Link></li>
            </ul>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            © {currentYear} Base22 Portal. All rights reserved.
          </div>
          <div className={styles.legalLinks}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-use">Terms of Use</Link>
            <Link href="/accessibility">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;