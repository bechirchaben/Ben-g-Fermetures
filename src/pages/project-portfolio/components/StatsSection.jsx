import React from 'react';
import Icon from '../../../components/AppIcon';

const StatsSection = ({ totalProjects, filteredCount }) => {
  const stats = [
    {
      icon: 'CheckCircle',
      value: '500+',
      label: 'Projets Réalisés',
      color: 'text-accent'
    },
    {
      icon: 'Users',
      value: '450+',
      label: 'Clients Satisfaits',
      color: 'text-secondary'
    },
    {
      icon: 'Clock',
      value: '15+',
      label: 'Années d\'Expérience',
      color: 'text-primary'
    },
    {
      icon: 'Award',
      value: '98%',
      label: 'Taux de Satisfaction',
      color: 'text-warning'
    }
  ];

  return (
    <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl p-8 mb-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-text-primary mb-4">
          Notre Expertise en Chiffres
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Découvrez notre portfolio de réalisations qui témoignent de notre savoir-faire 
          et de la confiance que nous accordent nos clients depuis plus de 13 ans.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-background rounded-full shadow-md">
              <Icon 
                name={stat.icon} 
                size={24} 
                className={stat.color}
              />
            </div>
            <div className="text-2xl lg:text-3xl font-bold text-text-primary mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-text-secondary">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Current Filter Results */}
      <div className="text-center pt-6 border-t border-border">
        <p className="text-text-secondary">
          <span className="font-semibold text-text-primary">{filteredCount}</span> 
          {filteredCount === totalProjects 
            ? ' projets dans notre portfolio' 
            : ` projets correspondent à vos critères sur ${totalProjects} au total`
          }
        </p>
      </div>
    </div>
  );
};

export default StatsSection;