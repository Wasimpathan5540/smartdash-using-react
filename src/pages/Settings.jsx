import DashboardLayout from "./DashboardLayout";

const Settings = () => {
  return (
    <DashboardLayout title="Settings">
      {(darkMode) => (
        <section
          className={`rounded-xl p-6 border max-w-xl ${
            darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
          }`}
        >
          <h2 className="text-xl font-semibold mb-4">User Settings</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Username</label>
              <input
                type="text"
                className={`w-full p-2 rounded border ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white"
                    : "bg-white border-gray-300"
                }`}
                placeholder="Enter username"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                className={`w-full p-2 rounded border ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white"
                    : "bg-white border-gray-300"
                }`}
                placeholder="Enter email"
              />
            </div>

            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              Save Changes
            </button>
          </div>
        </section>
      )}
    </DashboardLayout>
  );
};

export default Settings;
