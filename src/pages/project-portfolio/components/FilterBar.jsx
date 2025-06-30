import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FilterBar = ({ 
  activeCategory, 
  onCategoryChange, 
  activeService, 
  onServiceChange, 
  activeLocation, 
  onLocationChange,
  searchTerm,
  onSearchChange,
  onClearFilters 
}) => {
  const categories = [
    { id: 'all', label: 'Tous les projets', icon: 'Grid3X3' },
    { id: 'residential', label: 'Résidentiel', icon: 'Home' },
    { id: 'commercial', label: 'Commercial', icon: 'Building2' },
    { id: 'emergency', label: 'Urgences', icon: 'AlertTriangle' }
  ];

  const services = [
    { id: 'all', label: 'Tous services', icon: 'Settings' },
    { id: 'menuiserie', label: 'Menuiserie Alu', icon: 'Square' },
    { id: 'volets', label: 'Volets Roulants', icon: 'Layers' },
    { id: 'rideaux', label: 'Rideaux Métalliques', icon: 'Shield' },
    { id: 'stores', label: 'Stores Bannes', icon: 'Umbrella' },
    { id: 'portails', label: 'Portails Auto', icon: 'DoorOpen' },
    { id: 'portes', label: 'Portes', icon: 'Door' }
  ];

  const locations = [
    { id: 'all', label: 'Toutes zones' },
    { id: 'paris', label: 'Paris' },
    { id: 'lyon', label: 'Lyon' },
    { id: 'marseille', label: 'Marseille' },
    { id: 'toulouse', label: 'Toulouse' },
    { id: 'nice', label: 'Nice' }
  ];

  const hasActiveFilters = activeCategory !== 'all' || activeService !== 'all' || activeLocation !== 'all' || searchTerm;

  return (
    <div className="bg-background border border-border rounded-xl p-6 shadow-sm">
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <Icon 
            name="Search" 
            size={20} 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" 
          />
          <input
            type="text"
            placeholder="Rechercher un projet..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
          />
        </div>
      </div>

      {/* Category Filters */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-text-primary mb-3">Type de projet</h4>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? 'primary' : 'outline'}
              size="sm"
              onClick={() => onCategoryChange(category.id)}
              iconName={category.icon}
              iconPosition="left"
              className="text-sm"
            >
              {category.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Service Filters */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-text-primary mb-3">Service</h4>
        <div className="flex flex-wrap gap-2">
          {services.map((service) => (
            <Button
              key={service.id}
              variant={activeService === service.id ? 'secondary' : 'outline'}
              size="sm"
              onClick={() => onServiceChange(service.id)}
              iconName={service.icon}
              iconPosition="left"
              className="text-sm"
            >
              {service.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Location Filters */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-text-primary mb-3">Localisation</h4>
        <div className="flex flex-wrap gap-2">
          {locations.map((location) => (
            <Button
              key={location.id}
              variant={activeLocation === location.id ? 'success' : 'outline'}
              size="sm"
              onClick={() => onLocationChange(location.id)}
              className="text-sm"
            >
              {location.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <div className="pt-4 border-t border-border">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            iconName="X"
            iconPosition="left"
            className="text-text-secondary hover:text-text-primary"
          >
            Effacer tous les filtres
          </Button>
        </div>
      )}
    </div>
  );
};

export default FilterBar;