import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TrustSection = () => {
  const certifications = [
    {
      name: 'Qualibat',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      description: 'Certification qualité bâtiment'
    },
    {
      name: 'RGE',
      logo: 'https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      description: 'Reconnu Garant Environnement'
    },
    {
      name: 'Assurance Décennale',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      description: 'Couverture complète 10 ans'
    },
    {
      name: 'Artisan Certifié',
      logo: 'https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      description: 'Savoir-faire reconnu'
    }
  ];

  const stats = [
    {
      icon: 'Award',
      number: '523',
      label: 'Installations réalisées',
      increment: '+27 ce mois'
    },
    {
      icon: 'Clock',
      number: '< 2h',
      label: 'Temps de réponse urgence',
      increment: 'Disponible 24/7'
    },
    {
      icon: 'Star',
      number: '4.9/5',
      label: 'Satisfaction client',
      increment: 'Sur 230+ avis'
    },
    {
      icon: 'Shield',
      number: '2 ans',
      label: 'Garantie étendue',
      increment: 'Service inclus'
    }
  ];

  const insuranceDetails = [
    {
      icon: 'FileText',
      title: 'Assurance Responsabilité Civile',
      coverage: '2M€',
      description: 'Protection complète des biens et personnes'
    },
    {
      icon: 'Home',
      title: 'Assurance Décennale',
      coverage: '1M€',
      description: 'Garantie constructeur 10 ans'
    },
    {
      icon: 'Truck',
      title: 'Assurance Matériel',
      coverage: '500K€',
      description: 'Équipements et véhicules couverts'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="container-max section-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Votre Confiance, Notre Engagement
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Certifications professionnelles, assurances complètes et garanties étendues 
            pour votre tranquillité d'esprit absolue.
          </p>
        </div>

        {/* Live Stats Counter */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name={stat.icon} size={24} className="text-primary" />
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-text-primary mb-1">
                {stat.number}
              </div>
              <div className="text-sm font-medium text-text-secondary mb-2">
                {stat.label}
              </div>
              <div className="text-xs text-accent font-medium">
                {stat.increment}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;