import { FaLinkedin, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-indigo-500 text-gray-300 py-10 px-6 sm:px-10">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto flex flex-wrap lg:flex-nowrap justify-between gap-6">
        
        {/* Grid for small/medium screens with equal alignment */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 w-full">
          
          {/* Company Section */}
          <div className="flex flex-col gap-4 w-full">
            <div className="text-white text-[30px] sm:text-xl font-bold leading-[30px]">
              Company
            </div>
            <div className="font-light text-white text-lg leading-10">
            <Link to="/about" className="block hover:underline">About</Link>
            <Link to="/contact"  className="block hover:underline">Contact</Link>
            </div>
          </div>

          {/* Services Section */}
          <div className="flex flex-col gap-4 w-full">
            <div className="text-white text-[30px] sm:text-xl font-bold leading-[30px]">
              Services
            </div>
            <div className="font-light text-white text-lg leading-10">
  <Link to="/services" className="block hover:underline">
    <span style={{ fontWeight: 300, display: "block" }}>Solutions</span>
  </Link>
</div>
          </div>

          {/* Socials Section (ONLY for large screens) */}
          <div className="hidden lg:flex flex-col gap-4 w-full">
            <div className="text-white text-[30px] sm:text-xl font-bold leading-[30px]">
              Socials
            </div>
            <div className="flex gap-6">
              <a href="https://www.linkedin.com/company/XYZ/about/" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-indigo-300"><FaLinkedin /></a>
              <a href="https://www.youtube.com/@XYZ" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-indigo-300"><FaYoutube /></a>
              <a href="https://www.instagram.com/XYZ" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-indigo-300"><FaInstagram /></a>
              <a href="https://www.facebook.com/profile.php?id=61573348030579" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-indigo-300"><FaFacebook /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Socials + Copyright in one row (ONLY for small/medium screens) */}
      <div className="mt-10 flex flex-col sm:flex-row gap-6 sm:gap-12 text-white text-[20px] font-light text-center sm:text-left lg:hidden">
        
        {/* Social Icons (Horizontal) */}
        <div className="flex flex-col sm:items-start w-full">
          <div className="text-white text-[30px] sm:text-xl font-bold leading-[30px] sm:mb-2">
            Socials
          </div>
          <div className="flex gap-6 justify-center sm:justify-start">
            <a href="https://www.linkedin.com/company/XYZ/about/" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-indigo-300"><FaLinkedin /></a>
            <a href="https://www.youtube.com/@XYZ" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-indigo-300"><FaYoutube /></a>
            <a href="https://www.instagram.com/XYZ" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-indigo-300"><FaInstagram /></a>
            <a href="https://www.facebook.com/profile.php?id=61573348030579" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-indigo-300"><FaFacebook /></a>
          </div>
        </div>

        {/* Copyright Section (VERTICAL but ALIGNED PROPERLY, NO TITLE) */}
        <div className="flex flex-col sm:items-start w-full">
          <div className="flex flex-col  gap-2 items-center sm:items-start">
            <div className="w-44 text-left">©{new Date().getFullYear()} XYZ</div>
            <div className="w-[134px] text-left">VAT number</div>
            <div className="w-[150px] text-left">
            <Link to="/components/PrivacyPolicy"> Privacy policy </Link> </div>
            <div> <button
  onClick={() => {
    localStorage.removeItem("cookieConsent");
    window.location.reload();
  }} className="w-[202px] text-left">Cookie declaration </button> 
          </div>
        </div>
        </div>

      </div>

      {/* Copyright Section (ONLY for large, XL, 2XL screens - HORIZONTAL & SPACED EQUALLY) */}
      <div className="hidden lg:flex justify-center gap-12 mt-10 text-white text-[20px] font-light text-center">
        <div className="w-44">©{new Date().getFullYear()} XYZ</div>
        <div className="w-[134px]">VAT number</div>
        <div className="w-[150px]"><Link to="/components/PrivacyPolicy"> Privacy policy </Link>
         </div>
        <div>  <button
  onClick={() => {
    localStorage.removeItem("cookieConsent");
    window.location.reload();
  }} className="w-[202px]">Cookie declaration </button> </div>
      </div>
      
    </footer>
  );
};

export default Footer;