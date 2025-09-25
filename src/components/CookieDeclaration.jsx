import React, { useState } from "react";

const CookieDeclaration = () => {
  const [isActiveCampaignOpen, setIsActiveCampaignOpen] = useState(false);
  const [isYouTubeOpen, setIsYouTubeOpen] = useState(false);
  const [isFacebookOpen, setIsFacebookOpen] = useState(false);
  const [isLinkedInOpen, setIsLinkedInOpen] = useState(false);
  const [statisticsChecked, setStatisticsChecked] = useState(false);
  const [marketingChecked, setMarketingChecked] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    functional: true,
    statistics: false,
    marketing: false
  });
  
  // Toggle a section's expanded state
  const toggleSection = (section) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section]
    });
  };

  const toggleActiveCampaign = () => {
    setIsActiveCampaignOpen(!isActiveCampaignOpen);
  };
  const toggleYouTube = () => {  // Added toggle function for YouTube section
    setIsYouTubeOpen(!isYouTubeOpen);
  };
  const toggleFacebook = () => {
    setIsFacebookOpen(!isFacebookOpen);
  };
  const toggleLinkedIn = () => {
    setIsLinkedInOpen(!isLinkedInOpen);
  };
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <p className="font-serif italic text-gray-600">
        This Cookie Policy was last updated on September 25, 2025 and applies to
        citizens and legal permanent residents of the European Economic Area and
        Switzerland.
      </p>
      
      <h1 className="text-3xl font-bold text-gray-800">1. Introduction</h1>
      <p className="text-gray-600">
        cookie declaration.
      </p>
      
      <h1 className="text-3xl font-bold text-gray-800">2. What are cookies?</h1>
      <p className="text-gray-600">
        A cookie is a small simple file that is sent along with pages of this
        website and stored by your browser on the hard drive of your computer or
        another device. The information stored therein may be returned to our
        servers or to the servers of the relevant third parties during a
        subsequent visit.
      </p>
      
      <h1 className="text-3xl font-bold text-gray-800">3. What are scripts?</h1>
      <p className="text-gray-600">
        A script is a piece of program code that is used to make our website
        function properly and interactively. This code is executed on our server
        or on your device.
      </p>
      
      <h1 className="text-3xl font-bold text-gray-800">4. What is a web beacon?</h1>
      <p className="text-gray-600">
        A web beacon (or a pixel tag) is a small, invisible piece of text or
        image on a website that is used to monitor traffic on a website. In
        order to do this, various data about you is stored using web beacons.
      </p>
      
      <h1 className="text-3xl font-bold section text-gray-800">5. Cookies</h1>
      <div className="subsection">
        <h3 className="text-xl font-semibold text-gray-700">5.1 Technical or functional cookies</h3>
        <p className="text-gray-600">
          Some cookies ensure that certain parts of the website work properly
          and that your user preferences remain known. By placing functional
          cookies, we make it easier for you to visit our website. This way, you
          do not need to repeatedly enter the same information when visiting our
          website and, for example, the items remain in your shopping cart until
          you have paid. We may place these cookies without your consent.
        </p>
      </div>
      
      <div className="subsection">
        <h3 className="text-xl font-semibold text-gray-700">5.2 Statistics cookies</h3>
        <p className="text-gray-600">
          We use statistics cookies to optimise the website experience for our
          users. With these statistics cookies we get insights in the usage of
          our website. We ask your permission to place statistics cookies.
        </p>
      </div>
      
      <div className="subsection">
        <h3 className="text-xl font-semibold text-gray-700">5.3 Marketing/Tracking cookies</h3>
        <p className="text-gray-600">
          Marketing/Tracking cookies are cookies or any other form of local
          storage, used to create user profiles to display advertising or to
          track the user on this website or across several websites for similar
          marketing purposes.
        </p>
      </div>
      
      <div className="subsection">
        <h3 className="text-xl font-semibold text-gray-700">5.4 Social media</h3>
        <p className="text-gray-600">
          On our website, we have included content from Instagram, LinkedIn and
          Facebook to promote web pages (e.g. "like", "pin") or share (e.g.
          "tweet") on social networks like Instagram, LinkedIn and Facebook.
          This content is embedded with code derived from Instagram, LinkedIn
          and Facebook and places cookies. This content might store and process
          certain information for personalised advertising. 
          <br/> Please read the privacy statement of these social networks (which can change
          regularly) to read what they do with your (personal) data which they
          process using these cookies. The data that is retrieved is anonymised
          as much as possible. Instagram, LinkedIn and Facebook are located in
          the United States.
        </p>
      </div>
      
      <h1 className="text-3xl font-bold text-gray-800">6. Placed cookies</h1>
      
      <div className="border border-gray-200 bg-gray-50 rounded-md">
        <div 
          className="p-6 flex items-center justify-between cursor-pointer"
          onClick={toggleActiveCampaign}
        >
          <h2 className="text-2xl font-bold text-gray-800">Active Campaign</h2>
          <div className="flex items-center space-x-4">
            <span className="text-lg text-gray-700">Marketing</span>
            <svg 
              className={`w-6 h-6 transform transition-transform duration-200 ${isActiveCampaignOpen ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
            </svg>
          </div>
        </div>
        
        {isActiveCampaignOpen && (
          <div className="p-6 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Usage</h3>
                <p className="mb-2">
                  We use Active Campaign for marketing automation (automated email marketing).{" "}
                  <a href="https://cookiedatabase.org/service/active-campaign/" className="text-blue-600 hover:underline inline-flex items-center">
                    Read more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">Sharing data</h3>
                <p>
                  For more information, please read the{" "}
                  <a href="https://www.activecampaign.com/legal/privacy-policy" className="text-blue-600 hover:underline inline-flex items-center">
                    Active Campaign Privacy Statement
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                  .
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">Marketing</h3>
              
              <div className="w-full border border-gray-200">
                <div className="grid grid-cols-3 bg-gray-50">
                  <div className="p-4 font-bold border-r border-gray-200">Name</div>
                  <div className="p-4 font-bold border-r border-gray-200">Expiration</div>
                  <div className="p-4 font-bold">Function</div>
                </div>
                
                <div className="grid grid-cols-3 border-t border-gray-200">
                  <div className="p-4 border-r border-gray-200">
                    <a href="https://cookiedatabase.org/cookie/active-campaign/prism_/" className="text-blue-600 hover:underline inline-flex items-center">
                      prism_*
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                    </a>
                  </div>
                  <div className="p-4 border-r border-gray-200">2 years</div>
                  <div className="p-4">Store and track interaction</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
            
      <div className="border border-gray-200 bg-gray-50 rounded-md">
        <div 
          className="p-6 flex items-center justify-between cursor-pointer"
          onClick={toggleYouTube}
        >
          <h2 className="text-2xl font-bold text-gray-800">YouTube</h2>
          <div className="flex items-center space-x-4">
            <span className="text-lg text-gray-700">Marketing</span>
            <svg 
              className={`w-6 h-6 transform transition-transform duration-200 ${isYouTubeOpen ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
            </svg>
          </div>
        </div>
        
        {isYouTubeOpen && (
          <div className="p-6 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Usage</h3>
                <p className="mb-2">
                 We use YouTube for video display.{" "}
                  <a href="https://cookiedatabase.org/service/youtube/" className="text-blue-600 hover:underline inline-flex items-center">
                    Read more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">Sharing data</h3>
                <p>
                  For more information, please read the{" "}
                  <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline inline-flex items-center">
                    YouTube Privacy Statement
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                  .
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">Marketing</h3>
              
              <div className="w-full border border-gray-200">
                <div className="grid grid-cols-3 bg-gray-50">
                  <div className="p-4 font-bold border-r border-gray-200">Name</div>
                  <div className="p-4 font-bold border-r border-gray-200">Expiration</div>
                  <div className="p-4 font-bold">Function</div>
                </div>
                
                <div className="grid grid-cols-3 border-t border-gray-200">
                  <div className="p-4 border-r border-gray-200">
                    <a href="https://cookiedatabase.org/cookie/youtube/gps/" className="text-blue-600 hover:underline inline-flex items-center">
                      GPS
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                    </a>
                  </div>
                  <div className="p-4 border-r border-gray-200">session</div>
                  <div className="p-4">Store location data</div>
                </div>
                
                <div className="grid grid-cols-3 border-t border-gray-200">
                  <div className="p-4 border-r border-gray-200">
                    <a href="https://cookiedatabase.org/cookie/youtube/visitor_info1_live/" className="text-blue-600 hover:underline inline-flex items-center">
                      VISITOR_INFO_LIVE
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                    </a>
                  </div>
                  <div className="p-4 border-r border-gray-200">6 months</div>
                  <div className="p-4">Provide ad delivery or retargeting</div>
                </div>
                <div className="grid grid-cols-3 border-t border-gray-200">
                  <div className="p-4 border-r border-gray-200">
                    <a href="https://cookiedatabase.org/cookie/youtube/ysc/" className="text-blue-600 hover:underline inline-flex items-center">
                      YSC
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                    </a>
                  </div>
                  <div className="p-4 border-r border-gray-200">session</div>
                  <div className="p-4">Store and track interaction</div>
                </div>
                <div className="grid grid-cols-3 border-t border-gray-200">
                  <div className="p-4 border-r border-gray-200">
                    <a href="https://cookiedatabase.org/cookie/youtube/pref/" className="text-blue-600 hover:underline inline-flex items-center">
                      PREF
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                    </a>
                  </div>
                  <div className="p-4 border-r border-gray-200">8 months</div>
                  <div className="p-4">Store user preferences </div>
                </div>

              </div>
            </div>
          </div>
          )}
      </div>
      <div className="border border-gray-200 bg-gray-50 rounded-md">
  <div 
    className="p-6 flex items-center justify-between cursor-pointer"
    onClick={toggleFacebook}
  >
    <h2 className="text-2xl font-bold text-gray-800">Facebook</h2>
    <div className="flex items-center space-x-4">
      <span className="text-lg text-gray-700">Marketing, Functional</span>
      <svg 
        className={`w-6 h-6 transform transition-transform duration-200 ${isFacebookOpen ? 'rotate-180' : ''}`} 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
      </svg>
    </div>
  </div>
  
  {isFacebookOpen && (
    <div className="p-6 border-t border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-bold mb-2">Usage</h3>
          <p className="mb-2">
            We use Facebook for display of recent social posts and/or social share buttons.{" "}
            <a href="https://cookiedatabase.org/service/facebook/" className="text-blue-600 hover:underline inline-flex items-center">
              Read more
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-2">Sharing data</h3>
          <p>
            For more information, please read the{" "}
            <a href="https://www.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&entry=0" className="text-blue-600 hover:underline inline-flex items-center">
              Facebook Privacy Statement
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
            .
          </p>
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">Marketing</h3>
        
        <div className="w-full border border-gray-200">
          <div className="grid grid-cols-3 bg-gray-50">
            <div className="p-4 font-bold border-r border-gray-200">Name</div>
            <div className="p-4 font-bold border-r border-gray-200">Expiration</div>
            <div className="p-4 font-bold">Function</div>
          </div>
          
          <div className="grid grid-cols-3 border-t border-gray-200">
            <div className="p-4 border-r border-gray-200">
              <a href="https://cookiedatabase.org/cookie/facebook/_fbc/" className="text-blue-600 hover:underline inline-flex items-center">
                _fbc
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 border-r border-gray-200">2 years</div>
            <div className="p-4">Store last visit</div>
          </div>
          
          <div className="grid grid-cols-3 border-t border-gray-200">
            <div className="p-4 border-r border-gray-200">
              <a href="https://cookiedatabase.org/cookie/facebook/fbm_/" className="text-blue-600 hover:underline inline-flex items-center">
                fbm*
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 border-r border-gray-200">1 year</div>
            <div className="p-4">Store account details</div>
          </div>
          
          <div className="grid grid-cols-3 border-t border-gray-200">
            <div className="p-4 border-r border-gray-200">
              <a href="https://cookiedatabase.org/cookie/facebook/xs/" className="text-blue-600 hover:underline inline-flex items-center">
                xs
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 border-r border-gray-200">3 months</div>
            <div className="p-4">Store a unique session ID</div>
          </div>
          
          <div className="grid grid-cols-3 border-t border-gray-200">
            <div className="p-4 border-r border-gray-200">
              <a href="https://cookiedatabase.org/cookie/facebook/fr/" className="text-blue-600 hover:underline inline-flex items-center">
                fr
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 border-r border-gray-200">3 months</div>
            <div className="p-4">Provide ad delivery or retargeting</div>
          </div>
          
          <div className="grid grid-cols-3 border-t border-gray-200">
            <div className="p-4 border-r border-gray-200">
              <a href="https://cookiedatabase.org/cookie/facebook/act/" className="text-blue-600 hover:underline inline-flex items-center">
                act
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 border-r border-gray-200">90 days</div>
            <div className="p-4">Store logged in users</div>
          </div>
          
          <div className="grid grid-cols-3 border-t border-gray-200">
            <div className="p-4 border-r border-gray-200">
              <a href="https://cookiedatabase.org/cookie/facebook/_fbp/" className="text-blue-600 hover:underline inline-flex items-center">
                _fbp
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 border-r border-gray-200">3 months</div>
            <div className="p-4">Store and track visits across websites</div>
          </div>
          
          <div className="grid grid-cols-3 border-t border-gray-200">
            <div className="p-4 border-r border-gray-200">
              <a href="https://cookiedatabase.org/cookie/facebook/datr/" className="text-blue-600 hover:underline inline-flex items-center">
                datr
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 border-r border-gray-200">2 years</div>
            <div className="p-4">Provide fraud prevention</div>
          </div>
          
          <div className="grid grid-cols-3 border-t border-gray-200">
            <div className="p-4 border-r border-gray-200">
              <a href="https://cookiedatabase.org/cookie/facebook/c_user/" className="text-blue-600 hover:underline inline-flex items-center">
                c_user
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 border-r border-gray-200">30 days</div>
            <div className="p-4">Store a unique user ID</div>
          </div>
          
          <div className="grid grid-cols-3 border-t border-gray-200">
            <div className="p-4 border-r border-gray-200">
              <a href="https://cookiedatabase.org/cookie/facebook/sb/" className="text-blue-600 hover:underline inline-flex items-center">
                sb
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 border-r border-gray-200">2 years</div>
            <div className="p-4">Store browser details</div>
          </div>
          <div className="grid grid-cols-3 border-t border-gray-200">
            <div className="p-4 border-r border-gray-200">
              <a href="https://cookiedatabase.org/cookie/facebook/_fbm_/" className="text-blue-600 hover:underline inline-flex items-center">
                *_fbm_
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 border-r border-gray-200">1 year</div>
            <div className="p-4">Store account details</div>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">Functional</h3>
        
        <div className="w-full border border-gray-200">
          <div className="grid grid-cols-3 bg-gray-50">
            <div className="p-4 font-bold border-r border-gray-200">Name</div>
            <div className="p-4 font-bold border-r border-gray-200">Expiration</div>
            <div className="p-4 font-bold">Function</div>
          </div>
          
          <div className="grid grid-cols-3 border-t border-gray-200">
            <div className="p-4 border-r border-gray-200">
              <a href="https://cookiedatabase.org/cookie/facebook/wd/" className="text-blue-600 hover:underline inline-flex items-center">
                wd
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 border-r border-gray-200">1 week</div>
            <div className="p-4">Read screen resolution</div>
          </div>
          
          <div className="grid grid-cols-3 border-t border-gray-200">
            <div className="p-4 border-r border-gray-200">
              <a href="https://cookiedatabase.org/cookie/facebook/csm/" className="text-blue-600 hover:underline inline-flex items-center">
                csm
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 border-r border-gray-200">90 days</div>
            <div className="p-4">Provide fraud prevention</div>
          </div>
          
          <div className="grid grid-cols-3 border-t border-gray-200">
            <div className="p-4 border-r border-gray-200">
              <a href="https://cookiedatabase.org/cookie/facebook/actppresence/" className="text-blue-600 hover:underline inline-flex items-center">
                actppresence
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 border-r border-gray-200">session</div>
            <div className="p-4">Store and track if the browser tab is active</div>
          </div>
        </div>
      </div>
    </div>
  )}
</div>
<div className="border border-gray-200 bg-gray-50 rounded-md">
  <div 
    className="p-6 flex items-center justify-between cursor-pointer"
    onClick={toggleLinkedIn}
  >
    <h2 className="text-2xl font-bold text-gray-800">LinkedIn</h2>
    <div className="flex items-center space-x-4">
      <span className="text-lg text-gray-700">Functional, Marketing, Statistics, Preferences</span>
      <svg 
        className={`w-6 h-6 transform transition-transform duration-200 ${isLinkedInOpen ? 'rotate-180' : ''}`} 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
      </svg>
    </div>
  </div>
  
  {isLinkedInOpen && (
    <div className="p-6 border-t border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-bold mb-2">Usage</h3>
          <p className="mb-2">
            We use LinkedIn for display of recent social posts and/or social share buttons.{" "}
            <a href="https://cookiedatabase.org/service/linkedin/" className="text-blue-600 hover:underline inline-flex items-center">
              Read more
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-2">Sharing data</h3>
          <p>
            For more information, please read the{" "}
            <a href="https://www.linkedin.com/legal/privacy-policy" className="text-blue-600 hover:underline inline-flex items-center">
              LinkedIn Privacy Statement
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
            .
          </p>
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">Functional</h3>
        
        <div className="w-full border border-gray-200">
          <div className="grid grid-cols-3 bg-gray-50">
            <div className="p-4 font-bold border-r border-gray-200">Name</div>
            <div className="p-4 font-bold border-r border-gray-200">Expiration</div>
            <div className="p-4 font-bold">Function</div>
          </div>
          
          <div className="grid grid-cols-3 border-t border-gray-200">
            <div className="p-4 border-r border-gray-200">
              <a href="https://cookiedatabase.org/cookie/linkedin/auto-draft-20" className="text-blue-600 hover:underline inline-flex items-center">
                sdsc
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 border-r border-gray-200">session</div>
            <div className="p-4">Provide load balancing functionality</div>
          </div>
          
          <div className="grid grid-cols-3 border-t border-gray-200">
            <div className="p-4 border-r border-gray-200">
              <a href="https://cookiedatabase.org/cookie/linkedin/auto-draft-16" className="text-blue-600 hover:underline inline-flex items-center">
                li_gc
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 border-r border-gray-200">6 months</div>
            <div className="p-4">Store cookie consent preferences</div>
          </div>
          
          <div className="grid grid-cols-3 border-t border-gray-200">
            <div className="p-4 border-r border-gray-200">
              <a href="https://cookiedatabase.org/cookie/linkedin/bizographicsoptout" className="text-blue-600 hover:underline inline-flex items-center">
                BizographicsOptOut
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 border-r border-gray-200">10 years</div>
            <div className="p-4">Store privacy preferences</div>
          </div>
          
          
      
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">Marketing</h3>
        
        <div className="w-full border border-gray-200">
          <div className="grid grid-cols-3 bg-gray-50">
            <div className="p-4 font-bold border-r border-gray-200">Name</div>
            <div className="p-4 font-bold border-r border-gray-200">Expiration</div>
            <div className="p-4 font-bold">Function</div>
          </div>
          
          <div className="grid grid-cols-3 border-t border-gray-200">
            <div className="p-4 border-r border-gray-200">
              <a href="https://cookiedatabase.org/cookie/linkedin/auto-draft-19" className="text-blue-600 hover:underline inline-flex items-center">
                lms_ads
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 border-r border-gray-200">30 days</div>
            <div className="p-4">Store and track visits across websites</div>
          </div>
          
          <div className="grid grid-cols-3 border-t border-gray-200">
            <div className="p-4 border-r border-gray-200">
              <a href="https://cookiedatabase.org/cookie/linkedin/_guid" className="text-blue-600 hover:underline inline-flex items-center">
                _guid
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 border-r border-gray-200">90 days</div>
            <div className="p-4">Store and track a visitor's identity</div>
          </div>
          
          <div className="grid grid-cols-3 border-t border-gray-200">
            <div className="p-4 border-r border-gray-200">
              <a href="https://cookiedatabase.org/cookie/linkedin/li-oatml" className="text-blue-600 hover:underline inline-flex items-center">
                li-oatml
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 border-r border-gray-200">1 month</div>
            <div className="p-4">Provide ad delivery or retargeting</div>
          </div>
          
          <div className="grid grid-cols-3 border-t border-gray-200">
            <div className="p-4 border-r border-gray-200">
              <a href="https://cookiedatabase.org/cookie/linkedin/li_sugr" className="text-blue-600 hover:underline inline-flex items-center">
                li_sugr
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 border-r border-gray-200">90 days</div>
            <div className="p-4">Store and track a visitor's identity</div>
          </div>
          
          <div className="grid grid-cols-3 border-t border-gray-200">
            <div className="p-4 border-r border-gray-200">
              <a href="https://cookiedatabase.org/cookie/linkedin/usermatchhistory" className="text-blue-600 hover:underline inline-flex items-center">
                UserMatchHistory
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 border-r border-gray-200">30 days</div>
            <div className="p-4">Provide ad delivery or retargeting</div>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">Statistics</h3>
        
        <div className="w-full border border-gray-200">
          <div className="grid grid-cols-3 bg-gray-50">
            <div className="p-4 font-bold border-r border-gray-200">Name</div>
            <div className="p-4 font-bold border-r border-gray-200">Expiration</div>
            <div className="p-4 font-bold">Function</div>
          </div>
          
          <div className="grid grid-cols-3 border-t border-gray-200">
            <div className="p-4 border-r border-gray-200">
              <a href="https://cookiedatabase.org/cookie/linkedin/auto-draft-18" className="text-blue-600 hover:underline inline-flex items-center">
                lms_analytics
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 border-r border-gray-200">30 days</div>
            <div className="p-4">Store and track a visitor's identity</div>
          </div>
          
          <div className="grid grid-cols-3 border-t border-gray-200">
            <div className="p-4 border-r border-gray-200">
              <a href="https://cookiedatabase.org/cookie/linkedin/analyticssynchistory" className="text-blue-600 hover:underline inline-flex items-center">
                AnalyticsSyncHistory
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 border-r border-gray-200">30 days</div>
            <div className="p-4">Store and track visits across websites</div>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">Preferences</h3>
        
        <div className="w-full border border-gray-200">
          <div className="grid grid-cols-3 bg-gray-50">
            <div className="p-4 font-bold border-r border-gray-200">Name</div>
            <div className="p-4 font-bold border-r border-gray-200">Expiration</div>
            <div className="p-4 font-bold">Function</div>
          </div>
          
          <div className="grid grid-cols-3 border-t border-gray-200">
            <div className="p-4 border-r border-gray-200">
              <a href="https://cookiedatabase.org/cookie/linkedin/li_alerts" className="text-blue-600 hover:underline inline-flex items-center">
                li_alerts
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 border-r border-gray-200">1 year</div>
            <div className="p-4">Store if a message has been shown</div>
          </div>
          
          <div className="grid grid-cols-3 border-t border-gray-200">
            <div className="p-4 border-r border-gray-200">
              <a href="https://cookiedatabase.org/cookie/linkedin/bcookie-2" className="text-blue-600 hover:underline inline-flex items-center">
                bcookie
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 border-r border-gray-200">1 year</div>
            <div className="p-4">Store browser details</div>
          </div>
           
          <div className="grid grid-cols-3 border-t border-gray-200">
            <div className="p-4 border-r border-gray-200">
              <a href="https://cookiedatabase.org/cookie/linkedin/lidc" className="text-blue-600 hover:underline inline-flex items-center">
                lidc
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 border-r border-gray-200">1 day</div>
            <div className="p-4">Provide load balancing functionality</div>
          </div>
        </div>
      </div>
          <div className="grid grid-cols-3 border-t border-gray-200">
            <div className="p-4 border-r border-gray-200">
              <a href="https://cookiedatabase.org/cookie/linkedin/bscookie" className="text-blue-600 hover:underline inline-flex items-center">
                bscookie
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 border-r border-gray-200">1 year</div>
            <div className="p-4">Store logged in users</div>
          </div>
        </div>
      </div>
    
    <div className="flex justify-between items-center p-4 border-b border-gray-200">
    <h1 className="text-2xl font-semibold">Miscellaneous</h1>
    <div className="flex items-center">
      <span className="mr-3 text-gray-600">Purpose pending investigation</span>
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
      </svg>
    </div>
  </div>
  
  {/* Two-column section */}
  <div className="flex flex-col md:flex-row border-b border-gray-200">
    <div className="p-4 md:w-1/2 md:border-r border-gray-200">
      <h2 className="text-xl font-semibold mb-2">Usage</h2>
    </div>
    <div className="p-4 md:w-1/2">
      <h2 className="text-xl font-semibold mb-2">Sharing data</h2>
      <p className="text-gray-600">Sharing of data is pending investigation</p>
    </div>
  </div>
  
  {/* Purpose pending section */}
  <div className="p-4 border-b border-gray-200">
    <h2 className="text-xl font-semibold">Purpose pending investigation</h2>
  </div>
  
  {/* Table header */}
  <div className="grid grid-cols-3 border-b border-gray-200 bg-gray-50">
    <div className="p-4 font-semibold">Name</div>
    <div className="p-4 font-semibold">Expiration</div>
    <div className="p-4 font-semibold">Function</div>
  </div>
  
  {/* Table rows */}
  <div className="grid grid-cols-3 border-b border-gray-200">
    <div className="p-4 border-r border-gray-200">cmplz_functional</div>
    <div className="p-4 border-r border-gray-200">365 days</div>
    <div className="p-4"></div>
  </div>
  
  <div className="grid grid-cols-3 border-b border-gray-200">
    <div className="p-4 border-r border-gray-200">cmplz_statistics</div>
    <div className="p-4 border-r border-gray-200">365 days</div>
    <div className="p-4"></div>
  </div>
  
  <div className="grid grid-cols-3 border-b border-gray-200">
    <div className="p-4 border-r border-gray-200">cmplz_preferences</div>
    <div className="p-4 border-r border-gray-200">365 days</div>
    <div className="p-4"></div>
  </div>
  
  <div className="grid grid-cols-3 border-b border-gray-200">
    <div className="p-4 border-r border-gray-200">cmplz_marketing</div>
    <div className="p-4 border-r border-gray-200">365 days</div>
    <div className="p-4"></div>
  </div>
  </div>
  )} </div>
 
      <h1 className="text-3xl font-bold section text-gray-800">7. Consent</h1>
      <p className="text-gray-700 leading-relaxed mt-3">
        When you visit our website for the first time, we will show you a pop-up with an explanation about cookies. 
        As soon as you click on "Save preferences", you consent to us using the categories of cookies and plug-ins 
        you selected in the pop-up, as described in this Cookie Policy. You can disable the use of cookies via your browser, 
        but please note that our website may no longer work properly.
      </p>
      
      <div className="subsection mt-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">7.1 Manage your consent settings</h2>
        
        {/* Functional section */}
        <div className="bg-gray-100 mb-2 border border-gray-200 rounded">
          <div 
            className="p-4 flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection('functional')}
          >
            <h4 className="text-xl font-medium text-gray-800">Functional</h4>
            <div className="flex items-center">
              <span className="mr-3 text-green-600 font-medium">Always active</span>
              <svg 
                className={`w-6 h-6 transition-transform ${expandedSections.functional ? 'transform rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          
          {expandedSections.functional && (
            <div className="p-4 pb-6 text-gray-700 border-t border-gray-200">
              <p className="leading-relaxed">
                The technical storage or access is strictly necessary for the legitimate purpose of enabling the use of a specific service
                explicitly requested by the subscriber or user, or for the sole purpose of carrying out the transmission of a
                communication over an electronic communications network.
              </p>
            </div>
          )}
        </div>
        
        {/* Statistics section */}
        <div className="bg-gray-100 mb-2 border border-gray-200 rounded">
          <div 
            className="p-4 flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection('statistics')}
          >
            <h4 className="text-xl font-medium text-gray-800">Statistics</h4>
            <div className="flex items-center">
              <input
                type="checkbox"
                className="mr-3 h-5 w-5 cursor-pointer"
                checked={statisticsChecked}
                onChange={(e) => {
                  e.stopPropagation();
                  setStatisticsChecked(!statisticsChecked);
                }}
              />
              <svg 
                className={`w-6 h-6 transition-transform ${expandedSections.statistics ? 'transform rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          
          {expandedSections.statistics && (
            <div className="p-4 pb-6 text-gray-700 border-t border-gray-200">
              <p className="leading-relaxed">
                The technical storage or access that is used exclusively for statistical purposes.
              </p>
            </div>
          )}
        </div>
        
        {/* Marketing section */}
        <div className="bg-gray-100 mb-2 border border-gray-200 rounded">
          <div 
            className="p-4 flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection('marketing')}
          >
            <h4 className="text-xl font-medium text-gray-800">Marketing</h4>
            <div className="flex items-center">
              <input
                type="checkbox"
                className="mr-3 h-5 w-5 cursor-pointer"
                checked={marketingChecked}
                onChange={(e) => {
                  e.stopPropagation();
                  setMarketingChecked(!marketingChecked);
                }}
              />
              <svg 
                className={`w-6 h-6 transition-transform ${expandedSections.marketing ? 'transform rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          
          {expandedSections.marketing && (
            <div className="p-4 pb-6 text-gray-700 border-t border-gray-200">
              <p className="leading-relaxed">
                The technical storage or access is required to create user profiles to send advertising, or to track the user on a website
                or across several websites for similar marketing purposes.
              </p>
            </div>
          )}
        </div>
        
        {/* Save button */}
        <div className="mt-6">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded">
            Save preferences
          </button>
        </div>
      </div>
    
      <h1 className="text-3xl font-bold text-gray-800 mb-3">8. Enabling/disabling and deleting cookies</h1>
      <p className="text-gray-600 ">
You can use your internet browser to automatically or manually delete cookies. You can also specify that certain cookies may not be placed. Another option is to change the settings of your internet browser so that you receive a message each time a cookie is placed. For more information about these options, please refer to the instructions in the Help section of your browser.

<br />Please note that our website may not work properly if all cookies are disabled. If you do delete the cookies in your browser, they will be placed again after your consent when you visit our website again.
</p>
<h2 className="text-3xl font-bold text-gray-800 mb-3">9. Your rights with respect to personal data</h2>
        <p className="text-gray-600 mb-3 ">
        You have the following rights with respect to your personal data:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>You have the right to know why your personal data is needed, what will happen to it, and how long it will be retained for.</li>
          <li>Right of access: You have the right to access your personal data that is known to us.</li>
          <li>Right to rectification: you have the right to supplement, correct, have deleted or blocked your personal data whenever you wish.</li>
          <li>If you give us your consent to process your data, you have the right to revoke that consent and to have your personal data deleted.</li>
          <li>Right to transfer your data: you have the right to request all your personal data from the controller and transfer it in its entirety to another controller.</li>
          <li>Right to object: you may object to the processing of your data. We comply with this, unless there are justified grounds for processing.
          </li>
        </ul>
        <p className="text-gray-600">To exercise these rights, please contact us. Please refer to the contact details at the bottom of this Cookie Policy. If you have a complaint about how we handle your data, we would like to hear from you, but you also have the right to submit a complaint to the supervisory authority (the Data Protection Authority).</p>
        <h2 className="text-3xl font-bold text-gray-800 mb-3">10. Contact details</h2>
        <p className="text-gray-600 mb-3 ">
        For questions and/or comments about our Cookie Policy and this statement, please contact us by using the following contact details:
        <br/>XYZ.com
        <br/>1234 gb Finland
        <br/>Finland
        <br/> <a href="https://XYZ.com"> Website: <span className="text-blue-600 underline"> https://XYZ.com </span>  </a>
        <br/>Email: dpa@XYZ.com
        <br/>Phone number: +31 849 499595
        <br/>This Cookie Policy was synchronised with{' '}
  <a
    href="https://cookiedatabase.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className="text-blue-600 underline">cookiedatabase.org</span>
  </a>{' '}
  on March 26, 2025.</p>
    </div>
    



  
  
  );
};

export default CookieDeclaration;