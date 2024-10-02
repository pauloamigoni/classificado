<template>
    <div v-if="image" class="banner">
        <img :src="`/img/${image}`" alt="Banner do Veículo" class="img-fluid" />
    </div>
</template>

<script>
export default {
    name: 'VehicleBanner',
    props: {
        image: {
            type: String,
            default: null, 
        },
    },
};
</script>

<style scoped>
.banner {
    margin-top: 60px;
    text-align: center;
}

.banner img {
    width: 100%;
    height: auto;
    max-height: 400px;
    object-fit: cover;
}
</style>
