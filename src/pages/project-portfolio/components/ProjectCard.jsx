import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDetails }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="bg-background border border-border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-surface">
        <Image
          src={project.beforeImage}
          alt={`${project.title} - Before`}
          className={`w-full h-full object-cover transition-all duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleImageLoad}
        />
        
        {/* Overlay with project type */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            project.category === 'residential' ?'bg-accent text-accent-foreground'
              : project.category === 'commercial' ?'bg-secondary text-secondary-foreground' :'bg-primary text-primary-foreground'
          }`}>
            {project.categoryLabel}
          </span>
        </div>

        {/* Service type badge */}
        <div className="absolute top-4 right-4">
          <div className="bg-background/90 backdrop-blur-sm px-2 py-1 rounded-lg">
            <Icon name={project.serviceIcon} size={16} className="text-text-primary" />
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <Button
              variant="primary"
              size="sm"
              onClick={() => onViewDetails(project)}
              iconName="Eye"
              iconPosition="left"
              className="w-full"
            >
              Voir les détails
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold text-text-primary line-clamp-2">
            {project.title}
          </h3>
          <div className="flex items-center space-x-1 text-warning ml-2">
            {[...Array(5)].map((_, i) => (
              <Icon
                key={i}
                name="Star"
                size={14}
                className={i < project.rating ? 'fill-current' : 'text-surface-300'}
              />
            ))}
          </div>
        </div>

        <p className="text-text-secondary text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Project details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-text-secondary">Localisation:</span>
            <span className="text-text-primary font-medium">{project.location}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-text-secondary">Durée:</span>
            <span className="text-text-primary font-medium">{project.duration}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-text-secondary">Année:</span>
            <span className="text-text-primary font-medium">{project.year}</span>
          </div>
        </div>

        {/* Key features */}
        <div className="flex flex-wrap gap-2">
          {project.features.slice(0, 3).map((feature, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-surface text-text-secondary text-xs rounded-md"
            >
              {feature}
            </span>
          ))}
          {project.features.length > 3 && (
            <span className="px-2 py-1 bg-surface text-text-secondary text-xs rounded-md">
              +{project.features.length - 3} autres
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;