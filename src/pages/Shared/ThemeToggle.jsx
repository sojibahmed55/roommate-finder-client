import { useContext } from "react";
// import { ThemeContext } from "../contexts/ThemeContext";
import { Sun, Moon } from "lucide-react";
import { ThemeContext } from "../../contexts/AuthContext/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 cursor-pointer rounded-xl border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-400"
    >
      {theme === "light" ? (
        <Moon size={18} />
      ) : (
        <Sun size={18} className="text-yellow-500 " />
      )}
    </button>
    // <button
    //   onClick={toggleTheme}
    //   className="relative w-16 h-8 rounded-full
    //   bg-white/40 dark:bg-black/40
    //   backdrop-blur-xl
    //   border border-gray-300 dark:border-gray-700
    //   transition-all duration-500 shadow-inner"
    // >
    //   <div
    //     className={`absolute top-1 left-1 w-6 h-6
    //     rounded-full bg-white dark:bg-slate-900
    //     flex items-center justify-center
    //     shadow-lg transform transition-all duration-500
    //     ${theme === "dark" ? "translate-x-8" : ""}`}
    //   >
    //     {theme === "dark" ? (
    //       <Moon size={16} className="text-yellow-400" />
    //     ) : (
    //       <Sun size={16} className="text-orange-500" />
    //     )}
    //   </div>
    // </button>
  );
};

export default ThemeToggle;
