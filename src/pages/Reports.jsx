import DashboardLayout from "./DashboardLayout";

const Reports = () => {
  return (
    <DashboardLayout title="Reports">
      {(darkMode) => (
        <section
          className={`rounded-xl p-6 border ${
            darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
          }`}
        >
          <h2 className="text-xl font-semibold mb-4">Generated Reports</h2>

          <ul className="space-y-4">
            {["Monthly Sales", "User Growth", "Revenue Summary"].map(
              (report) => (
                <li
                  key={report}
                  className={`p-4 rounded-lg flex justify-between items-center ${
                    darkMode
                      ? "bg-gray-700"
                      : "bg-gray-100"
                  }`}
                >
                  <span>{report}</span>
                  <button className="text-blue-500 font-medium">
                    Download
                  </button>
                </li>
              )
            )}
          </ul>
        </section>
      )}
    </DashboardLayout>
  );
};

export default Reports;
