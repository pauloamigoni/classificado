<template>

    <VehicleBanner image="banner.png" />

    <div class="container my-4">
        <div class="row">
            <!-- Imagem à esquerda -->
            <div class="col-md-6">
                <div class="box">
                    <!-- Exibição da Foto Principal -->
                    <div>
                        <img :src="selectedPhoto" alt="Foto do veículo principal" class="img-fluid mb-3" />
                    </div>

                    <!-- Miniaturas das Fotos com Carrossel -->
                    <div id="carouselExampleControls" class="carousel slide position-relative" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item" :class="{ active: index === 0 }"
                                v-for="(photo, index) in groupedPhotos" :key="index">
                                <div class="d-flex justify-content-center">
                                    <img v-for="(thumbnail, thumbIndex) in photo" :key="thumbIndex"
                                        :src="thumbnail.photo_url" :alt="thumbnail.description"
                                        @click="changePhoto(thumbnail.photo_url)" class="thumbnail-img d-block" />
                                </div>
                            </div>
                        </div>
                        <!-- Setas ajustadas fora das imagens -->
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>

                    <div class="tour-container" style="margin-top:3rem; margin-bottom: 1rem">
                        <h5 class="product-desc-title">Veja o interior no em uma visão </h5>
                        <img src="../../public/img/icons/360.png" width="38px" height="38px" alt="">
                    </div>

                    <div id="viewer" style="width: 100%; height: 400px;"></div>
                </div>
            </div>

            <!-- Informações do veículo à direita -->
            <div class="col-md-6">
                <div class="col-md-12">
                    <div class="col-md-12">
                        <div class="box p-4">
                            <div class="product-desc">
                                <div class="vehicle-info d-flex justify-content-between">
                                    <div>
                                        <span class="product-title">{{ vehicle?.data?.model }}</span>
                                        <span class="product-caption">{{ vehicle?.data?.brand }}</span>
                                        <span class="product-year">{{ vehicle?.data?.manufacture_year }} / {{
                                            vehicle?.data?.model_year }}</span>
                                    </div>
                                    <div class="product-price"><span>{{ formatPrice(vehicle?.data?.price) }}</span>
                                    </div>
                                </div>

                                <ul>
                                    <li><font-awesome-icon :icon="['fa', 'gauge']" /><span>{{
                                            vehicle?.data?.transmission.name }}</span></li>
                                    <li><font-awesome-icon :icon="['fa', 'gas-pump']" /><span>{{
                                            vehicle?.data?.fuel_type
                                            }}</span></li>
                                    <li><font-awesome-icon :icon="['fa', 'road']" /><span>{{ vehicle?.data?.mileage
                                            }}</span></li>
                                    <li><font-awesome-icon :icon="['fa', 'gear']" /><span>{{
                                            vehicle?.data?.engine_power.value }}</span></li>
                                    <li><font-awesome-icon :icon="['fa', 'fill']" /><span>{{ vehicle?.data?.colors[0]
                                            }}</span></li>
                                </ul>
                            </div>

                            <h4 class="product-desc-title">Descrição</h4>
                            <p v-html="vehicle?.data?.description || 'Descrição não disponível.'" class="description">
                            </p>

                            <!-- Destaques e Equipamentos -->
                            <h5 class="product-desc-title">Destaques e Equipamentos</h5>
                            <ul v-if="vehicle?.data?.accessories.length" class="acessories-list">
                                <li v-for="(accessory, index) in vehicle.data.accessories" :key="index">{{
                                    accessory.name }}
                                </li>
                            </ul>
                            <p v-else>Nenhum acessório disponível.</p>
                        </div>
                    </div>
                </div>
                <br />
                <div class="col-md-12">
                    <div class="col-md-12">
                        <div class="box p-4 contact">


                            <h5 class="product-desc-title">Contato</h5>
                            <div class="row">
                                <div class="col-md-6">
                                    <address>
                                        Você pode nos encontrar em <br>
                                        Rua Estudante Flaminio A.C Rangel, 331<br>
                                        Jardim Nova Itália<br>
                                        Limeira/SP<br>
                                    </address>
                                    <div>
                                        Horário de funcionamento:<br>
                                        Segunda à Sexta: 08:00 às 18:00<br>
                                        Sábado: 10:00 às 12:00 <br>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d350.33994356126976!2d-47.4209668200216!3d-22.559187897649437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8814edc68022f%3A0x8fb88d316c60cf3a!2sAutoCar%20Multimarcas!5e0!3m2!1spt-BR!2sbr!4v1727355169485!5m2!1spt-BR!2sbr"
                                        style="border:0;" allowfullscreen="" loading="lazy"
                                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                            <br />
                            <h5 class="product-desc-title">Redes Sociais</h5>
                            <div class="social-icons">
                                <a href="https://facebook.com" target="_blank">
                                    <font-awesome-icon :icon="['fab', 'facebook']" />
                                </a>
                                <a href="https://twitter.com" target="_blank">
                                    <font-awesome-icon :icon="['fab', 'twitter']" />
                                </a>
                                <a href="https://instagram.com" target="_blank">
                                    <font-awesome-icon :icon="['fab', 'instagram']" />
                                </a>
                                <a href="https://instagram.com" target="_blank">
                                    <font-awesome-icon :icon="['fab', 'whatsapp']" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useVehicleStore } from '@/store/vehicle';
import VehicleBanner from '@/components/VehicleBanner.vue';


/* global PhotoSphereViewer */ // Adicionado para permitir uso global do PhotoSphereViewer

export default {
    props: ['id'],
    components: {
        VehicleBanner,
    },
    setup(props) {

        const vehicleStore = useVehicleStore();
        const vehicle = ref(null);
        const selectedPhoto = ref('');
        const groupedPhotos = ref([]);

        const formatPrice = (price) => {
            return new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            }).format(price);
        };

        const fetchVehicle = async () => {
            await vehicleStore.fetchVehicle(props.id);
            vehicle.value = vehicleStore.vehicle;
            if (vehicle.value?.data?.photos.length) {
                selectedPhoto.value = vehicle.value.data.photos[0].photo_url;
                groupedPhotos.value = groupPhotos(vehicle.value.data.photos, 5); // Agrupando 3 fotos por slide
            }
        };

        const groupPhotos = (photos, perGroup) => {
            const grouped = [];
            for (let i = 0; i < photos.length; i += perGroup) {
                grouped.push(photos.slice(i, i + perGroup));
            }
            return grouped;
        };

        const changePhoto = (photoUrl) => {
            selectedPhoto.value = photoUrl;
        };

        const initPhotoSphereViewer = () => {
            new PhotoSphereViewer.Viewer({
                container: document.querySelector('#viewer'),
                panorama: '/img/fodka.jpeg',
                caption: 'Exemplo de Foto 360°',
                navbar: ['autorotate', 'zoom', 'fullscreen'],
            });
        };

        onMounted(() => {
            fetchVehicle();
            initPhotoSphereViewer();
        });

        return { vehicle, selectedPhoto, changePhoto, formatPrice, groupedPhotos };
    },
};
</script>

<style scoped>

.container {
    width: 100vh;
    /* max-width: 1800px;
    margin: 0 auto;
    padding: 0 10%; */
}

/* Para telas muito grandes (mais de 1800px), mantemos o contêiner com 1800px de largura */
@media (min-width: 1800px) {
    .container {
        width: 1800px;
    }
}

/* Para telas menores (abaixo de 1200px), o contêiner se ajusta a 100% da tela */
@media (max-width: 1200px) {
    .container {
        padding: 0 20px;
        /* Aumenta o padding para melhorar o espaçamento */
    }
}
.box {
    background-color: #f5f5f5;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.img-fluid {
    width: 100%;
    height: auto;
    border-radius: 10px;
}

.d-flex {
    display: flex;
    gap: 10px;
    flex-wrap: nowrap;
    /* Impede que as miniaturas quebrem linha */
}

.thumbnail-img {
    /* max-width: 100px; */
    max-height: 100px;
    cursor: pointer;
    border: 2px solid transparent;
    border-radius: 10px;
    transition: border-color 0.3s ease;
}

.thumbnail-img:hover {
    border-color: #007bff;
}

.carousel-control-prev,
.carousel-control-next {
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    background-color: rgba(0, 0, 0, 0.3);
    /* Deixa o fundo das setas mais opaco */
}

.product-title {
    font-family: "Righteous", sans-serif;
    display: block;
    font-size: 30px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
}

.product-caption {
    display: block;
    font-size: 12px;
    text-transform: uppercase;
    color: #acacab;
}

.product-year {
    display: block;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    color: #acacab;
}

ul {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0;
    border-top: 1px solid #eeeeee;
    margin-top: 20px;
    padding: 13px;
    justify-content: space-between;
    color: grey;
    font-size: 14px;
}

ul li {
    /* Ocupará o mínimo de 100px e se ajustará no espaço disponível */
    display: flex;
    align-items: center;
    list-style: none;
    margin-right: 12px;
    padding: 5px 15px 5px 15px;
    border-radius: 25px;
    background: #fff;
}

ul li:hover {
    font-weight: 600;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

ul li span {
    margin-left: 8px;
}

@media (max-width: 768px) {
    ul {
        flex-direction: column;
        /* No mobile, os itens ficarão empilhados */
    }
}

.vehicle-info {
    padding: 10px;
}

.product-price {
    font-family: "Righteous", sans-serif;
    font-size: 30px;
    font-weight: 700;
    color: cadetblue;
}

.product-price span:hover {
    font-family: "Righteous", sans-serif;
    font-weight: 600;
    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

ul.acessories-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 0;
    justify-content: normal;
    padding-top: 10px;
    font-size: 12px;
}

ul.acessories-list li {
    list-style: none;
    padding: 5px 10px;
    border-radius: 4px;
    border-radius: 25px;
    background: #fff;
}

ul.acessories-list li:hover {
    font-weight: 600;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.social-icons {
    display: flex;
    gap: 30px;
}

.social-icons a {
    color: #000;
    font-size: 30px;
}

.social-icons a:hover {
    color: #0073b1;
    /* ou qualquer cor que desejar para hover */
}

.tour-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 12px;
}

.tour-container h5 {
    margin-right: 10px;
    /* Espaço entre o texto e a imagem */
}

.description {
    font-size: 14px;
    text-align: justify;
}

.contact {
    font-size: 14px;
    text-align: justify;
}

.product-desc-title {
    font-family: "Righteous", sans-serif;
    padding-bottom: 0.2em;
    border-bottom: 2px solid #acacab;
    display: inline-block;
}
</style>