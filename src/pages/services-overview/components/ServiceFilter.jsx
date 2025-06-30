import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceFilter = ({ onFilterChange, activeFilters }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const filterCategories = [
    {
      id: 'type',
      label: 'Type de Service',
      options: [
        { value: 'Rideaux', label: 'Rideaux et grilles', icon: 'Home' },
        { value: 'industrielles', label: 'Portes industrielles', icon: 'Factory' },
        { value: 'Résidentielles', label: 'Portes résidentielles', icon: 'Home' },
        { value: 'Portails', label: 'Portails', icon: 'Home' },
        { value: 'VoletRoulants', label: 'Volets roulants', icon: 'Home' },
        { value: 'Store Bannes', label: 'Store Bannes', icon: 'Home' }
      ]
    },
  ];

  const handleFilterToggle = (categoryId, value) => {
    const currentFilters = activeFilters[categoryId] || [];
    const newFilters = currentFilters.includes(value)
      ? currentFilters.filter(f => f !== value)
      : [...currentFilters, value];
    
    onFilterChange(categoryId, newFilters);
  };

  const clearAllFilters = () => {
    onFilterChange('clear', null);
  };

  const getActiveFilterCount = () => {
    return Object.values(activeFilters).reduce((count, filters) => count + filters.length, 0);
  };

  return (
    <div className="bg-background border border-border rounded-xl shadow-sm">
      {/* Filter Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center space-x-3">
          <Icon name="Filter" size={20} className="text-primary" />
          <h3 className="font-semibold text-text-primary">Filtres</h3>
          {getActiveFilterCount() > 0 && (
            <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
              {getActiveFilterCount()}
            </span>
          )}
        </div>
        
        <div className="flex items-center space-x-2">
          {getActiveFilterCount() > 0 && (
            <Button
              variant="text"
              size="sm"
              onClick={clearAllFilters}
              iconName="X"
              iconPosition="left"
              className="text-text-secondary hover:text-text-primary"
            >
              Effacer
            </Button>
          )}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="lg:hidden w-8 h-8 rounded-lg hover:bg-surface flex items-center justify-center transition-colors"
          >
            <Icon 
              name={isExpanded ? "ChevronUp" : "ChevronDown"} 
              size={16} 
            />
          </button>
        </div>
      </div>

      {/* Filter Content */}
      <div className={`transition-all duration-300 lg:block ${
        isExpanded ? 'block' : 'hidden'
      }`}>
        <div className="p-4 space-y-6">
          {filterCategories.map((category) => (
            <div key={category.id}>
              <h4 className="font-medium text-text-primary mb-3 flex items-center">
                <span>{category.label}</span>
                {activeFilters[category.id]?.length > 0 && (
                  <span className="ml-2 bg-primary-100 text-primary text-xs px-2 py-1 rounded-full">
                    {activeFilters[category.id].length}
                  </span>
                )}
              </h4>
              
              <div className="space-y-2">
                {category.options.map((option) => {
                  const isActive = activeFilters[category.id]?.includes(option.value);
                  
                  return (
                    <button
                      key={option.value}
                      onClick={() => handleFilterToggle(category.id, option.value)}
                      className={`w-full flex items-center space-x-3 p-3 rounded-lg border transition-all duration-200 ${
                        isActive
                          ? 'border-primary bg-primary-50 text-primary' :'border-border hover:border-primary-300 hover:bg-surface text-text-secondary hover:text-text-primary'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        isActive ? 'bg-primary text-white' : 'bg-surface'
                      }`}>
                        <Icon name={option.icon} size={16} />
                      </div>
                      <span className="font-medium text-sm">{option.label}</span>
                      {isActive && (
                        <Icon name="Check" size={16} className="ml-auto" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceFilter;