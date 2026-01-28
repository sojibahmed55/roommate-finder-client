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
// import React from 'react';
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import { FaLongArrowAltRight } from "react-icons/fa";
// import { Typewriter } from "react-simple-typewriter";

// import img from "../../assets/couple-reading-book-having-breakfast-bed.jpg";
// import img2 from "../../assets/male-friends-sharing-joystick.jpg";
// import img3 from "../../assets/man-showing-woman-tablet-bed.jpg";

// const Slider = () => {
//   const exploreService = () => {
//     window.scrollTo({
//       top: 1080,
//       behavior: "smooth",
//     });
//   };

//   const slides = [
//     {
//       image: img,
//       heading: "Experience Excellence in Every Service",
//       subheading: "Seamless, Reliable, and Professional Solutions",
//       btnText: "Discover Now",
//       btnColor: "bg-gradient-to-r from-indigo-600 to-purple-500 hover:from-purple-500 hover:to-indigo-600",
//     },
//     {
//       image: img2,
//       heading: "Your Trusted Partner for Every Task",
//       subheading: "Connecting You with Top Experts Effortlessly",
//       btnText: "Get Started",
//       btnColor: "bg-gradient-to-r from-green-500 to-teal-400 hover:from-teal-400 hover:to-green-500",
//     },
//     {
//       image: img3,
//       heading: "Innovate, Hire, Achieve",
//       subheading: "Making Your Ideas Come Alive",
//       btnText: "Explore Services",
//       btnColor: "bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-orange-500 hover:to-yellow-400",
//     },
//   ];

//   return (
//     <div className="relative w-full">
//       <Swiper
//         navigation={true}
//         modules={[Navigation]}
//         loop={true}
//         className="mySwiper"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div className="relative w-full h-[600px] lg:h-[700px] flex">
//               <img
//                 src={slide.image}
//                 alt="banner"
//                 className="w-full h-full object-cover brightness-50 shadow-xl"
//               />
//               <div className="absolute top-1/2 left-10 md:left-20 transform -translate-y-1/2 text-white max-w-xl space-y-6">
//                 <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-xl">
//                   <Typewriter
//                     words={[slide.heading]}
//                     typeSpeed={60}
//                     delaySpeed={2500}
//                   />
//                 </h1>
//                 <p className="text-lg md:text-xl lg:text-2xl font-light drop-shadow-md">
//                   <Typewriter
//                     words={[slide.subheading]}
//                     typeSpeed={45}
//                     delaySpeed={2800}
//                   />
//                 </p>
//                 <button
//                   onClick={exploreService}
//                   className={`btn text-white ${slide.btnColor} font-semibold px-6 py-3 text-lg flex items-center gap-3 shadow-2xl transition-transform transform hover:scale-105`}
//                 >
//                   {slide.btnText} <FaLongArrowAltRight size={20} />
//                 </button>
//               </div>
//               {/* Optional subtle overlay gradient */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/40 pointer-events-none"></div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Slider;

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import { FaLongArrowAltRight } from "react-icons/fa";
// import { Typewriter } from "react-simple-typewriter";

// import img from "../../assets/couple-reading-book-having-breakfast-bed.jpg";
// import img2 from "../../assets/male-friends-sharing-joystick.jpg";
// import img3 from "../../assets/man-showing-woman-tablet-bed.jpg";


// const Slider = () => {
//   const exploreService = () => {
//     window.scrollTo({ top: 1080, behavior: "smooth" });
//   };

//   const slides = [
//     {
//       image: img,
//       heading: "Find Your Perfect Roommate",
//       subheading:
//         "Match by lifestyle, budget, and location — live smarter together.",
//       btnText: "Browse Listings",
//     },
//     {
//       image: img2,
//       heading: "Live With The Right People",
//       subheading:
//         "Discover compatible roommates who match your daily lifestyle.",
//       btnText: "Explore Rooms",
//     },
//     {
//       image: img3,
//       heading: "Better Living Starts Here",
//       subheading:
//         "Safe, verified roommate listings designed for modern living.",
//       btnText: "Get Started",
//     },
//   ];

//   return (
//     <div className="relative w-full overflow-hidden">
//       <Swiper navigation modules={[Navigation]} loop className="mySwiper">
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div className="relative w-full h-[620px] lg:h-[720px]">

//               {/* Image */}
//               <img
//                 src={slide.image}
//                 alt="banner"
//                 className="w-full h-full object-cover scale-105 slider-zoom"
//               />

//               {/* Dark luxury overlay */}
//               <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent"></div>

//               {/* Content box */}
//               <div
//                 className="
//                 absolute top-1/2 left-6 md:left-20
//                 -translate-y-1/2
//                 max-w-xl
//                 text-[#e3d8c2]
//                 space-y-5
//                 backdrop-blur-md
//                 bg-white/5
//                 border border-[#e3d8c2]/30
//                 rounded-2xl
//                 px-7 py-8
//                 shadow-[0_30px_80px_rgba(0,0,0,0.45)]
//               "
//               >
//                 <p className="uppercase tracking-[4px] text-xs opacity-80">
//                   Roommate Finder Platform
//                 </p>

//                 <h1 className="text-3xl md:text-5xl font-bold leading-tight">
//                   <Typewriter
//                     words={[slide.heading]}
//                     typeSpeed={55}
//                     delaySpeed={2600}
//                   />
//                 </h1>

//                 <p className="text-base md:text-lg text-[#f3ead6]/90 leading-relaxed">
//                   <Typewriter
//                     words={[slide.subheading]}
//                     typeSpeed={38}
//                     delaySpeed={3000}
//                   />
//                 </p>

//                 <button
//                   onClick={exploreService}
//                   className="
//                     mt-3
//                     px-8 py-3
//                     rounded-full
//                     border border-[#e3d8c2]
//                     text-[#e3d8c2]
//                     font-medium
//                     flex items-center gap-3
//                     bg-transparent
//                     hover:bg-[#e3d8c2]
//                     hover:text-black
//                     transition-all
//                     duration-300
//                     hover:scale-105
//                     shadow-lg
//                   "
//                 >
//                   {slide.btnText}
//                   <FaLongArrowAltRight size={22} />
//                 </button>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Slider;

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import { FaArrowRightLong } from "react-icons/fa6";
// import { Typewriter } from "react-simple-typewriter";

// import img from "../../assets/couple-reading-book-having-breakfast-bed.jpg";
// import img2 from "../../assets/male-friends-sharing-joystick.jpg";
// import img3 from "../../assets/man-showing-woman-tablet-bed.jpg";

// const Slider = () => {
//   const slides = [
//     {
//       image: img,
//       title: "Find The Right Roommate",
//       desc: "Smart matching based on lifestyle, habits, and comfort.",
//       tag: "Trusted Living Platform",
//       btn: "Explore Listings",
//     },
//     {
//       image: img2,
//       title: "Live Better Together",
//       desc: "Connect with people who match your daily rhythm.",
//       tag: "Verified Profiles Only",
//       btn: "Find Matches",
//     },
//     {
//       image: img3,
//       title: "Comfort Starts With Choice",
//       desc: "Because your home deserves the right people.",
//       tag: "Modern Shared Living",
//       btn: "Get Started",
//     },
//   ];

//   return (
//     <section className="relative w-full overflow-hidden bg-black">
//       <Swiper navigation loop modules={[Navigation]} className="w-full">
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div className="relative h-[650px] lg:h-[760px] w-full">

//               {/* IMAGE */}
//               <img
//                 src={slide.image}
//                 className="absolute inset-0 w-full h-full object-cover"
//                 alt="slide"
//               />

//               {/* cinematic overlay */}
//               <div className="absolute inset-0 bg-black/20"></div>

//               {/* content */}
//               <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">

//                 <div
//                   className="
//                   max-w-xl
//                   bg-white/5
//                   backdrop-blur-xl
//                   border border-[#e3d8c2]/25
//                   rounded-3xl
//                   px-9 py-10
//                   space-y-5
//                   shadow-[0_40px_120px_rgba(0,0,0,0.6)]
//                 "
//                 >
//                   <span className="text-xs tracking-[5px] uppercase text-[#e3d8c2]/80">
//                     {slide.tag}
//                   </span>

//                   <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-[#e3d8c2]">
//                     <Typewriter
//                       words={[slide.title]}
//                       typeSpeed={60}
//                       delaySpeed={2500}
//                     />
//                   </h1>

//                   <p className="text-[#f3ead6]/80 text-lg leading-relaxed">
//                     <Typewriter
//                       words={[slide.desc]}
//                       typeSpeed={38}
//                       delaySpeed={2800}
//                     />
//                   </p>

//                   <button
//                     className="
//                       mt-3
//                       inline-flex items-center gap-3
//                       px-9 py-3.5
//                       rounded-full
//                       border border-[#e3d8c2]
//                       text-[#e3d8c2]
//                       font-medium
//                       hover:bg-[#e3d8c2]
//                       hover:text-black
//                       transition-all
//                       duration-300
//                     "
//                   >
//                     {slide.btn}
//                     <FaArrowRightLong />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// export default Slider;


// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Typewriter } from "react-simple-typewriter";
// import { FaArrowRightLong } from "react-icons/fa6";

// import img1 from "../../assets/couple-reading-book-having-breakfast-bed.jpg";
// import img2 from "../../assets/male-friends-sharing-joystick.jpg";
// import img3 from "../../assets/man-showing-woman-tablet-bed.jpg";

// const Slider = () => {
//   const slides = [
//     {
//       image: img1,
//       title: "A Better Way To Find Roommates",
//       desc: "Smart matching built for comfort, lifestyle, and peace of mind.",
//       badge: "Modern Shared Living",
//       btn: "Browse Rooms",
//     },
//     {
//       image: img2,
//       title: "Live With People Who Match You",
//       desc: "Habits, budget, timing — aligned beautifully.",
//       badge: "Verified & Secure",
//       btn: "Explore Listings",
//     },
//     {
//       image: img3,
//       title: "Your Next Home Starts Here",
//       desc: "Where trust meets technology.",
//       badge: "Premium Living Experience",
//       btn: "Get Started",
//     },
//   ];

//   return (
//     <section className="relative w-full bg-[#0b0b0b] overflow-hidden">

//       {/* subtle luxury grain */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff10,transparent_55%)]"></div>

//       <Swiper
//         navigation
//         loop
//         modules={[Navigation]}
//         className="w-full"
//       >
//         {slides.map((slide, i) => (
//           <SwiperSlide key={i}>
//             <div className="relative h-[720px] lg:h-[820px]">

//               {/* image */}
//               <img
//                 src={slide.image}
//                 alt=""
//                 className="absolute inset-0 w-full h-full object-cover"
//               />

//               {/* cinematic overlay */}
//               <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90"></div>

//               {/* content */}
//               <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">

//                 <div className="max-w-2xl space-y-6">

//                   {/* badge */}
//                   <span className="
//                     inline-block
//                     px-5 py-2
//                     rounded-full
//                     text-xs tracking-[4px]
//                     uppercase
//                     border border-[#e3d8c2]/40
//                     text-[#e3d8c2]
//                     backdrop-blur-md
//                     bg-white/5
//                   ">
//                     {slide.badge}
//                   </span>

//                   {/* title */}
//                   <h1 className="
//                     text-4xl md:text-6xl lg:text-7xl
//                     font-semibold
//                     leading-tight
//                     text-[#e3d8c2]
//                   ">
//                     <Typewriter
//                       words={[slide.title]}
//                       typeSpeed={55}
//                       delaySpeed={2600}
//                     />
//                   </h1>

//                   {/* desc */}
//                   <p className="text-lg md:text-xl text-[#f5ecd9]/80 max-w-xl leading-relaxed">
//                     <Typewriter
//                       words={[slide.desc]}
//                       typeSpeed={38}
//                       delaySpeed={3000}
//                     />
//                   </p>

//                   {/* button */}
//                   <button
//                     className="
//                       group
//                       mt-4
//                       inline-flex
//                       items-center
//                       gap-4
//                       px-10 py-4
//                       rounded-full
//                       border border-[#e3d8c2]
//                       text-[#e3d8c2]
//                       font-medium
//                       hover:bg-[#e3d8c2]
//                       hover:text-black
//                       transition-all duration-300
//                     "
//                   >
//                     {slide.btn}
//                     <FaArrowRightLong className="group-hover:translate-x-1 transition" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// export default Slider;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Typewriter } from "react-simple-typewriter";
import { FaArrowRightLong } from "react-icons/fa6";

import img1 from "../../assets/couple-reading-book-having-breakfast-bed.jpg";
import img2 from "../../assets/male-friends-sharing-joystick.jpg";
import img3 from "../../assets/man-showing-woman-tablet-bed.jpg";

const Slider = () => {
  const slides = [
    {
      image: img1,
      title: "A Better Way To Find Roommates",
      desc: "Smart matching built for comfort, lifestyle, and peace of mind.",
      badge: "Modern Shared Living",
      btn: "Browse Rooms",
    },
    {
      image: img2,
      title: "Live With People Who Match You",
      desc: "Habits, budget, timing — aligned beautifully.",
      badge: "Verified & Secure",
      btn: "Explore Listings",
    },
    {
      image: img3,
      title: "Your Next Home Starts Here",
      desc: "Where trust meets technology.",
      badge: "Premium Living Experience",
      btn: "Get Started",
    },
  ];

  return (
    <section className="relative w-full bg-[#0b0b0b] overflow-hidden">

      {/* luxury light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff10,transparent_60%)]" />

      <Swiper navigation loop modules={[Navigation]}>
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              className="
                relative
                h-[520px]
                sm:h-[580px]
                md:h-[650px]
                lg:h-[820px]
              "
            >
              {/* image */}
              <img
                src={slide.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50" />

              {/* content */}
              <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center">

                <div
                  className="
                    max-w-2xl
                    space-y-4
                    sm:space-y-5
                    text-center
                    lg:text-left
                  "
                >
                  {/* badge */}
                  <span
                    className="
                      inline-block
                      px-4 py-1.5
                      text-[10px]
                      sm:text-xs
                      tracking-[3px]
                      uppercase
                      border border-[#e3d8c2]/40
                      text-[#e3d8c2]
                      rounded-full
                      backdrop-blur-md
                      bg-white/5
                    "
                  >
                    {slide.badge}
                  </span>

                  {/* title */}
                  <h1
                    className="
                      text-2xl
                      sm:text-3xl
                      md:text-4xl
                      lg:text-6xl
                      font-semibold
                      leading-tight
                      text-[#e3d8c2]
                    "
                  >
                    <Typewriter
                      words={[slide.title]}
                      typeSpeed={50}
                      delaySpeed={2600}
                    />
                  </h1>

                  {/* desc */}
                  <p
                    className="
                      text-sm
                      sm:text-base
                      md:text-lg
                      text-[#f5ecd9]/80
                      max-w-xl
                      mx-auto
                      lg:mx-0
                    "
                  >
                    <Typewriter
                      words={[slide.desc]}
                      typeSpeed={35}
                      delaySpeed={3000}
                    />
                  </p>

                  {/* button */}
                  <div className="flex justify-center lg:justify-start pt-2">
                    <button
                      className="
                        group
                        inline-flex
                        items-center
                        gap-3
                        cursor-pointer
                        px-8 py-3
                        sm:px-10 sm:py-4
                        rounded-full
                        border border-[#e3d8c2]
                        text-[#e3d8c2]
                        text-sm sm:text-base
                        hover:bg-[#e3d8c2]
                        hover:text-black
                        transition-all duration-300
                      "
                    >
                      {slide.btn}
                      <FaArrowRightLong className="group-hover:translate-x-1 transition" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
