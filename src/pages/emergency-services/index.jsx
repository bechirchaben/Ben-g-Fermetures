import React from 'react';
import Header from '../../components/ui/Header';
import EmergencyHeader from './components/EmergencyHeader';
import EmergencyContact from './components/EmergencyContact';
import EmergencyCategories from './components/EmergencyCategories';

import LiveChatWidget from './components/LiveChatWidget';
import EmergencyForm from './components/EmergencyForm';
import CustomerProtection from './components/CustomerProtection';

const EmergencyServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main Content */}
      <main className="pt-16 lg:pt-20">
        <EmergencyHeader />
        <EmergencyContact />
        <EmergencyCategories />
        
        <EmergencyForm />
        <CustomerProtection />
      </main>

      {/* Live Chat Widget */}
      <LiveChatWidget />

      {/* Mobile Emergency Bar */}
      <div className="lg:hidden mobile-contact-sticky">
        <div className="flex space-x-3">
          <a
            href="tel:+33782885505"
            className="flex-1 bg-primary text-white text-center py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2"
          >
            <span>📞</span>
            <span>Urgence</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EmergencyServices;