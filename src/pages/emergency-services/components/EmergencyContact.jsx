import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';


const EmergencyContact = () => {
  const [selectedContact, setSelectedContact] = useState(null);

  const contactMethods = [
    {
      id: 'phone',
      title: 'Appel Direct',
      subtitle: 'Réponse immédiate',
      icon: 'Phone',
      action: 'tel:+33782885505',
      number: '+33 7 82 88 55 05',
      description: 'Parlez directement à un technicien',
      priority: 'Urgence critique',
      bgColor: 'bg-primary',
      textColor: 'text-white'
    },
    {
      id: 'form',
      title: 'Formulaire Urgence',
      subtitle: 'Détails complets',
      icon: 'FileText',
      action: '#emergency-form',
      number: 'Réponse sous 15 min',
      description: 'Décrivez votre situation en détail',
      priority: 'Intervention planifiée',
      bgColor: 'bg-secondary',
      textColor: 'text-white'
    }
  ];

  const handleContactClick = (method) => {
    setSelectedContact(method.id);
    
    if (method.action.startsWith('tel:') || method.action.startsWith('https://')) {
      window.open(method.action, '_blank');
    } else if (method.action.startsWith('#')) {
      document.querySelector(method.action)?.scrollIntoView({ behavior: 'smooth' });
    }
    
    setTimeout(() => setSelectedContact(null), 2000);
  };

  return (
    <div className="bg-white py-12 lg:py-16">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">
            Contactez-Nous Immédiatement
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Choisissez la méthode de contact qui vous convient le mieux. 
            Nous sommes disponibles 24h/24 pour vos urgences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto justify-center">

          {contactMethods.map((method) => (
            <div
              key={method.id}
              className={`relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer ${
                selectedContact === method.id ? 'ring-4 ring-primary ring-opacity-50' : ''
              }`}
              onClick={() => handleContactClick(method)}
            >
              <div className={`${method.bgColor} p-8 text-center`}>
                <div className="flex items-center justify-center mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full">
                    <Icon name={method.icon} size={32} className={method.textColor} />
                  </div>
                </div>
                
                <h3 className={`text-xl font-bold ${method.textColor} mb-2`}>
                  {method.title}
                </h3>
                
                <p className={`${method.textColor} opacity-90 mb-4`}>
                  {method.subtitle}
                </p>
                
                <div className={`text-lg font-semibold ${method.textColor} mb-4`}>
                  {method.number}
                </div>
                
                <p className={`text-sm ${method.textColor} opacity-80 mb-4`}>
                  {method.description}
                </p>
                
                <div className="bg-white/20 rounded-lg px-3 py-2">
                  <span className={`text-xs font-medium ${method.textColor}`}>
                    {method.priority}
                  </span>
                </div>
                
                {selectedContact === method.id && (
                  <div className="absolute inset-0 bg-white/20 flex items-center justify-center">
                    <div className="flex items-center space-x-2 text-white">
                      <Icon name="Check" size={24} />
                      <span className="font-semibold">Connexion...</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-surface rounded-xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-4 text-text-secondary">
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span className="text-sm">Zone d'intervention: Île-de-France</span>
              </div>
              <div className="w-1 h-1 bg-text-secondary rounded-full"></div>
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={16} />
                <span className="text-sm">3 techniciens disponibles</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyContact;