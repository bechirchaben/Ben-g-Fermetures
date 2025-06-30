import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const EmergencyBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleEmergencyCall = () => {
    window.location.href = 'tel:+33123456789';
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Desktop Emergency Banner */}
      <div className="hidden lg:block fixed bottom-8 right-8 z-50">
        <div className="bg-primary text-primary-foreground rounded-xl shadow-2xl p-6 max-w-sm animate-pulse-emergency">
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
            aria-label="Fermer"
          >
            <Icon name="X" size={14} />
          </button>
          
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon name="Phone" size={24} />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-1">Urgence 24/7</h3>
              <p className="text-sm opacity-90 mb-3">
                Panne, effraction, blocage ? Nous intervenons en moins de 2h partout dans la région.
              </p>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleEmergencyCall}
                className="text-primary-foreground hover:bg-white/20 w-full justify-center"
                iconName="Phone"
                iconPosition="left"
              >
                Appeler maintenant
              </Button>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-white/20">
            <div className="flex items-center justify-between text-xs opacity-75">
              <span>Intervention rapide</span>
              <span>Devis gratuit</span>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default EmergencyBanner;