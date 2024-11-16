import React from 'react';
import { 
  Star, 
  MessageCircle, 
  AlertTriangle,
  Users,
  BarChart3,
  Mail,
  Clock,
  LayoutDashboard,
  Clock3,
  UserPlus
} from 'lucide-react';
import StatsCard from './StatsCard';
import ReviewsList from './ReviewsList';
import TrendChart from './TrendChart';
import TabNavigation from './TabNavigation';
import ReviewManagement from './ReviewManagement';
import { mockStats, mockReviews } from '../data/mockData';
import type { TabType } from '../types';

export default function Dashboard() {
  const [activeTab, setActiveTab] = React.useState<TabType>('dashboard');

  const pendingReviews = mockReviews.filter(review => review.status === 'pending');

  const tabs = [
    { id: 'dashboard', label: 'Tableau de Bord', icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'pending', label: 'Avis en Attente', icon: <Clock3 className="w-4 h-4" /> },
    { id: 'management', label: 'Gestion Reviews', icon: <UserPlus className="w-4 h-4" /> }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'management':
        return <ReviewManagement />;
      case 'pending':
        return (
          <div className="bg-white rounded-lg shadow mt-8">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Avis en Attente de Réponse</h2>
              <ReviewsList reviews={pendingReviews} />
            </div>
          </div>
        );
      default:
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <StatsCard
                title="Note Moyenne"
                value={mockStats.averageRating.toFixed(1)}
                icon={<Star className="w-6 h-6 text-yellow-500" />}
                trend={+5}
              />
              <StatsCard
                title="Total des Avis"
                value={mockStats.totalReviews.toString()}
                icon={<MessageCircle className="w-6 h-6 text-blue-500" />}
                trend={+12}
              />
              <StatsCard
                title="Taux de Réponse"
                value={`${mockStats.responseRate}%`}
                icon={<Clock className="w-6 h-6 text-green-500" />}
                trend={-2}
              />
              <StatsCard
                title="Réponses en Attente"
                value={mockStats.pendingResponses.toString()}
                icon={<AlertTriangle className="w-6 h-6 text-red-500" />}
                trend={+3}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              <div className="lg:col-span-2 bg-white rounded-lg shadow">
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Tendances des Avis</h2>
                  <TrendChart />
                </div>
              </div>
              <div className="bg-white rounded-lg shadow">
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Meilleurs Évaluateurs</h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-indigo-600" />
                        <div>
                          <p className="font-medium text-gray-900">Jean D.</p>
                          <p className="text-sm text-gray-500">12 avis</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="ml-1 text-sm font-medium">4.8</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Avis Récents</h2>
                <ReviewsList reviews={mockReviews} />
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Gestion des Avis</h1>
          <div className="flex space-x-4">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Demander des Avis
            </button>
            <button className="bg-white text-gray-700 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Générer un Rapport
            </button>
          </div>
        </div>

        <TabNavigation tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
        {renderContent()}
      </div>
    </div>
  );
}