import React from 'react';

import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const handleEmergencyCall = () => {
    window.location.href = 'tel:+33 7 82 88 55 05';
  };

  const handleQuoteRequest = () => {
    window.location.href = '/contact-service-areas?type=quote';
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Beautiful secured home at dusk with warm interior lighting"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/60 to-slate-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-max section-padding text-center">
        <div className="max-w-4xl mx-auto">
          {/* Emergency Banner - Mobile Sticky */}
          <div className="lg:hidden fixed top-20 left-4 right-4 z-50 mb-8">
            <div className="bg-primary/95 backdrop-blur-security text-primary-foreground rounded-lg p-3 shadow-lg animate-pulse-emergency">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={20} />
                  <span className="font-semibold text-sm">Urgence 24/7</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleEmergencyCall}
                  className="text-primary-foreground hover:bg-white/20 px-3 py-1"
                >
                  Appeler
                </Button>
              </div>
            </div>
          </div>

          {/* Main Headline */}
          <div className="mb-8 pt-16 lg:pt-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-gradient bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                Gardiens de
              </span>
              <br />
              <span className="text-primary">Votre Espace</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Votre protection est notre précision. Artisanat de confiance, service d'excellence pour sécuriser ce qui compte le plus pour vous.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              variant="primary"
              size="lg"
              onClick={handleEmergencyCall}
              iconName="Phone"
              iconPosition="left"
              className="animate-pulse-emergency min-w-[200px]"
            >
              Urgence 24/7
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleQuoteRequest}
              iconName="Calculator"
              iconPosition="left"
              className="text-blue border-white hover:bg-white hover:text-slate-900 min-w-[200px]"
            >
              Devis Gratuit
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-white mb-1">13+</div>
              <div className="text-sm text-gray-300">Années d'expérience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-white mb-1">500+</div>
              <div className="text-sm text-gray-300">Installations réalisées</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-white mb-1">24/7</div>
              <div className="text-sm text-gray-300">Service d'urgence</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-white mb-1">100%</div>
              <div className="text-sm text-gray-300">Satisfaction client</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-white/60" />
      </div>
    </section>
  );
};

export default HeroSection;