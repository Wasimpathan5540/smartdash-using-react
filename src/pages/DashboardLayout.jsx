import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const DashboardLayout = ({ children, title }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 font-sans ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <Sidebar
        darkMode={darkMode}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="flex flex-col flex-1 md:ml-64">
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          setSidebarOpen={setSidebarOpen}
          title={title}
        />

        <main className="p-4 md:p-6 lg:p-8 w-full max-w-7xl mx-auto">
          {children(darkMode)}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
