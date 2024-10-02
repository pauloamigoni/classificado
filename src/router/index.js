// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import VehicleList from '@/views/HomeView.vue';
import VehicleDetail from '@/views/VehicleDetail.vue'; // Importa a view de detalhes do veículo

const routes = [
    {
        path: '/',
        name: 'Home',
        component: VehicleList,
    },
    {
        path: '/vehicles/:id', // Atualizado para "vehicles" (plural)
        name: 'VehicleDetail',
        component: VehicleDetail,
        props: true, // Permite passar o ID como prop
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
