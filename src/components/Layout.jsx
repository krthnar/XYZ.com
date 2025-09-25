import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import CookieBanner from "./CookieBanner";
import Navbar from "./Navbar";

import Footer from "./Footer"; // Import Footer

const Layout = () => {
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookieConsent")) {
      setShowCookieBanner(true);
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      {showCookieBanner && <CookieBanner />}
      <Footer />
    </div>
  );
};

export default Layout;