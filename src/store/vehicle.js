import { defineStore } from 'pinia';
import vehicleService from '@/api/vehicleService';

export const useVehicleStore = defineStore('vehicleStore', {
  state: () => ({
    vehicles: [],
    vehicle: null, // Variável para armazenar o veículo específico
    loading: false, // Adicionando o estado de loading corretamente
    error: null, // Adicionando o estado de erro
  }),
  actions: {
    async fetchVehicles() {
      this.loading = true;
      this.error = null;
      try {
        const response = await vehicleService.getVehicles();
        console.log('Veículos retornados da API:', response.data); // Verifique aqui
        this.vehicles = response.data;
      } catch (error) {
        this.error = 'Erro ao buscar veículos';
        console.error('Erro ao buscar veículos', error);
      } finally {
        this.loading = false;
      }
    },
    async fetchVehicle(id) {
      this.loading = true; // Inicia o carregamento para um veículo específico
      this.error = null; // Limpa o erro anterior
      try {
        const response = await vehicleService.getVehicle(id); // Chama a API para buscar o veículo específico
        console.log('Detalhes do veículo:', response.data); // Log para verificar o retorno da API
        this.vehicle = response.data; // Atribui o resultado ao estado `vehicle`
      } catch (error) {
        this.error = `Erro ao buscar o veículo com ID ${id}`;
        console.error(`Erro ao buscar o veículo com ID ${id}`, error);
      } finally {
        this.loading = false; // Finaliza o carregamento
      }
    },
  },
});

