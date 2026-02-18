// import { Fade } from "react-awesome-reveal";
// import { useTypewriter, Cursor } from "react-simple-typewriter";

// const LifestyleMatch = () => {
//   const [text] = useTypewriter({
//     words: [
//       "Not just a roommate.",
//       "Find someone who matches your lifestyle.",
//       "Comfort creates better living.",
//     ],
//     loop: true,
//     delaySpeed: 2000,
//   });

//   return (
//     <section className="py-24 bg-white">
//       <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

//         {/* left */}
//         <Fade direction="left" triggerOnce>
//           <div>
//             <h2 className="text-4xl font-semibold text-[#2a2418] leading-snug">
//               {text}
//               <Cursor cursorColor="#8a7747" />
//             </h2>

//             <p className="mt-6 text-[#6b5f3d] max-w-md">
//               A great roommate isn’t just about sharing rent —
//               it’s about shared habits, comfort, and mutual respect.
//             </p>
//           </div>
//         </Fade>

//         {/* right */}
//         <Fade direction="right" triggerOnce>
//           <div className="grid grid-cols-2 gap-6">

//             {[
//               "🐶 Pet Friendly",
//               "🚭 Non Smoker",
//               "🌙 Night Owl",
//               "🌱 Clean Living",
//               "🎧 Music Lover",
//               "🧘 Calm Lifestyle",
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="
//                   border border-[#e3d8c2]
//                   rounded-xl
//                   px-6 py-5
//                   text-[#2a2418]
//                   bg-[#faf8f3]
//                   hover:bg-white
//                   hover:shadow-lg
//                   hover:-translate-y-1
//                   transition-all duration-400
//                   font-medium
//                 "
//               >
//                 {item}
//               </div>
//             ))}
//           </div>
//         </Fade>
//       </div>
//     </section>
//   );
// };

// export default LifestyleMatch;


// import { Fade } from "react-awesome-reveal";
// import { useTypewriter, Cursor } from "react-simple-typewriter";

// const LifestyleMatch = () => {
//   const [text] = useTypewriter({
//     words: [
//       "Not just a roommate.",
//       "Find someone who matches your lifestyle.",
//       "Comfort creates better living.",
//     ],
//     loop: true,
//     delaySpeed: 2000,
//   });

//   const tags = [
//     "🐶 Pet Friendly",
//     "🚭 Non Smoker",
//     "🌙 Night Owl",
//     "🌱 Clean Living",
//     "🎧 Music Lover",
//     "🧘 Calm Lifestyle",
//   ];

//   return (
//     <section className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-gradient-to-b from-white to-[#f7f3ea] dark:from-[#0f0f0f] dark:to-[#1a1814]">

//       {/* Background Glow Effects */}
//       <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#e3d8c2]/30 blur-[120px] rounded-full pointer-events-none"></div>
//       <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#e3d8c2]/20 blur-[120px] rounded-full pointer-events-none"></div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

//         <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

//           {/* LEFT CONTENT */}
//           <Fade direction="left" triggerOnce>
//             <div className="text-center lg:text-left">

//               <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1f1a14] dark:text-white leading-tight">
//                 {text}
//                 <Cursor cursorColor="#e3d8c2" />
//               </h2>

//               <p className="mt-6 text-sm sm:text-base lg:text-lg text-[#6b5f3d] dark:text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
//                 A great roommate isn’t just about sharing rent —
//                 it’s about shared habits, comfort, and mutual respect.
//               </p>

//               <div className="mt-6 w-24 h-[3px] mx-auto lg:mx-0 bg-[#e3d8c2] rounded-full shadow-[0_6px_25px_rgba(227,216,194,0.6)]"></div>
//             </div>
//           </Fade>

//           {/* RIGHT TAG CLOUD DESIGN */}
//           <Fade direction="right" triggerOnce>
//             <div className="relative">

//               <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">

//                 {tags.map((item, index) => (
//                   <div
//                     key={index}
//                     className="
//                       group
//                       relative
//                       backdrop-blur-xl
//                       bg-white/60 dark:bg-[#1c1914]/60
//                       border border-[#e3d8c2]/40
//                       rounded-2xl
//                       px-4 py-5 sm:px-6 sm:py-6
//                       text-center
//                       text-sm sm:text-base
//                       font-semibold
//                       text-[#2a2418] dark:text-white
//                       shadow-[0_15px_35px_rgba(0,0,0,0.05)]
//                       hover:-translate-y-2
//                       hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)]
//                       transition-all duration-500
//                     "
//                   >
//                     {/* subtle hover glow */}
//                     <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-[#e3d8c2]/20 to-transparent transition duration-500"></div>

//                     <span className="relative z-10">{item}</span>
//                   </div>
//                 ))}

//               </div>
//             </div>
//           </Fade>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default LifestyleMatch;
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

// import { Fade } from "react-awesome-reveal";
// import { useTypewriter, Cursor } from "react-simple-typewriter";
// import {
//   FaUserCheck,
//   FaHome,
//   FaSun,
//   FaLaptopHouse,
//   FaUniversity,
//   FaLeaf,
// } from "react-icons/fa";

// const LifestyleMatch = () => {
//   const [text] = useTypewriter({
//     words: [
//       "Not just a roommate.",
//       "Find someone who matches your lifestyle.",
//       "Comfort creates better living.",
//     ],
//     loop: true,
//     delaySpeed: 2000,
//   });

//   const tags = [
//     { icon: <FaHome />, title: "Budget Friendly" },
//     { icon: <FaSun />, title: "Early Riser" },
//     { icon: <FaLaptopHouse />, title: "Work From Home" },
//     { icon: <FaUniversity />, title: "Student Friendly" },
//     { icon: <FaUserCheck />, title: "Clean & Organized" },
//     { icon: <FaLeaf />, title: "Quiet Lifestyle" },
//   ];

//   return (
//     <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-white to-[#f8f5ee] dark:from-[#0f0f0f] dark:to-[#15130f]">

//       {/* premium glow background */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#e3d8c2]/30 blur-[120px] rounded-full pointer-events-none"></div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

//         <div className="grid lg:grid-cols-2 gap-16 items-center">

//           {/* LEFT CONTENT */}
//           <Fade direction="left" triggerOnce>
//             <div className="text-center lg:text-left">

//               <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1f1a14] dark:text-white leading-tight">
//                 {text}
//                 <Cursor cursorColor="#e3d8c2" />
//               </h2>

//               <p className="mt-6 text-base lg:text-lg text-[#6b5f3d] dark:text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
//                 A great roommate isn’t just about sharing rent —
//                 it’s about shared habits, comfort, and mutual respect.
//               </p>

//               <div className="mt-8 h-[3px] w-28 bg-[#e3d8c2] rounded-full mx-auto lg:mx-0 shadow-[0_8px_30px_rgba(227,216,194,0.6)]"></div>
//             </div>
//           </Fade>

//           {/* RIGHT PREMIUM GRID */}
//           <Fade direction="right" triggerOnce>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

//               {tags.map((item, index) => (
//                 <div
//                   key={index}
//                   className="
//                     group
//                     relative
//                     rounded-3xl
//                     p-8
//                     bg-white/70 dark:bg-[#1a1712]/80
//                     backdrop-blur-2xl
//                     border border-[#e3d8c2]/40
//                     shadow-[0_20px_50px_rgba(0,0,0,0.06)]
//                     hover:-translate-y-3
//                     hover:shadow-[0_30px_80px_rgba(0,0,0,0.15)]
//                     transition-all duration-500
//                   "
//                 >
//                   {/* icon badge */}
//                   <div className="w-14 h-14 rounded-2xl bg-[#e3d8c2]/20 flex items-center justify-center text-[#8a7747] text-xl mb-6 group-hover:bg-[#e3d8c2] group-hover:text-[#1f1a14] transition-all duration-500 shadow-md">
//                     {item.icon}
//                   </div>

//                   {/* title */}
//                   <h3 className="text-lg font-semibold text-[#2a2418] dark:text-white">
//                     {item.title}
//                   </h3>

//                   {/* hover glow */}
//                   <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-[#e3d8c2]/20 to-transparent transition duration-500 pointer-events-none"></div>
//                 </div>
//               ))}

//             </div>
//           </Fade>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default LifestyleMatch;
