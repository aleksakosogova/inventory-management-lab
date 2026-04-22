import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Отримання всього списку [cite: 63]
export const getAll = async () => {
    const response = await axios.get(`${API_URL}/inventory`);
    return response.data;
};

// Отримання одного товару [cite: 78]
export const getById = async (id) => {
    const response = await axios.get(`${API_URL}/inventory/${id}`);
    return response.data;
};

// Створення (Multipart для фото) [cite: 71, 73]
export const create = async (formData) => {
    const response = await axios.post(`${API_URL}/register`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
};

// Оновлення (Тепер теж Multipart для підтримки фото) [cite: 88, 95, 96]
export const update = async (id, formData) => {
    const response = await axios.put(`${API_URL}/inventory/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
};

// Видалення [cite: 100]
export const deleteItem = async (id) => {
    const response = await axios.delete(`${API_URL}/inventory/${id}`);
    return response.data;
};