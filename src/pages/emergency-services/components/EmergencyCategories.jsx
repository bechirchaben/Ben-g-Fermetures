import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const EmergencyCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const emergencyTypes = [
    {
      id: 'roller-shutters',
      title: 'Volets Roulants Bloqués',
      icon: 'Settings',
      urgency: 'Haute',
      responseTime: '30-45 min',
      description: 'Volet coincé, moteur défaillant, lame cassée',
      symptoms: [
        'Volet ne monte/descend plus',
        'Bruit anormal du moteur',
        'Lame tordue ou cassée',
        'Télécommande ne répond plus'
      ],
      solutions: [
        'Déblocage manuel sécurisé',
        'Remplacement moteur',
        'Réparation lames',
        'Reprogrammation télécommande'
      ],
      price: 'À partir de 120€',
      color: 'border-red-200 bg-red-50'
    },
    {
      id: 'security-doors',
      title: 'Portes de Sécurité',
      icon: 'Shield',
      urgency: 'Critique',
      responseTime: '20-30 min',
      description: 'Serrure bloquée, porte forcée, problème blindage',
      symptoms: [
        'Impossible d\'ouvrir/fermer',
        'Serrure cassée',
        'Porte forcée',
        'Problème de blindage'
      ],
      solutions: [
        'Ouverture fine sans dégât',
        'Remplacement serrure',
        'Réparation blindage',
        'Renforcement sécurité'
      ],
      price: 'À partir de 150€',
      color: 'border-orange-200 bg-orange-50'
    },
    {
      id: 'automatic-gates',
      title: 'Portails Automatiques',
      icon: 'Zap',
      urgency: 'Moyenne',
      responseTime: '45-60 min',
      description: 'Motorisation défaillante, capteurs bloqués',
      symptoms: [
        'Portail ne s\'ouvre plus',
        'Mouvement saccadé',
        'Capteurs défaillants',
        'Télécommande inactive'
      ],
      solutions: [
        'Diagnostic électronique',
        'Réparation motorisation',
        'Calibrage capteurs',
        'Maintenance préventive'
      ],
      price: 'À partir de 180€',
      color: 'border-blue-200 bg-blue-50'
    },
    {
      id: 'storm-damage',
      title: 'Dégâts Tempête',
      icon: 'CloudRain',
      urgency: 'Variable',
      responseTime: '30-90 min',
      description: 'Réparations suite aux intempéries',
      symptoms: [
        'Fermetures arrachées',
        'Vitres brisées',
        'Structures déformées',
        'Infiltrations d\'eau'
      ],
      solutions: [
        'Sécurisation immédiate',
        'Bâchage temporaire',
        'Réparation structure',
        'Remplacement complet'
      ],
      price: 'Devis sur mesure',
      color: 'border-gray-200 bg-gray-50'
    }
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(selectedCategory === category.id ? null : category.id);
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'Critique': return 'text-red-600 bg-red-100';
      case 'Haute': return 'text-orange-600 bg-orange-100';
      case 'Moyenne': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="bg-surface py-12 lg:py-16">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">
            Types d'Urgences Traitées
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Identifiez votre problème pour une intervention ciblée et efficace. 
            Cliquez sur une catégorie pour plus de détails.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {emergencyTypes.map((type) => (
            <div key={type.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div
                className={`p-6 border-l-4 cursor-pointer transition-all duration-300 hover:shadow-lg ${type.color}`}
                onClick={() => handleCategoryClick(type)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-white rounded-lg shadow-sm">
                      <Icon name={type.icon} size={24} className="text-text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-text-primary mb-1">
                        {type.title}
                      </h3>
                      <p className="text-text-secondary text-sm">
                        {type.description}
                      </p>
                    </div>
                  </div>
                  <Icon 
                    name={selectedCategory === type.id ? "ChevronUp" : "ChevronDown"} 
                    size={20} 
                    className="text-text-secondary" 
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getUrgencyColor(type.urgency)}`}>
                      {type.urgency}
                    </span>
                    <div className="flex items-center space-x-2 text-text-secondary">
                      <Icon name="Clock" size={16} />
                      <span className="text-sm">{type.responseTime}</span>
                    </div>
                  </div>
                  <div className="text-primary font-semibold">
                    {type.price}
                  </div>
                </div>

                {selectedCategory === type.id && (
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-text-primary mb-3 flex items-center">
                          <Icon name="AlertTriangle" size={16} className="mr-2 text-warning" />
                          Symptômes Courants
                        </h4>
                        <ul className="space-y-2">
                          {type.symptoms.map((symptom, index) => (
                            <li key={index} className="flex items-start space-x-2 text-sm text-text-secondary">
                              <Icon name="Dot" size={16} className="mt-0.5 text-text-muted" />
                              <span>{symptom}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-text-primary mb-3 flex items-center">
                          <Icon name="Wrench" size={16} className="mr-2 text-success" />
                          Solutions Proposées
                        </h4>
                        <ul className="space-y-2">
                          {type.solutions.map((solution, index) => (
                            <li key={index} className="flex items-start space-x-2 text-sm text-text-secondary">
                              <Icon name="Check" size={16} className="mt-0.5 text-success" />
                              <span>{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl p-6 max-w-3xl mx-auto shadow-md">
            <div className="flex items-center justify-center mb-4">
              <Icon name="Info" size={24} className="text-secondary mr-2" />
              <h3 className="text-lg font-semibold text-text-primary">
                Votre Problème N'est Pas Listé ?
              </h3>
            </div>
            <p className="text-text-secondary mb-4">
              Contactez-nous directement. Nos techniciens expérimentés peuvent résoudre 
              tous types de problèmes de fermetures et de sécurité.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-text-secondary">
              <span>✓ Diagnostic gratuit</span>
              <span>✓ Devis transparent</span>
              <span>✓ Garantie intervention</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyCategories;