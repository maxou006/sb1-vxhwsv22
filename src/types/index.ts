export interface Review {
  id: string;
  productId: string;
  rating: number;
  title: string;
  content: string;
  reviewerName: string;
  date: string;
  sentiment: 'positive' | 'neutral' | 'negative';
  status: 'pending' | 'published' | 'responded';
  verified: boolean;
}

export interface ReviewerManagement {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  amazonUsername: string;
  paypalUsername: string;
  status: 'en_cours' | 'en_attente' | 'rembourse' | 'fini';
  createdAt: string;
}

export interface Product {
  id: string;
  name: string;
  asin: string;
  averageRating: number;
  totalReviews: number;
}

export interface Reviewer {
  id: string;
  name: string;
  reviewCount: number;
  averageRating: number;
  lastReviewDate: string;
  influence: 'high' | 'medium' | 'low';
}

export interface Stats {
  totalReviews: number;
  averageRating: number;
  responseRate: number;
  pendingResponses: number;
  weeklyTrend: number;
}

export type TabType = 'dashboard' | 'pending' | 'management';