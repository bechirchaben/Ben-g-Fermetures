import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ServiceFinder = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 'rideaux',
      name: 'Rideaux et Grilles',
      icon: 'Home',
      description: 'Idéal pour fenêtres, portes-fenêtres et vérandas. Conçus en aluminium, ces rideaux offrent un design moderne, une isolation thermique performante et une fabrication entièrement sur mesure.',
      image: './assets/images/rideau-metalique.png',
      features: ['Sur mesure', 'Isolation thermique', 'Design moderne']
    },
    {
      id: 'volets',
      name: 'Volets Roulants',
      icon: 'Shield',
      description: 'Disponibles en version manuelle ou motorisée, nos volets roulants renforcent la sécurité de votre habitat tout en assurant une isolation thermique et phonique optimale.',
      image: './assets/images/Volet roulant manuel.png',
      features: ['Motorisation', 'Sécurité renforcée', 'Isolation phonique']
    },
    {
      id: 'résidentielles',
      name: 'Portes Résidentielles',
      icon: 'Building',
      description: 'Conçues pour résister aux effractions, ces portes allient sécurité, motorisation moderne et facilité de maintenance pour les maisons individuelles ou les résidences sécurisées.',
      image: './assets/images/porte-blindee.png',
      features: ['Anti-effraction', 'Motorisation', 'Maintenance']
    },
    {
      id: 'stores',
      name: 'Stores Bannes',
      icon: 'Sun',
      description: 'Profitez de vos extérieurs avec style ! Nos stores bannes apportent de l’ombre et du design à vos terrasses grâce à des toiles techniques, des options motorisées et une personnalisation totale.',
      image: './assets/images/store banne.png',
      features: ['Toiles techniques', 'Motorisation', 'Design personnalisé']
    },
    {
      id: 'portails',
      name: 'Portails',
      icon: 'DoorOpen',
      description: 'Portails coulissants ou battants équipés de systèmes d’automatisation. Design soigné, commande à distance et haute sécurité pour valoriser et protéger votre propriété.',
      image: './assets/images/portail battant.png',
      features: ['Automatisation', 'Télécommande', 'Sécurité']
    },
    {
      id: 'industrielles',
      name: 'Portes Industrielles',
      icon: 'Door',
      description: 'Parfaites pour les sites industriels et entrepôts, nos portes offrent un blindage solide, une fermeture multipoints et un design professionnel exclusif.',
      image: './assets/images/sectionnel-industrielle.png',
      features: ['Blindage', 'Multi-points', 'Design exclusif']
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container-max section-padding">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Nos Spécialités
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Découvrez notre gamme complète de solutions de fermetures et de sécurité, 
            adaptées à vos besoins résidentiels et commerciaux.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Service Icon */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name={service.icon} size={24} className="text-white" />
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
                <p className="text-text-secondary mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-surface text-text-secondary text-sm rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  to="/services-overview"
                  className="inline-flex items-center text-primary font-medium hover:text-primary-700 transition-colors group"
                >
                  En savoir plus
                  <Icon 
                    name="ArrowRight" 
                    size={16} 
                    className="ml-2 group-hover:translate-x-1 transition-transform" 
                  />
                </Link>
              </div>

              {/* Hover Overlay */}
              {hoveredService === service.id && (
                <div className="absolute inset-0 bg-primary/5 pointer-events-none transition-opacity duration-300"></div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link
            to="/services-overview"
            className="inline-flex items-center px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary-800 transition-colors"
          >
            Voir tous nos services
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceFinder;