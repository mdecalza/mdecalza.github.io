/* Matthew DeCalzadilla 2024—2025 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '/build/stylesheets/index.css';
import App from '/src/components/App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);