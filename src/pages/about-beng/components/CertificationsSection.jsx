import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CertificationsSection = () => {
  const certifications = [
    {
      id: 1,
      name: "Qualibat RGE",
      category: "Certification Qualité",
      description: "Reconnaissance officielle de notre expertise et de la qualité de nos prestations dans le domaine des fermetures.",
      icon: "Award",
      color: "primary",
      benefits: ["Garantie décennale", "Éligibilité aides publiques", "Gage de qualité"]
    },
    {
      id: 3,
      name: "Partenaire Somfy",
      category: "Expertise Technique",
      description: "Partenariat officiel avec le leader mondial de l\'automatisation, garantissant l\'excellence technique.",
      icon: "Settings",
      color: "accent",
      benefits: ["Formation continue", "Produits premium", "Support technique"]
    },
    {
      id: 4,
      name: "Certification Sécurité",
      category: "Normes & Conformité",
      description: "Respect strict des normes de sécurité et des réglementations en vigueur pour tous nos chantiers.",
      icon: "CheckCircle",
      color: "success",
      benefits: ["Conformité réglementaire", "Sécurité chantier", "Normes européennes"]
    }
  ];

  const partnerships = [
    {
      name: "Somfy",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop",
      description: "Leader mondial de l\'automatisation"
    },
    {
      name: "Bubendorff",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop",
      description: "Spécialiste volets roulants"
    },
    {
      name: "Profalux",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop",
      description: "Expert en protection solaire"
    },
    {
      name: "Nice",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop",
      description: "Automatismes portails"
    }
  ];

  const warranties = [
    {
      title: "Garantie Produits",
      duration: "2 à 10 ans",
      description: "Selon le type d\'installation et les fabricants",
      icon: "Package"
    },
    {
      title: "Garantie Main d\'Œuvre",
      duration: "2 ans",
      description: "Sur tous nos travaux d\'installation",
      icon: "Wrench"
    },
    {
      title: "Service Après-Vente",
      duration: "À vie",
      description: "Maintenance et dépannage prioritaire",
      icon: "Phone"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container-max section-padding">

        {/* Warranties */}
        <div className="bg-primary-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">
              Nos Garanties
            </h3>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Votre tranquillité d'esprit est notre priorité. Découvrez nos garanties complètes 
              qui protègent votre investissement sur le long terme.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {warranties.map((warranty, index) => (
              <div 
                key={index}
                className="bg-background border border-border rounded-xl p-6 text-center"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary rounded-xl mb-4 mx-auto">
                  <Icon name={warranty.icon} size={24} className="text-white" />
                </div>
                <h4 className="text-lg font-bold text-text-primary mb-2">{warranty.title}</h4>
                <div className="text-2xl font-bold text-primary mb-2">{warranty.duration}</div>
                <p className="text-sm text-text-secondary">{warranty.description}</p>
              </div>
            ))}
          </div>

          {/* Contact for Warranties */}
          <div className="mt-8 text-center">
            <div className="bg-background border border-border rounded-xl p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Icon name="FileText" size={20} className="text-primary" />
                <h4 className="text-lg font-bold text-text-primary">Conditions de Garantie</h4>
              </div>
              <p className="text-text-secondary mb-4">
                Toutes nos garanties sont détaillées dans nos conditions générales. 
                Contactez-nous pour plus d'informations sur la couverture spécifique à votre projet.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a 
                  href="tel:+33782885505"
                  className="flex items-center justify-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  <Icon name="Phone" size={16} />
                  <span>+33 7 82 88 55 05</span>
                </a>
                <a 
                  href="mailto:garanties@beng-fermetures.fr"
                  className="flex items-center justify-center space-x-2 bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary-800 transition-colors"
                >
                  <Icon name="Mail" size={16} />
                  <span>contact@bengfermetures.fr</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;