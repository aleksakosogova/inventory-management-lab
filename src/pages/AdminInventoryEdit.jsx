import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { inventoryApi } from '../services/inventoryApi';

const AdminInventoryEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState({ inventory_name: '', description: '' });

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await inventoryApi.getById(id);
        setItem(res.data);
      } catch (err) { console.error("Помилка завантаження"); }
    };
    fetchItem();
  }, [id]);

  const handleUpdateText = async (e) => {
    e.preventDefault();
    try {
      await inventoryApi.updateText(id, {
        inventory_name: item.inventory_name,
        description: item.description
      });
      alert('Дані граціозно оновлено!');
      navigate('/admin'); // Повернення до таблиці [cite: 101]
    } catch (err) { alert('Не вдалося оновити текст'); }
  };

  return (
    <div className="container">
      <h2>Редагування позиції</h2>
      <form onSubmit={handleUpdateText}>
        <label>Назва інвентарю</label>
        <input 
          value={item.inventory_name} 
          onChange={e => setItem({...item, inventory_name: e.target.value})} 
          required 
        />
        <label>Опис</label>
        <textarea 
          rows="4"
          value={item.description} 
          onChange={e => setItem({...item, description: e.target.value})} 
        />
        <button type="submit">Зберегти та повернутись до списку</button>
      </form>
      <button 
        onClick={() => navigate('/admin')} 
        style={{marginTop: '15px', backgroundColor: '#cfd8dc', color: '#455a64'}}
      >
        Скасувати
      </button>
    </div>
  );
};

export default AdminInventoryEdit;