import React from 'react';
import Header from '../../components/ui/Header';
import ContactHero from './components/ContactHero';
import ContactMethods from './components/ContactMethods';
import ServiceAreaMap from './components/ServiceAreaMap';
import ContactForm from './components/ContactForm';
import BusinessInfo from './components/BusinessInfo';
import emailjs from 'emailjs-com';
const ContactServiceAreas = () => {
  const handleEmergencyCall = () => {
    window.location.href = 'tel:+33782885505';
  };

  const handleQuoteRequest = () => {
    // Scroll to contact form
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <ContactHero 
          onEmergencyCall={handleEmergencyCall}
          onQuoteRequest={handleQuoteRequest}
        />

        {/* Contact Methods */}
        <ContactMethods />

        {/* Service Area Map */}
        <ServiceAreaMap />

        {/* Contact Form */}
        <div id="contact-form">
          <ContactForm />
        </div>

        {/* Business Information */}
        <BusinessInfo />
      </main>

      {/* Footer */}
      <footer className="bg-text-primary text-text-inverse py-12">
        <div className="container-max section-padding">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="currentColor">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold">BEN-G Fermetures</div>
                  <div className="text-sm opacity-80">Votre sécurité, notre expertise</div>
                </div>
              </div>
              <p className="text-text-inverse/80 mb-4 max-w-md">
                Spécialiste des fermetures depuis plus de 13 ans, BEN-G vous accompagne 
                pour tous vos projets de sécurisation résidentielle et commerciale.
              </p>
              <div className="flex space-x-4">
                <button 
                  onClick={handleEmergencyCall}
                  className="bg-primary hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium transition-colors animate-pulse-emergency"
                >
                  Urgence 24/7
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Liens Rapides</h4>
              <ul className="space-y-2 text-sm text-text-inverse/80">
                <li><a href="/services-overview" className="hover:text-white transition-colors">Nos Services</a></li>
                <li><a href="/emergency-services" className="hover:text-white transition-colors">Urgences</a></li>
                <li><a href="/project-portfolio" className="hover:text-white transition-colors">Réalisations</a></li>
                <li><a href="/about-beng" className="hover:text-white transition-colors">À Propos</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-text-inverse/80">
                <div>39 Rue de la Gare de Reuilly</div>
                <div>75012 Paris</div>
                <div className="pt-2">
                  <div>Tél:+33 7 82 88 55 05</div>
                  <div>Email: contact@bengfermetures.fr</div>
                  <div>Email: urgences@bengfermetures.fr</div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-text-inverse/20 mt-8 pt-8 text-center text-sm text-text-inverse/60">
            <p>&copy; {new Date().getFullYear()} BEN-G Fermetures. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactServiceAreas;