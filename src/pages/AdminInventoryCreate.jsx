import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as inventoryApi from '../services/inventoryApi'; // Змінено імпорт
import { useInventory } from '../store/InventoryContext';

const AdminInventoryCreate = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState(null);
  const navigate = useNavigate();
  const { fetchInventory } = useInventory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('inventory_name', name);
    formData.append('description', description);
    formData.append('photo', photo);

    try {
      await inventoryApi.create(formData); // Виклик функції напряму
      await fetchInventory(); // Оновлюємо глобальний список
      navigate('/admin');
    } catch (error) {
      console.error("Помилка створення:", error);
    }
  };

  return (
    <div className="container">
      <h1>Додати новий інвентар 🌸</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Назва інвентарю" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <textarea 
          placeholder="Опис" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
        />
        <input 
          type="file" 
          onChange={(e) => setPhoto(e.target.files[0])} 
          required 
        />
        <button type="submit">Зберегти</button>
      </form>
    </div>
  );
};

export default AdminInventoryCreate;