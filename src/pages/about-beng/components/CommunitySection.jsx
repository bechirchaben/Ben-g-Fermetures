import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const CommunitySection = () => {
  const communityProjects = [
    {
      id: 1,
      title: "École Primaire Jean Moulin",
      location: "Centre-ville",
      description: "Installation de volets roulants sécurisés pour protéger les salles de classe et améliorer le confort thermique.",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=300&fit=crop",
      impact: "200 élèves bénéficient d\'un environnement plus sûr",
      year: "2023"
    },
    {
      id: 2,
      title: "Mairie - Sécurisation Bâtiments",
      location: "Hôtel de Ville",
      description: "Modernisation des systèmes de fermeture pour améliorer la sécurité des bâtiments publics.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
      impact: "Sécurité renforcée pour les services publics",
      year: "2023"
    },
    {
      id: 3,
      title: "Centre Sportif Municipal",
      location: "Zone Sportive",
      description: "Installation de rideaux métalliques haute sécurité pour protéger les équipements sportifs.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      impact: "Protection des équipements communautaires",
      year: "2022"
    }
  ];

  const localSuppliers = [
    {
      name: "Métallerie Locale",
      specialty: "Fabrication sur mesure",
      partnership: "5+ ans",
      icon: "Wrench"
    },
    {
      name: "Électricité Régionale",
      specialty: "Automatismes",
      partnership: "8+ ans",
      icon: "Zap"
    },
    {
      name: "Transport Local",
      specialty: "Livraison rapide",
      partnership: "3+ ans",
      icon: "Truck"
    },
    {
      name: "Formation Technique",
      specialty: "Mise à jour compétences",
      partnership: "10+ ans",
      icon: "BookOpen"
    }
  ];

  const communityStats = [
    {
      number: "10+",
      label: "Projets Publics",
      description: "Écoles, mairies, centres sportifs"
    },
    {
      number: "100%",
      label: "Équipe Locale",
      description: "Tous nos techniciens habitent la région"
    },
    {
      number: "24h",
      label: "Délai Moyen",
      description: "Intervention d\'urgence locale"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-text-primary mb-6">
            Ancrage Local & Communauté
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            BENG Fermetures est profondément enracinée dans la communauté locale. 
            Nos partenariats et projets communautaires témoignent de notre engagement territorial.
          </p>
        </div>

{/* Community Stats */}
<div className="flex justify-center">
  <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
    {communityStats.map((stat, index) => (
      <div 
        key={index}
        className="bg-background border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
      >
        <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">{stat.number}</div>
        <div className="text-lg font-semibold text-text-primary mb-2">{stat.label}</div>
        <div className="text-sm text-text-secondary">{stat.description}</div>
      </div>
    ))}
  </div>
</div>
        {/* Community Projects */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">
              Projets Communautaires
            </h3>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Nous sommes fiers de contribuer à la sécurité et au bien-être de notre communauté 
              à travers des projets publics et des partenariats locaux.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {communityProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-background border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.year}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Icon name="MapPin" size={16} className="text-secondary" />
                    <span className="text-sm text-secondary font-medium">{project.location}</span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-text-primary mb-3">{project.title}</h4>
                  <p className="text-text-secondary mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="bg-accent-50 border border-accent-200 rounded-lg p-3">
                    <div className="flex items-center space-x-2">
                      <Icon name="Heart" size={16} className="text-accent" />
                      <span className="text-sm font-medium text-accent">Impact Communautaire</span>
                    </div>
                    <p className="text-sm text-text-secondary mt-1">{project.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Local Commitment */}
        <div className="bg-background border border-border rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-6">
                Notre Engagement Local
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg flex-shrink-0">
                    <Icon name="Users" size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-text-primary mb-2">Emploi Local</h4>
                    <p className="text-text-secondary">
                      100% de notre équipe vit et travaille dans la région, contribuant à l'économie locale.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-secondary rounded-lg flex-shrink-0">
                    <Icon name="Leaf" size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-text-primary mb-2">Écologie</h4>
                    <p className="text-text-secondary">
                      Circuits courts, recyclage des matériaux et solutions éco-responsables.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-accent rounded-lg flex-shrink-0">
                    <Icon name="HandHeart" size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-text-primary mb-2">Solidarité</h4>
                    <p className="text-text-secondary">
                      Tarifs préférentiels pour les associations et projets d'intérêt général.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500&h=400&fit=crop"
                  alt="Équipe BENG dans la communauté"
                  className="w-full h-80 object-cover"
                />
              </div>
              
              {/* Floating testimonial */}
              <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-xl p-4 shadow-xl max-w-xs">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <Icon name="Quote" size={12} className="text-white" />
                  </div>
                  <span className="text-sm font-medium text-text-primary">Témoignage</span>
                </div>
                <p className="text-sm text-text-secondary italic">
                  "BENG fait partie intégrante de notre communauté. Leur engagement local fait la différence."
                </p>
                <div className="text-xs text-primary font-medium mt-2">- Maire de la commune</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;