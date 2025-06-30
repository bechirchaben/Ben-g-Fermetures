import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ServiceAreaMap = () => {
  const [selectedArea, setSelectedArea] = useState('paris');


  const serviceAreas = [
    {
      id: 'paris',
      name: 'Paris Centre',
      responseTime: '1-2h',
      projects: 150,
      coordinates: { lat: 48.8566, lng: 2.3522 },
      description: 'Couverture complète de Paris intra-muros avec intervention prioritaire',
      specialties: ['Urgences 24/7', 'Projets résidentiels', 'Commerces de proximité']
    },
    {
      id: 'hautsdeseine',
      name: 'Hauts-de-Seine',
      responseTime: '2-3h',
      projects: 89,
      coordinates: { lat: 48.8203, lng: 2.2292 },
      description: 'Service étendu dans tout le département avec équipes dédiées',
      specialties: ['Résidences de standing', 'Bureaux d\'entreprise', 'Centres commerciaux']
    },
    {
      id: 'valmarne',
      name: 'Val-de-Marne',
      responseTime: '2-4h',
      projects: 67,
      coordinates: { lat: 48.7761, lng: 2.4875 },
      description: 'Intervention rapide avec partenaires locaux certifiés',
      specialties: ['Maisons individuelles', 'Copropriétés', 'Établissements publics']
    },
    {
      id: 'seinestdenis',
      name: 'Seine-Saint-Denis',
      responseTime: '2-4h',
      projects: 45,
      coordinates: { lat: 48.9356, lng: 2.3539 },
      description: 'Couverture progressive avec expansion des services',
      specialties: ['Logements sociaux', 'Zones industrielles', 'Équipements sportifs']
    },
    {
      id: 'yvelines',
      name: 'Yvelines',
      responseTime: '3-5h',
      projects: 62,
      coordinates: { lat: 48.7963, lng: 1.9830 },
      description: 'Présence assurée dans les grandes communes et zones pavillonnaires',
      specialties: ['Villas', 'Bâtiments historiques', 'Pépinières industrielles']
    },
    {
      id: 'essonne',
      name: 'Essonne',
      responseTime: '3-5h',
      projects: 58,
      coordinates: { lat: 48.6327, lng: 2.4401 },
      description: 'Zone périurbaine couverte avec délais maîtrisés',
      specialties: ['Résidences neuves', 'Zones rurales', 'Bâtiments tertiaires']
    },
    {
      id: 'valdoise',
      name: 'Val-d’Oise',
      responseTime: '3-6h',
      projects: 53,
      coordinates: { lat: 49.0500, lng: 2.1000 },
      description: 'Intervention dans toutes les villes principales et zones artisanales',
      specialties: ['Zones commerciales', 'Lotissements', 'Locaux associatifs']
    },
    {
      id: 'seineetmarne',
      name: 'Seine-et-Marne',
      responseTime: '4-6h',
      projects: 71,
      coordinates: { lat: 48.6095, lng: 2.6431 },
      description: 'Déploiement d’équipes mobiles pour répondre aux demandes rurales et urbaines',
      specialties: ['Maisons de campagne', 'Communes rurales', 'Chantiers agricoles']
    }
  ];

  const currentArea = serviceAreas.find(area => area.id === selectedArea);

  return (
    <section className="py-16 bg-background">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Zones d'Intervention
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            BEN-G Fermetures intervient dans toute l'Île-de-France avec des temps de réponse adaptés à chaque zone
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Interactive Map */}
          <div className="space-y-6">
            <div className="bg-surface rounded-2xl p-6 border border-border">
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                Sélectionnez votre zone
              </h3>

              {/* Area Selection */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {serviceAreas.map((area) => (
                  <button
                    key={area.id}
                    onClick={() => setSelectedArea(area.id)}
                    className={`p-4 rounded-lg text-left transition-all duration-200 ${selectedArea === area.id
                      ? 'bg-primary text-primary-foreground shadow-md'
                      : 'bg-background hover:bg-surface-100 border border-border'
                      }`}
                  >
                    <div className="font-medium">{area.name}</div>
                    <div className={`text-sm ${selectedArea === area.id ? 'text-primary-foreground/80' : 'text-text-secondary'
                      }`}>
                      {area.responseTime} • {area.projects} projets
                    </div>
                  </button>
                ))}
              </div>

              {/* Google Maps Embed */}
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
            </div>

            {/* Coverage Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-primary-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary">8</div>
                <div className="text-sm text-text-secondary">Départements</div>
              </div>
              <div className="bg-secondary-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-secondary">523</div>
                <div className="text-sm text-text-secondary">Projets Réalisés</div>
              </div>
              <div className="bg-accent-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-accent">98%</div>
                <div className="text-sm text-text-secondary">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Area Details */}
          <div className="space-y-6">
            <div className="bg-surface rounded-2xl p-8 border border-border">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-text-primary">{currentArea.name}</h3>
                  <p className="text-text-secondary">{currentArea.description}</p>
                </div>
              </div>

              {/* Response Time */}
              <div className="flex items-center space-x-3 mb-6 p-4 bg-success-50 rounded-lg">
                <Icon name="Clock" size={20} className="text-success" />
                <div>
                  <div className="font-semibold text-text-primary">
                    Temps de réponse: {currentArea.responseTime}
                  </div>
                  <div className="text-sm text-text-secondary">
                    En situation d'urgence
                  </div>
                </div>
              </div>

              {/* Specialties */}
              <div className="mb-6">
                <h4 className="font-semibold text-text-primary mb-3">
                  Spécialités dans cette zone
                </h4>
                <div className="space-y-2">
                  {currentArea.specialties.map((specialty, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-accent-100 rounded-full flex items-center justify-center">
                        <Icon name="Check" size={14} className="text-accent" />
                      </div>
                      <span className="text-text-secondary">{specialty}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects Count */}
              <div className="flex items-center justify-between p-4 bg-background rounded-lg border border-border">
                <div className="flex items-center space-x-3">
                  <Icon name="Building" size={20} className="text-secondary" />
                  <span className="font-medium text-text-primary">Projets réalisés</span>
                </div>
                <div className="text-2xl font-bold text-secondary">{currentArea.projects}</div>
              </div>
            </div>

            {/* Contact for This Area */}
            <div className="bg-gradient-to-r from-primary to-primary-600 rounded-2xl p-6 text-white">
              <h4 className="text-xl font-bold mb-3">
                Intervention dans {currentArea.name}
              </h4>
              <p className="mb-4 opacity-90">
                Contactez-nous pour une intervention dans cette zone
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => window.location.href = 'tel:+33782885505'}
                  className="flex items-center justify-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
                >
                  <Icon name="Phone" size={18} />
                  <span>Appeler Maintenant</span>
                </button>
                <button
                  onClick={() => window.location.href = 'mailto:contact@bengfermetures.fr'}
                  className="flex items-center justify-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
                >
                  <Icon name="Mail" size={18} />
                  <span>Envoyer un Email</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaMap;