// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Analytics from './components/Analytics';
import Settings from './components/Settings';
import Alerts from './components/Alerts';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route
            path="/"
            element={<Login onLogin={() => setIsAuthenticated(true)} />}
          />
          <Route
            path="/dashboard"
            element={
              isAuthenticated ? <Dashboard /> : <Navigate to="/" />
            }
          />
          <Route
            path="/analytics"
            element={
              isAuthenticated ? <Analytics /> : <Navigate to="/" />
            }
          />
          <Route
            path="/settings"
            element={
              isAuthenticated ? <Settings /> : <Navigate to="/" />
            }
          />
          <Route
            path="/alerts"
            element={
              isAuthenticated ? <Alerts /> : <Navigate to="/" />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
