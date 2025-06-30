import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Accueil', path: '/homepage', icon: 'Home' },
    { name: 'Services', path: '/services-overview', icon: 'Shield' },
    { name: 'Urgences', path: '/emergency-services', icon: 'AlertTriangle' },
    { name: 'À Propos', path: '/about-beng', icon: 'Users' },
    { name: 'Contact', path: '/contact-service-areas', icon: 'MapPin' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActivePath = (path) => location.pathname === path;

  const handleEmergencyCall = () => {
    window.location.href = 'tel:+33782885505';
  };

  const handleQuoteRequest = () => {
    window.location.href = '/contact-service-areas?type=quote';
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-security shadow-md border-b border-border'
          : 'bg-background/90 backdrop-blur-sm'
      }`}
    >
      <div className="container-max section-padding">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          <Link
            to="/homepage"
            className="flex items-center space-x-3 focus-ring rounded-lg p-2 -m-2"
            onClick={closeMenu}
          >
            <div className="flex items-center justify-center h-12 sm:h-16 w-auto">
              <img
                src="/assets/benglogo.jpeg"
                alt="Logo"
                className="h-12 sm:h-16 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus-ring ${
                  isActivePath(item.path)
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface'
                }`}
              >
                <Icon name={item.icon} size={16} />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={handleQuoteRequest}
              iconName="Calculator"
              iconPosition="left"
              className="text-secondary border-secondary hover:bg-secondary hover:text-secondary-foreground"
            >
              Devis Gratuit
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={handleEmergencyCall}
              iconName="Phone"
              iconPosition="left"
              className="animate-pulse-emergency"
            >
              Urgence 24/7
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-text-primary hover:bg-surface focus-ring transition-colors"
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pt-4 space-y-2 z-50">
            <nav>
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 focus-ring ${
                    isActivePath(item.path)
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-text-secondary hover:text-text-primary hover:bg-surface'
                  }`}
                >
                  <Icon name={item.icon} size={20} />
                  <span>{item.name}</span>
                </Link>
              ))}

              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-3 border-t border-border mt-4">
                <Button
                  variant="outline"
                  fullWidth
                  onClick={handleQuoteRequest}
                  iconName="Calculator"
                  iconPosition="left"
                  className="text-secondary border-secondary hover:bg-secondary hover:text-secondary-foreground"
                >
                  Devis Gratuit
                </Button>
                <Button
                  variant="primary"
                  fullWidth
                  onClick={handleEmergencyCall}
                  iconName="Phone"
                  iconPosition="left"
                  className="animate-pulse-emergency"
                >
                  Urgence 24/7
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Mobile Emergency Contact Sticky */}
      
    </header>
  );
};

export default Header;
