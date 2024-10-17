// src/components/Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <div className="space-y-4">
        <Link to="/analytics" className="block p-4 bg-white rounded shadow hover:bg-gray-100">
          View Session Analytics
        </Link>
        <Link to="/settings" className="block p-4 bg-white rounded shadow hover:bg-gray-100">
          Configure Settings
        </Link>
        <Link to="/alerts" className="block p-4 bg-white rounded shadow hover:bg-gray-100">
          Manage Alerts
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
