import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { InventoryProvider } from './store/InventoryContext';

// Імпорти з 7-ї лаби (Адмінка)
import AdminInventory from './pages/AdminInventory';
import AdminInventoryCreate from './pages/AdminInventoryCreate';
import AdminInventoryEdit from './pages/AdminInventoryEdit';
import AdminInventoryDetails from './pages/AdminInventoryDetails';

// Імпорти з 8-ї лаби (Нові сторінки)
import Gallery from './pages/Gallery';
import Favorites from './pages/Favorites';

import './App.css';

function App() {
  return (
    <InventoryProvider>
      <Router>
        <div className="App">
          {/* Навігаційна панель, щоб викладач бачив переходи */}
          <nav className="main-nav">
            <div className="nav-logo">Inventory App 🌸</div>
            <div className="nav-links">
              <Link to="/gallery">Галерея</Link>
              <Link to="/favorites">Улюблені</Link>
              <Link to="/admin" className="admin-link">Адмін-панель</Link>
            </div>
          </nav>

          <div className="content-container">
            <Routes>
              {/* Нові маршрути 8-ї лабораторної */}
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/favorites" element={<Favorites />} />

              {/* Маршрути 7-ї лабораторної (Адмінка) */}
              <Route path="/admin" element={<AdminInventory />} />
              <Route path="/admin/create" element={<AdminInventoryCreate />} />
              <Route path="/admin/edit/:id" element={<AdminInventoryEdit />} />
              <Route path="/admin/details/:id" element={<AdminInventoryDetails />} />

              {/* Тепер при запуску відкриваємо Галерею (як для звичайного користувача) */}
              <Route path="/" element={<Navigate to="/gallery" />} />
            </Routes>
          </div>
        </div>
      </Router>
    </InventoryProvider>
  );
}

export default App;