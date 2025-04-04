/**
 * Common types for the application
 */

/**
 * User type
 */
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'user' | 'admin';
}

/**
 * Pagination type
 */
export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

/**
 * API response type
 */
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  pagination?: Pagination;
}

/**
 * Theme type
 */
export type Theme = 'light' | 'dark' | 'system';

/**
 * Navigation item type
 */
export interface NavItem {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  disabled?: boolean;
  external?: boolean;
}

/**
 * Metadata type
 */
export interface Metadata {
  title: string;
  description?: string;
  keywords?: string[];
  image?: string;
}
