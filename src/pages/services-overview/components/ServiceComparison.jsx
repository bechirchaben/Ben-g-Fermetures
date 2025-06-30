import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceComparison = ({ services, onClose }) => {
  const [selectedServices, setSelectedServices] = useState(services.slice(0, 3));

  const comparisonFeatures = [
    { key: 'priceRange', label: 'Prix', icon: 'DollarSign' },
    { key: 'installationTime', label: 'Temps d\'installation', icon: 'Clock' },
    { key: 'warranty', label: 'Garantie', icon: 'Shield' },
    { key: 'maintenance', label: 'Maintenance', icon: 'Settings' },
    { key: 'energyEfficiency', label: 'Efficacité énergétique', icon: 'Zap' },
    { key: 'securityLevel', label: 'Niveau de sécurité', icon: 'Lock' },
    { key: 'weatherResistance', label: 'Résistance aux intempéries', icon: 'Cloud' },
    { key: 'automation', label: 'Automatisation', icon: 'Smartphone' }
  ];

  const removeService = (serviceId) => {
    setSelectedServices(prev => prev.filter(s => s.id !== serviceId));
  };

  const addService = (service) => {
    if (selectedServices.length < 3 && !selectedServices.find(s => s.id === service.id)) {
      setSelectedServices(prev => [...prev, service]);
    }
  };

  const getFeatureValue = (service, featureKey) => {
    const comparisonData = {
      'menuiserie-aluminium': {
        priceRange: '800€ - 2500€',
        installationTime: '1-2 jours',
        warranty: '10 ans',
        maintenance: 'Faible',
        energyEfficiency: 'Excellente',
        securityLevel: 'Élevé',
        weatherResistance: 'Excellente',
        automation: 'Disponible'
      },
      'volets-roulants': {
        priceRange: '300€ - 1200€',
        installationTime: '4-6 heures',
        warranty: '5 ans',
        maintenance: 'Faible',
        energyEfficiency: 'Très bonne',
        securityLevel: 'Très élevé',
        weatherResistance: 'Bonne',
        automation: 'Standard'
      },
      'rideaux-metalliques': {
        priceRange: '1200€ - 4000€',
        installationTime: '1 jour',
        warranty: '7 ans',
        maintenance: 'Moyenne',
        energyEfficiency: 'Moyenne',
        securityLevel: 'Maximum',
        weatherResistance: 'Excellente',
        automation: 'Professionnelle'
      },
      'stores-bannes': {
        priceRange: '400€ - 1800€',
        installationTime: '3-5 heures',
        warranty: '5 ans',
        maintenance: 'Moyenne',
        energyEfficiency: 'Bonne',
        securityLevel: 'Faible',
        weatherResistance: 'Bonne',
        automation: 'Optionnelle'
      },
      'portails-automatiques': {
        priceRange: '1500€ - 5000€',
        installationTime: '1-2 jours',
        warranty: '8 ans',
        maintenance: 'Élevée',
        energyEfficiency: 'Moyenne',
        securityLevel: 'Très élevé',
        weatherResistance: 'Excellente',
        automation: 'Intégrée'
      },
      'portes-securisees': {
        priceRange: '600€ - 3000€',
        installationTime: '4-8 heures',
        warranty: '10 ans',
        maintenance: 'Faible',
        energyEfficiency: 'Bonne',
        securityLevel: 'Maximum',
        weatherResistance: 'Excellente',
        automation: 'Disponible'
      }
    };

    return comparisonData[service.id]?.[featureKey] || 'N/A';
  };

  const getRatingStars = (value) => {
    const ratings = {
      'Faible': 2,
      'Moyenne': 3,
      'Bonne': 4,
      'Très bonne': 4,
      'Excellente': 5,
      'Élevé': 4,
      'Très élevé': 5,
      'Maximum': 5
    };

    const rating = ratings[value] || 3;
    return [...Array(5)].map((_, i) => (
      <Icon
        key={i}
        name="Star"
        size={12}
        className={i < rating ? 'text-warning fill-current' : 'text-gray-300'}
      />
    ));
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Comparaison des Services</h2>
              <p className="opacity-90">Comparez les caractéristiques de nos services pour faire le meilleur choix</p>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
            >
              <Icon name="X" size={20} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-auto max-h-[calc(90vh-120px)]">
          {selectedServices.length === 0 ? (
            <div className="text-center py-12">
              <Icon name="Search" size={48} className="text-text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                Aucun service sélectionné
              </h3>
              <p className="text-text-secondary">
                Sélectionnez des services à comparer depuis la liste principale
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left p-4 font-semibold text-text-primary border-b border-border">
                      Caractéristiques
                    </th>
                    {selectedServices.map((service) => (
                      <th key={service.id} className="p-4 border-b border-border min-w-[200px]">
                        <div className="text-center">
                          <div className="relative">
                            <h4 className="font-semibold text-text-primary mb-2">{service.name}</h4>
                            <button
                              onClick={() => removeService(service.id)}
                              className="absolute -top-2 -right-2 w-6 h-6 bg-error text-error-foreground rounded-full flex items-center justify-center text-xs hover:bg-error-600 transition-colors"
                            >
                              <Icon name="X" size={12} />
                            </button>
                          </div>
                          <div className="w-16 h-16 bg-primary-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                            <Icon name={service.icon} size={24} className="text-primary" />
                          </div>
                          <span className="text-sm text-text-secondary">{service.category}</span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, index) => (
                    <tr key={feature.key} className={index % 2 === 0 ? 'bg-surface-50' : 'bg-background'}>
                      <td className="p-4 font-medium text-text-primary border-b border-border">
                        <div className="flex items-center space-x-2">
                          <Icon name={feature.icon} size={16} className="text-primary" />
                          <span>{feature.label}</span>
                        </div>
                      </td>
                      {selectedServices.map((service) => {
                        const value = getFeatureValue(service, feature.key);
                        return (
                          <td key={service.id} className="p-4 text-center border-b border-border">
                            <div className="space-y-1">
                              <div className="font-medium text-text-primary">{value}</div>
                              {['energyEfficiency', 'securityLevel', 'weatherResistance', 'maintenance'].includes(feature.key) && (
                                <div className="flex justify-center space-x-1">
                                  {getRatingStars(value)}
                                </div>
                              )}
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Add More Services */}
          {selectedServices.length < 3 && (
            <div className="mt-6 p-4 bg-surface-50 rounded-lg">
              <h4 className="font-semibold text-text-primary mb-3">
                Ajouter un service à la comparaison
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {services
                  .filter(service => !selectedServices.find(s => s.id === service.id))
                  .map((service) => (
                    <button
                      key={service.id}
                      onClick={() => addService(service)}
                      className="p-3 border border-border rounded-lg hover:border-primary hover:bg-primary-50 transition-all duration-200 text-left"
                    >
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                          <Icon name={service.icon} size={16} className="text-primary" />
                        </div>
                        <div>
                          <div className="font-medium text-sm text-text-primary">{service.name}</div>
                          <div className="text-xs text-text-secondary">{service.category}</div>
                        </div>
                      </div>
                    </button>
                  ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="mt-6 flex justify-center space-x-4">
            <Button
              variant="outline"
              onClick={onClose}
              iconName="ArrowLeft"
              iconPosition="left"
            >
              Retour aux services
            </Button>
            {selectedServices.length > 0 && (
              <Button
                variant="primary"
                onClick={() => {
                  // Handle quote request for compared services
                  window.location.href = '/contact-service-areas?type=comparison';
                }}
                iconName="Calculator"
                iconPosition="left"
              >
                Demander un devis
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceComparison;