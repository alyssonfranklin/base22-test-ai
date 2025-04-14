import { ContentItem } from '@/types';

export const newsContent: ContentItem[] = [
  {
    id: '1',
    title: 'Company Annual Meeting Scheduled',
    summary: 'The annual company meeting will be held next month. All employees are required to attend.',
    content: 'The annual company meeting has been scheduled for June 15, 2025. The meeting will be held in the main conference room and will start at 9:00 AM. All employees are required to attend. The agenda will include a review of the past year, current company status, and future plans. Department heads will present their reports and there will be a Q&A session at the end.',
    author: 'Executive Office',
    publishedAt: '2025-05-01T09:00:00Z',
    category: 'Announcements',
    tags: ['meeting', 'company', 'annual'],
  },
  {
    id: '2',
    title: 'New Health Benefits Package',
    summary: 'HR announces updates to our health benefits package starting next quarter.',
    content: 'The Human Resources department is pleased to announce updates to our health benefits package, which will take effect from July 1, 2025. The new package includes improved dental coverage, additional mental health services, and a new wellness program. Information sessions will be held throughout June to explain the changes in detail. Please check your email for the schedule and register for a session.',
    author: 'Human Resources',
    publishedAt: '2025-05-10T14:30:00Z',
    category: 'Benefits',
    tags: ['health', 'benefits', 'HR'],
  },
  {
    id: '3',
    title: 'IT System Upgrade Scheduled',
    summary: 'IT department will be upgrading our systems this weekend. Expect some downtime.',
    content: 'The IT department will be performing a major system upgrade this weekend (May 15-16, 2025). The upgrade will start on Friday at 6:00 PM and is expected to be completed by Sunday at 6:00 PM. During this time, some systems may be unavailable. This includes email, the intranet, and certain internal applications. Please plan your work accordingly. If you have any urgent concerns, please contact the IT helpdesk by Thursday.',
    author: 'IT Department',
    publishedAt: '2025-05-12T11:15:00Z',
    updatedAt: '2025-05-13T10:20:00Z',
    category: 'IT',
    tags: ['IT', 'system', 'maintenance'],
  },
  {
    id: '4',
    title: 'Employee Spotlight: Jane Doe',
    summary: 'Learn about Jane Doe from Marketing who has been with us for 5 years.',
    content: 'This month\'s employee spotlight features Jane Doe from the Marketing department. Jane has been with our company for 5 years and has played a key role in several successful campaigns. She started as a Marketing Assistant and has grown to become our Social Media Manager. Jane is known for her creativity and team spirit. Outside of work, she enjoys hiking and is an amateur photographer. "Working here has been a rewarding journey," Jane says. "I\'ve had the opportunity to grow both professionally and personally."',
    author: 'Internal Communications',
    publishedAt: '2025-05-15T08:45:00Z',
    image: '/images/jane-doe.jpg',
    category: 'Employee Spotlight',
    tags: ['spotlight', 'marketing', 'employee'],
  },
];

export const upcomingEvents = [
  {
    id: '1',
    title: 'Team Building Workshop',
    date: '2025-05-20T13:00:00Z',
    location: 'Conference Room A',
    description: 'A workshop focused on improving team collaboration and communication.',
  },
  {
    id: '2',
    title: 'New Product Launch',
    date: '2025-05-25T10:00:00Z',
    location: 'Main Auditorium',
    description: 'Launch event for our newest product line.',
  },
  {
    id: '3',
    title: 'Quarterly Review Meeting',
    date: '2025-06-02T09:30:00Z',
    location: 'Conference Room C',
    description: 'Review of the quarter\'s performance and planning for the next quarter.',
  },
];