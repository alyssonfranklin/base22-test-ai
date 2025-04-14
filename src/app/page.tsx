'use client';

import { useState } from 'react';
import Link from 'next/link';
import * as Tabs from '@radix-ui/react-tabs';
import Card from '@/components/ui/Card';
import { newsContent, upcomingEvents } from '@/data/content';
import styles from './page.module.css';

export default function Home() {
  const [activeTab, setActiveTab] = useState('news');

  return (
    <div className={styles.container}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Welcome to Base22 Portal</h1>
          <p className={styles.heroText}>
            Your central hub for company news, resources, and information.
          </p>
        </div>
      </section>

      <div className={styles.contentGrid}>
        <div className={styles.mainContent}>
          <Tabs.Root 
            defaultValue="news" 
            onValueChange={setActiveTab}
            className={styles.tabs}
          >
            <Tabs.List className={styles.tabsList}>
              <Tabs.Trigger
                className={`${styles.tabsTrigger} ${activeTab === 'news' ? styles.tabsTriggerActive : ''}`}
                value="news"
              >
                Latest News
              </Tabs.Trigger>
              <Tabs.Trigger
                className={`${styles.tabsTrigger} ${activeTab === 'announcements' ? styles.tabsTriggerActive : ''}`}
                value="announcements"
              >
                Announcements
              </Tabs.Trigger>
              <Tabs.Trigger
                className={`${styles.tabsTrigger} ${activeTab === 'events' ? styles.tabsTriggerActive : ''}`}
                value="events"
              >
                Upcoming Events
              </Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content className={styles.tabsContent} value="news">
              <div className={styles.newsGrid}>
                {newsContent.map((news) => (
                  <Card key={news.id} variant="elevated">
                    <h3 className={styles.newsTitle}>{news.title}</h3>
                    <p className={styles.newsMeta}>
                      <span className={styles.newsAuthor}>{news.author}</span>
                      <span className={styles.newsDate}>
                        {new Date(news.publishedAt).toLocaleDateString()}
                      </span>
                    </p>
                    <p className={styles.newsSummary}>{news.summary}</p>
                    <Link href={`/news/${news.id}`} className={styles.readMore}>
                      Read More
                    </Link>
                  </Card>
                ))}
              </div>
            </Tabs.Content>

            <Tabs.Content className={styles.tabsContent} value="announcements">
              <Card variant="outlined" title="Company Announcements">
                <p>No current announcements.</p>
              </Card>
            </Tabs.Content>

            <Tabs.Content className={styles.tabsContent} value="events">
              <Card variant="outlined" title="Upcoming Events">
                <ul className={styles.eventsList}>
                  {upcomingEvents.map((event) => (
                    <li key={event.id} className={styles.eventItem}>
                      <div className={styles.eventDate}>
                        {new Date(event.date).toLocaleDateString()}
                      </div>
                      <div className={styles.eventDetails}>
                        <h3 className={styles.eventTitle}>{event.title}</h3>
                        <p className={styles.eventLocation}>{event.location}</p>
                        <p className={styles.eventDescription}>{event.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </Card>
            </Tabs.Content>
          </Tabs.Root>
        </div>

        <div className={styles.sidebar}>
          <Card title="Quick Links" variant="default">
            <ul className={styles.quickLinks}>
              <li><Link href="/resources/documents">Documents</Link></li>
              <li><Link href="/directory">Employee Directory</Link></li>
              <li><Link href="/resources/forms">Forms</Link></li>
              <li><Link href="/calendar">Calendar</Link></li>
              <li><Link href="/help-desk">Help Desk</Link></li>
            </ul>
          </Card>

          <Card title="Birthdays This Month" variant="default">
            <ul className={styles.birthdaysList}>
              <li>
                <span className={styles.birthdayName}>John Smith</span>
                <span className={styles.birthdayDate}>May 5</span>
              </li>
              <li>
                <span className={styles.birthdayName}>Jane Doe</span>
                <span className={styles.birthdayDate}>May 12</span>
              </li>
              <li>
                <span className={styles.birthdayName}>Michael Johnson</span>
                <span className={styles.birthdayDate}>May 18</span>
              </li>
              <li>
                <span className={styles.birthdayName}>Sarah Williams</span>
                <span className={styles.birthdayDate}>May 25</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}