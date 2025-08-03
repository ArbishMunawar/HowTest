import React from "react";

const Dashboard = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        Welcome, {user?.name || "User"}!
      </h1>

      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">Your Info:</h2>
          <p>
            <strong>Email:</strong> {user?.email}
          </p>
        </div>

        <div className="flex gap-4 mt-4">
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
          >
            Logout
          </button>
          <Link to="/">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
