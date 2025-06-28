/* Code by 2024—2025 Matthew DeCalzadilla */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '/build/stylesheets/index.css';
import App from '/src/components/App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);