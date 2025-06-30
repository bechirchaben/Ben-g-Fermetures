import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactMethods = () => {
  const [activeMethod, setActiveMethod] = useState('emergency');

  const contactMethods = [
    {
      id: 'emergency',
      title: 'Urgence 24/7',
      subtitle: 'Intervention immédiate',
      icon: 'AlertTriangle',
      color: 'primary',
      phone: '+33 7 82 88 55 05',
      description: 'Pour toute situation d\'urgence nécessitant une intervention immédiate',
      features: ['Réponse sous 2h', 'Équipe d\'astreinte', 'Devis sur place', 'Réparation temporaire'],
      availability: '24h/24 - 7j/7'
    },
    {
      id: 'consultation',
      title: 'Consultation',
      subtitle: 'Projets & Devis',
      icon: 'Calendar',
      color: 'secondary',
      phone: '+33 7 82 88 55 05',
      description: 'Pour planifier vos projets et obtenir un devis personnalisé',
      features: ['Rendez-vous gratuit', 'Étude personnalisée', 'Conseils techniques', 'Devis détaillé'],
      availability: 'Lun-Ven: 8h-18h, Sam: 9h-17h'
    },
    {
      id: 'maintenance',
      title: 'Maintenance',
      subtitle: 'Entretien & SAV',
      icon: 'Settings',
      color: 'accent',
      phone: '+33 7 82 88 55 05',
      description: 'Pour l\'entretien de vos installations et le service après-vente',
      features: ['Contrats d\'entretien', 'Pièces détachées', 'Garantie étendue', 'Maintenance préventive'],
      availability: 'Lun-Ven: 8h-17h'
    }
  ];

  const handleCall = (phone) => {
    window.location.href = `tel:${phone}`;
  };

  const handleEmail = (type) => {
    const emails = {
      emergency: 'urgence@bengfermetures.fr',
      consultation: 'contact@bengfermetures.fr',
      maintenance: 'contact@bengfermetures.fr'
    };
    window.location.href = `mailto:${emails[type]}`;
  };

  return (
    <section className="py-16 bg-surface">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Plusieurs Moyens de Nous Contacter
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Choisissez le canal de communication adapté à votre besoin pour une réponse optimale
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {contactMethods.map((method) => (
            <button
              key={method.id}
              onClick={() => setActiveMethod(method.id)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeMethod === method.id
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-background text-text-secondary hover:text-text-primary hover:bg-surface-100 border border-border'
              }`}
            >
              <Icon 
                name={method.icon} 
                size={20} 
                className={activeMethod === method.id ? 'text-white' : 'text-primary'}
              />
              <span>{method.title}</span>
            </button>
          ))}
        </div>

        {contactMethods.map((method) => (
          activeMethod === method.id && (
            <div key={method.id} className="max-w-4xl mx-auto">
              <div className="bg-background rounded-2xl shadow-lg border border-border overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-primary-600 text-white p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                      <Icon name={method.icon} size={32} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{method.title}</h3>
                      <p className="text-lg opacity-90">{method.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-lg opacity-90 mb-6">{method.description}</p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => handleCall(method.phone)}
                      iconName="Phone"
                      iconPosition="left"
                      className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-text-primary"
                    >
                      {method.phone}
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => handleEmail(method.id)}
                      iconName="Mail"
                      iconPosition="left"
                      className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-text-primary"
                    >
                      Envoyer un Email
                    </Button>
                  </div>
                </div>

                <div className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-text-primary mb-4">
                        Services Inclus
                      </h4>
                      <div className="space-y-3">
                        {method.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
                              <Icon name="Check" size={14} className="text-primary" />
                            </div>
                            <span className="text-text-secondary">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-text-primary mb-4">
                        Disponibilité
                      </h4>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-1">
                          <Icon name="Clock" size={14} className="text-primary" />
                        </div>
                        <div>
                          <div className="font-medium text-text-primary">{method.availability}</div>
                          <div className="text-sm text-text-secondary mt-1">
                            Temps de réponse garanti selon le type de demande
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        ))}
      </div>
    </section>
  );
};

export default ContactMethods;
