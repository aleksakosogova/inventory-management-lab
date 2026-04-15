import React from 'react';
import { useNavigate } from 'react-router-dom';
import { inventoryApi } from '../services/inventoryApi';
import InventoryForm from '../components/inventory/InventoryForm';

const AdminInventoryCreate = () => {
  const navigate = useNavigate();

  const handleCreate = async (formData) => {
    try {
      await inventoryApi.create(formData); // Використовує POST /register [cite: 71]
      alert('Позицію успішно створено!');
      navigate('/admin'); // Повертаємось до списку [cite: 101]
    } catch (err) {
      alert('Помилка при створенні: ' + err.message);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Додати нову позицію</h1>
      <InventoryForm onSubmit={handleCreate} />
    </div>
  );
};

export default AdminInventoryCreate;