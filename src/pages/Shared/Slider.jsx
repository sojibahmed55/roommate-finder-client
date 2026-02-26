import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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

      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        navigation
        loop
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="premium-swiper"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-[420px] sm:h-[480px] md:h-[550px] lg:h-[720px]">

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

                <div className="max-w-2xl space-y-4 sm:space-y-5 text-center lg:text-left">

                  {/* badge */}
                  <span className="inline-block px-4 py-1.5 text-[10px] sm:text-xs tracking-[3px] uppercase border border-[#e3d8c2]/40 text-[#e3d8c2] rounded-full backdrop-blur-md bg-white/5">
                    {slide.badge}
                  </span>

                  {/* title */}
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold leading-tight text-[#e3d8c2]">
                    <Typewriter
                      words={[slide.title]}
                      typeSpeed={50}
                      delaySpeed={2600}
                    />
                  </h1>

                  {/* desc */}
                  <p className="text-sm sm:text-base md:text-lg text-[#f5ecd9]/80 max-w-xl mx-auto lg:mx-0">
                    <Typewriter
                      words={[slide.desc]}
                      typeSpeed={35}
                      delaySpeed={3000}
                    />
                  </p>

                  {/* button */}
                  <div className="flex justify-center lg:justify-start pt-2">
                    <button className="group inline-flex items-center gap-3 cursor-pointer px-8 py-3 sm:px-10 sm:py-4 rounded-sm border border-[#e3d8c2] text-[#e3d8c2] text-sm sm:text-base hover:bg-[#e3d8c2] hover:text-black transition-all duration-300">
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

      {/* Premium Pagination Style */}
      <style jsx global>{`
        .premium-swiper .swiper-pagination {
          bottom: 25px !important;
        }

        .premium-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: rgba(227, 216, 194, 0.4);
          opacity: 1;
          transition: all 0.3s ease;
          border-radius: 999px;
        }

        .premium-swiper .swiper-pagination-bullet-active {
          width: 28px;
          background: #e3d8c2;
          box-shadow: 0 0 15px rgba(227, 216, 194, 0.8);
        }
      `}</style>

    </section>
  );
};

export default Slider;

