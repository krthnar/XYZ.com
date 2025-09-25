import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";


const PrivacyPolicyLayout = () => {
  return (
    <div>
        <div className="min-h-screen">
      <Outlet /> {/* Page-specific content */}
    </div>
    <Footer />
  
    </div>
  );
};

export default PrivacyPolicyLayout;