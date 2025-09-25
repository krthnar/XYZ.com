import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import PrivacyPolicy from "./components/PrivacyPolicy";
import Layout from "./components/Layout";
import CookieDeclaration from "./components/CookieDeclaration";

import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Hero from './components/Hero';
import Home from './components/Home';
import Highlights from './components/Highlights';
import PrivacyPolicyLayout from './components/PrivacyPolicyLayout';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Routes with Navbar */}
        <Route element={<Layout />}>
          <Route path="/" element={
            <>
              <Home />
              <Hero />
              <Highlights />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Routes with Footer but without Navbar */}
        <Route element={<PrivacyPolicyLayout />}>
          <Route path="/components/PrivacyPolicy" element={<PrivacyPolicy />} />
        </Route>

        {/* Standalone Route for Cookie Declaration */}
        <Route path="/components/CookieDeclaration" element={<CookieDeclaration />} />
      </Routes>
    </Router>
  );
};

export default App;
