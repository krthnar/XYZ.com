const Hero = () => {
  return (
    <section className="w-full flex flex-col justify-center bg-customTeal h-auto gap-10 max-container mt-0 pt-0">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full min-h-[500px] p-20 rounded-xl">
        
        {/* Small Box */}
        <div 
          className="p-16 text-white col-span-1 row-span-3 h-full rounded-xl relative"
          style={{
            backgroundImage: "url('/subrectangle1.jpg')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="w-[300px] h-[64px] text-white text-[38px] ssm:text-[24px] lg:text-[35px] 2xl:text-[38px] font-light leading-[40px] break-words absolute left-7 bottom-9">
            Learn more <br /> about XYZ
          </div>
          {/* Circle with Arrow in Upper Right Corner */}
          <div
            className="w-[80px] h-[80px] ssm:w-[60px] ssm:h-[60px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] lg:w-[131px] lg:h-[131px] bg-white/20 border-2 border-white rounded-full flex items-center justify-center absolute top-4 right-4 hover:bg-white/40 cursor-pointer transition-all duration-300"
            onClick={() => (window.location.href = "/about")} // Redirect to About page
          >
            <span className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px] xl:w-[90px] xl:h-[90px] text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl flex items-center justify-center transform -rotate-45 hover:text-black transition-all duration-300">
              →
            </span>
          </div>
        </div>

        {/* Bigger Box */}
        <div 
  className="bg-green-500 p-16 text-white col-span-1 lg:col-span-2 row-span-3 h-full rounded-xl relative"
  style={{
    backgroundImage: "url('/subrectangle2.jpg')",
    backgroundPosition: "center",
    backgroundSize: "cover",
  }}
>
  <div className="w-[300px] h-[64px] text-white text-[38px] ssm:text-[24px] lg:text-[35px] font-light leading-[40px] break-words absolute left-7 bottom-9">
    Talk to a XYZ <br /> consultant
  </div>
  {/* Circle with Arrow in Upper Right Corner */}
  <div
    className="w-[80px] h-[80px] ssm:w-[60px] ssm:h-[60px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] lg:w-[131px] lg:h-[131px] bg-white/20 border-2 border-white rounded-full flex items-center justify-center absolute top-4 right-4 hover:bg-white/40 cursor-pointer transition-all duration-300"
    onClick={() => (window.location.href = "https://outlook.office365.com/book/XYZ1@XYZ.onmicrosoft.com/")} // Redirect to provided URL
  >
    <span className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px] xl:w-[90px] xl:h-[90px] text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl flex items-center justify-center transform -rotate-45 hover:text-black transition-all duration-300">
      →
    </span>
  </div>
</div>

      </div>
    </section>
  );
};

export default Hero;