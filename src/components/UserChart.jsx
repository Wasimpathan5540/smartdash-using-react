import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area,
  AreaChart
} from "recharts";

const UserChart = ({ data, darkMode }) => {
  // Dynamic styles based on theme
  const gridColor = darkMode ? "#374151" : "#e5e7eb"; // gray-700 vs gray-200
  const textColor = darkMode ? "#9ca3af" : "#6b7280"; // gray-400 vs gray-500
  const tooltipBg = darkMode ? "#1f2937" : "#ffffff";
  const tooltipBorder = darkMode ? "#374151" : "#e5e7eb";

  return (
    // Note: The container wrapper is handled by the parent Dashboard component now
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
          </linearGradient>
        </defs>
        
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={gridColor} />
        
        <XAxis 
          dataKey="month" 
          axisLine={false} 
          tickLine={false} 
          tick={{ fill: textColor, fontSize: 12 }} 
          dy={10}
        />
        <YAxis 
          axisLine={false} 
          tickLine={false} 
          tick={{ fill: textColor, fontSize: 12 }} 
        />
        
        <Tooltip 
          contentStyle={{ 
            backgroundColor: tooltipBg, 
            borderColor: tooltipBorder, 
            borderRadius: '8px',
            color: darkMode ? '#fff' : '#000'
          }}
          itemStyle={{ color: '#3b82f6' }}
        />
        
        <Area
          type="monotone"
          dataKey="users"
          stroke="#3b82f6"
          strokeWidth={3}
          fillOpacity={1}
          fill="url(#colorUsers)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default UserChart;