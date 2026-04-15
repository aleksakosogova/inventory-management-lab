import React, { useState } from 'react';

const InventoryForm = ({ onSubmit, initialData = {} }) => {
  const [name, setName] = useState(initialData.inventory_name || '');
  const [description, setDescription] = useState(initialData.description || '');
  const [photo, setPhoto] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return alert('Назва обов’язкова!');

    const formData = new FormData();
    formData.append('inventory_name', name);
    formData.append('description', description);
    if (photo) formData.append('photo', photo);

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Назва: </label>
        <input value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Опис: </label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div>
        <label>Фото: </label>
        <input type="file" onChange={(e) => setPhoto(e.target.files[0])} />
      </div>
      <button type="submit">Зберегти</button>
    </form>
  );
};

export default InventoryForm; // Обов'язково додаємо цей експорт!