import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { applyMeta, previewMeta } from './previewMeta.js';
import './styles/global.scss';

applyMeta(previewMeta);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
