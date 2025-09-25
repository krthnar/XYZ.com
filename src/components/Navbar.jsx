import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import { FaSearch, FaTimes } from "react-icons/fa";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [isSearchOpen, setIsSearchOpen] = useState(false); // Search state
  const [searchQuery, setSearchQuery] = useState(""); // Search query state
  const [searchResults, setSearchResults] = useState([]); // Store search results
  const [resultCount, setResultCount] = useState(0); // Count of results found
  const searchRef = useRef(null);
  const menuRef = useRef(null);
  const searchInputRef = useRef(null);
  const mobileSearchInputRef = useRef(null);

  // Click outside search to close ONLY search
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
        clearSearch();
      }
    }

    if (isSearchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Focus the input when search is opened
      if (searchInputRef.current) {
        searchInputRef.current.focus();
      }
      if (mobileSearchInputRef.current) {
        mobileSearchInputRef.current.focus();
      }
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSearchOpen]);

  // Search the entire page content
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    
    if (!query.trim()) {
      clearSearch();
      return;
    }

    // Remove previous highlights
    const oldHighlights = document.querySelectorAll('.search-highlight');
    oldHighlights.forEach(highlight => {
      const parent = highlight.parentNode;
      parent.replaceChild(document.createTextNode(highlight.textContent), highlight);
      parent.normalize(); // Merge adjacent text nodes
    });

    // Find all text nodes in the document body
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: function(node) {
          // Skip script and style tags
          const parentTagName = node.parentNode.tagName;
          if (parentTagName === 'SCRIPT' || parentTagName === 'STYLE' || 
              parentTagName === 'NOSCRIPT' || parentTagName === 'TEXTAREA' ||
              node.parentNode.classList.contains('search-input')) {
            return NodeFilter.FILTER_REJECT;
          }
          return NodeFilter.FILTER_ACCEPT;
        }
      }
    );

    let resultNodes = [];
    let count = 0;
    let node;

    // Process all text nodes
    while (node = walker.nextNode()) {
      const content = node.nodeValue;
      if (content.toLowerCase().includes(query)) {
        // Mark this node for highlighting
        resultNodes.push(node);
        count += (content.toLowerCase().match(new RegExp(query, 'g')) || []).length;
      }
    }

    // Highlight all matching text
    resultNodes.forEach(node => {
      const parent = node.parentNode;
      const content = node.nodeValue;
      const parts = content.split(new RegExp(`(${query})`, 'gi'));
      
      const fragment = document.createDocumentFragment();
      
      parts.forEach(part => {
        if (part.toLowerCase() === query.toLowerCase()) {
          const highlight = document.createElement('span');
          highlight.className = 'search-highlight';
          highlight.style.backgroundColor = '#ffff00';
          highlight.style.color = '#000';
          highlight.appendChild(document.createTextNode(part));
          fragment.appendChild(highlight);
        } else {
          fragment.appendChild(document.createTextNode(part));
        }
      });
      
      parent.replaceChild(fragment, node);
    });

    setSearchResults(resultNodes);
    setResultCount(count);
    
    // Add styles for highlighting if they don't exist
    if (!document.getElementById('search-highlight-styles')) {
      const styleSheet = document.createElement('style');
      styleSheet.id = 'search-highlight-styles';
      styleSheet.textContent = `
        .search-highlight {
          background-color: #ffff00;
          color: #000;
          padding: 0 2px;
          border-radius: 2px;
        }
      `;
      document.head.appendChild(styleSheet);
    }
  };

  // Reset search and clear highlights
  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
    setResultCount(0);
    
    // Remove all highlights
    const highlights = document.querySelectorAll('.search-highlight');
    highlights.forEach(highlight => {
      const parent = highlight.parentNode;
      parent.replaceChild(document.createTextNode(highlight.textContent), highlight);
      parent.normalize(); // Merge adjacent text nodes
    });
  };

  // Close entire menu when clicking outside
  useEffect(() => {
    function handleClickOutsideMenu(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutsideMenu);
    } else {
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    }

    return () => document.removeEventListener("mousedown", handleClickOutsideMenu);
  }, [isOpen]);

  // Handle mobile search click
  const handleMobileSearchClick = (e) => {
    e.stopPropagation(); // Prevent menu from closing
    setIsSearchOpen(true);
    clearSearch(); // Clear previous search when opening
  };

  return (
    <nav className="absolute lg:top-16 sm:top-8 ssm:top-8 md:top-8 left-0 w-full flex items-center justify-between px-6 lg:px-20 py-4 bg-transparent z-50">
      {/* Logo */}
      <div className="absolute left-6 top-4 ssm:top-0 sm:top-0  md:left-22 md:top-0 lg:left-[86px] lg:top-4 xl:left-28 xl:top-8 z-50">
        <Link to="/" className="flex-shrink-0">
          <img
            src={logo}
            alt="Company Logo"
            className="w-[60px] ssm:w-[50px] sm:w-[70px] md:w-[90px] lg:w-[100px] xl:w-[120px]"
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <ul className="absolute top-6 right-20 hidden lg:flex gap-8 items-center">
        {["ABOUT", "SERVICES", "CONTACT"].map((item) => (
          <li key={item}>
            <Link
              to={`/${item.toLowerCase()}`}
              className="w-[180px] h-[50px] flex items-center justify-center rounded-[50px] border border-[#efefef] text-white text-lg font-bold bg-[#d9d9d9]/0 
              hover:bg-[#efefef]/40 active:bg-[#efefef]/70 transition-all duration-300"
            >
              {item}
            </Link>
          </li>
        ))}
        {/* Search Icon Next to CONTACT */}
        <div className="relative pr-8">
          <button
            className="w-[45px] h-[45px] flex items-center justify-center"
            onClick={() => {
              setIsSearchOpen(!isSearchOpen);
              if (!isSearchOpen) clearSearch(); // Clear previous search when opening
            }}
          >
            <FaSearch className="text-white w-10 h-10" />
          </button>

          {/* Search Bar */}
          {isSearchOpen && (
            <div
              ref={searchRef}
              className="absolute top-12 right-0 bg-white w-[300px] rounded-lg shadow-lg"
            >
              <div className="flex items-center px-4 h-[45px]">
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search content..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="w-full h-full border-none outline-none text-black search-input"
                />
                <button
                  onClick={() => {
                    clearSearch();
                    setIsSearchOpen(false);
                  }}
                  className="ml-2 text-gray-500"
                >
                  <FaTimes className="w-5 h-5" />
                </button>
              </div>
              
              {/* Show result count */}
              {searchQuery && (
                <div className="px-4 py-2 text-sm text-gray-600 border-t border-gray-200">
                  {resultCount === 0 
                    ? "No results found" 
                    : `${resultCount} match${resultCount !== 1 ? 'es' : ''} found`}
                </div>
              )}
            </div>
          )}
        </div>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="absolute right-6 top-0 lg:hidden flex items-center justify-center w-10 h-10 bg-[rgba(217,217,217,0.30)] border border-[#EFEFEF] rounded-full z-30"
        onClick={() => setIsOpen(true)}
      >
        <Menu size={24} className="text-white" />
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="fixed top-12 right-0 w-[304px] h-[450px] bg-[#EFEFEF] rounded-bl-[40px] shadow-lg transition-all duration-300 z-50"
        >
          {/* Search Bar Section */}
          <div className="flex justify-between mt-8 ml-4 items-center w-full">
            <div
              className={`relative flex items-center justify-between w-[272px] h-[47px] rounded-[23.5px] transition-all duration-300 ${
                isSearchOpen ? "bg-gray-300" : "bg-transparent"
              }`}
            >
              {/* Mobile Search Input */}
              {isSearchOpen ? (
                <div className="flex items-center w-full px-3">
                  <FaSearch className="w-5 h-5 text-black" />
                  <input
                    ref={mobileSearchInputRef}
                    type="text"
                    placeholder="Search content..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className="w-full h-full border-none outline-none bg-transparent ml-2 text-black search-input"
                  />
                  <button
                    onClick={() => {
                      clearSearch();
                      setIsSearchOpen(false);
                    }}
                  >
                    <FaTimes className="w-5 h-5 text-gray-500" />
                  </button>
                </div>
              ) : (
                <div className="flex items-center w-full cursor-pointer" onClick={handleMobileSearchClick}>
                  <button
                    className="relative w-[35px] h-[35px] flex items-center justify-center ml-3"
                  >
                    <FaSearch className="w-6 h-6 text-black cursor-pointer" />
                  </button>
                  <div className="ml-2 text-black text-[16px] font-light">
                    Search...
                  </div>
                </div>
              )}
            </div>

            {/* Close Entire Menu */}
            <button onClick={() => setIsOpen(false)}>
              <FaTimes className="w-[38px] h-[38px] text-black mt-1 mr-6" />
            </button>
          </div>

          {/* Search Results Count for Mobile */}
          {isSearchOpen && searchQuery && (
            <div className="mt-2 ml-8 mr-6 text-sm text-gray-600">
              {resultCount === 0 
                ? "No results found" 
                : `${resultCount} match${resultCount !== 1 ? 'es' : ''} found`}
            </div>
          )}

          {/* Menu List */}
          <div className="absolute top-40 right-6 flex flex-col space-y-14 z-10">
            {["ABOUT", "SERVICES", "CONTACT"].map((item, index) => (
              <div key={index} className="relative">
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="text-black text-xl font-light"
                  onClick={() => setIsOpen(false)} // Close menu on navigation
                >
                  <div className="absolute top-[-10px] left-0">{item}</div>
                </Link>

                <div data-svg-wrapper className="inline-block">
                  <svg
                    className="w-[242px] h-[1px]"
                    viewBox="0 0 242 1"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 0.5L241.002 0.5" stroke="black" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;