import { useEffect, useState } from "react";
import DashboardLayout from "./DashboardLayout";
import StatCard from "../components/StatCard";
import UserChart from "../components/UserChart";
import { dashboardData } from "../data/dashboardData";

/* Skeleton loader */
const SkeletonCard = ({ darkMode }) => (
  <div
    className={`h-32 rounded-xl p-6 animate-pulse border ${
      darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
    }`}
  >
    <div className="h-4 w-1/3 bg-gray-400/30 rounded mb-4"></div>
    <div className="h-8 w-1/2 bg-gray-400/30 rounded"></div>
  </div>
);

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStats(dashboardData.stats);
      setChartData(dashboardData.chart);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <DashboardLayout title="Overview">
      {(darkMode) => (
        <>
          {/* Stats Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {loading ? (
              <>
                <SkeletonCard darkMode={darkMode} />
                <SkeletonCard darkMode={darkMode} />
                <SkeletonCard darkMode={darkMode} />
              </>
            ) : (
              <>
                <StatCard title="Total Users" value={stats.users} darkMode={darkMode} />
                <StatCard title="Revenue" value={`₹${stats.revenue}`} darkMode={darkMode} />
                <StatCard title="Growth" value={stats.growth} darkMode={darkMode} />
              </>
            )}
          </section>

          {/* Chart Section */}
          <section
            className={`rounded-xl shadow-lg p-6 border transition-colors ${
              darkMode
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-gray-100"
            }`}
          >
            <h3 className="text-lg font-semibold mb-4">User Analytics</h3>

            <div className="h-64 md:h-80">
              {loading ? (
                <div className="w-full h-full animate-pulse bg-gray-300/20 rounded-lg" />
              ) : (
                <UserChart data={chartData} darkMode={darkMode} />
              )}
            </div>
          </section>
        </>
      )}
    </DashboardLayout>
  );
};

export default Dashboard;
