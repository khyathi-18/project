// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18
import './index.css'; // This imports the Tailwind styles
import App from './App';
import reportWebVitals from './reportWebVitals'; // Import reportWebVitals

// Create the root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
