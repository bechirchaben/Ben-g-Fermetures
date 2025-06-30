import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here
import Homepage from "pages/homepage";
import ContactServiceAreas from "pages/contact-service-areas";
import AboutBeng from "pages/about-beng";
import ServicesOverview from "pages/services-overview";
import EmergencyServices from "pages/emergency-services";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your routes here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />       
        <Route path="/contact-service-areas" element={<ContactServiceAreas />} />
        <Route path="/about-beng" element={<AboutBeng />} />
        <Route path="/services-overview" element={<ServicesOverview />} />
        <Route path="/emergency-services" element={<EmergencyServices />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;