import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const CustomerProtection = () => {
  const [activeTab, setActiveTab] = useState('guarantees');

  const protectionPolicies = {
    guarantees: {
      title: 'Garanties d\'Urgence',
      icon: 'Shield',
      items: [
        {
          title: 'Intervention Garantie',
          description: 'Si nous ne pouvons pas résoudre votre problème, l\'intervention est gratuite',
          icon: 'CheckCircle'
        },
        {
          title: 'Délai Respecté',
          description: 'Remboursement partiel si nous dépassons le délai d\'intervention annoncé',
          icon: 'Clock'
        },
        {
          title: 'Qualité Assurée',
          description: 'Garantie 2 ans sur toutes les réparations d\'urgence effectuées',
          icon: 'Award'
        },
        {
          title: 'Sécurité Prioritaire',
          description: 'Sécurisation immédiate gratuite en cas d\'impossibilité de réparation',
          icon: 'Lock'
        }
      ]
    },
    pricing: {
      title: 'Tarification Transparente',
      icon: 'Calculator',
      items: [
        {
          title: 'Devis Gratuit',
          description: 'Diagnostic et devis toujours gratuits, même en urgence',
          icon: 'FileText'
        },
        {
          title: 'Prix Fixes',
          description: 'Tarifs d\'urgence clairement affichés, pas de surprises',
          icon: 'DollarSign'
        },
        {
          title: 'Paiement Flexible',
          description: 'Possibilité de paiement en plusieurs fois pour les gros montants',
          icon: 'CreditCard'
        },
      ]
    },
    followup: {
      title: 'Suivi Post-Intervention',
      icon: 'Users',
      items: [
        {
          title: 'Appel de Satisfaction',
          description: 'Contact sous 48h pour vérifier que tout fonctionne parfaitement',
          icon: 'Phone'
        },
        {
          title: 'Maintenance Préventive',
          description: 'Rappels automatiques pour l\'entretien et éviter les pannes futures',
          icon: 'Settings'
        },
        {
          title: 'Support Continu',
          description: 'Ligne directe technicien pendant 30 jours après l\'intervention',
          icon: 'Headphones'
        },
        {
          title: 'Historique Complet',
          description: 'Dossier client détaillé avec toutes les interventions et garanties',
          icon: 'Archive'
        }
      ]
    }
  };

  const emergencyStats = [
    { number: '24/7', label: 'Disponibilité', icon: 'Clock' },
    { number: '< 45min', label: 'Temps moyen', icon: 'Zap' },
    { number: '98%', label: 'Taux de résolution', icon: 'Target' },
    { number: '2 ans', label: 'Garantie', icon: 'Shield' }
  ];

  const certifications = [
    {
      name: 'Assurance Décennale',
      number: 'N° 2024-BENG-001',
      icon: 'Shield',
      description: 'Couverture complète 10 ans'
    },
    {
      name: 'Certification Qualibat',
      number: 'RGE 8621',
      icon: 'Award',
      description: 'Reconnu Garant Environnement'
    },
    {
      name: 'Agrément Préfecture',
      number: 'AP-75-2024',
      icon: 'FileCheck',
      description: 'Interventions sécurisées'
    }
  ];

  return (
    <div className="bg-white py-12 lg:py-16">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">
            Votre Protection Client
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Chez BEN-G, votre sécurité et votre satisfaction sont nos priorités absolues. 
            Découvrez nos engagements et protections client.
          </p>
        </div>

        {/* Emergency Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {emergencyStats.map((stat, index) => (
            <div key={index} className="text-center bg-surface rounded-xl p-6">
              <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-lg mx-auto mb-4">
                <Icon name={stat.icon} size={24} className="text-white" />
              </div>
              <div className="text-2xl font-bold text-text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-text-secondary font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Protection Tabs */}
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center mb-8 bg-surface rounded-xl p-2">
            {Object.entries(protectionPolicies).map(([key, policy]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === key
                    ? 'bg-white text-primary shadow-sm'
                    : 'text-text-secondary hover:text-text-primary hover:bg-white/50'
                }`}
              >
                <Icon name={policy.icon} size={18} />
                <span className="hidden sm:inline">{policy.title}</span>
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          <div className="bg-surface rounded-xl p-6 lg:p-8">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center w-16 h-16 bg-primary rounded-full mx-auto mb-4">
                <Icon name={protectionPolicies[activeTab].icon} size={32} className="text-white" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-text-primary">
                {protectionPolicies[activeTab].title}
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {protectionPolicies[activeTab].items.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-success-100 rounded-lg flex-shrink-0">
                      <Icon name={item.icon} size={20} className="text-success" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">
                        {item.title}
                      </h4>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        

        {/* Emergency Contact CTA */}
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-xl p-8 text-center text-white">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl lg:text-2xl font-bold mb-4">
              Une Urgence ? Nous Sommes Là !
            </h3>
            <p className="mb-6 opacity-90">
              Notre équipe d'intervention d'urgence est disponible 24h/24 et 7j/7 
              pour résoudre vos problèmes de fermetures en toute sécurité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+33782885505"
                className="inline-flex items-center justify-center space-x-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <Icon name="Phone" size={20} />
                <span>+33 7 82 88 55 05</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerProtection;