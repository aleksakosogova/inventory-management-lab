import React from 'react';
import { Heart } from 'lucide-react';

const InventoryCard = ({ item, isFavorite, onToggleFavorite, onClick }) => {
  return (
    <div className="inventory-card" onClick={onClick}>
      <button 
        className={`favorite-btn ${isFavorite ? 'active' : ''}`} 
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavorite(item.id);
        }}
      >
        <Heart fill={isFavorite ? "#f06292" : "none"} color={isFavorite ? "#f06292" : "#888"} size={20} />
      </button>
      
      <div className="card-image-wrapper">
        <img src={`http://localhost:5000/uploads/${item.photo}`} alt={item.inventory_name} />
      </div>
      
      <div className="card-content">
        <h3 className="card-title">{item.inventory_name}</h3>
        <p className="card-description">{item.description}</p>
        <div className="card-footer">
          <span className="status-badge">В наявності</span>
          <span className="more-link">Детальніше →</span>
        </div>
      </div>
    </div>
  );
};

export default InventoryCard;