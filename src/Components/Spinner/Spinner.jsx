import React from 'react';

const Spinner = () => {
    return (
    //     <div className="w-full h-[60vh] flex items-center justify-center">
    //   <div className="relative">
    //     {/* Outer Ring */}
    //     <div className="h-24 w-24 rounded-full border-8 border-transparent border-t-purple-500 border-r-pink-500 animate-spin"></div>

    //     {/* Inner Glow Ball */}
    //     <div className="absolute inset-0 flex items-center justify-center">
    //       <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 blur-sm animate-pulse"></div>
    //     </div>

    //     {/* Center Glass Effect */}
    //     <div className="absolute inset-[22px] h-10 w-10 rounded-full bg-white/20 backdrop-blur-xl border border-white/10 shadow-lg shadow-purple-500/30"></div>
    //   </div>
    // </div>
    <div className="min-h-screen flex justify-center items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-[#e3d8c2]"></div>
            <span className="ml-4 text-xl font-semibold text-gray-700">Loading ...</span>
        </div>
    );
};

export default Spinner;