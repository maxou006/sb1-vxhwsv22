import React from 'react';
import { Star, ThumbsUp, ThumbsDown } from 'lucide-react';
import type { Review } from '../types';

interface ReviewsListProps {
  reviews: Review[];
}

export default function ReviewsList({ reviews }: ReviewsListProps) {
  const getSentimentColor = (sentiment: Review['sentiment']) => {
    switch (sentiment) {
      case 'positive':
        return 'text-green-600 bg-green-50';
      case 'negative':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusColor = (status: Review['status']) => {
    switch (status) {
      case 'pending':
        return 'text-yellow-600 bg-yellow-50';
      case 'responded':
        return 'text-green-600 bg-green-50';
      default:
        return 'text-blue-600 bg-blue-50';
    }
  };

  const getStatusLabel = (status: Review['status']) => {
    switch (status) {
      case 'pending':
        return 'En Attente';
      case 'responded':
        return 'Répondu';
      default:
        return 'Publié';
    }
  };

  return (
    <div className="space-y-4">
      {reviews.length === 0 ? (
        <p className="text-gray-500 text-center py-8">Aucun avis à afficher</p>
      ) : (
        reviews.map((review) => (
          <div key={review.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-900">{review.title}</span>
                </div>
                <p className="text-gray-600 text-sm mb-2">{review.content}</p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-gray-500">{review.reviewerName}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-500">{review.date}</span>
                  {review.verified && (
                    <>
                      <span className="text-gray-400">•</span>
                      <span className="text-green-600">Achat Vérifié</span>
                    </>
                  )}
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(review.status)}`}>
                  {getStatusLabel(review.status)}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSentimentColor(review.sentiment)}`}>
                  {review.sentiment === 'positive' ? (
                    <ThumbsUp className="w-4 h-4" />
                  ) : review.sentiment === 'negative' ? (
                    <ThumbsDown className="w-4 h-4" />
                  ) : null}
                </span>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}