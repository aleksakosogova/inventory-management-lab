import React, { useContext, useState } from 'react';
import { InventoryContext } from '../store/InventoryContext';
import { useFavorites } from '../hooks/useFavorites';
import InventoryCard from '../components/gallery/InventoryCard';
import InventoryQuickView from '../components/gallery/InventoryQuickView';

const Favorites = () => {
  const { inventory, loading } = useContext(InventoryContext);
  const { favorites, toggleFavorite } = useFavorites();
  const [selectedItem, setSelectedItem] = useState(null);

  // Фільтруємо список: залишаємо лише ті ID, які є в favorites
  const favoriteItems = inventory.filter(item => favorites.includes(item.id));

  if (loading) return <div className="loader">Завантаження...</div>;

  return (
    <div className="container">
      <h1 className="page-title">Мої Улюблені</h1>
      {favoriteItems.length === 0 ? (
        <div className="empty-state">У вас поки немає обраних товарів 🌸</div>
      ) : (
        <div className="inventory-grid">
          {favoriteItems.map(item => (
            <InventoryCard 
              key={item.id}
              item={item}
              isFavorite={true}
              onToggleFavorite={toggleFavorite}
              onClick={setSelectedItem}
            />
          ))}
        </div>
      )}
      {selectedItem && (
        <InventoryQuickView item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  );
};

export default Favorites;