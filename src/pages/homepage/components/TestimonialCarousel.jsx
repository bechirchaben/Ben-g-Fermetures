import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Marie Dubois',
      location: 'Résidentiel - Lyon',
      service: 'Volets Roulants Électriques',
      rating: 5,
      comment: `Intervention parfaite pour l'installation de nos volets roulants. L'équipe BENG a été très professionnelle, ponctuelle et soignée. Nos enfants se sentent maintenant en sécurité et nous dormons tranquilles. Le système de motorisation fonctionne parfaitement depuis 2 ans.`,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      projectImage: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      outcome: 'Sécurité renforcée, isolation phonique améliorée'
    },
    {
      id: 2,
      name: 'Jean-Pierre Martin',
      location: 'Commercial - Marseille',
      service: 'Rideaux Métalliques',
      rating: 5,
      comment: `BENG a équipé notre magasin d'un rideau métallique haute sécurité. Service d'urgence exceptionnel quand nous avons eu un problème un dimanche soir. Ils sont intervenus en moins d'une heure ! Professionnalisme et réactivité au top.`,image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',projectImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',outcome: 'Protection anti-effraction, tranquillité d\'esprit'
    },
    {
      id: 3,
      name: 'Sophie Leroy',
      location: 'Résidentiel - Nice',
      service: 'Portail Automatique',
      rating: 5,
      comment: `Installation d'un portail coulissant automatique impeccable. L'équipe a pris le temps de nous expliquer le fonctionnement et la maintenance. Trois ans après, aucun problème et un service après-vente toujours disponible. Je recommande vivement !`,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      projectImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      outcome: 'Confort d\'accès, sécurité automatisée'
    },
    {
      id: 4,
      name: 'Michel Rousseau',
      location: 'Industriel - Toulouse',
      service: 'Portes Industrielles',
      rating: 5,
      comment: `BENG a équipé notre entrepôt de portes sectionnelles industrielles. Respect des délais, qualité des matériaux et installation parfaite. Leur expertise technique nous a permis d'optimiser nos flux logistiques tout en renforçant la sécurité.`,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',projectImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',outcome: 'Optimisation logistique, sécurité industrielle'
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={index < rating ? "text-yellow-400 fill-current" : "text-gray-300"}
      />
    ));
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container-max section-padding">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Témoignages Clients
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Découvrez les retours de nos clients satisfaits et leurs projets réalisés 
            avec BEN-G Fermetures.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
                    {/* Testimonial Content */}
                    <div className="flex flex-col justify-center">
                      {/* Rating */}
                      <div className="flex items-center mb-4">
                        {renderStars(testimonial.rating)}
                        <span className="ml-2 text-sm text-text-secondary">
                          {testimonial.rating}/5
                        </span>
                      </div>

                      {/* Comment */}
                      <blockquote className="text-lg text-text-primary mb-6 leading-relaxed">
                        "{testimonial.comment}"
                      </blockquote>

                      {/* Outcome */}
                      <div className="bg-accent/10 rounded-lg p-4 mb-6">
                        <div className="flex items-center mb-2">
                          <Icon name="CheckCircle" size={16} className="text-accent mr-2" />
                          <span className="text-sm font-medium text-accent">Résultat obtenu</span>
                        </div>
                        <p className="text-sm text-text-secondary">{testimonial.outcome}</p>
                      </div>

                      {/* Client Info */}
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-semibold text-text-primary">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-text-secondary">
                            {testimonial.location}
                          </div>
                          <div className="text-sm text-primary font-medium">
                            {testimonial.service}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Project Image */}
                    <div className="relative">
                      <div className="aspect-[4/3] rounded-xl overflow-hidden">
                        <Image
                          src={testimonial.projectImage}
                          alt={`Projet ${testimonial.service}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        {testimonial.service}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
            aria-label="Témoignage précédent"
          >
            <Icon name="ChevronLeft" size={20} className="text-text-primary" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
            aria-label="Témoignage suivant"
          >
            <Icon name="ChevronRight" size={20} className="text-text-primary" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;