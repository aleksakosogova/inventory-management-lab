import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as inventoryApi from '../services/inventoryApi';
import { useInventory } from '../store/InventoryContext';

const AdminInventoryEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { fetchInventory } = useInventory();
  
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState(null);
  const [currentPhoto, setCurrentPhoto] = useState('');

  useEffect(() => {
    const loadItem = async () => {
      try {
        const data = await inventoryApi.getById(id);
        setName(data.inventory_name);
        setDescription(data.description);
        setCurrentPhoto(data.photo);
      } catch (err) {
        console.error("Помилка завантаження", err);
      }
    };
    loadItem();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('inventory_name', name);
    formData.append('description', description);
    if (photo) {
      formData.append('photo', photo);
    }

    try {
      await inventoryApi.update(id, formData);
      await fetchInventory(); // Оновлення глобального стану [cite: 101]
      navigate('/admin');
    } catch (error) {
      console.error("Помилка оновлення:", error);
      alert("Сервер не зміг обробити запит. Перевір console сервера!");
    }
  };

  return (
    <div className="container">
      <h1>Редагування інвентарю 🌸</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        
        <div style={{ margin: '15px 0' }}>
          <p>Поточне фото:</p>
          {currentPhoto && (
            <img 
                src={`http://localhost:5000/uploads/${currentPhoto}`} 
                alt="current" 
                width="120" 
                style={{borderRadius: '15px', border: '2px solid #f8bbd0'}}
            />
          )}
        </div>

        <label>Замінити фото:</label>
        <input type="file" onChange={(e) => setPhoto(e.target.files[0])} />
        
        <button type="submit" className="btn" style={{marginTop: '20px', width: '100%'}}>Оновити все</button>
      </form>
    </div>
  );
};

export default AdminInventoryEdit;