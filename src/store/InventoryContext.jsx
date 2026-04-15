import { createContext, useState, useContext } from 'react';

const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
  const [inventory, setInventory] = useState([]); // Масив товарів [cite: 54]
  const [loading, setLoading] = useState(false);  // Стан завантаження [cite: 104]
  const [error, setError] = useState(null);      // Стан помилки [cite: 106]

  return (
    <InventoryContext.Provider value={{ inventory, setInventory, loading, setLoading, error, setError }}>
      {children}
    </InventoryContext.Provider>
  );
};

// Спеціальний хук, щоб зручно діставати дані в будь-якому компоненті
export const useInventory = () => useContext(InventoryContext);