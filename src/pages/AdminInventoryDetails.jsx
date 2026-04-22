import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as inventoryApi from '../services/inventoryApi'; // Виправлено імпорт 

const AdminInventoryDetails = () => {
  const { id } = useParams(); // Отримуємо ID з URL [cite: 78]
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadItem = async () => {
      try {
        setLoading(true);
        const data = await inventoryApi.getById(id); // Виклик функції [cite: 78]
        setItem(data);
      } catch (error) {
        console.error("Помилка завантаження деталей:", error);
      } finally {
        setLoading(false);
      }
    };
    loadItem();
  }, [id]);

  if (loading) return <div className="container"><h2>Завантаження... 🌸</h2></div>;
  if (!item) return <div className="container"><h2>Товар не знайдено</h2></div>;

  return (
    <div className="container">
      <h1>Деталі інвентарю</h1>
      <div className="details-view">
        <img 
          src={`http://localhost:5000/uploads/${item.photo}`} 
          alt={item.inventory_name} 
          style={{ width: '100%', maxWidth: '500px', borderRadius: '20px', marginBottom: '20px' }} 
        />
        <h2>{item.inventory_name}</h2>
        <p style={{ fontSize: '18px', lineHeight: '1.6' }}>{item.description}</p>
        <Link to="/admin" className="btn" style={{ marginTop: '20px', display: 'inline-block' }}>
          Назад до списку
        </Link>
      </div>
    </div>
  );
};

export default AdminInventoryDetails;