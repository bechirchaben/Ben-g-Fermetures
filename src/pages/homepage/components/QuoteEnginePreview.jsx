import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';


const QuoteEnginePreview = () => {
  const [selectedService, setSelectedService] = useState('');
  const [propertyType, setPropertytyType] = useState('');
  const [urgency, setUrgency] = useState('');

  const services = [
    { id: 'volets', name: 'Volets Roulants', icon: 'Shield' },
    { id: 'portails', name: 'Portails', icon: 'DoorOpen' },
    { id: 'rideaux', name: 'Rideaux Métalliques', icon: 'Building' },
    { id: 'stores', name: 'Stores Bannes', icon: 'Sun' },
    { id: 'menuiserie', name: 'Menuiserie Alu', icon: 'Home' },
    { id: 'portes', name: 'Portes Sécurisées', icon: 'Door' }
  ];

  const propertyTypes = [
    { id: 'maison', name: 'Maison individuelle', icon: 'Home' },
    { id: 'appartement', name: 'Appartement', icon: 'Building2' },
    { id: 'commerce', name: 'Local commercial', icon: 'Store' },
    { id: 'industrie', name: 'Site industriel', icon: 'Factory' }
  ];

  const urgencyLevels = [
    { id: 'standard', name: 'Standard (2-3 semaines)', color: 'text-accent' },
    { id: 'rapide', name: 'Rapide (1 semaine)', color: 'text-warning' },
    { id: 'urgence', name: 'Urgence (24-48h)', color: 'text-primary' }
  ];

  const handleQuoteRequest = () => {
    const params = new URLSearchParams({
      service: selectedService,
      property: propertyType,
      urgency: urgency
    });
    window.location.href = `/contact-service-areas?type=quote&${params.toString()}`;
  };

  const isFormValid = selectedService && propertyType && urgency;

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-secondary-50 to-primary-50">
      <div className="container-max section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              Devis Gratuit en 3 Étapes
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Obtenez une estimation personnalisée pour votre projet en quelques clics. 
              Notre équipe vous recontacte sous 24h avec un devis détaillé.
            </p>
          </div>

          {/* Quote Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            {/* Step 1: Service Selection */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center">
                <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                Quel service vous intéresse ?
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`p-4 rounded-lg border-2 transition-all text-left ${
                      selectedService === service.id
                        ? 'border-primary bg-primary/5 text-primary' :'border-border hover:border-primary/50 text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon name={service.icon} size={20} />
                      <span className="font-medium text-sm">{service.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Property Type */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center">
                <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                Type de propriété
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {propertyTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setPropertytyType(type.id)}
                    className={`p-4 rounded-lg border-2 transition-all text-center ${
                      propertyType === type.id
                        ? 'border-primary bg-primary/5 text-primary' :'border-border hover:border-primary/50 text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    <Icon name={type.icon} size={24} className="mx-auto mb-2" />
                    <span className="font-medium text-sm">{type.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Urgency */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center">
                <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                Délai souhaité
              </h3>
              <div className="space-y-3">
                {urgencyLevels.map((level) => (
                  <button
                    key={level.id}
                    onClick={() => setUrgency(level.id)}
                    className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                      urgency === level.id
                        ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`font-medium ${urgency === level.id ? 'text-primary' : 'text-text-primary'}`}>
                        {level.name}
                      </span>
                      <div className={`w-5 h-5 rounded-full border-2 ${
                        urgency === level.id 
                          ? 'border-primary bg-primary' :'border-gray-300'
                      }`}>
                        {urgency === level.id && (
                          <div className="w-full h-full rounded-full bg-primary flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="border-t border-border pt-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <div className="font-semibold text-text-primary mb-1">
                    Devis gratuit et sans engagement
                  </div>
                  <div className="text-sm text-text-secondary">
                    Réponse sous 24h • Déplacement gratuit • Conseil personnalisé
                  </div>
                </div>
                <div className="flex space-x-3">
                  <Link
                    to="/contact-service-areas"
                    className="text-text-secondary hover:text-text-primary transition-colors"
                  >
                    Formulaire complet
                  </Link>
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={handleQuoteRequest}
                    disabled={!isFormValid}
                    iconName="Calculator"
                    iconPosition="left"
                    className="min-w-[200px]"
                  >
                    Obtenir mon devis
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={24} className="text-accent" />
              </div>
              <h4 className="font-semibold text-text-primary mb-2">Réponse Rapide</h4>
              <p className="text-sm text-text-secondary">
                Devis détaillé sous 24h avec rendez-vous à votre convenance
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={24} className="text-accent" />
              </div>
              <h4 className="font-semibold text-text-primary mb-2">Déplacement Gratuit</h4>
              <p className="text-sm text-text-secondary">
                Visite technique gratuite dans toute notre zone d'intervention
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={24} className="text-accent" />
              </div>
              <h4 className="font-semibold text-text-primary mb-2">Sans Engagement</h4>
              <p className="text-sm text-text-secondary">
                Devis gratuit et sans obligation d'achat, conseil personnalisé
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteEnginePreview;