<template>
  <div>
    <VehicleBanner image="banner.png" />

    <div v-if="loading">
      <p>Carregando veículos...</p>
    </div>

    <div class="content">
      <!-- Carrossel de Destaques -->
      <div class="cardhome-title">
        <h1>Destaques</h1>
        <span class="underline-blue"></span>

        <Carousel v-bind="carouselDestaques" :breakpoints="breakpoints" class="vehicle-container">
          <Slide v-for="vehicle in vehicles" :key="vehicle.id">
            <div class="carousel__item">
              <VehicleCard :vehicle="vehicle" />
            </div>
          </Slide>
          <template #addons>
            <Navigation />
            <Pagination />
          </template>
        </Carousel>
      </div>

      <!-- Carrossel de Promoções -->
      <div class="cardhome-title">
        <h1>Promoções</h1>
        <span class="underline-blue"></span>

        <Carousel v-bind="carouselPromocoes" :breakpoints="breakpoints" class="vehicle-container">
          <Slide v-for="vehicle in vehicles" :key="vehicle.id">
            <div class="carousel__item">
              <VehicleCard :vehicle="vehicle" />
            </div>
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
    </div>

    <div class="cardhome-wrapper">
      <CardHome />
    </div>

  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useVehicleStore } from "@/store/vehicle";
import VehicleBanner from '@/components/VehicleBanner.vue';
import VehicleCard from '@/components/VehicleCard.vue';
import CardHome from '@/components/CardHome.vue';

import { Carousel, Navigation, Slide, Pagination } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default {
  components: {
    VehicleBanner,
    VehicleCard,
    CardHome,
    Carousel,
    Slide,
    Navigation,
    Pagination,
  },

  data: () => ({
    // Configuração específica para o carrossel "Destaques"
    carouselDestaques: {
      itemsToShow: 1,
      snapAlign: 'center',
      autoplay: true,
      autoplayTimeout: 3000,
      pauseAutoplayOnHover: true,
      wrapAround: true,
      transition: 3000, // Transição rápida de 1 segundo
      mouseDrag: true,
      showNavigation: true,
      showPagination: true,
    },
    // Configuração específica para o carrossel "Promoções"
    carouselPromocoes: {
      itemsToShow: 1,
      snapAlign: 'start',
      autoplay: false, // Sem autoplay
      wrapAround: false, // Sem wrapAround
      transition: 2000, // Transição mais lenta de 2 segundos
      mouseDrag: true,
      showNavigation: true,
      showPagination: false, // Sem paginação (bolinhas)
    },
    // Configurações responsivas (mobile-first)
    breakpoints: {
      700: {
        itemsToShow: 1,
        snapAlign: 'center',
      },
      1024: {
        itemsToShow: 4.5,
        snapAlign: 'start',
      },
    },
  }),

  setup() {
    const vehicleStore = useVehicleStore();

    onMounted(async () => {
      try {
        await vehicleStore.fetchVehicles();
      } catch (e) {
        console.error(e);
      }
    });

    const vehicles = computed(() => vehicleStore.vehicles.data);
    const loading = computed(() => vehicleStore.loading);

    return {
      vehicles,
      loading,
    };
  },
};
</script>


<style scoped>
* {
  font-family: "Righteous", sans-serif;
}

.cardhome-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.cardhome-title {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 10px 0;
  color: rgba(0, 42, 79, 0.9);
}

.cardhome-title h1 {
  margin: 0;
}

.cardhome-title span.underline-blue {
  background-color: #9e9e9e;
  display: block;
  height: 5px;
  width: 250px;
  margin-top: 5px;
  margin-bottom: 15px;
}

.content {
  width: 100%;
  padding: 0 8%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: initial;
  padding-bottom: 5%;
}

.vehicle-container {
  width: 100%;
}

@media (max-width: 768px) {
  .content {
    margin: 0 5%;
  }
}

/* Customizando os indicadores de navegação */
.carousel-pagination {
  display: flex;
  justify-content: center;
  padding-top: 20px;
}

.carousel-pagination .carousel-pagination-item {
  width: 15px;
  height: 15px;
  margin: 0 5px;
  background-color: rgba(0, 42, 79, 0.5);
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.carousel-pagination .carousel-pagination-item:hover,
.carousel-pagination .carousel-pagination-item.active {
  background-color: #002A4F;
}

/* Customizando as setas de navegação */
.carousel-navigation-button {
  background-color: rgba(0, 42, 79, 0.8);
  border: none;
  color: white;
  font-size: 30px;
  padding: 10px;
  cursor: pointer;
  border-radius: 50%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s ease;
}

.carousel-navigation-button:hover {
  background-color: #004080;
}
</style>
