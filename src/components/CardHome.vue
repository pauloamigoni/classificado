<template>
    <div class="category-container">
        <div class="category-block" v-for="category in categories" :key="category.title">
            <img :src="category.image" :alt="category.title" class="category-image" />
            <div class="category-text">
                <p>{{ category.subtitle }}</p>
                <h3>{{ category.title }}</h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            categories: [
                {
                    subtitle: 'Carros para',
                    title: 'Família',
                    image: 'https://napista.com.br/static/marketplace-portal/suggestions-search/familia.webp'
                },
                {
                    subtitle: 'Encontre seu',
                    title: 'Primeiro carro',
                    image: 'https://napista.com.br/static/marketplace-portal/suggestions-search/primeiro_carro.webp'
                },
                {
                    subtitle: 'Carros para motoristas de',
                    title: 'Aplicativo',
                    image: 'https://napista.com.br/static/marketplace-portal/suggestions-search/motoristas.webp'
                },
                {
                    subtitle: 'Carros para',
                    title: 'Aventureiros',
                    image: 'https://napista.com.br/static/marketplace-portal/suggestions-search/viagem.webp'
                },
                {
                    subtitle: 'Carros para o',
                    title: 'Dia a dia',
                    image: 'https://napista.com.br/static/marketplace-portal/suggestions-search/dia_a_dia.webp'
                }
                ,
                {
                    subtitle: 'Carros para quem',
                    title: 'Tem Petz',
                    image: 'https://catracalivre.com.br/cdn-cgi/image/f=auto,q=60,w=1200,h=900,fit=cover,format=jpeg/wp-content/uploads/2015/12/Cao_cachorro_pet_-_Banco_de_imagens__iStock.jpg'
                }
            ]
        };
    }
};
</script>

<style scoped>
.category-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    font-family: "Montserrat", sans-serif !important;
}

.category-block {
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end;
    gap: 0px;
    padding: 0px;
    align-items: flex-start;
    cursor: pointer;
    border: 1px solid var(--border-neutral);
    background-color: rgb(255, 255, 255);
    text-decoration: none;
    min-width: 190px;
    border-radius: 2px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 4px 0px;
    max-height: 50%;
    
}

.category-block:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.category-image {
    width: 100%;
    border-radius: 2px 2px 0px 0px;
    height: 136px;
    object-fit: cover;
}

.category-text {
    padding: 15px;
}

.category-text p {
    font-size: 14px;
    color: #555;
}

.category-text h3 {
    font-size: 18px;
    font-weight: 600;
    margin-top: 5px;
    color: #222;
}
</style>
