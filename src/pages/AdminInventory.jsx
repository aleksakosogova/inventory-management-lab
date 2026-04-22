import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useInventory } from '../store/InventoryContext';
import * as inventoryApi from '../services/inventoryApi';
import { Trash2, Edit, Eye, Plus } from 'lucide-react';

const AdminInventory = () => {
  const { inventory, fetchInventory, loading } = useInventory();

  useEffect(() => {
    fetchInventory();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Ви впевнені, що хочете видалити цей товар?")) {
      try {
        await inventoryApi.deleteItem(id);
        await fetchInventory();
      } catch (error) {
        console.error("Помилка видалення:", error);
      }
    }
  };

  if (loading) return <div className="container"><h2>Завантаження... 🌸</h2></div>;

  return (
    <div className="container">
      <div className="admin-header">
        <h1>Керування складом</h1>
        <Link to="/admin/create" className="btn"><Plus size={18}/> Додати товар</Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>Фото</th>
            <th>Назва</th>
            <th>Опис</th> {/* Додано колонку */}
            <th>Дії</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item.id}>
              <td>
                <div className="admin-table-img-wrapper">
                  <img src={`http://localhost:5000/uploads/${item.photo}`} alt={item.inventory_name} />
                </div>
              </td>
              <td><strong>{item.inventory_name}</strong></td>
              <td className="table-description">
                <div>{item.description || "Опис відсутній"}</div>
              </td>
              <td>
                <div className="action-buttons">
                  <Link to={`/admin/details/${item.id}`} className="icon-view" title="Перегляд"><Eye size={20}/></Link>
                  <Link to={`/admin/edit/${item.id}`} className="icon-edit" title="Редагувати"><Edit size={20}/></Link>
                  <button onClick={() => handleDelete(item.id)} className="icon-delete" title="Видалити"><Trash2 size={20}/></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminInventory;