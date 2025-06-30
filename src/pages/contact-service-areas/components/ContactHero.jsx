import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactHero = ({ onEmergencyCall, onQuoteRequest }) => {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-background to-secondary-50 pt-24 lg:pt-32 pb-16">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-text-primary">
                Contactez BEN-G
                <span className="block text-primary">Fermetures</span>
              </h1>
              <p className="text-xl text-text-secondary leading-relaxed">
                Votre sécurité est notre priorité. Contactez-nous pour tous vos besoins en fermetures, 
                de l'urgence 24/7 aux projets sur mesure.
              </p>
            </div>

            {/* Quick Contact Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={onEmergencyCall}
                iconName="Phone"
                iconPosition="left"
                className="animate-pulse-emergency"
              >
                Urgence 24/7
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={onQuoteRequest}
                iconName="Calculator"
                iconPosition="left"
                className="text-secondary border-secondary hover:bg-secondary hover:text-secondary-foreground"
              >
                Devis Gratuit
              </Button>
            </div>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-success-100 rounded-lg flex items-center justify-center">
                  <Icon name="Clock" size={20} className="text-success" />
                </div>
                <div>
                  <div className="font-semibold text-text-primary">Réponse Rapide</div>
                  <div className="text-sm text-text-secondary">Sous 2h en urgence</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Icon name="MapPin" size={20} className="text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-text-primary">Service Local</div>
                  <div className="text-sm text-text-secondary">Toute l'Île-de-France</div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center text-white">
                <Icon name="Shield" size={120} className="mx-auto mb-4 opacity-90" />
                <div className="text-2xl font-bold mb-2">BEN-G Fermetures</div>
                <div className="text-lg opacity-90">Votre Protection, Notre Expertise</div>
              </div>
            </div>
            
            {/* Floating Contact Info */}
            <div className="absolute -bottom-6 -right-6 bg-background rounded-xl shadow-lg p-4 border border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">+33 7 82 88 55 05</div>
                <div className="text-sm text-text-secondary">Disponible 24/7</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;