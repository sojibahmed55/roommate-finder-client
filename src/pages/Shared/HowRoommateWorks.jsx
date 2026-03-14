
import React from "react";
import { Fade } from "react-awesome-reveal";
import { FaComments, FaHeart, FaSearch, FaUserPlus } from "react-icons/fa";

const HowRoommateWorks = () => {
  const steps = [
    {
      icon: <FaUserPlus />,
      title: "Create Profile",
      desc: "Add your preferences, location and budget to get better matches.",
    },
    {
      icon: <FaSearch />,
      title: "Browse Listings",
      desc: "Explore available roommate posts filtered by lifestyle.",
    },
    {
      icon: <FaHeart />,
      title: "Like & Interest",
      desc: "Like posts you prefer. Contact appears after interest.",
    },
    {
      icon: <FaComments />,
      title: "Connect Easily",
      desc: "Talk, discuss comfort and move forward confidently.",
    },
  ];

  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-gradient-to-b from-white to-[#f7f3ea] dark:from-[#0f0f0f] dark:to-[#1a1814] overflow-hidden">

      {/* background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] h-[250px] sm:h-[300px] bg-[#e3d8c2]/20 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Heading */}
        <Fade triggerOnce>
          <div className="text-center mb-14 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1f1a14] dark:text-white">
              How <span className="text-[#e3d8c2]">Roommate Finder</span> Works
            </h2>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-[#6b5f3d] dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Finding a roommate shouldn’t feel complicated.
              We made it simple, smart, and comfortable.
            </p>

            <div className="mt-5 sm:mt-6 w-20 sm:w-28 h-[3px] mx-auto bg-[#e3d8c2] rounded-full shadow-[0_6px_25px_rgba(227,216,194,0.6)]"></div>
          </div>
        </Fade>

        {/* Timeline Container */}
        <div className="relative">

          {/* vertical line desktop only */}
          <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-[2px] bg-[#e3d8c2]/40"></div>

          <div className="space-y-16 sm:space-y-20">

            {steps.map((step, index) => (
              <Fade key={index} direction="up" triggerOnce>
                <div
                  className={`
                    flex flex-col md:flex-row items-center
                    ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}
                  `}
                >

                  {/* Card */}
                  <div className="w-full md:w-1/2 px-2 sm:px-6">
                    <div className="
                      relative
                      bg-white/80 dark:bg-[#181611]
                      backdrop-blur-xl
                      border border-[#e3d8c2]/40
                      rounded-2xl sm:rounded-3xl
                      p-6 sm:p-8
                      shadow-[0_20px_40px_rgba(0,0,0,0.08)]
                      hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)]
                      transition-all duration-500
                    ">

                      <div className="text-[#e3d8c2] text-2xl sm:text-3xl mb-4">
                        {step.icon}
                      </div>

                      <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#1f1a14] dark:text-white mb-2">
                        {step.title}
                      </h3>

                      <p className="text-sm sm:text-base text-[#6b5f3d] dark:text-gray-400 leading-relaxed">
                        {step.desc}
                      </p>

                    </div>
                  </div>

                  {/* Number Circle */}
                  <div className="relative z-20 my-6 md:my-0 flex justify-center items-center">
                    <div className="
                      w-12 h-12 sm:w-14 sm:h-14
                      flex items-center justify-center
                      rounded-full
                      bg-[#e3d8c2]
                      text-[#1f1a14]
                      font-bold
                      shadow-[0_8px_30px_rgba(227,216,194,0.6)]
                    ">
                      {index + 1}
                    </div>
                  </div>

                  <div className="hidden md:block md:w-1/2"></div>

                </div>
              </Fade>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default HowRoommateWorks;
