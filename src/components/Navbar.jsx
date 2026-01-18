import { Menu, Moon, Sun, Bell, Search } from "lucide-react";

const Navbar = ({ darkMode, setDarkMode, setSidebarOpen, title }) => {
  return (
    <header className={`sticky top-0 z-30 h-16 px-6 flex items-center justify-between border-b backdrop-blur-md transition-colors duration-300 ${
      darkMode 
        ? "bg-gray-900/80 border-gray-800 text-white" 
        : "bg-white/80 border-gray-200 text-gray-800"
    }`}>
      
      <div className="flex items-center gap-4">
        <button
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 md:hidden transition-colors"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu size={24} />
        </button>
        <h2 className="text-xl font-bold tracking-tight">{title || "Dashboard"}</h2>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        {/* Search Bar - Hidden on mobile for simplicity */}
        <div className={`hidden md:flex items-center px-3 py-1.5 rounded-lg border ${
          darkMode ? "bg-gray-800 border-gray-700" : "bg-gray-100 border-gray-200"
        }`}>
          <Search size={18} className="text-gray-400 mr-2" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-transparent border-none outline-none text-sm w-48 focus:ring-0" 
          />
        </div>

        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2 rounded-full transition-colors duration-300 ${
            darkMode ? "bg-gray-800 text-yellow-400 hover:bg-gray-700" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        
        <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600"></div>
      </div>
    </header>
  );
};

export default Navbar;