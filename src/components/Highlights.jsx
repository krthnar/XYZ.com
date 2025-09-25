import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Highlights = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Card Data
  const cards = [
    { 
      image: "/subrectangle1.jpg", 
      title: " title", 
      description: "description. ",
    },
    { image: "/cardbackground5.jpg",
      title: "title",
      description: "description. ",
     },
    { image: "/cardbackground2.jpg",
      title:"title " ,
      description: "description. ",
     },
    { image: "/subrectangle2.jpg" ,
      title: " title", 
      description: "description. ",
    },
    { image: "/cardbackground1.jpg",
      title: " title", 
      description: "description. ",
     },

  ];

  const visibleCards = 3.5; // Number of visible cards at a time

  // Move to the previous slide (circular)
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  // Move to the next slide (circular)
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  return (
    <section className="bg-black py-10 px-4 md:px-10 lg:px-16">
      <div className="flex flex-col items-start w-full">
        
        {/* Services Section - Small and Left-Aligned Above Cards */}
        <div className="w-full flex justify-start mb-8">
          <div className="bg-[#6662FF] rounded-full border-2 border-[#6662FF] flex items-center justify-center px-4 py-2 md:px-8 md:py-4">
            <span className="text-[#EFEFEF] text-left text-lg md:text-2xl lg:text-3xl font-bold">
              Services
            </span>
          </div>
        </div>

        {/* Cards Section */}
        <div className="relative w-full max-w-full overflow-hidden">
          <div
            className="flex gap-[111px] transition-transform duration-300"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
            }}
          >
            {[...cards, ...cards].map((card, index) => (
              <div 
                key={index} 
                className="w-[90%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%] 2xl:w-[25%] h-[300px] sm:h-[360px] md:h-[400px] lg:h-[450px] xl:h-[500px] 
                           bg-[#25f9d0]/20 rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] backdrop-blur-[90px] 
                           flex-shrink-0 flex items-center justify-center relative"
                style={{
                  backgroundImage: `url(${card.image})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                {/* Card Content */}
                <div 
                  className="bg-black/50 rounded-lg flex flex-col justify-between items-start h-full w-full"
                  style={{
                    paddingTop: "81px",
                    paddingRight: "63px",
                    paddingBottom: "89px",
                    paddingLeft: "63px",
                  }}
                >
                  {/* Title - Left Aligned */}
                  <div
                    style={{
                      width: "266px",
                      height: "72px",
                      color: "white",
                      fontSize: "26px",
                      fontFamily: "Benz Grotesk",
                      fontWeight: "850",
                      lineHeight: "26px",
                      wordWrap: "break-word",
                    }}
                  >
                    {card.title}
                  </div>

                  {/* Description - Left Aligned with right padding of 60px */}
                  <div
                    style={{
                      width: "271px",
                      height: "213px",
                      color: "#EFEFEF",
                      fontSize: "22px",
                      fontFamily: "Helvetica Light",
                      fontWeight: "400",
                      lineHeight: "24px",
                      wordWrap: "break-word",
                      paddingRight: "60px", // Right padding of 60px
                      marginTop: "0px", // No space between title & paragraph
                    }}
                  >
                    {card.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrow Controls */}
        <div className="flex flex-col gap-4 ml-auto mt-6">
  <div className="w-40 h-14 bg-white/10 rounded-full border-2 border-[#efefef] flex items-center relative">
    {/* Left Arrow */}
    <button onClick={prevSlide} className="absolute top-0 left-0 h-full flex items-center justify-center">
      <div className="w-14 h-14 flex items-center justify-center bg-white/20 rounded-full border-2 border-white">
        <ChevronLeft size={24} className="text-white" />
      </div>
    </button>

    {/* Empty Space to Maintain Shape */}
    <div className="flex-1"></div>

    {/* Right Arrow */}
    <button onClick={nextSlide} className="absolute top-0 right-0 h-full flex items-center justify-center">
      <div className="w-14 h-14 flex items-center justify-center bg-white/20 rounded-full border-2 border-white">
        <ChevronRight size={24} className="text-white" />
      </div>
    </button>
  </div>
</div>
      </div>
    </section>
  );
};

export default Highlights;