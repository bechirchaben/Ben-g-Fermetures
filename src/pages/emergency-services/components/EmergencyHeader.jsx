import React from 'react';
import Icon from '../../../components/AppIcon';

const EmergencyHeader = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 py-12 lg:py-16">
      <div className="container-max section-padding">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-primary rounded-full animate-pulse-emergency">
              <Icon name="Shield" size={32} className="text-white" />
            </div>
          </div>
          
          <h1 className="text-3xl lg:text-5xl font-bold text-text-primary mb-4">
            Nous Sommes Là Pour Vous Aider
          </h1>
          
          <div className="text-xl lg:text-2xl text-secondary font-semibold mb-6">
            Service d'Urgence 24/7
          </div>
          
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Panne de fermeture ? Problème de sécurité ? Notre équipe d'intervention d'urgence 
            est disponible 24h/24 et 7j/7 pour résoudre vos problèmes rapidement et efficacement.
          </p>
          
          <div className="mt-8 flex items-center justify-center space-x-4 text-sm text-text-secondary">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
              <span>Équipe disponible</span>
            </div>
            <div className="w-1 h-1 bg-text-secondary rounded-full"></div>
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={16} />
              <span>Temps de réponse: 30-45 min</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyHeader;