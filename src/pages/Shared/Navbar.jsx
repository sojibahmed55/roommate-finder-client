import React, { useContext, useState} from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { Link, NavLink } from "react-router";
import { Menu, X, Sun, Moon, LogOut } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOutUser } = useContext(AuthContext);


  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("sign out user");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Find Roommate", path: "/add-listing" },
    { name: "Browse Listing", path: "/browse-listing" },
    { name: "My Listing", path: "/my-listing" },
  ];

  return (
    <>
      
      <header
        className="sticky top-0 z-50 
bg-white dark:bg-slate-950

border-b border-gray-200 dark:border-gray-800 
transition-colors duration-300"
      >
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 h-16 md:h-16 flex items-center gap-36 justify-center">
          {/* --- LOGO --- */}
          <Link
            to="/"
            className="flex items-center gap-2 group transition-transform active:scale-95"
          >
            <div className="w-10 h-10 rounded-xl bg-[#e3d8c2] flex items-center justify-center shadow-lg shadow-[#e3d4c2]-500/30 group-hover:rotate-6 transition-all">
              <img
                src="https://i.ibb.co.com/5gsY8v7V/huy-nguyen-AB-q9lw-CVv8-unsplash.jpg"
                alt="logo"
                className="w-full h-full rounded-xl object-cover border-2 border-[#e3d8c2]"
              />
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tight dark:text-white">
              Roomie<span className="text-[#e3d8c2]">Find</span>
            </span>
          </Link>

          {/* --- DESKTOP NAVIGATION --- */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map(({ name, path }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `relative px-5 py-3 text-[15px] font-semibold tracking-wide 
     transition-all duration-300 rounded-md
     ${
       isActive
         ? "text-[#e3d8c2]"
         : "text-gray-600 dark:text-gray-400 hover:text-[#1f1a14] hover:bg-[#e3d8c2]/30"
     }`
                }
              >
                {({ isActive }) => (
                  <span className="relative">
                    {name}

                    {/* Premium Underline */}
                    <span
                      className={`
          absolute left-0 -bottom-1 h-[2.5px] rounded-full
          transition-all duration-300
          ${
            isActive
              ? "w-full bg-[#e3d8c2] shadow-[0_4px_15px_rgba(227,216,194,0.7)]"
              : "w-0 bg-[#e3d8c2] group-hover:w-full"
          }
        `}
                    ></span>
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* --- RIGHT ACTIONS --- */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Theme Toggle */}
            <ThemeToggle></ThemeToggle>
            
            {/* Auth/Profile */}
            <div className="hidden md:block">
              {user ? (
                <div className="relative group">
                  <button className="flex items-center gap-2 p-1 pl-1  rounded-full bg-gray-100 dark:bg-gray-800 border border-transparent hover:border-blue-500/50 transition-all">
                    <img
                      src={user?.photoURL || "https://i.ibb.co/4Zg2z2M/user.png"}
                      className="w-8 h-8 rounded-full object-cover"
                      alt=""
                    />
                  </button>

                  {/* Dropdown Menu */}
                  <div className="absolute right-0 mt-3 w-56 bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-2xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-200 z-[110]">
                    <div className="px-4 py-3 border-b dark:border-gray-800">
                      <p className="text-[16px] font-bold dark:text-white text-black ">
                        {user.displayName}
                      </p>
                      <p className="text-sm font-bold truncate dark:text-white">
                        {user.email}
                      </p>
                    </div>
                    
                    <button
                      onClick={handleSignOut}
                      className="w-full flex items-center cursor-pointer gap-3 px-4 py-3 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors"
                    >
                      <LogOut size={16} /> Log Out
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-2">
        
                  <Link
                    to="/login"
                    className="btn border border-[#e3d8c2] bg-transparent text-[#dbc187] dark:border-white/70 dark:text-white hover:bg-[#e3d8c2] hover:text-black hover:border-[#e3d8c2] transition-colors"
                  >
                    Login
                  </Link>
                  <Link to="/register">
                    
                    <button className="btn  border border-[#e3d8c2] bg-[#e3d8c2] text-black dark:bg-[#e3d8c2] dark:text-white hover:bg-transparent hover:text-[#e3d8c2] hover:border-[#e3d8c2] dark:hover:bg-[#e3d8c2] dark:hover:text-black transition-colors">
                      Sign Up
                    </button>
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* --- MOBILE SIDEBAR DRAWER --- */}
      <div
        className={`fixed inset-0 z-[150] lg:hidden transition-opacity duration-300 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {/* Backdrop overlay */}
        <div
          className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        ></div>

        {/* Sidebar Content */}
        <div
          className={`absolute right-0 top-0 h-full w-[280px] bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300 ease-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="p-6 flex flex-col h-full">
            <div className="flex items-center justify-between mb-10">
              <span className="font-black text-xl dark:text-white">Menu</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex flex-col gap-2">
              {navItems.map(({ name, path }) => (
                <NavLink
                  key={path}
                  to={path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center px-4 py-3.5 rounded-2xl font-bold transition-all ${
                      isActive
                        ? "bg-[#e3d8c2] text-black shadow-lg shadow-[#a08e6a]/30"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`
                  }
                >
                  {name}
                </NavLink>
              ))}
            </nav>

            <div className="mt-auto border-t dark:border-gray-800 pt-6">
              {user ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-3 px-2">
                    <img
                      src={user.photoURL}
                      className="w-10 h-10 rounded-full border-2 border-blue-500 p-0.5"
                      alt="user"
                    />
                    <div>
                      <p className="font-bold dark:text-white text-sm">
                        {user.displayName}
                      </p>
                      <p className="text-xs text-gray-500 truncate w-32">
                        {user.email}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleSignOut}
                    className="w-full py-3.5 bg-red-50 dark:bg-red-500/10 text-red-500 rounded-2xl font-bold text-sm active:scale-95 transition-all"
                  >
                    Log Out
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  
                  <Link
                    onClick={() => setIsMenuOpen(false)}
                    to="/login"
                    className="w-full"
                  >
                    <button className="w-full py-3 btn border border-[#e3d8c2] bg-transparent text-[#dbc187] dark:border-white/70 dark:text-white hover:bg-[#e3d8c2] hover:text-black hover:border-[#e3d8c2] transition-colors">
                      Login
                    </button>
                  </Link>
                  <Link to="/register" className="w-full">
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="w-full py-3 btn  border border-[#e3d8c2] bg-[#e3d8c2] text-black dark:bg-[#e3d8c2] dark:text-white hover:bg-transparent hover:text-[#e3d8c2] hover:border-[#e3d8c2] dark:hover:bg-[#e3d8c2] dark:hover:text-black transition-colors"
                    >
                      Sign Up
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
