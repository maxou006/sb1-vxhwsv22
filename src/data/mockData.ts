import type { Review, Stats } from '../types';

export const mockStats: Stats = {
  totalReviews: 1284,
  averageRating: 4.2,
  responseRate: 92,
  pendingResponses: 15,
  weeklyTrend: 5.7
};

export const mockReviews: Review[] = [
  {
    id: '1',
    productId: 'p1',
    rating: 5,
    title: 'Excellent produit !',
    content: 'Ce produit a dépassé mes attentes. La qualité est exceptionnelle et la livraison était rapide.',
    reviewerName: 'Jean Dupont',
    date: '2024-03-10',
    sentiment: 'positive',
    status: 'responded',
    verified: true
  },
  {
    id: '2',
    productId: 'p2',
    rating: 2,
    title: 'Qualité décevante',
    content: 'Le produit est arrivé endommagé et ne correspond pas à la description fournie.',
    reviewerName: 'Marie Martin',
    date: '2024-03-09',
    sentiment: 'negative',
    status: 'pending',
    verified: true
  },
  {
    id: '3',
    productId: 'p1',
    rating: 4,
    title: 'Bon mais peut être amélioré',
    content: 'Globalement satisfait de l\'achat mais il y a des points à améliorer.',
    reviewerName: 'Michel Bernard',
    date: '2024-03-08',
    sentiment: 'neutral',
    status: 'published',
    verified: false
  }
];