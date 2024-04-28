import React from 'react';
import { createRoot } from 'react-dom/client'; // Import from react-dom/client
import App from './App'; // Import your App component

// Create a root element and render the App component
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<App />);