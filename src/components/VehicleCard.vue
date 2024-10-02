<template>
    <div class="vehicle card-container">
        <div class="box-img">
            <button class="fav-vehicle" @click="toggleFavorite" title="Adicionar aos Favoritos">
                <font-awesome-icon :icon="[isFavorited ? 'fas' : 'far', 'gauge']" />
            </button>
            <a :href="vehicle.link" target="_blank">
                <img alt="do veículo" :src="vehicle.photos[0].photo_url" class="img-fluid" @click="redirectToVehicle" />
                <div class="featured-price">
                    <div class="featured">Destaque</div>
                    <div class="price">{{ formatPrice(vehicle.price) }}</div>
                </div>
            </a>
        </div>

        <!-- Informações do veículo -->
        <div class="card-info">
            <div class="product-desc">
                <h4 class="product-title">
                    {{ vehicle.model }}
                </h4>
                <span class="product-caption">{{ vehicle.brand }}</span>
                <span class="product-year"> {{ vehicle.manufacture_year }} / {{ vehicle.model_year }} </span>

            </div>

        </div>

        <!-- Rodapé com ano, quilometragem e combustível -->
        <div class="card-footer">
            <ul>
                <li>
                    <font-awesome-icon :icon="['fa', 'gauge']" /><span>
                        {{ vehicle.transmission.name }}
                    </span>
                </li>
                <li>
                    <font-awesome-icon :icon="['fa', 'gas-pump']" /><span>
                        {{ vehicle.fuel_type }}
                    </span>
                </li>
                <li>
                    <font-awesome-icon :icon="['fa', 'road']" /><span>
                        {{ vehicle.mileage }}
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        vehicle: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            isFavorited: false,
        };
    },
    methods: {
        formatPrice(price) {
            return new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            }).format(price);
        },
        toggleFavorite() {
            this.isFavorited = !this.isFavorited;
        },
        redirectToVehicle() {
            // Redireciona para a rota /vehicles/{id}
            this.$router.push(`/vehicles/${this.vehicle.id}`);
        }
    },
};
</script>
<style scoped>
.vehicle {
    font-family: 'Open Sans', sans-serif;
    margin-bottom: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: box-shadow 0.3s ease;
    cursor: pointer;
    min-width: 325px;
}

.vehicle:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.box-img {
    position: relative;
    height: 180px;
}

.box-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.fav-vehicle {
    position: absolute;
    top: 10px;
    left: 10px;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 10;
    color: #609793;
    font-size: 20px;
}

.featured-price {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #434b4a;
    color: white;
    height: 13%;
}

.featured {
    padding: 3px 10px;
    font-size: 12px;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
}

.price {
    background-color: #609793;
    padding: 5px 14px;
    font-size: 18px;
    font-weight: bold;
    border-top-left-radius: 20px;
    margin-bottom: 14px;
}

.price span {
    font-size: 14px;
    font-weight: 400;
    padding-right: 2px;
}

.card-info {
    padding: 10px 15px;
    text-align: left;
}

.model {
    font-size: 16px;
    font-weight: bold;
    color: #212529;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.store-model {
    font-size: 12px;
    color: #9e9e9e;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.card-footer {
    padding: 10px;
    background-color: #f1f1f1;
    border-top: 1px solid #e6e6e6;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;

    ul {
        display: flex;
        justify-content: center;
        padding: 0;
        margin: 0;
        list-style: none;
        gap: 8px;
    }

    li {
        display: flex;
        align-items: center;
        gap: 4px;
        font-size: 12px;
        color: #666;
        padding: 4px;
        border-radius: 5px;
    }

 
}

.year,
.mileage,
.fuel {
    color: #666;
    white-space: nowrap;
}

.mileage {
    text-align: center;
    flex-grow: 1;
}

.vehicle-info {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    color: #666;
}

.vehicle-info li {
    display: flex;
    align-items: center;
    gap: 5px;
}

.product-title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 5px;
}
.product-caption {
    font-size: 14px;
    color: #666;
    margin-bottom: 10px;
}

.product-year {
    display: block;
    font-size: 13px;
    font-weight: 400;
    text-transform: uppercase;
    color: #acacab;
}

</style>
