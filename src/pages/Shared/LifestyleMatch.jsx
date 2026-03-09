import { Fade } from "react-awesome-reveal";
import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaUserShield,
  FaHeart,
  FaFilter,
  FaCheckCircle,
} from "react-icons/fa";

const LifestyleMatch = () => {
  const features = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Location Based Matching",
      desc: "Find roommates by preferred city and area to ensure convenience and comfort.",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Budget & Rent Control",
      desc: "Filter listings by rent amount and match with roommates within your budget range.",
    },
    {
      icon: <FaFilter />,
      title: "Lifestyle Preferences",
      desc: "Choose based on smoking habits, pets, night schedule and room type preferences.",
    },
    {
      icon: <FaUserShield />,
      title: "Protected & Secure Routes",
      desc: "Private routes ensure only authenticated users can access personal listings.",
    },
    {
      icon: <FaHeart />,
      title: "Interest & Like System",
      desc: "Show interest in listings and reveal contact details securely after liking.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Availability Status",
      desc: "Easily see whether a listing is available or not before connecting.",
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-white to-[#f8f5ee] dark:from-[#0f0f0f] dark:to-[#15130f]">

      {/* premium glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#e3d8c2]/30 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <Fade direction="up" triggerOnce>
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1f1a14] dark:text-white">
              Why Choose Roommate Finder?
            </h2>

            <p className="mt-6 text-[#6b5f3d] dark:text-gray-400 max-w-2xl mx-auto text-base lg:text-lg leading-relaxed">
              A smart platform designed to help you find compatible roommates 
              based on location, budget, lifestyle preferences, and availability — 
              all in one secure environment.
            </p>

            <div className="mt-8 h-[3px] w-32 bg-[#e3d8c2] rounded-full mx-auto shadow-[0_8px_30px_rgba(227,216,194,0.6)]"></div>
          </div>
        </Fade>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((item, index) => (
            <Fade key={index} direction="up" delay={index * 100} triggerOnce>
              <div
                className="
                  group
                  relative
                  rounded-3xl
                  p-8
                  bg-white/70 dark:bg-[#1a1712]/80
                  backdrop-blur-2xl
                  border border-[#e3d8c2]/40
                  shadow-[0_20px_50px_rgba(0,0,0,0.06)]
                  hover:-translate-y-3
                  hover:shadow-[0_30px_80px_rgba(0,0,0,0.15)]
                  transition-all duration-500
                "
              >
                {/* icon box */}
                <div className="w-14 h-14 rounded-2xl bg-[#e3d8c2]/20 flex items-center justify-center text-[#8a7747] text-xl mb-6 group-hover:bg-[#e3d8c2] group-hover:text-[#1f1a14] transition-all duration-500 shadow-md">
                  {item.icon}
                </div>

                <h3 className="text-lg font-semibold text-[#2a2418] dark:text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-[#6b5f3d] dark:text-gray-400 leading-relaxed">
                  {item.desc}
                </p>

                {/* hover glow overlay */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-[#e3d8c2]/20 to-transparent transition duration-500 pointer-events-none"></div>
              </div>
            </Fade>
          ))}

        </div>
      </div>
    </section>
  );
};

export default LifestyleMatch;

