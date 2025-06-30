import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showBefore, setShowBefore] = useState(true);

  if (!isOpen || !project) return null;

  const allImages = [project.beforeImage, project.afterImage, ...project.additionalImages];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  const toggleBeforeAfter = () => {
    setShowBefore(!showBefore);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-background rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-2xl font-bold text-text-primary">{project.title}</h2>
            <p className="text-text-secondary mt-1">{project.location} • {project.year}</p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            iconName="X"
            className="text-text-secondary hover:text-text-primary"
          />
        </div>

        <div className="flex flex-col lg:flex-row max-h-[calc(90vh-80px)]">
          {/* Image Gallery */}
          <div className="lg:w-2/3 relative bg-surface">
            <div className="relative h-96 lg:h-full">
              <Image
                src={allImages[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              
              {/* Image Navigation */}
              {allImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors"
                  >
                    <Icon name="ChevronLeft" size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors"
                  >
                    <Icon name="ChevronRight" size={20} />
                  </button>
                </>
              )}

              {/* Before/After Toggle */}
              {currentImageIndex < 2 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={toggleBeforeAfter}
                    iconName={showBefore ? "Eye" : "EyeOff"}
                    iconPosition="left"
                  >
                    {showBefore ? "Voir Après" : "Voir Avant"}
                  </Button>
                </div>
              )}

              {/* Image Counter */}
              <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-medium">
                {currentImageIndex + 1} / {allImages.length}
              </div>
            </div>

            {/* Thumbnail Strip */}
            {allImages.length > 1 && (
              <div className="flex space-x-2 p-4 overflow-x-auto">
                {allImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                      currentImageIndex === index 
                        ? 'border-primary' :'border-border hover:border-border-focus'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Project Details */}
          <div className="lg:w-1/3 p-6 overflow-y-auto">
            {/* Project Info */}
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  project.category === 'residential' ?'bg-accent text-accent-foreground'
                    : project.category === 'commercial' ?'bg-secondary text-secondary-foreground' :'bg-primary text-primary-foreground'
                }`}>
                  {project.categoryLabel}
                </span>
                <div className="flex items-center space-x-1 text-warning">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={16}
                      className={i < project.rating ? 'fill-current' : 'text-surface-300'}
                    />
                  ))}
                </div>
              </div>
              
              <p className="text-text-secondary mb-4">{project.description}</p>
            </div>

            {/* Project Details */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between py-2 border-b border-border">
                <span className="text-text-secondary">Service:</span>
                <span className="text-text-primary font-medium">{project.serviceType}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-border">
                <span className="text-text-secondary">Durée:</span>
                <span className="text-text-primary font-medium">{project.duration}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-border">
                <span className="text-text-secondary">Surface:</span>
                <span className="text-text-primary font-medium">{project.surface}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-border">
                <span className="text-text-secondary">Matériaux:</span>
                <span className="text-text-primary font-medium">{project.materials}</span>
              </div>
            </div>

            {/* Features */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-text-primary mb-3">Caractéristiques</h4>
              <div className="flex flex-wrap gap-2">
                {project.features.map((feature, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-surface text-text-secondary text-sm rounded-lg"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Customer Testimonial */}
            {project.testimonial && (
              <div className="mb-6 p-4 bg-surface rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <Image
                    src={project.testimonial.avatar}
                    alt={project.testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-text-primary">{project.testimonial.name}</p>
                    <p className="text-sm text-text-secondary">{project.testimonial.role}</p>
                  </div>
                </div>
                <p className="text-text-secondary italic">"{project.testimonial.comment}"</p>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="space-y-3">
              <Button
                variant="primary"
                fullWidth
                iconName="Calculator"
                iconPosition="left"
              >
                Demander un devis similaire
              </Button>
              <Button
                variant="outline"
                fullWidth
                iconName="Share2"
                iconPosition="left"
              >
                Partager ce projet
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;