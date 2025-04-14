// Navigation types
export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  items?: NavItem[];
}

// User types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: string;
  department: string;
}

// Content types
export interface ContentItem {
  id: string;
  title: string;
  summary: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  image?: string;
  category: string;
  tags: string[];
}

// Notification types
export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'error' | 'success';
  read: boolean;
  createdAt: string;
}

// Dashboard widget types
export interface WidgetConfig {
  id: string;
  type: 'news' | 'calendar' | 'tasks' | 'links' | 'stats';
  title: string;
  position: number;
  size: 'small' | 'medium' | 'large';
  data?: any;
}