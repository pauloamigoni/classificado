// src/api/vehicleService.js
import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8000/api', // URL da sua API Laravel
    headers: {
        'Content-Type': 'application/json',
    },
});

export default {
    getVehicles() {
        return apiClient.get('/vehicles');
    },
    getVehicle(id) { // Função para buscar um veículo específico por ID
        return apiClient.get(`/vehicles/${id}`);
    },
};
