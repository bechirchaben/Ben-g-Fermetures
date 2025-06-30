import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-background to-secondary-50 pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-secondary rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-accent rounded-full"></div>
      </div>

      <div className="container-max section-padding relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg">
                  <Icon name="Shield" size={24} className="text-white" />
                </div>
                <span className="text-lg font-semibold text-primary">Gardiens de Votre Espace</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-text-primary leading-tight">
                L'Histoire de
                <span className="block text-gradient">BENG Fermetures</span>
              </h1>
              
              <p className="text-xl text-text-secondary leading-relaxed">
                Depuis notre création, nous protégeons ce qui compte le plus pour les familles et les entreprises. 
                Notre mission va au-delà de l'installation - nous créons des sanctuaires où chacun se sent en sécurité.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary">13+</div>
                <div className="text-sm text-text-secondary font-medium">Années d'Expérience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-secondary">500+</div>
                <div className="text-sm text-text-secondary font-medium">Projets Réalisés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-accent">24/7</div>
                <div className="text-sm text-text-secondary font-medium">Service d'Urgence</div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center space-x-2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-border">
                <Icon name="Users" size={16} className="text-secondary" />
                <span className="text-sm font-medium text-text-primary">Équipe Locale</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=700&fit=crop"
                alt="Équipe BEN-G Fermetures au travail"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-xl p-6 shadow-xl max-w-xs">
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-accent rounded-lg">
                  <Icon name="Star" size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-text-primary">4.9/5</div>
                  <div className="text-sm text-text-secondary">Note Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;