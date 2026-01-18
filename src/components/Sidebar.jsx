import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  BarChart2,
  FileText,
  Settings,
  X,
} from "lucide-react";

const Sidebar = ({ darkMode, sidebarOpen, setSidebarOpen }) => {
  const menuItems = [
    { name: "Dashboard", path: "/", icon: LayoutDashboard },
    { name: "Analytics", path: "/analytics", icon: BarChart2 },
    { name: "Reports", path: "/reports", icon: FileText },
    { name: "Settings", path: "/settings", icon: Settings },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-64 z-50 transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 border-r
        ${
          darkMode
            ? "bg-gray-900 border-gray-800 text-gray-300"
            : "bg-white border-gray-200 text-gray-600"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 h-16 border-b dark:border-gray-800">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            SmartDash
          </h1>

          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <X size={24} />
          </button>
        </div>

        {/* Menu */}
        <nav className="p-4 space-y-2 mt-4">
          {menuItems.map(({ name, path, icon: Icon }) => (
            <NavLink
              key={name}
              to={path}
              end={path === "/"}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
                ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600"
                }`
              }
            >
              <Icon size={20} />
              <span className="font-medium">{name}</span>
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 w-full p-6 border-t dark:border-gray-800">
          <p className="text-xs text-center text-gray-400">
            © 2026 SmartDash Inc.
          </p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
