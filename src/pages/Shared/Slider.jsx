// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, EffectFade } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/effect-fade";

// const slides = [
//   {
//     title: "Find Your Perfect Roommate",
//     desc: "Discover people who match your lifestyle, budget and mindset.",
//     image: "/images/slide1.jpg",
//   },
//   {
//     title: "Live Smarter Together",
//     desc: "Shared living made safe, simple and beautifully organized.",
//     image: "/images/slide2.jpg",
//   },
//   {
//     title: "Because Home Matters",
//     desc: "Choose comfort. Choose compatibility. Choose peace.",
//     image: "/images/slide3.jpg",
//   },
// ];

// const Slider = () => {
//   return (
//     <section className="relative h-[92vh] w-full overflow-hidden">

//       <Swiper
//         modules={[Autoplay, Pagination, EffectFade]}
//         effect="fade"
//         autoplay={{ delay: 5000 }}
//         loop
//         pagination={{ clickable: true }}
//         className="h-full"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div
//               className="h-full w-full bg-cover bg-center relative"
//               style={{ backgroundImage: `url(${slide.image})` }}
//             >
//               {/* DARK LUXURY OVERLAY */}
//               <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />

//               {/* CONTENT */}
//               <div className="relative z-10 h-full flex items-center">
//                 <div className="max-w-7xl mx-auto px-6">

//                   <div className="max-w-2xl">
//                     <h1 className="
//                       text-5xl md:text-7xl
//                       font-semibold
//                       text-white
//                       leading-tight
//                       tracking-wide
//                     ">
//                       {slide.title}
//                     </h1>

//                     <p className="
//                       mt-8
//                       text-lg md:text-xl
//                       text-white/80
//                       leading-relaxed
//                     ">
//                       {slide.desc}
//                     </p>

//                     <div className="mt-12 flex gap-6">
//                       <button className="
//                         px-10 py-4 rounded-full
//                         bg-[#e3d8c2]
//                         text-[#1b1b1b]
//                         text-lg
//                         font-medium
//                         shadow-[0_20px_70px_rgba(227,216,194,0.6)]
//                         hover:scale-105 transition
//                       ">
//                         Browse Listings
//                       </button>

//                       <button className="
//                         px-10 py-4 rounded-full
//                         border border-white/40
//                         text-white
//                         text-lg
//                         backdrop-blur-md
//                         hover:bg-white/10 transition
//                       ">
//                         Add Listing
//                       </button>
//                     </div>
//                   </div>

//                 </div>
//               </div>

//               {/* GOLD BLUR GLOW */}
//               <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-[#e3d8c2]/40 rounded-full blur-[140px]" />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// export default Slider;
// import React from 'react';
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import { FaLongArrowAltRight } from "react-icons/fa";
// import { Typewriter } from "react-simple-typewriter";

// import img from "../../assets/anita-monteiro-KRG2RGt5fk8-unsplash - Copy (2).jpg"
// import img2 from "../../assets/anita-monteiro-KRG2RGt5fk8-unsplash.jpg"
// import img3 from "../../assets/anita-monteiro-KRG2RGt5fk8-unsplash - Copy.jpg"


// const Slider = () => {
//   const exploreService = () => {
//     window.scrollTo({
//       top: 1080,   // Only use `top`, not x and y
//       behavior: "smooth"
//     });
//   };
//   return (
//     <div>
//       <Swiper navigation={true} modules={[Navigation]} loop={true} className="mySwiper">
//         {[img, img2, img3].map(
//           (image, index) => (
//             <SwiperSlide key={index}>
//               <div className="relative w-full h-[600px] flex">
//                 <img
//                   src={image}
//                   className="brightness-50 w-full h-full object-cover object-right lg:object-right"
//                   alt="banner"
//                 />
//                 <div className="share-tech absolute space-y-4 top-1/2 left-10 md:left-20 transform -translate-y-1/2 text-white text-3xl font-bold text-start max-w-xl">
//                   <p className="pl-3">
//                     <Typewriter
//                       className="share-tech"
//                       words={["Your One-Stop Service Solution"]}
//                       typeSpeed={50}
//                       delaySpeed={3000}
//                     />
//                   </p>
//                   <p className="pl-3">
//                     <Typewriter
//                       words={["Connect, Hire, and Get Things Done!"]}
//                       typeSpeed={40}
//                       delaySpeed={2800}
//                     />
//                   </p>
//                   <button onClick={exploreService} className="btn btn-success btn-outline font-normal text-lg ml-3">
//                     Explore more{" "}
//                     <FaLongArrowAltRight size={25} />
//                   </button>
//                 </div>
//               </div>
//             </SwiperSlide>
//           )
//         )}
//       </Swiper>
//     </div>
//   );
// };

// export default Slider;
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

import img from "../../assets/couple-reading-book-having-breakfast-bed.jpg";
import img2 from "../../assets/male-friends-sharing-joystick.jpg";
import img3 from "../../assets/man-showing-woman-tablet-bed.jpg";

const Slider = () => {
  const exploreService = () => {
    window.scrollTo({
      top: 1080,
      behavior: "smooth",
    });
  };

  const slides = [
    {
      image: img,
      heading: "Experience Excellence in Every Service",
      subheading: "Seamless, Reliable, and Professional Solutions",
      btnText: "Discover Now",
      btnColor: "bg-gradient-to-r from-indigo-600 to-purple-500 hover:from-purple-500 hover:to-indigo-600",
    },
    {
      image: img2,
      heading: "Your Trusted Partner for Every Task",
      subheading: "Connecting You with Top Experts Effortlessly",
      btnText: "Get Started",
      btnColor: "bg-gradient-to-r from-green-500 to-teal-400 hover:from-teal-400 hover:to-green-500",
    },
    {
      image: img3,
      heading: "Innovate, Hire, Achieve",
      subheading: "Making Your Ideas Come Alive",
      btnText: "Explore Services",
      btnColor: "bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-orange-500 hover:to-yellow-400",
    },
  ];

  return (
    <div className="relative w-full">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        loop={true}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[600px] lg:h-[700px] flex">
              <img
                src={slide.image}
                alt="banner"
                className="w-full h-full object-cover brightness-50 shadow-xl"
              />
              <div className="absolute top-1/2 left-10 md:left-20 transform -translate-y-1/2 text-white max-w-xl space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-xl">
                  <Typewriter
                    words={[slide.heading]}
                    typeSpeed={60}
                    delaySpeed={2500}
                  />
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl font-light drop-shadow-md">
                  <Typewriter
                    words={[slide.subheading]}
                    typeSpeed={45}
                    delaySpeed={2800}
                  />
                </p>
                <button
                  onClick={exploreService}
                  className={`btn text-white ${slide.btnColor} font-semibold px-6 py-3 text-lg flex items-center gap-3 shadow-2xl transition-transform transform hover:scale-105`}
                >
                  {slide.btnText} <FaLongArrowAltRight size={20} />
                </button>
              </div>
              {/* Optional subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/40 pointer-events-none"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
