import React from 'react';

const InventoryDetails = ({ item }) => {
  if (!item) return <p>Дані відсутні</p>;

  return (
    <div>
      <h3>{item.inventory_name}</h3>
      <p>{item.description}</p>
      <img src={item.photo_url} alt="Full" style={{ width: '300px' }} />
    </div>
  );
};

export default InventoryDetails;