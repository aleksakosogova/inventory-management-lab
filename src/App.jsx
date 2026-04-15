import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Імпортуємо наші сторінки
import AdminInventory from './pages/AdminInventory';
import AdminInventoryCreate from './pages/AdminInventoryCreate';
import AdminInventoryEdit from './pages/AdminInventoryEdit';
import AdminInventoryDetails from './pages/AdminInventoryDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Головна сторінка адмінки зі списком [cite: 26, 42] */}
          <Route path="/admin" element={<AdminInventory />} />

          {/* Сторінка створення нової позиції [cite: 43, 65] */}
          <Route path="/admin/create" element={<AdminInventoryCreate />} />

          {/* Сторінка редагування [cite: 44, 85] */}
          <Route path="/admin/edit/:id" element={<AdminInventoryEdit />} />

          {/* Сторінка детального перегляду [cite: 45, 75] */}
          <Route path="/admin/details/:id" element={<AdminInventoryDetails />} />

          {/* Автоматичний редирект на адмінку при запуску */}
          <Route path="/" element={<Navigate to="/admin" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;