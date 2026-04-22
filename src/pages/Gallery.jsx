import React, { useState } from 'react';
import { useInventory } from '../store/InventoryContext';
import { useFavorites } from '../hooks/useFavorites';
import InventoryCard from '../components/gallery/InventoryCard';
import InventoryQuickView from '../components/gallery/InventoryQuickView';

const Gallery = () => {
  const { inventory, loading } = useInventory();
  const { favorites, toggleFavorite } = useFavorites();
  const [selectedItem, setSelectedItem] = useState(null);

  if (loading) return <div className="loader">🌸 Завантаження...</div>;

  return (
    <div className="container">
      <h1 className="page-title">Галерея інвентарю</h1>
      <div className="inventory-grid">
        {inventory.map((item) => (
          <InventoryCard 
            key={item.id}
            item={item}
            isFavorite={favorites.includes(item.id)}
            onToggleFavorite={toggleFavorite}
            onClick={() => setSelectedItem(item)}
          />
        ))}
      </div>

      {selectedItem && (
        <InventoryQuickView 
          item={selectedItem} 
          onClose={() => setSelectedItem(null)} 
        />
      )}
    </div>
  );
};

export default Gallery;