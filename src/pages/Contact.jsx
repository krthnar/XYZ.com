const Contact = () => {
  // Contact information data structure for easier maintenance
  const contactInfo = [
    {
      label: "Address",
      content: ["Finland"],
    },
    {
      label: "Phone",
      content: ["+9999999"],
    },
    {
      label: "General Enquiries",
      content: ["hello@XYZ.com"],
    },
    {
      label: "Support Enquiries",
      content: ["support@XYZ.com"],
    },
  ];

  return (
    <section
      className="relative min-h-screen w-full bg-black bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: "url('/backgroundCONTACTPAGE.jpg')",
      }}
      aria-label="Contact page"
    >
      {/* Background gradient image */}
      <img
        className="absolute -z-10 w-full h-full object-cover origin-top-left rotate-180"
        src="/gradient-background.jpg"
        alt="Background gradient"
      />

      {/* Main content container */}
      <div className="container mx-auto px-4 py-20 relative z-10">
  {/* Increased top margin to push content further down */}
  <div className="mt-32 md:mt-40 lg:mt-48 xl:mt-56 2xl:mt-64">
    {/* Contact Us section - centered with center-aligned text for sm and md */}
    <div className="text-center sm:text-center md:text-center lg:text-left mb-20">
      <div className="lg:pl-32">
        {/* Contact Us - Heading */}
        <div className="text-[#EFEFEF] font-extrabold leading-none mt-0
                     text-[12vw] sm:text-[8vw] md:text-[6vw] lg:text-[100px]">
          Contact us.
        </div>
        
        {/* Contact Us - Subtext - justified text for sm and md screens */}
        <p className="text-[25px] font-light leading-[25px] text-[#efefef] font-['Helvetica_Neue_LT_Pro']
                   mt-6 max-w-lg mx-auto lg:mx-0 text-justify sm:text-justify md:text-justify lg:text-left">
          Get in touch with us for any questions or enquiries. We will get back to you as soon as possible!
        </p>
      </div>
    </div>
  

    
    {/* Grid section */}
    <div className="text-center sm:text-center md:text-center lg:text-right mb-16">
      <div className="inline-block sm:inline-block md:inline-block lg:w-2/3 lg:pr-8">
        <div className="pl-0">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-16">
            {contactInfo.map((item, index) => (
              <address key={index} className="not-italic text-left">
                <h2 className="text-[15px] font-['Benz_Grotesk'] leading-[15px] text-[#efefef] mb-2">
                  {item.label}
                </h2>
                <div className="text-[25px] font-light leading-[27px] text-[#efefef] font-['Helvetica_Neue_LT_Pro'] min-w-max">
                  {item.content.map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < item.content.length - 1 && <br />}
                    </span>
                  ))}
                </div>
              </address>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
  
  {/* Contact Image - with specific positioning for xl and 2xl screens */}
  <div className="flex justify-center lg:justify-end xl:justify-end 2xl:justify-end px-4 lg:px-8">
    <div className="relative w-[296px] sm:w-[400px] md:w-[500px] lg:w-[670px] xl:w-[670px] 2xl:w-[670px]
                  xl:mr-32 2xl:mr-80">
      <div className="absolute inset-0 bg-[#959191]/20 rounded-[40px] blur-[20px]"></div>
      <img
        className="relative rounded-[40px] w-full h-[203px] sm:h-[210px] md:h-[210px] lg:h-[212px] xl:h-[212px] 2xl:h-[212px]"
        src="/computercontact.jpg"
        alt="Contact Illustration"
      />
    </div>
  </div>
</div>

    </section>
  );
};

export default Contact;