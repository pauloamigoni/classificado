<template>
    <nav class="navbar">
        <ul class="navbar__menu">
            <li class="navbar__item">
                <a href="/" class="navbar__link"><i data-feather="home"></i><span>Home</span></a>
            </li>
            <li class="navbar__item">
                <a href="/" class="navbar__link"><i data-feather="package"></i><span>Estoque</span></a>
            </li>
            <li class="navbar__item">
                <a href="/" class="navbar__link"><i data-feather="user"></i><span>Quem Somos</span></a>
            </li>
            <li class="navbar__item">
                <a href="/" class="navbar__link"><i data-feather="map-pin"></i><span>Onde estamos</span></a>
            </li>
        </ul>
    </nav>
</template>

<script>
import feather from 'feather-icons';

export default {
    name: 'NavBar',
    mounted() {
        // Substitui os ícones com Feather
        feather.replace();
    },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap");

body {
    background: #eaeef6;
    font-family: "Open Sans", sans-serif;
}

.navbar {
    position: fixed;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 0;
    background-color: #fff;
    border-radius: 25px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    width: 80px;
    z-index: 9999;
    /* Garantir que sempre ficará na frente de outros elementos */
}

.navbar__menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
}

.navbar__item {
    list-style: none;
    margin: 10px 0;
}

.navbar__link {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #6a778e;
    transition: all 250ms ease;
    width: 50px;
    height: 50px;
    position: relative;
}

.navbar__link span {
    position: absolute;
    left: 100%;
    transform: translateX(-3rem);
    margin-left: 2rem;
    width: auto;
    opacity: 0;
    pointer-events: none;
    color: #fff;
    background: #666;
    padding: 0.75rem;
    transition: all 250ms ease;
    border-radius: 17.5px;
}

.navbar__link i {
    display: block;
    font-size: 24px;
}

.navbar__link:hover {
    color: #666;
}

.navbar__link:hover span {
    opacity: 1;
    transform: translateX(0);
}

@keyframes gooeyEffect {
    0% {
        transform: scale(1, 1);
    }

    50% {
        transform: scale(0.5, 1.5);
    }

    100% {
        transform: scale(1, 1);
    }
}

/* Estilos Responsivos */
@media screen and (max-width: 768px) {
    .navbar {
        left: 50%;
        bottom: 20px;
        top: auto;
        transform: translateX(-50%);
        width: 90%;
        border-radius: 15px;
    }

    .navbar__menu {
        flex-direction: row;
        justify-content: space-around;
    }

    .navbar__item {
        margin: 0 5px;
    }

    .navbar__link {
        width: 40px;
        height: 40px;
    }

    .navbar__link i {
        font-size: 20px;
    }
}

@media screen and (max-width: 480px) {
    .navbar__link {
        width: 35px;
        height: 35px;
    }

    .navbar__link i {
        font-size: 18px;
    }
}
</style>
