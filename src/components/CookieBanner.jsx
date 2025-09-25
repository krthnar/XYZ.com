import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link


const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="fixed bottom-5 left-5 right-5 bg-gray-900 text-white p-4 rounded-lg shadow-lg flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">
          We use cookies to improve your experience.{" "}
          <Link to="/components/CookieDeclaration" className="underline text-yellow-400">
            Learn more
          </Link>
        </p>
        <button
          onClick={acceptCookies}
          className="mt-2 md:mt-0 bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
        >
          Accept
        </button>
      </div>
    )
  );
};

export default CookieBanner;
