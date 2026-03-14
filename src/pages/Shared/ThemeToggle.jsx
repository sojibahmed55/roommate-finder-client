import { useContext } from "react";
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
    
  );
};

export default ThemeToggle;
