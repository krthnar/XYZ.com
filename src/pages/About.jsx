import shape1 from "../assets/shape1.svg";
import shape2 from "../assets/shape2.svg";

const About = () => {
  return (
    <div className="relative w-full overflow-hidden bg-[#0f0f11] text-[#efefef]">

      {/* About Section */}
      <section className="relative pt-16 md:pt-24 lg:pt-[320px] px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    {/* Desktop layout (lg screens) - Text above image */}
    <div className="hidden lg:block">
      {/* Text content positioned at the start */}
      <div className="mb-12">
        <h1 className="font-benz font-850 text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-left leading-tight mb-8 lg:ml-[350px]">ABOUT</h1>
        <p className="font-helvetica font-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight max-w-3xl text-left lg:ml-[350px]">
          At XYZ, we are redefining the future of AI solutions.
        </p>
      </div>
      
      {/* Image positioned below text with 10% outside viewport */}
      <div className="relative">
        <div className="flex justify-end ">
          <div style={{ transform: 'translateX(10%)' }}>
            <img 
              src="/aboutimage1.jpg" 
              alt="About XYZ company" 
              className="object-cover object-center rounded-[20px]"
              style={{
                width: "1361px",
                height: "349px",
                maxWidth: "none"
              }}
            />
          </div>
        </div>
      </div>
    </div>
    
    {/* Mobile/Tablet layout (sm/md screens) - Text above image */}
    <div className="lg:hidden relative mt-16">
  {/* Text positioned above image */}
  <div className="mb-6">
    <h1 className="font-benz font-850 text-5xl sm:text-6xl text-center leading-tight mb-4">ABOUT</h1>
  </div>
         
  {/* Image below text */}
  <div className="w-full relative rounded-[20px] overflow-hidden">
    <img
      src="/aboutimage1.jpg"
      alt="About XYZ company"
      className="w-full object-cover"
      style={{
        height: "138px"
      }}
    />
               
    {/* Text on image - centered vertically and horizontally */}
    <div className="absolute inset-0 flex flex-col justify-center items-center">
      <p className="font-helvetica font-normal text-xl sm:text-2xl text-white text-center leading-tight">
        At XYZ, we are<br />
        redefining the future of<br />
        AI solutions.
      </p>
    </div>
  </div>

    

    
    </div>
  </div>
</section>
      
       {/* Mission Statement */}
       <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 2xl:px-16">
  <div className="max-w-7xl mx-auto 2xl:max-w-[80%]">
    <div className="max-w-3xl mx-auto md:mx-0 2xl:mx-0">
      <p className="font-normal font-helvetica justify-start text-base sm:text-lg md:text-xl lg:text-2xl leading-tight  md:text-left"> 
        Our mission is to empower businesses with seamless, intelligent, and secure AI, 
        driving digital transformation across industries.
      </p>
    </div>
  </div>
</section>

{/* What We Do Section */}
<section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 2xl:px-16">
  <div className="w-full">
    <div className="max-w-7xl mx-auto 2xl:max-w-[80%]">
      <h2 className="font-benz font-850 text-3xl sm:text-4xl md:text-5xl mb-6 text-center md:text-left">
        What We Do
      </h2>
      <p className="font-normal font-helvetica text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto md:mx-0 mb-12 text-center md:text-left">
        We specialize in designing, deploying, and managing robust AI. 
      </p>
    </div>
      

    {/* Full-width grid container */}
    <div className="w-full">
  {/* Service Cards Grid - Single column on sm/md screens, three columns on lg screens */}
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 w-full lg:px-0 xl:px-0 2xl:px-0">
    {/* AI Infrastructure */}
    <div className="h-[193px] lg:h-[480px] w-full bg-[#6662ff] p-8 sm:p-10 lg:pt-16 lg:px-16 xl:pt-20 xl:px-20 2xl:pt-24 2xl:px-24 rounded-none">
      <div className="flex flex-col justify-start">
        <h3 className="font-benz font-850 text-xl mb-4 text-left">AI Infrastructure</h3>
        <p className="font-normal font-helvetica text-base md:text-lg leading-relaxed text-left">
          Secure AI for businesses. Scalable AI for growth. 
        </p>
      </div>
    </div>
        
    {/*AI Solutions */}
    <div className="h-[193px] lg:h-[480px] w-full bg-[#0f0f11] p-8 sm:p-10 lg:pt-16 lg:px-16 xl:pt-20 xl:px-20 2xl:pt-24 2xl:px-24 rounded-none relative overflow-hidden">
      <img src="/backgroundimage1.jpg" alt="" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay" />
      <div className="relative z-10 flex flex-col justify-start">
        <h3 className="font-benz font-850 text-xl mb-4 text-left">AI Solutions</h3>
        <p className="font-normal font-helvetica text-base md:text-lg leading-relaxed text-left">
          Intelligent AI applications for business. 
        </p>
      </div>
    </div>
        
    {/* Cloud Integration */}
    <div className="h-[193px] lg:h-[480px] w-full bg-[#25f9d0] p-8 sm:p-10 lg:pt-16 lg:px-16 xl:pt-20 xl:px-20 2xl:pt-24 2xl:px-24 rounded-none">
      <div className="flex flex-col justify-start">
        <h3 className="font-benz font-850 text-xl mb-4 text-left text-[#1e1e1e]">Cloud Integration</h3>
        <p className="font-normal font-helvetica text-base md:text-lg leading-relaxed text-left text-[#1e1e1e]">
          Seamless cloud integration services. 
        </p>
      </div>
    </div>
        
    {/* Security & Compliance */}
    <div className="h-[193px] lg:h-[480px] w-full bg-[#0f0f11] p-8 sm:p-10 lg:pt-16 lg:px-16 xl:pt-20 xl:px-20 2xl:pt-24 2xl:px-24 rounded-none relative overflow-hidden">
      <img src="/Aboutsecurity.jpg" alt="" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay" />
      <div className="relative z-10 flex flex-col justify-start">
        <h3 className="font-benz font-850 text-xl mb-4 text-left">Security & Compliance</h3>
        <p className="font-normal font-helvetica text-base md:text-lg leading-relaxed text-left">
          Advanced cybersecurity protection. Regulatory compliance solutions. Proactive threat detection and response.
        </p>
      </div>
    </div>
        
    {/* Managed Services */}
    <div className="h-[193px] lg:h-[480px] w-full bg-[#0f0f11] p-8 sm:p-10 lg:pt-16 lg:px-16 xl:pt-20 xl:px-20 2xl:pt-24 2xl:px-24 rounded-none relative overflow-hidden">
      <img src="/Aboutmanaged.jpg" alt="" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay" />
      <div className="relative z-10 flex flex-col justify-start">
        <h3 className="font-benz font-850 text-xl mb-4 text-left">Managed Services</h3>
        <p className="font-normal font-helvetica text-base md:text-lg leading-relaxed text-left">
          Comprehensive IT support. Proactive system management. Reliable performance optimization services.
        </p>
      </div>
    </div>
        
    {/* Last cell - hidden on sm/md screens, visible on lg screens */}
    <div className="hidden lg:block h-[193px] lg:h-[480px] w-full bg-transparent relative overflow-hidden">
      <img src="/Aboutsubrectangle2.jpg" alt="" className="w-full h-full object-cover" />
    </div>
  </div> 
        </div>
  </div>
</section>
      

      {/* Who We Are Section */}
      <section className="py-12 md:py-20 relative">
  {/* Shape1 with left positioning, tilted, and slightly larger on sm/md screens */}
  <img
    src={shape1}
    alt="shape1"
    className="absolute left-0 top-1/2 transform -translate-y-1/4 rotate-[-5deg] sm:rotate-[-11deg] md:rotate-[-11deg] z-20
               w-[60px] ssm:w-[160px] sm:w-[220px] md:w-[220px] lg:w-auto
               hover:rotate-[-15deg] transition-transform duration-300" 
  />
  
  <div className="max-w-7xl mx-auto flex justify-center">
    <div className="w-full max-w-5xl flex flex-col lg:flex-row justify-center items-center gap-8">
      {/* Rest of your code remains the same */}
      
      {/* Left column with heading and image */}
      <div className="w-full lg:w-auto flex flex-col items-center px-0">
        <h2 className="font-benz font-850 text-3xl sm:text-4xl md:text-5xl mb-10 text-center">Who We Are</h2>
        
        <div className="relative w-full lg:w-auto">
          <div className="w-full flex justify-center">
            <img
              src="/Aboutcomputer.jpg"
              alt="Team"
              className="w-full sm:w-[427px] md:w-[427px] h-auto sm:h-[460px] md:h-[460px] lg:w-[351px] lg:h-[370px] rounded-[30px] object-cover"
            />
          </div>
          
          <div className="absolute inset-0 flex flex-col justify-start items-center rounded-[30px] bg-black bg-opacity-60 lg:hidden">
            <div className="w-full max-w-md px-8 pt-[16px] pb-8">
              <p className="text-white font-normal font-['Helvetica'] text-base sm:text-lg leading-relaxed text-center">
                XYZ is b We provide end-to-end
                services that enable organizations to harness the power of data, automation, and
                connectivity. 
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hidden lg:block">
        <p className="max-w-[414px] font-normal font-['Helvetica'] text-base sm:text-lg md:text-xl leading-relaxed">
          we help businesses stay ahead in an increasingly digital world.
        </p>
      </div>
    </div>
  </div>
</section>
      
      {/* Vision Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#6662ff] relative overflow-visible h-[445px] sm:h-[445px] md:h-[445px] lg:h-auto">
  <div className="max-w-7xl mx-auto h-full">
    <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row gap-8 items-center sm:items-center md:items-center lg:items-start justify-center sm:justify-center md:justify-center lg:justify-between h-full">
      {/* Left Content - Heading and Text */}
      <div className="w-full md:w-1/2 space-y-6 pt-12 sm:pt-20 lg:pt-32 text-left pl-0 sm:pl-0 md:pl-0 lg:pl-20 xl:pl-48 2xl:pl-60">
        {/* Heading - Center-aligned for ssm, sm, and md screens */}
        <h2 className="font-benz font-850 w-full sm:w-[360px] mx-auto ssm:mx-auto sm:mx-auto md:mx-auto lg:mx-0 text-[#efefef] text-3xl sm:text-4xl md:text-5xl mb-4 text-center ssm:text-center sm:text-center md:text-center lg:text-left">
          Our Vision
        </h2>
        {/* Paragraph - Left-aligned for all screens */}
        <p className="font-normal font-['Helvetica'] w-full sm:w-[362px] h-auto sm:h-[299px] mx-auto sm:mx-auto md:mx-auto lg:mx-0 text-left sm:text-left md:text-left lg:text-left sm:text-lg md:text-xl leading-relaxed text-[#efefef]">
         we aim to be at the forefront
          of the digital revolution, empowering organizations to unlock new opportunities and drive
          sustainable growth.
        </p>
      </div>

      {/* Right Content - Image */}
      <div className="w-full md:w-1/2 flex justify-center sm:justify-center md:justify-center lg:justify-end relative overflow-visible">
        <img
          className="w-[249px] h-[287px] sm:w-[249px] sm:h-[287px] md:w-[249px] md:h-[287px] lg:w-[563px] lg:h-[649px] rounded-[40px] object-cover absolute -bottom-[270px] sm:-bottom-[180px] md:-bottom-[200px] lg:static lg:-mt-40 z-30"
          src="/Aboutcomputer2.jpg"
          alt="About Computer"
        />
      </div>
    </div>
  </div>

  {/* Design component positioned higher and at the right end */}
  <img
    src={shape2}
    alt="shape2"
    className="absolute right-0 bottom-0 transform translate-y-1/2 z-40 
              ssm:w-[210px] ssm:h-[194px] sm:w-[300px] sm:h-[277px] md:w-[300px] md:h-[277px] lg:w-[678px] lg:h-[593px]
              ssm:bottom-[-40%] ssm:left-[56%] sm:bottom-[-50%] sm:left-[55%] md:bottom-[-52%] md:left-[62%]  
              lg:bottom-0 lg:left-auto"
    style={{ marginRight: '-10%' }}
  />
</section>
      {/* Why Choose Us Section with Image Overlay */}
      <section className="ssm:py-56 py-24 md:py-38 px-4 sm:px-6 lg:px-8 relative bg-[#0f0f11] min-h-[35vh]">
  {/* "Why Choose Us" section - No Background Image */}
  <div className="max-w-7xl mx-auto relative z-10 h-full flex items-end">
    <h2 className="font-benz font-850 text-3xl sm:text-4xl md:text-5xl
    w-full text-center sm:text-center lg:text-left
    absolute bottom-0 left-0 sm:left-0 lg:left-8
    mb-[-60px] sm:mb-[-160px] md:mb-[-160px] lg:mb-[-180px] xl:mb-[-180px] 2xl:mb-[-180px]">
      Why Choose Us?
    </h2>
  </div>
</section>
      {/* Fullscreen Grid Section with Background Image */}
      <section 
  className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center py-16" 
  style={{ 
    backgroundImage: "url('/subrectangle1.jpg')", 
    backgroundSize: "cover", 
    backgroundPosition: "center", 
    backgroundRepeat: "no-repeat" 
  }}>
  
  {/* Centered grid container - added 2xl-specific classes to increase size */}
  <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 2xl:gap-16 w-full max-w-6xl 2xl:max-w-7xl px-6 sm:px-8 mx-auto sm:flex sm:flex-col md:flex md:flex-row md:flex-wrap sm:justify-center md:justify-center">
    {/* Expertise & Innovation - added 2xl-specific size adjustments */}
<div className="w-full max-w-[421px] 2xl:max-w-[520px] h-[283px] 2xl:h-[320px] bg-[#1e1e1e]/40 rounded-lg pt-10 sm:pt-12 2xl:pt-16 p-6 sm:p-8 2xl:p-10 flex flex-col items-center text-center backdrop-blur-sm mx-auto md:mx-0">
  <h3 className="font-benz font-850 text-xl 2xl:text-2xl mb-4 2xl:mb-6">Expertise & Innovation</h3>
  <p className="font-helvetica font-normal text-base sm:text-lg 2xl:text-xl leading-relaxed">
    We bring cutting-edge solutions
    to complex AI solutions and challenges.
  </p>
</div>

{/* Custom Solutions - added 2xl-specific size adjustments */}
<div className="w-full max-w-[421px] 2xl:max-w-[520px] h-[283px] 2xl:h-[320px] bg-[#1e1e1e]/40 rounded-lg pt-10 sm:pt-12 2xl:pt-16 p-6 sm:p-8 2xl:p-10 flex flex-col items-center text-center backdrop-blur-sm mx-auto md:mx-0">
  <h3 className="font-benz font-850 text-xl 2xl:text-2xl mb-4 2xl:mb-6">Custom Solutions</h3>
  <p className="font-helvetica font-normal text-base sm:text-lg 2xl:text-xl leading-relaxed">
    We understand that every business is unique, which is why we design solutions
    that align with specific needs and goals.
  </p>
</div>

{/* Security-First Approach - added 2xl-specific size adjustments */}
<div className="w-full max-w-[421px] 2xl:max-w-[520px] h-[283px] 2xl:h-[320px] bg-[#1e1e1e]/40 rounded-lg pt-10 sm:pt-12 2xl:pt-16 p-6 sm:p-8 2xl:p-10 flex flex-col items-center text-center backdrop-blur-sm mx-auto md:mx-0">
  <h3 className="font-benz font-850 text-xl 2xl:text-2xl mb-4 2xl:mb-6">Security-First Approach</h3>
  <p className="font-helvetica font-normal text-base sm:text-lg 2xl:text-xl leading-relaxed">
    Protecting your data and infrastructure is our top priority, ensuring compliance
    and resilience in an evolving digital landscape.
  </p>
</div>

{/* Customer-Centric Focus - added 2xl-specific size adjustments */}
<div className="w-full max-w-[421px] 2xl:max-w-[520px] h-[283px] 2xl:h-[320px] bg-[#1e1e1e]/40 rounded-lg pt-10 sm:pt-12 2xl:pt-16 p-6 sm:p-8 2xl:p-10 flex flex-col items-center text-center backdrop-blur-sm mx-auto md:mx-0">
  <h3 className="font-benz font-850 text-xl 2xl:text-2xl mb-4 2xl:mb-6">Customer-Centric Focus</h3>
  <p className="font-helvetica font-normal text-base sm:text-lg 2xl:text-xl leading-relaxed">
    Your success is our success. 
  </p>
</div>
</div>
    
</section>
      {/* Call to Action */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 text-center relative rounded-[40px]">
  {/* Background for sm/md screens only - covers entire section */}
  <div 
    className="absolute inset-0 rounded-[40px] lg:hidden"
    style={{
      backgroundImage: "url('/aboutlast.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-[40px]"></div>
  </div>
  
  {/* Content container */}
  <div className="max-w-4xl mx-auto relative z-10">
    {/* Background container for lg+ screens only */}
    <div
  className="hidden lg:block relative rounded-2xl overflow-hidden"
  style={{
    backgroundImage: "url('/aboutlast.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '253.05px',
  }}
>
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  <div className="flex justify-center items-center h-full px-8">
    <p className="font-benz font-850 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl leading-[28px] text-center text-white relative z-10">
      Join us in shaping the future of AI. 
    </p>
  </div>
</div>
    
    {/* Text for sm/md screens only - NO background image here */}
    <div className="lg:hidden mx-auto flex items-center justify-center">
      <p className="font-benz font-850 text-lg sm:text-xl md:text-2xl leading-[30px] text-center text-white relative z-10 px-4">
        Join us in shaping the future of AI. 
      </p>
    </div>
  </div>
</section>
      
    </div>
  );
};

export default About;