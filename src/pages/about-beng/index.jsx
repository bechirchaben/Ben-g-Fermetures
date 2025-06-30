import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';

import CertificationsSection from './components/CertificationsSection';
import CommunitySection from './components/CommunitySection';


const AboutBeng = () => {
  return (
    <>
      <Helmet>
        <title>À Propos de BEN-G Fermetures - Gardiens de Votre Sécurité | Expertise Locale</title>
        <meta 
          name="description" 
          content="Découvrez l'histoire de BEN-G Fermetures, notre équipe d'experts, nos certifications et notre engagement communautaire. 13+ ans d'expérience en sécurisation résidentielle et commerciale." 
        />
        <meta name="keywords" content="BENG Fermetures, équipe experts, certifications, garanties, engagement local, artisans sécurité" />
        <meta property="og:title" content="À Propos de BEN-G Fermetures - Gardiens de Votre Sécurité" />
        <meta property="og:description" content="Rencontrez l'équipe BEN-G, découvrez nos valeurs, certifications et notre ancrage local. Votre sécurité, notre expertise depuis 13+ ans." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/about-beng" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <HeroSection />
          <MissionSection />
          <CertificationsSection />
          <CommunitySection />
         
        </main>

        {/* Footer */}
        <footer className="bg-text-primary text-white py-12">
          <div className="container-max section-padding">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                      <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xl font-bold">BEN-G</div>
                    <div className="text-sm opacity-80">Fermetures</div>
                  </div>
                </div>
                <p className="text-sm opacity-80 leading-relaxed">
                  Gardiens de votre espace depuis 13+ ans. Votre sécurité, notre expertise.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-sm opacity-80">
                  <li>Rideaux et Grilles</li>
                  <li>Portes Résidentielles</li>
                  <li>Portes Industrielles</li>
                  <li>Portails</li>
                  <li>Volets Roulants</li>
                  <li>Stores Bannes</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-sm opacity-80">
                  <li>Urgence: +33782885505</li>
                  <li>contact@bengfermetures.fr</li>
                  <li>urgences@bengfermetures.fr</li>
                  <li>Service 24/7 disponible</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-8 text-center">
              <p className="text-sm opacity-60">
                © {new Date().getFullYear()} BEN-G Fermetures. Tous droits réservés. | 
                Mentions légales | Politique de confidentialité
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AboutBeng;