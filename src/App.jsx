// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// import PrivacyPolicy from "./PrivacyPolicy";
// import TermsAndConditions from "./TermsAndConditions";
import LandingPage from "./LIfeStyleAi";
import PrivacyPolicyBanner from "./PrivacyPolicyBanner";
import TermsAndConditions from "./TermsAndConditions";

import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <BrowserRouter>
     
       

         <ScrollToTop/>
        <Routes>
          {/* Default route → LifestyleAI */}
          <Route path="/" element={<LandingPage/>} />

          {/* Privacy Policy page */}
          <Route path="/privacy-policy" element={<PrivacyPolicyBanner />} />

          {/* Terms & Conditions page */}
          <Route path="/terms" element={<TermsAndConditions />} />
        </Routes>
     
    </BrowserRouter>
  );
}

export default App;
