import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CTASection = () => {
  const handleQuoteRequest = () => {
    window.location.href = '/contact-service-areas?type=quote';
  };

  const handleEmergencyCall = () => {
    window.location.href = 'tel:+33782885505';
  };

  const handleConsultation = () => {
    window.location.href = '/contact-service-areas?type=consultation';
  };

  return (
    <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 lg:p-12 text-center text-white">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-white/20 backdrop-blur-sm rounded-full">
          <Icon name="Sparkles" size={32} className="text-white" />
        </div>
        
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Prêt à Transformer Votre Espace ?
        </h2>
        
        <p className="text-xl text-white/90 mb-8 leading-relaxed">
          Rejoignez nos centaines de clients satisfaits et bénéficiez de notre expertise 
          pour sécuriser et embellir votre propriété avec des solutions sur mesure.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="secondary"
            size="lg"
            onClick={handleQuoteRequest}
            iconName="Calculator"
            iconPosition="left"
            className="bg-white text-primary hover:bg-white/90 min-w-[200px]"
          >
            Devis Gratuit
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            onClick={handleConsultation}
            iconName="MessageCircle"
            iconPosition="left"
            className="border-white text-white hover:bg-white hover:text-primary min-w-[200px]"
          >
            Consultation
          </Button>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center space-x-2">
              <Icon name="Phone" size={20} className="text-white/80" />
              <span className="text-white/90">Urgence 24/7</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={20} className="text-white/80" />
              <span className="text-white/90">Garantie 10 ans</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="MapPin" size={20} className="text-white/80" />
              <span className="text-white/90">Service local</span>
            </div>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={handleEmergencyCall}
            iconName="AlertTriangle"
            iconPosition="left"
            className="mt-4 text-white hover:bg-white/10 animate-pulse-emergency"
          >
            Urgence ? Appelez maintenant !
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CTASection;