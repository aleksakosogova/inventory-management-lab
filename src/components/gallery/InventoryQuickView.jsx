import React from 'react';
import { X } from 'lucide-react';

const InventoryQuickView = ({ item, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="quick-view-content" onClick={e => e.stopPropagation()}>
        <button className="close-modal" onClick={onClose}><X /></button>
        <div className="quick-view-grid">
          <div className="quick-view-img-wrapper">
            <img src={`http://localhost:5000/uploads/${item.photo}`} alt={item.inventory_name} />
          </div>
          <div className="quick-view-info">
            <h2>{item.inventory_name}</h2>
            <p className="description">{item.description}</p>
            <span className="badge">В наявності 🌸</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryQuickView;