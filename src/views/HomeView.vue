<template>

            <VehicleList /> 
        
</template>

<script>
import VehicleList from '@/components/VehicleList.vue';

export default {
    name: 'HomeView',
    components: {
        VehicleList,
    },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Righteous&display=swap');

* {
    margin: 0;
    padding: 0;
    outline: none;
    font-family: "Montserrat", sans-serif !important;
    font-optical-sizing: auto;
    font-style: normal;
    font-size: 0.8rem;
}

body{
    margin: 0;
    padding: 0;
    min-height: 100vh;
    font-family: "Montserrat", sans-serif !important;
    font-optical-sizing: auto;
    font-style: normal;
    font-size: 0.8rem;
}

</style>