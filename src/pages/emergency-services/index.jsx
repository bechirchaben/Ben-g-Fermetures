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
      
    </div>
  );
};

export default EmergencyServices;