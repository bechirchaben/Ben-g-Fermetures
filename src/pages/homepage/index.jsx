import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ServiceFinder from './components/ServiceFinder';
import TrustSection from './components/TrustSection';
import EmergencyBanner from './components/EmergencyBanner';
import QuoteEnginePreview from './components/QuoteEnginePreview';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Service Finder */}
      <ServiceFinder />
      
      {/* Trust Building Section */}
      <TrustSection />
      
      {/* Quote Engine Preview */}
      <QuoteEnginePreview />
      
      {/* Emergency Contact Banner */}
      <EmergencyBanner />
      
      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 lg:py-16">
        <div className="container-max section-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg">
                  <svg 
                    viewBox="0 0 24 24" 
                    className="w-7 h-7 text-white"
                    fill="currentColor"
                  >
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold">BEN-G Fermetures</div>
                  <div className="text-sm text-gray-300">Gardiens de Votre Espace</div>
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Spécialiste des fermetures et de la sécurité depuis plus de 13 ans. 
                Votre protection est notre précision, votre tranquillité notre engagement.
              </p>
              <div className="flex space-x-4">
                <div className="text-sm">
                  <div className="font-semibold text-primary mb-1">Urgence 24/7</div>
                  <div className="text-gray-300">+33 7 82 88 55 05</div>
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-secondary mb-1">Devis Gratuit</div>
                  <div className="text-gray-300">contact@bengfermetures.fr</div>
                  <div className="text-gray-300">urgences@bengfermetures.fr</div>
                </div>
              </div>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Nos Services</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Rideaux et Grilles</li>
                <li>Portes Résidentielles</li>
                <li>Portes Industrielles</li>
                <li>Portails</li>
                <li>Stores Bannes</li>
                <li>Volets Roulants</li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact</h4>
              <div className="space-y-3 text-sm text-gray-300">
                <div>
                  <div className="font-medium">Siège Social</div>
                  <div>39 Rue de la Gare de Reuilly</div>
                  <div>75012 Paris, France</div>
                </div>
                <div>
                  <div className="font-medium">Horaires</div>
                  <div>Lun-Sam: 8h-18h</div>
                  <div className="text-primary">Urgences: 24/7</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} BEN-G Fermetures. Tous droits réservés.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
              <a href="#" className="hover:text-white transition-colors">CGV</a>
              <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;