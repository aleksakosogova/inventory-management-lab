import React from 'react';

const ConfirmModal = ({ isOpen, onConfirm, onCancel, message }) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center'
    }}>
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
        <p>{message}</p>
        <button onClick={onConfirm} style={{ marginRight: '10px', color: 'red' }}>Так, видалити</button>
        <button onClick={onCancel}>Скасувати</button>
      </div>
    </div>
  );
};

export default ConfirmModal;