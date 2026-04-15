import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; 

export const inventoryApi = {
  // Отримати весь список (GET /inventory) [cite: 63]
  getAll: () => axios.get(`${API_URL}/inventory`),

  // Отримати деталі за ID (GET /inventory/:id) [cite: 78]
  getById: (id) => axios.get(`${API_URL}/inventory/${id}`),

  // Реєстрація нової позиції (POST /register) [cite: 71]
  // Використовуємо FormData для передачі фото (multipart/form-data) [cite: 73]
  create: (formData) => axios.post(`${API_URL}/register`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),

  // Оновлення тексту (PUT /inventory/:id) [cite: 88]
  updateText: (id, data) => axios.put(`${API_URL}/inventory/${id}`, data),

  // Оновлення фото (PUT /inventory/:id/photo) [cite: 95]
  updatePhoto: (id, formData) => axios.put(`${API_URL}/inventory/${id}/photo`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),

  // Видалення (DELETE /inventory/:id) [cite: 100]
  delete: (id) => axios.delete(`${API_URL}/inventory/${id}`)
};