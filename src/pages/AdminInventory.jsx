import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { inventoryApi } from '../services/inventoryApi';
import { useInventory } from '../store/InventoryContext';
import InventoryTable from '../components/inventory/InventoryTable';

const AdminInventory = () => {
  const { inventory, setInventory, loading, setLoading, error, setError } = useInventory();

  const loadData = async () => {
    setLoading(true);
    try {
      const res = await inventoryApi.getAll();
      setInventory(res.data);
    } catch (err) { setError("Сервер не відповідає"); }
    finally { setLoading(false); }
  };

  useEffect(() => { loadData(); }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Ви впевнені, що хочете видалити цей ніжний протеїн?")) {
      await inventoryApi.delete(id);
      loadData();
    }
  };

  return (
    <div className="container">
      <h1>Адмін-панель складу</h1>
      <Link to="/admin/create" className="btn" style={{marginBottom: '20px'}}>+ Додати нову позицію</Link>
      
      {loading && <p>Завантаження кольорів...</p>}
      {error && <p style={{color: 'red'}}>{error}</p>}
      
      {!loading && <InventoryTable items={inventory} onDelete={handleDelete} />}
    </div>
  );
};

export default AdminInventory;