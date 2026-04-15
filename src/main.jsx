import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Саме цей рядок підключає твій ніжно-рожевий дизайн
import { InventoryProvider } from './store/InventoryContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Обгортаємо весь додаток Провайдером, щоб дані були доступні всюди */}
    <InventoryProvider>
      <App />
    </InventoryProvider>
  </React.StrictMode>
);