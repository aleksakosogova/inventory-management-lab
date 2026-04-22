import React, { createContext, useState, useEffect, useContext } from 'react';
import * as inventoryApi from '../services/inventoryApi';

export const InventoryContext = createContext(); // [cite: 49]

export const InventoryProvider = ({ children }) => {
    const [inventory, setInventory] = useState([]);
    const [loading, setLoading] = useState(true); // Стан завантаження [cite: 104]

    const fetchInventory = async () => {
        try {
            setLoading(true);
            const data = await inventoryApi.getAll();
            setInventory(data);
        } catch (error) {
            console.error("Помилка завантаження:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchInventory();
    }, []);

    return (
        <InventoryContext.Provider value={{ inventory, fetchInventory, loading }}>
            {children}
        </InventoryContext.Provider>
    );
};

// Хук для зручного доступу в компонентах
export const useInventory = () => useContext(InventoryContext);