import DashboardLayout from "./DashboardLayout";

const Analytics = () => {
  return (
    <DashboardLayout title="Analytics">
      {(darkMode) => (
        <>
          <section
            className={`rounded-xl p-6 border mb-6 ${
              darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
            }`}
          >
            <h2 className="text-xl font-semibold mb-2">Traffic Overview</h2>
            <p className="text-sm text-gray-400">
              Analytics data such as visits, bounce rate, and session duration.
            </p>
          </section>

          <section
            className={`rounded-xl p-6 border ${
              darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
            }`}
          >
            <h2 className="text-xl font-semibold mb-2">User Engagement</h2>
            <p className="text-sm text-gray-400">
              Engagement metrics and behavior tracking.
            </p>
          </section>
        </>
      )}
    </DashboardLayout>
  );
};

export default Analytics;
