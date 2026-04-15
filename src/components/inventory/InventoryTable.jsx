import React from 'react';
import { Link } from 'react-router-dom';

const InventoryTable = ({ items, onDelete }) => {
  return (
    <div className="table-container">
      <table border="1" style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f4f4f4' }}>
            <th>Фото</th>
            <th>Назва інвентарю</th>
            <th>Опис</th>
            <th>Дії</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>
                <img 
                  src={item.photo_url || 'https://via.placeholder.com/50'} 
                  alt={item.inventory_name} 
                  style={{ width: '50px', height: '50px', objectFit: 'cover' }} 
                />
              </td>
              <td>{item.inventory_name}</td>
              <td>{item.description}</td>
              <td>
                <Link to={`/admin/details/${item.id}`} style={{ marginRight: '10px' }}>Переглянути</Link>
                <Link to={`/admin/edit/${item.id}`} style={{ marginRight: '10px' }}>Редагувати</Link>
                <button onClick={() => onDelete(item.id)} style={{ color: 'red' }}>Видалити</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;