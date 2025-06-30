import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ProjectCard from './components/ProjectCard';
import FilterBar from './components/FilterBar';
import ProjectModal from './components/ProjectModal';
import StatsSection from './components/StatsSection';
import CTASection from './components/CTASection';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const ProjectPortfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeService, setActiveService] = useState('all');
  const [activeLocation, setActiveLocation] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const projectsPerPage = 12;

  // Mock project data
  const allProjects = [
    {
      id: 1,
      title: "Villa Moderne - Sécurisation Complète",
      description: "Installation complète de volets roulants électriques et portail automatique pour une villa contemporaine de 250m².",
      category: "residential",
      categoryLabel: "Résidentiel",
      serviceType: "Volets Roulants + Portail",
      serviceIcon: "Layers",
      location: "Neuilly-sur-Seine",
      duration: "3 jours",
      year: "2024",
      surface: "250m²",
      materials: "Aluminium thermolaqué",
      rating: 5,
      beforeImage: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      additionalImages: [
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop"
      ],
      features: ["Motorisation Somfy", "Télécommande", "Détecteur d\'obstacle", "Garantie 10 ans", "Installation certifiée"],
      testimonial: {
        name: "Marie Dubois",
        role: "Propriétaire",
        avatar: "https://randomuser.me/api/portraits/women/32.jpg",
        comment: "Installation parfaite, équipe très professionnelle. Nous nous sentons beaucoup plus en sécurité maintenant."
      }
    },
    {
      id: 2,
      title: "Boutique Centre-Ville - Rideau Métallique",
      description: "Remplacement d'urgence d'un rideau métallique endommagé pour une boutique en centre-ville avec contraintes d'accès.",
      category: "commercial",
      categoryLabel: "Commercial",
      serviceType: "Rideau Métallique",
      serviceIcon: "Shield",
      location: "Lyon 2ème",
      duration: "1 jour",
      year: "2024",
      surface: "45m²",
      materials: "Acier galvanisé",
      rating: 5,
      beforeImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      additionalImages: [
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=600&fit=crop"
      ],
      features: ["Intervention d\'urgence", "Motorisation", "Serrure 3 points", "Anti-effraction", "Maintenance incluse"],
      testimonial: {
        name: "Pierre Martin",
        role: "Commerçant",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        comment: "Service d\'urgence exceptionnel ! Problème résolu en 24h, je recommande vivement BENG."
      }
    },
    {
      id: 3,
      title: "Maison Familiale - Menuiserie Aluminium",
      description: "Rénovation complète des fenêtres et baies vitrées d\'une maison des années 80 avec amélioration de l\'isolation thermique.",
      category: "residential",
      categoryLabel: "Résidentiel",
      serviceType: "Menuiserie Aluminium",
      serviceIcon: "Square",
      location: "Versailles",
      duration: "5 jours",
      year: "2023",
      surface: "180m²",
      materials: "Aluminium à rupture de pont thermique",
      rating: 5,
      beforeImage: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
      additionalImages: [
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=800&h=600&fit=crop"
      ],
      features: ["Double vitrage", "Isolation renforcée", "Ouverture oscillo-battante", "Garantie 15 ans", "Crédit d\'impôt"],
      testimonial: {
        name: "Sophie Leroy",
        role: "Propriétaire",
        avatar: "https://randomuser.me/api/portraits/women/28.jpg",
        comment: "Transformation incroyable ! La maison est plus lumineuse et nos factures de chauffage ont diminué de 30%."
      }
    },
    {
      id: 4,
      title: "Restaurant Terrasse - Store Banne Motorisé",
      description: "Installation d\'un store banne de grande dimension pour la terrasse d\'un restaurant avec système de récupération d\'eau de pluie.",
      category: "commercial",
      categoryLabel: "Commercial",
      serviceType: "Store Banne",
      serviceIcon: "Umbrella",
      location: "Cannes",
      duration: "2 jours",
      year: "2024",
      surface: "80m²",
      materials: "Toile acrylique Dickson",
      rating: 5,
      beforeImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop",
      additionalImages: [
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800&h=600&fit=crop"
      ],
      features: ["Motorisation Somfy", "Capteur vent/soleil", "Éclairage LED intégré", "Toile déperlante", "Garantie 7 ans"],
      testimonial: {
        name: "Jean-Luc Moreau",
        role: "Restaurateur",
        avatar: "https://randomuser.me/api/portraits/men/52.jpg",
        comment: "Parfait pour notre terrasse ! Nos clients apprécient le confort et nous avons gagné des places assises."
      }
    },
    {
      id: 5,
      title: "Copropriété - Portes d\'Entrée Sécurisées",
      description: "Remplacement de 12 portes d\'entrée d\'immeuble avec système de contrôle d\'accès et interphone vidéo intégré.",
      category: "residential",
      categoryLabel: "Résidentiel",
      serviceType: "Portes d\'Entrée",
      serviceIcon: "Door",
      location: "Boulogne-Billancourt",
      duration: "7 jours",
      year: "2023",
      surface: "Immeuble 4 étages",
      materials: "Acier et aluminium",
      rating: 4,
      beforeImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      additionalImages: [
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop"
      ],
      features: ["Contrôle d\'accès", "Interphone vidéo", "Serrure multipoints", "Blindage A2P", "Maintenance 2 ans"],
      testimonial: {
        name: "Conseil Syndical",
        role: "Copropriété Les Jardins",
        avatar: "https://randomuser.me/api/portraits/men/38.jpg",
        comment: "Installation coordonnée parfaitement. Les résidents sont très satisfaits du niveau de sécurité."
      }
    },
    {
      id: 6,
      title: "Urgence Nuit - Réparation Volet Bloqué",
      description: "Intervention d\'urgence à 2h du matin pour déblocage d\'un volet roulant électrique suite à une panne de moteur.",
      category: "emergency",
      categoryLabel: "Urgence",
      serviceType: "Réparation Volet",
      serviceIcon: "AlertTriangle",
      location: "Paris 16ème",
      duration: "2 heures",
      year: "2024",
      surface: "Fenêtre 2m x 1.5m",
      materials: "Remplacement moteur Somfy",
      rating: 5,
      beforeImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
      additionalImages: [
        "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=800&h=600&fit=crop"
      ],
      features: ["Intervention 24/7", "Diagnostic gratuit", "Pièces d\'origine", "Garantie 2 ans", "Devis transparent"],
      testimonial: {
        name: "Catherine Blanc",
        role: "Particulier",
        avatar: "https://randomuser.me/api/portraits/women/45.jpg",
        comment: "Service d\'urgence remarquable ! Technicien arrivé rapidement, problème résolu efficacement."
      }
    },
    {
      id: 7,
      title: "Entrepôt Logistique - Portail Industriel",
      description: "Installation d'un portail coulissant automatique de 8 mètres pour un entrepôt logistique avec système de sécurité renforcé.",
      category: "commercial",
      categoryLabel: "Commercial",
      serviceType: "Portail Industriel",
      serviceIcon: "DoorOpen",
      location: "Roissy",
      duration: "4 jours",
      year: "2023",
      surface: "Portail 8m x 3m",
      materials: "Acier galvanisé thermolaqué",
      rating: 5,
      beforeImage: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800&h=600&fit=crop",
      additionalImages: [
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop"
      ],
      features: ["Motorisation industrielle", "Contrôle d\'accès", "Détection véhicule", "Éclairage automatique", "Maintenance préventive"],
      testimonial: {
        name: "Marc Rousseau",
        role: "Directeur Logistique",
        avatar: "https://randomuser.me/api/portraits/men/41.jpg",
        comment: "Installation parfaite pour nos besoins industriels. Fiabilité et sécurité au rendez-vous."
      }
    },
    {
      id: 8,
      title: "Pavillon Années 70 - Rénovation Complète",
      description: "Modernisation complète d\'un pavillon avec remplacement de tous les volets, fenêtres et porte d\'entrée.",
      category: "residential",
      categoryLabel: "Résidentiel",
      serviceType: "Rénovation Complète",
      serviceIcon: "Home",
      location: "Meaux",
      duration: "10 jours",
      year: "2023",
      surface: "200m²",
      materials: "Aluminium et PVC",
      rating: 5,
      beforeImage: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      additionalImages: [
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop"
      ],
      features: ["Isolation thermique", "Volets électriques", "Triple vitrage", "Porte blindée", "Domotique intégrée"],
      testimonial: {
        name: "Famille Durand",
        role: "Propriétaires",
        avatar: "https://randomuser.me/api/portraits/women/35.jpg",
        comment: "Transformation complète de notre maison ! Travail soigné et équipe très professionnelle."
      }
    }
  ];

  // Filter projects based on active filters and search term
  const filteredProjects = allProjects.filter(project => {
    const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
    const matchesService = activeService === 'all' || project.serviceType.toLowerCase().includes(activeService);
    const matchesLocation = activeLocation === 'all' || project.location.toLowerCase().includes(activeLocation.toLowerCase());
    const matchesSearch = searchTerm === '' || 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesService && matchesLocation && matchesSearch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, startIndex + projectsPerPage);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, activeService, activeLocation, searchTerm]);

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleClearFilters = () => {
    setActiveCategory('all');
    setActiveService('all');
    setActiveLocation('all');
    setSearchTerm('');
  };

  const handlePageChange = (page) => {
    setIsLoading(true);
    setCurrentPage(page);
    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
  };

  return (
    <>
      <Helmet>
        <title>Portfolio de Réalisations - BENG Fermetures | Projets de Qualité</title>
        <meta name="description" content="Découvrez notre portfolio de réalisations : volets roulants, menuiserie aluminium, portails automatiques, stores bannes. Plus de 500 projets réussis en Île-de-France." />
        <meta name="keywords" content="portfolio BENG, réalisations fermetures, projets volets roulants, menuiserie aluminium, portails automatiques, avant après" />
        <link rel="canonical" href="https://beng-fermetures.fr/project-portfolio" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
          <div className="container-max section-padding">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary to-secondary rounded-full">
                <Icon name="Image" size={32} className="text-white" />
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
                Portfolio de Nos Réalisations
              </h1>
              
              <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                Découvrez nos projets de fermetures et sécurisation qui transforment 
                les espaces de vie et de travail de nos clients. Chaque réalisation 
                témoigne de notre expertise et de notre engagement qualité.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  variant="primary"
                  size="lg"
                  iconName="Calculator"
                  iconPosition="left"
                  onClick={() => window.location.href = '/contact-service-areas?type=quote'}
                >
                  Demander un Devis
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Phone"
                  iconPosition="left"
                  onClick={() => window.location.href = 'tel:+33782885505'}
                >
                  Nous Contacter
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12">
          <div className="container-max section-padding">
            <StatsSection 
              totalProjects={allProjects.length}
              filteredCount={filteredProjects.length}
            />
          </div>
        </section>

        {/* Filter and Projects Section */}
        <section className="py-12">
          <div className="container-max section-padding">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Filter Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <FilterBar
                    activeCategory={activeCategory}
                    onCategoryChange={setActiveCategory}
                    activeService={activeService}
                    onServiceChange={setActiveService}
                    activeLocation={activeLocation}
                    onLocationChange={setActiveLocation}
                    searchTerm={searchTerm}
                    onSearchChange={setSearchTerm}
                    onClearFilters={handleClearFilters}
                  />
                </div>
              </div>

              {/* Projects Grid */}
              <div className="lg:col-span-3">
                {/* Results Header */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-text-primary">
                    {filteredProjects.length === 0 
                      ? 'Aucun projet trouvé' 
                      : `${filteredProjects.length} projet${filteredProjects.length > 1 ? 's' : ''} trouvé${filteredProjects.length > 1 ? 's' : ''}`
                    }
                  </h2>
                  
                  {filteredProjects.length > 0 && (
                    <div className="text-sm text-text-secondary">
                      Page {currentPage} sur {totalPages}
                    </div>
                  )}
                </div>

                {/* Projects Grid */}
                {isLoading ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {[...Array(projectsPerPage)].map((_, index) => (
                      <div key={index} className="bg-surface rounded-xl h-96 animate-pulse" />
                    ))}
                  </div>
                ) : filteredProjects.length === 0 ? (
                  <div className="text-center py-12">
                    <Icon name="Search" size={48} className="text-text-secondary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-text-primary mb-2">
                      Aucun projet trouvé
                    </h3>
                    <p className="text-text-secondary mb-6">
                      Essayez de modifier vos critères de recherche ou de supprimer certains filtres.
                    </p>
                    <Button
                      variant="outline"
                      onClick={handleClearFilters}
                      iconName="RotateCcw"
                      iconPosition="left"
                    >
                      Réinitialiser les filtres
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                      {currentProjects.map((project) => (
                        <ProjectCard
                          key={project.id}
                          project={project}
                          onViewDetails={handleViewDetails}
                        />
                      ))}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                      <div className="flex items-center justify-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handlePageChange(currentPage - 1)}
                          disabled={currentPage === 1}
                          iconName="ChevronLeft"
                        />
                        
                        {[...Array(totalPages)].map((_, index) => {
                          const page = index + 1;
                          return (
                            <Button
                              key={page}
                              variant={currentPage === page ? 'primary' : 'outline'}
                              size="sm"
                              onClick={() => handlePageChange(page)}
                              className="min-w-[40px]"
                            >
                              {page}
                            </Button>
                          );
                        })}
                        
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handlePageChange(currentPage + 1)}
                          disabled={currentPage === totalPages}
                          iconName="ChevronRight"
                        />
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container-max section-padding">
            <CTASection />
          </div>
        </section>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </>
  );
};

export default ProjectPortfolio;