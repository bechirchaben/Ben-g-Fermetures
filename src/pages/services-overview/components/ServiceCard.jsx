import React, { useState } from 'react';

import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ServiceCard = ({ service, onQuoteRequest }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === service.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? service.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-background border border-border rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Image Gallery */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={service.images[currentImageIndex]}
          alt={`${service.name} - Image ${currentImageIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Image Navigation */}
        {service.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200"
            >
              <Icon name="ChevronLeft" size={16} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200"
            >
              <Icon name="ChevronRight" size={16} />
            </button>
            
            {/* Image Indicators */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
              {service.images.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}

        {/* Service Badge */}
        <div className="absolute top-3 left-3">
          <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
            {service.category}
          </div>
        </div>

        {/* Emergency Badge */}
        {service.emergency && (
          <div className="absolute top-3 right-3">
            <div className="bg-warning text-warning-foreground px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
              <Icon name="Zap" size={12} />
              <span>24/7</span>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-text-primary mb-2">{service.name}</h3>
            <p className="text-text-secondary text-sm">{service.shortDescription}</p>
          </div>
          <div className="flex items-center space-x-1 text-warning">
            {[...Array(5)].map((_, i) => (
              <Icon
                key={i}
                name="Star"
                size={14}
                className={i < service.rating ? 'fill-current' : 'stroke-current fill-none'}
              />
            ))}
            <span className="text-sm text-text-secondary ml-1">({service.reviewCount})</span>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {service.keyFeatures.slice(0, 4).map((feature, index) => (
            <div key={index} className="flex items-center space-x-2 text-sm">
              <Icon name="Check" size={14} className="text-success flex-shrink-0" />
              <span className="text-text-secondary">{feature}</span>
            </div>
          ))}
        </div>

        {/* Applications */}
        <div className="flex flex-wrap gap-2 mb-4">
          {service.applications.map((app, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-surface text-text-secondary text-xs rounded-md"
            >
              {app}
            </span>
          ))}
        </div>

        {/* Expandable Details */}
        <div className={`transition-all duration-300 ${isExpanded ? 'max-h-96' : 'max-h-0'} overflow-hidden`}>
          <div className="border-t border-border pt-4 space-y-4">
            {/* Technical Specs */}
            <div>
              <h4 className="font-semibold text-text-primary mb-2 flex items-center">
                <Icon name="Settings" size={16} className="mr-2" />
                Spécifications Techniques
              </h4>
              <div className="grid grid-cols-1 gap-2 text-sm">
                {service.technicalSpecs.map((spec, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-text-secondary">{spec.label}:</span>
                    <span className="text-text-primary font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h4 className="font-semibold text-text-primary mb-2 flex items-center">
                <Icon name="Shield" size={16} className="mr-2" />
                Avantages
              </h4>
              <ul className="space-y-1 text-sm">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Icon name="ArrowRight" size={12} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-text-secondary">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center space-x-1 text-secondary hover:text-secondary-700 text-sm font-medium transition-colors"
          >
            <span>{isExpanded ? 'Voir moins' : 'Voir plus'}</span>
            <Icon 
              name={isExpanded ? "ChevronUp" : "ChevronDown"} 
              size={16} 
            />
          </button>

          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onQuoteRequest(service)}
              iconName="Calculator"
              iconPosition="left"
            >
              Devis
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => window.location.href = `tel:+33 7 82 88 55 05`}
              iconName="Phone"
              iconPosition="left"
            >
              Appeler
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ServiceCard;