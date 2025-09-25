
const Home = () => {
        return (
            <div className="relative w-full h-auto">
      

            <header className="w-full aspect-[16/9] max-lg:aspect-none relative bg-customTeal">
              {/* Background Color */}
              <div className="absolute top-0 left-0 right-0 h-24 bg-customTeal"></div>
              <div className="absolute top-0 left-0 w-16 h-full bg-customTeal max-lg:hidden"></div>
              <div className="absolute top-0 right-0 w-16 h-full bg-customTeal max-lg:hidden"></div>
        
              {/* Background Image */}
              <div
  className="absolute rounded-3xl max-lg:rounded-none max-lg:aspect-none inset-x-16 sm:top-0 md:top-0 lg:top-12 bottom-0 z-0 max-lg:inset-x-0 aspect-[16/9]"
  style={{
    backgroundImage: "url('/background.jpg')",
    backgroundPosition: "center",
    backgroundSize: "cover",
  }}
></div>
<div className="absolute 
               2xl:bottom-[80px] xl:bottom-[80px] lg:bottom-[80px] 
               md:bottom-[40px] sm:bottom-[40px] ssm:bottom-[7px]  
               ssm:right-16 sm:right-36 md:right-42 lg:right-44 
               p-6 max-w-[90%] 
               ssm:text-center sm:text-center md:text-center lg:text-left 
               ssm:text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-9xl 
               font-normal leading-tight z-10">
        <span className="text-[#EFEFEF] font-semibold break-words"> Welcome to the
</span>
        <div className="flex flex-wrap">
          <span className="text-[#25F9D0] font-semibold break-words">  generation
</span>
          <span className="text-[#EFEFEF] ml-3 font-semibold break-words"> of
</span>
        </div>
        <span className="text-[#EFEFEF] font-semibold break-words">  AI
</span>
      </div>
    </header>
    </div>
  );
};
export default Home;