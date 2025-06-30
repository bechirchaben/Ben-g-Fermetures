import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const BusinessInfo = () => {
  const businessHours = [
    { day: 'Lundi - Vendredi', hours: '8h00 - 18h00', type: 'normal' },
    { day: 'Samedi', hours: '9h00 - 17h00', type: 'normal' },
    { day: 'Dimanche', hours: 'Fermé', type: 'closed' },
    { day: 'Urgences', hours: '24h/24 - 7j/7', type: 'emergency' }
  ];

  const facilities = [
    {
      title: 'Atelier Principal',
      description: 'Fabrication sur mesure et préparation des installations',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop',
      features: ['Machines de découpe', 'Poste de soudure', 'Zone d\'assemblage', 'Contrôle qualité']
    },
    {
      title: 'Entrepôt de Stockage',
      description: 'Stock permanent de matériaux et pièces détachées',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop',
      features: ['Profilés aluminium', 'Mécanismes', 'Pièces détachées', 'Matériaux isolants']
    },
    {
      title: 'Flotte de Véhicules',
      description: 'Véhicules équipés pour tous types d\'interventions',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      features: ['Outillage complet', 'Matériel de levage', 'Pièces courantes', 'Équipement sécurité']
    }
  ];



  const contactInfo = {
    address: ' 39 Rue de la Gare de Reuilly, 75012 Paris, France',
    phone: '+33 7 82 88 55 05',
    email: 'contact@bengfermetures.fr ',
    emergency: '+33 7 82 88 55 05',
    website: 'www.bengfermetures.fr'
  };

  return (
    <section className="py-16 bg-background">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Informations Pratiques
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Découvrez nos installations, nos horaires et toutes les informations utiles pour nous contacter
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Business Hours & Contact */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-surface rounded-2xl p-8 border border-border">
              <h3 className="text-2xl font-bold text-text-primary mb-6">
                Coordonnées
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-text-primary">Adresse</div>
                    <div className="text-text-secondary">{contactInfo.address}</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={20} className="text-secondary" />
                  </div>
                  <div>
                    <div className="font-medium text-text-primary">Téléphone</div>
                    <div className="text-text-secondary">{contactInfo.phone}</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={20} className="text-accent" />
                  </div>
                  <div>
                    <div className="font-medium text-text-primary">Email</div>
                    <div className="text-text-secondary">{contactInfo.email}</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 animate-pulse-emergency">
                    <Icon name="AlertTriangle" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-text-primary">Urgences 24/7</div>
                    <div className="text-text-secondary">{contactInfo.emergency}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-surface rounded-2xl p-8 border border-border">
              <h3 className="text-2xl font-bold text-text-primary mb-6">
                Horaires d'Ouverture
              </h3>

              <div className="space-y-3">
                {businessHours.map((schedule, index) => (
                  <div key={index} className={`flex items-center justify-between p-3 rounded-lg ${schedule.type === 'emergency' ? 'bg-primary-50 border border-primary-200'
                      : schedule.type === 'closed' ? 'bg-surface-100' : 'bg-background'
                    }`}>
                    <div className={`font-medium ${schedule.type === 'emergency' ? 'text-primary' : 'text-text-primary'
                      }`}>
                      {schedule.day}
                    </div>
                    <div className={`${schedule.type === 'emergency' ? 'text-primary font-semibold'
                        : schedule.type === 'closed' ? 'text-text-muted' : 'text-text-secondary'
                      }`}>
                      {schedule.hours}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-warning-50 border border-warning-200 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Icon name="Info" size={20} className="text-warning flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <div className="font-medium text-warning-800 mb-1">
                      Horaires spéciaux
                    </div>
                    <div className="text-warning-700">
                      Jours fériés: Fermé (sauf urgences)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Facilities & Certifications */}
          <div className="space-y-8">
            {/* Facilities */}
            <div className="bg-surface rounded-2xl p-8 border border-border">
              <h3 className="text-2xl font-bold text-text-primary mb-6">
                Nos Installations
              </h3>

              <div className="space-y-6">
                {facilities.map((facility, index) => (
                  <div key={index} className="bg-background rounded-lg p-4 border border-border">
                    <div className="flex items-start space-x-4">
                      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={facility.image}
                          alt={facility.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-text-primary mb-1">
                          {facility.title}
                        </h4>
                        <p className="text-sm text-text-secondary mb-3">
                          {facility.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {facility.features.map((feature, featureIndex) => (
                            <span
                              key={featureIndex}
                              className="px-2 py-1 bg-surface text-xs text-text-secondary rounded"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Location Map */}
        <div className="mt-12">
          <div className="bg-surface rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-text-primary mb-6">
              Notre Localisation
            </h3>

            <div className="aspect-video rounded-lg overflow-hidden border border-border">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title="BENG Fermetures - Localisation"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.7599110636624!2d2.3932944763176244!3d48.84191307133017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6721b2284b057%3A0x530f184ea0b78788!2sBen-g%20Fermetures!5e0!3m2!1sfr!2sfr!4v1719828431234!5m2!1sfr!2sfr"
                className="w-full h-full"
              />

            </div>

            <div className="mt-4 flex flex-col sm:flex-row gap-4">
              <div className="flex items-center space-x-2 text-text-secondary">
                <Icon name="Car" size={16} />
                <span className="text-sm">Parking disponible sur site</span>
              </div>
              <div className="flex items-center space-x-2 text-text-secondary">
                <Icon name="Train" size={16} />
                <span className="text-sm">Métro République (lignes 3, 5, 8, 9, 11)</span>
              </div>
              <div className="flex items-center space-x-2 text-text-secondary">
                <Icon name="Clock" size={16} />
                <span className="text-sm">Accès facile depuis le périphérique</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessInfo;