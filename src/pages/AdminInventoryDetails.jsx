import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { inventoryApi } from '../services/inventoryApi';

const AdminInventoryDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await inventoryApi.getById(id); // GET /inventory/:id [cite: 78]
        setItem(res.data);
      } catch (err) {
        alert('Не вдалося завантажити деталі');
      }
    };
    fetchItem();
  }, [id]);

  if (!item) return <p>Завантаження деталей...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={() => navigate('/admin')}>← Назад до списку</button>
      <h1>{item.inventory_name}</h1>
      <img src={item.photo_url} alt="Full" style={{ maxWidth: '100%', borderRadius: '8px' }} />
      <p><strong>Опис:</strong> {item.description}</p>
    </div>
  );
};

export default AdminInventoryDetails;