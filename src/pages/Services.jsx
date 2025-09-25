import logo from "../assets/logo.svg";

const Services = () => {
  return (
    <div className="w-full min-h-screen relative bg-[#6662ff] overflow-hidden">
      <section className="w-full flex flex-col items-center pt-[250px] px-8 pb-[100px]">
        <h1 className="text-[#efefef] text-left justify-start text-[10vw] font-benz font-850 leading-[1]">
          SERVICES
        </h1>
        <p className="text-[#efefef] ssm:text-center lg:text-left justify-start text-[5vw] font-normal font-['helvetica neue'] leading-[1.2] ml-2 mt-4">
          Unlock the Power of  
          <br />
          with XYZ
        </p>
      </section>
      <section className="relative w-full h-[617px]">
  <img 
    className="w-full h-full object-cover absolute top-0 left-0 rotate-360"
    src="/servicesbackground3.jpg"
    alt="Services Background"
  />
  <div className="absolute left-1/2 transform -translate-x-1/2 top-[180px] w-[90%] md:w-[700px] lg:w-[749px] h-auto md:h-[301px] sm:h-[240px] ssm:h-[290px] bg-black bg-opacity-30 rounded-[30px] backdrop-blur-[23.80px] p-4 sm:p-6 md:p-8 lg:p-10" />
  <div className="absolute left-1/2 transform -translate-x-1/2 top-[190px] w-[80%] md:w-[600px] lg:w-[647px] text-white text-lg md:text-[25px] justify-start font-normal leading-[24px] md:leading-[30px] z-10 p-4 sm:p-6 md:p-8 lg:p-10">
    At XYZ, we specialize in delivering comprehensive to transform the way you work.
  </div>
</section>
      
      <section className="relative w-full overflow-visible bg-[#0f0f11] pt-20 pb-0 mb-40 md:mb-60 lg:mb-80">
        <div className="container mx-auto px-4 relative">
          <h2 className="text-[#efefef] text-[30px] md:text-[40px] lg:text-[50px] font-850 font-benz leading-10 text-center mb-12">
            Our  Expertise
          </h2>
          
          <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-x-8 space-y-8 lg:space-y-0 relative">
            {/* Text comes first on sm and md screens, reversed order on lg screens */}
            <div className="w-[90%] sm:w-[400px] md:w-[500px] lg:w-[376px] text-[#efefef] text-lg md:text-[22px] lg:text-[25px] font-normal font-['helvetica'] leading-[24px] md:leading-[30px] order-1 lg:order-2">
              XYZ's  solutions cater to a wide range of industries.
            </div>
            
            <div className="relative ssm:w-[300px] sm:w-[380px] md:w-[480px] lg:w-[315px] h-[500px] md:h-[550px] lg:h-[583px] order-2 lg:order-1 mt-8 md:mt-10 lg:mt-0">
              <img 
                className="absolute top-[16%] left-0 w-full h-full rounded-[40px] z-10 object-cover"
                src="/servicesbackground4.jpg"
                alt=" Services Background"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-[#0f0f11] rounded-[40px] blur-[20px] -z-10"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full bg-[#0f0f11] min-h-screen pb-[2000px] sm:pb-[2000px] md:pb-[2000px] lg:pb-[1200px] overflow-hidden">
  <img 
    className="absolute left-0 top-0 w-full h-full object-cover rotate-180 opacity-50" 
    src="/servicesbackground2.jpg" 
    alt="Background" 
  />
  
  {/* Title - Responsive */}
  <div className="absolute left-0 right-0 mx-auto ssm:top-[100px] lg:top-[200px] lg:text-justify lg:left-[100px] xl:left-[280px] 2xl:left-[400px] ssm:text-center text-[#efefef] text-[30px] md:text-[40px] lg:text-[50px] font-850 font-benz leading-10 w-full px-4">
    Our Key Offerings
  </div>

  {/* Cards - Positioned over background image for all screen sizes */}
  <div className="absolute top-[180px] left-0 right-0 mx-auto w-full max-w-7xl px-4">

    <div className="ssm:w-[272px] ssm:h-[306px] lg:w-[561px] lg:h-[280px] ssm:mb-8 sm:mb-10 md:mb-12 bg-[#555662]/20 rounded-[20px] backdrop-blur-[20px] p-8 mb-6 lg:mb-0 mx-auto lg:mx-0 lg:absolute lg:left-[10%] lg:top-[200px] xl:left-[279px]">
      <div className="text-[#efefef] text-[20px] lg:text-[25px] font-850 font-benz leading-[30px] mb-6">
         Connectivity
      </div>
      <div className="text-[#efefef] text-base lg:text-lg font-normal font-helvetica leading-tight">
        Seamless, secure, and reliable infrastructure.
      </div>
    </div>

  
    <div className="ssm:w-[272px] ssm:h-[306px] lg:w-[288px] lg:h-[380px] ssm:mb-8 sm:mb-10 md:mb-12 bg-[#555662]/20 rounded-[20px] backdrop-blur-[20px] p-8 mb-6 lg:mb-0 mx-auto lg:mx-0 lg:absolute lg:right-[6%] lg:top-[200px] xl:right-auto xl:left-[857px]">
      <div className="text-[#efefef] text-[20px] lg:text-[25px] font-850 font-benz leading-[30px] mb-6">
        Data Analytics & AI
      </div>
      <div className="text-[#efefef] text-base lg:text-lg font-normal font-helvetica leading-tight">
        Transform raw  data into actionable insights. 
      </div>
    </div>

    
    <div className="ssm:w-[272px] ssm:h-[306px] lg:w-[288px] lg:h-[390px] ssm:mb-8 sm:mb-10 md:mb-12 bg-[#555662]/20 rounded-[20px] backdrop-blur-[20px] p-8 mb-6 lg:mb-0 mx-auto lg:mx-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-[500px] xl:left-[544px] xl:transform-none">
      <div className="text-[#efefef] text-[20px] lg:text-[25px] font-850 font-benz leading-[30px] mb-6">
        AI Management & Integration
      </div>
      <div className="text-[#efefef] text-base lg:text-lg font-normal font-helvetica leading-tight">
        Effortless onboarding, monitoring, and management of  AI solutions. 
      </div>
    </div>

   
    <div className="ssm:w-[272px] ssm:h-[306px] lg:w-[288px] lg:h-[380px] ssm:mb-8 sm:mb-10 md:mb-12 bg-[#555662]/20 rounded-[20px] backdrop-blur-[20px] p-8 mb-6 lg:mb-0 mx-auto lg:mx-0 lg:absolute lg:right-[6%] lg:top-[598px] xl:right-auto xl:left-[859px]">
      <div className="text-[#efefef] text-[20px] lg:text-[25px] font-850 font-benz leading-[30px] mb-6">
        Cloud Computing
      </div>
      <div className="text-[#efefef] text-base lg:text-lg font-normal font-helvetica leading-tight">
        Leverage the power of cloud computing for faster, more efficient data processing. 
      </div>
    </div>

    <div className="ssm:w-[272px] ssm:h-[306px] lg:w-[288px] lg:h-[380px] ssm:mb-8 sm:mb-10 md:mb-12 bg-[#555662]/20 rounded-[20px] backdrop-blur-[20px] p-8 mx-auto lg:mx-0 lg:absolute lg:left-[6%] lg:top-[618px] xl:left-[230px]">
      <div className="text-[#efefef] text-[20px] lg:text-[25px] font-850 font-benz leading-[30px] mb-6">
        Security & Compliance
      </div>
      <div className="text-[#efefef] text-base lg:text-lg font-normal font-helvetica leading-tight">
        Protect your  ecosystem with robust cybersecurity measures. 
      </div>
    </div>
  </div>
</section>
      
      {/* why choose us */}
      <section className="relative w-full bg-[#0f0f11] overflow-hidden m-0 p-0">
  <img 
    className="absolute left-0 top-0 w-full h-full object-cover rotate-180 opacity-50" 
    src="/servicesbackground.png" 
    alt="Background" 
  />
  
  <div className="relative w-full min-h-screen ssm:min-h-[120vh] lg:min-h-[140vh] xl:min-h-[140vh] 2xl:min-h-[140vh] pt-[250px] ssm:pt-0 pb-[140px] ssm:pb-[150px] lg:pb-[500px] xl:pb-[500px] 2xl:pb-[500px]">
    <div className="w-[300px] h-[300px] md:w-[500px] lg:w-[649px] md:h-[500px] lg:h-[649px] absolute left-0 right-0 mx-auto md:left-[-10%] lg:left-[-18%] xl:left-[-18%] 2xl:left-[-20%] top-[-80px] bg-[#8d8ef3]/30 rounded-full" />
    
    {/* Updated heading with 2xl positioning */}
    <div className="absolute left-0 right-0 mx-auto text-center md:text-center lg:text-left lg:left-[20%] xl:left-[283px] 2xl:left-[30%] top-[80px] md:top-[180px] lg:top-[250px] text-[#efefef] text-[30px] md:text-[40px] lg:text-[50px] font-850 font-benz leading-10">
      Why Choose Us?
    </div>
    
    <div className="w-[150px] h-[150px] md:w-[180px] lg:w-[222px] md:h-[180px] lg:h-[222px] absolute left-[10%] md:left-[10%] lg:left-[8%] xl:left-[102px] 2xl:left-[25%] top-[180px] md:top-[300px] lg:top-[400px] bg-[#00ffcd]/30 rounded-full" />
    <div className="w-[150px] h-[150px] md:w-[180px] lg:w-[222px] md:h-[180px] lg:h-[222px] absolute left-[40%] md:left-[40%] lg:left-[35%] xl:left-[433px] 2xl:left-[35%] top-[480px] md:top-[600px] lg:top-[724px] bg-[#7aeed8]/30 rounded-full" />
    <div className="w-[200px] h-[200px] md:w-[300px] lg:w-[379px] md:h-[300px] lg:h-[379px] absolute right-[10%] md:right-[10%] lg:right-[25%] xl:right-auto xl:left-[849px] 2xl:left-[62%] top-[250px] md:top-[300px] lg:top-[384px] bg-[#4344a6]/20 rounded-full" />
    <div className="w-[180px] h-[180px] md:w-[250px] lg:w-[307px] md:h-[250px] lg:h-[307px] absolute right-[15%] md:right-[15%] lg:right-[20%] xl:right-auto xl:left-[777px] 2xl:left-[60%] top-[480px] md:top-[600px] lg:top-[724px] bg-black bg-opacity-25 rounded-full" />
    
    {/* Mobile and tablet text positioning remains the same */}
    <div className="lg:hidden w-[200px] md:w-[300px] h-auto absolute left-[10%] md:left-[10%] top-[220px] md:top-[400px] text-center text-white text-xl md:text-2xl font-850 font-benz leading-[30px] md:leading-10">
      Custom Solutions 
    </div>
    
    <div className="lg:hidden w-[200px] md:w-[300px] h-auto absolute right-[10%] md:right-[10%] top-[300px] md:top-[500px] text-center text-[#efefef] text-xl md:text-2xl font-850 font-benz leading-[30px] md:leading-[50px]">
      Security-First Approach
    </div>
    
    <div className="lg:hidden w-[200px] md:w-[400px] h-auto absolute left-[10%] md:left-[10%] top-[400px] md:top-[600px] text-center text-white text-xl md:text-2xl font-850 font-benz leading-[30px] md:leading-10">
      Customer-Centric Focus
    </div>
    
    <div className="lg:hidden w-[200px] md:w-[250px] h-auto absolute right-[10%] md:right-[10%] top-[520px] md:top-[700px] text-center text-[#efefef] text-xl md:text-2xl font-850 font-benz leading-[30px] md:leading-[50px]">
      Expertise & Innovation
    </div>
    
    <div className="lg:hidden absolute left-0 right-0 mx-auto flex justify-center top-[650px] md:top-[850px]">
      <img 
        src={logo}
        alt="XYZ Logo" 
        className="w-[81px] h-[130px]"
      />
    </div>
    
    {/* Desktop text positioning with improved responsiveness */}
    <div className="hidden lg:block w-[289px] h-auto absolute left-[10%] xl:left-[200px] 2xl:left-[30%] top-[492px] text-center text-[#efefef] text-3xl font-850 font-benz leading-[50px]">
      Custom Solutions
    </div>
    
    <div className="hidden lg:block w-[400px] lg:w-[569px] h-auto absolute right-[10%] xl:right-auto xl:left-[641px] 2xl:left-[55%] top-[593px] text-center text-white text-3xl font-850 font-benz leading-10">
      Security-First Approach
    </div>
    
    <div className="hidden lg:block w-[350px] lg:w-[433px] h-auto absolute left-[10%] xl:left-[150px] 2xl:left-[24%] top-[770px] xl:top-[810px] text-center text-[#efefef] text-3xl font-850 font-benz leading-[50px]">
      Expertise & Innovation
    </div>
    
    <div className="hidden lg:block w-[364px] h-auto absolute right-[10%] xl:right-auto xl:left-[821px] 2xl:left-[64%] top-[820px] xl:top-[853px] text-center text-white text-3xl font-850 font-benz leading-10">
      Customer-Centric Focus
    </div>
    
    <div className="w-[200px] h-[200px] md:w-[300px] lg:w-[411px] md:h-[300px] lg:h-[411px] absolute right-[5%] md:right-[5%] lg:right-[5%] xl:right-auto xl:left-[1174px] 2xl:left-[90%] top-[650px] md:top-[750px] lg:top-[780px] xl:top-[850px] 2xl:top-[980px] bg-[#efefef]/30 rounded-full" />
  </div>
</section>
 
      
    </div>
  );
};

export default Services;