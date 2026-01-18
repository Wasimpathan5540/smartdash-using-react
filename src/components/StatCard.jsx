import { Users, DollarSign, TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react";

const StatCard = ({ title, value, icon, trend, darkMode }) => {
  
  // Simple icon mapper based on the string passed from Dashboard
  const getIcon = (type) => {
    switch(type) {
      case "users": return <Users size={24} className="text-blue-500" />;
      case "currency": return <DollarSign size={24} className="text-green-500" />;
      case "chart": return <TrendingUp size={24} className="text-purple-500" />;
      default: return <Users size={24} />;
    }
  };

  const isPositive = trend?.includes("+");

  return (
    <div className={`p-6 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
      darkMode 
        ? "bg-gray-800 border-gray-700 text-white shadow-none" 
        : "bg-white border-gray-100 text-gray-800 shadow-sm"
    }`}>
      <div className="flex justify-between items-start">
        <div className={`p-3 rounded-lg ${
          darkMode ? "bg-gray-700/50" : "bg-blue-50"
        }`}>
          {getIcon(icon)}
        </div>
        {trend && (
          <div className={`flex items-center text-sm font-medium ${
            isPositive ? "text-green-500" : "text-red-500"
          }`}>
            {isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
            <span className="ml-1">{trend}</span>
          </div>
        )}
      </div>

      <div className="mt-4">
        <p className={`text-sm font-medium ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
          {title}
        </p>
        <h3 className="text-2xl font-bold mt-1">{value}</h3>
      </div>
    </div>
  );
};

export default StatCard;