'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import Card from '@/components/ui/Card';

// Mock data for executive team
const executiveTeam = [
  {
    id: 1,
    name: 'Mae C. Jamison',
    title: 'Chief Executive Officer',
    image: 'https://via.placeholder.com/220x220?text=Mae+C.+Jamison'
  },
  {
    id: 2,
    name: 'Buzz Aldrin',
    title: 'Chief Operating Officer',
    image: 'https://via.placeholder.com/220x220?text=Buzz+Aldrin'
  },
  {
    id: 3,
    name: 'Sally Ride',
    title: 'Chief Financial Officer',
    image: 'https://via.placeholder.com/220x220?text=Sally+Ride'
  },
  {
    id: 4,
    name: 'John Glenn',
    title: 'Chief Technology Officer',
    image: 'https://via.placeholder.com/220x220?text=John+Glenn'
  },
  {
    id: 5,
    name: 'Valentina Tereshkova',
    title: 'Chief Marketing Officer',
    image: 'https://via.placeholder.com/220x220?text=Valentina+Tereshkova'
  },
  {
    id: 6,
    name: 'Alexei Leonov',
    title: 'Chief Human Resources Officer',
    image: 'https://via.placeholder.com/220x220?text=Alexei+Leonov'
  }
];

// Mock data for latest posts
const latestPosts = [
  {
    id: 1,
    title: 'Can Space Gardening Help Astronauts Cope With Isolation?',
    description: 'Learn how NASA is exploring gardening as a therapeutic activity for long-duration spaceflight and its potential benefits for mental health.',
    image: 'https://via.placeholder.com/300x180?text=Space+Gardening',
    category: 'Wellness'
  },
  {
    id: 2,
    title: 'Understanding color theory: the color wheel and finding complem...',
    description: 'Explore the fundamentals of color theory and how it impacts our workspace environment, productivity, and psychological well-being.',
    image: 'https://via.placeholder.com/300x180?text=Color+Theory',
    category: 'Design'
  },
  {
    id: 3,
    title: 'Can Space Support Help Stations with Extra Details on work?',
    description: 'Discover how support systems modeled after space mission control are improving workflow efficiency and communication in corporate environments.',
    image: 'https://via.placeholder.com/300x180?text=Space+Support',
    category: 'Productivity'
  },
  {
    id: 4,
    title: 'Standard Operating Procedures for requesting vacation',
    description: 'A comprehensive guide to our updated vacation request process, designed to streamline approvals and planning for both employees and managers.',
    image: 'https://via.placeholder.com/300x180?text=Vacation+Procedures',
    category: 'HR Policy'
  }
];

// Mock data for FAQs
const faqs = [
  {
    id: 1,
    question: 'What are our company&apos;s strategic goals for the next year?',
    answer: 'Our strategic focus for the coming year centers on three key pillars: digital transformation across all business units, expansion into emerging markets with focus on sustainability, and enhancing customer experience through personalized solutions. We&apos;re committed to achieving 15% growth while maintaining our environmental and social responsibility commitments.'
  },
  {
    id: 2,
    question: 'How is the company addressing work-life balance for remote employees?',
    answer: 'We&apos;ve implemented several initiatives including core collaboration hours (10am-3pm local time), meeting-free Fridays, and quarterly wellness days. Our HR team has also launched a remote work resource center and we&apos;ve adjusted our performance metrics to focus on outcomes rather than hours worked.'
  },
  {
    id: 3,
    question: 'What innovation initiatives are currently in development?',
    answer: 'We&apos;re currently investing in three major innovation streams: AI-powered customer insights tools, sustainable product development, and next-generation collaborative workspaces. Our innovation lab has opened applications for internal teams to propose new ideas with dedicated funding available.'
  },
  {
    id: 4,
    question: 'How are we adapting to recent industry regulatory changes?',
    answer: 'Our compliance team has developed a comprehensive roadmap to address all regulatory changes. We&apos;ve established a cross-functional task force, updated our internal policies, and scheduled mandatory training for affected departments. We&apos;re also engaging with industry associations to shape future regulations.'
  }
];

export default function ExecutiveCorner() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  
  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };
  
  const scrollCarousel = (direction: "prev" | "next") => {
    const carousel = document.getElementById("executive-carousel");
    if (carousel) {
      const scrollAmount = 230; // card width + gap
      const currentScroll = carousel.scrollLeft;
      
      carousel.scrollTo({
        left: direction === "next" 
          ? currentScroll + scrollAmount 
          : currentScroll - scrollAmount,
        behavior: "smooth"
      });
      
      // Update active slide for visual indicator
      const maxSlides = executiveTeam.length - Math.floor(carousel.clientWidth / 230);
      const newActive = direction === "next" 
        ? Math.min(activeSlide + 1, maxSlides) 
        : Math.max(activeSlide - 1, 0);
        
      setActiveSlide(newActive);
    }
  };

  return (
    <div className={styles.container}>
      {/* Featured Section */}
      <section className={styles.featuredSection}>
        <div className={styles.featuredPost}>
          <Image 
            src="https://via.placeholder.com/800x500?text=Executive+Speaking" 
            alt="Featured post" 
            width={800} 
            height={500}
            className={styles.featuredImage}
          />
          <div className={styles.featuredOverlay}>
            <span className={styles.category}>Leadership</span>
            <h2 className={styles.featuredTitle}>
              News Title with no more than two lines of content (55 chars) then...
            </h2>
            <p>Pavel discusses the future of our company and shares his vision for growth...</p>
          </div>
        </div>
        
        <div className={styles.welcomeMessage}>
          <div className={styles.videoContainer}>
            <Image 
              src="https://via.placeholder.com/400x260?text=Astronaut+in+Space" 
              alt="Pavel&apos;s Welcome Message" 
              width={400} 
              height={260}
              className={styles.video}
            />
            <div className={styles.videoOverlay}>
              <div className={styles.playButton}>
                <span className={styles.playIcon}>▶</span>
              </div>
            </div>
          </div>
          <div className={styles.messageContent}>
            <h3 className={styles.messageTitle}>Pavel&apos;s Welcome Message</h3>
            <p>Join our CEO as he shares updates and insights from his recent mission to improve workplace culture.</p>
          </div>
        </div>
      </section>
      
      {/* Latest Posts Section */}
      <section className={styles.postsSection}>
        <div className={styles.sectionTitle}>
          <h2 className={styles.title}>Latest Posts</h2>
          <Link href="/executive-corner/posts" className={styles.viewAll}>
            VIEW ALL
          </Link>
        </div>
        
        <div className={styles.postsGrid}>
          {latestPosts.map(post => (
            <Card key={post.id} variant="elevated" className={styles.postCard}>
              <Image 
                src={post.image} 
                alt={post.title} 
                width={300} 
                height={180}
                className={styles.postCardImage}
              />
              <div className={styles.postCardContent}>
                <span className={styles.category}>{post.category}</span>
                <h3 className={styles.postCardTitle}>{post.title}</h3>
                <p className={styles.postCardDescription}>{post.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className={styles.sectionTitle}>
          <h2 className={styles.title}>Pavel answers your questions</h2>
          <Link href="/executive-corner/faq" className={styles.viewAll}>
            VIEW ALL
          </Link>
        </div>
        
        <div className={styles.accordion}>
          {faqs.map(faq => (
            <div key={faq.id} className={styles.accordionItem}>
              <button 
                className={styles.accordionButton}
                onClick={() => toggleFaq(faq.id)}
              >
                {faq.question}
                <span className={`${styles.accordionIcon} ${openFaq === faq.id ? styles.open : ""}`}>
                  ▼
                </span>
              </button>
              <div className={`${styles.accordionContent} ${openFaq === faq.id ? styles.open : ""}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Executive Team Section */}
      <section className={styles.teamSection}>
        <div className={styles.sectionTitle}>
          <h2 className={styles.title}>Know the Executive Team</h2>
          <Link href="/executive-corner/team" className={styles.viewAll}>
            VIEW ALL
          </Link>
        </div>
        
        <div className={styles.carouselContainer}>
          <button 
            className={`${styles.carouselNavButton} ${styles.prevButton}`}
            onClick={() => scrollCarousel("prev")}
            disabled={activeSlide === 0}
          >
            ←
          </button>
          
          <div className={styles.carousel} id="executive-carousel">
            {executiveTeam.map(executive => (
              <div key={executive.id} className={styles.profileCard}>
                <Image 
                  src={executive.image} 
                  alt={executive.name} 
                  width={220} 
                  height={220}
                  className={styles.profileImage}
                />
                <div className={styles.profileContent}>
                  <h3 className={styles.profileName}>{executive.name}</h3>
                  <p className={styles.profileTitle}>{executive.title}</p>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            className={`${styles.carouselNavButton} ${styles.nextButton}`}
            onClick={() => scrollCarousel("next")}
          >
            →
          </button>
        </div>
      </section>
    </div>
  );
}