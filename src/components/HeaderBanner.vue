<template>
    <header>
        <!-- Menu superior fixo -->
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Autocar Multimarcas</a>

                <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> -->

                <!-- <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <font-awesome-icon :icon="['fa', 'road']" /><span>
                                <router-link class="nav-link" to="/">
                                    <i class="fa-solid fa-list"></i>Estoque</router-link>
                            </span>
                        </li>
                        <li class="nav-item">

                            <router-link class="nav-link" to="/">
                                <i class="fa-solid fa-warehouse"></i>Quem Somos</router-link>

                        </li>
                        <li class="nav-item">
                            <font-awesome-icon :icon="['fa', 'road']" /><span>
                                <router-link class="nav-link" to="/"><i class="fa-solid fa-map-location-dot"></i> Onde
                                    Estamos</router-link>
                            </span>
                        </li>
                    </ul>
                </div> -->
            </div>
        </nav>


    </header>
</template>

<script>

export default {
    name: 'HeaderBanner',
   
};
</script>

<style scoped>
.navbar {
    background-color: #0a2741 !important;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    height: 60px;
    padding: 0 10%;
}

.navbar-brand {
    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
    font-weight: 600;
    color: #fff;
}

.navbar-brand:hover {
    color: #fff;
}

.navbar-nav {
    display: flex;
    /* Alinha os itens em uma linha */
    align-items: center;
    /* Alinha verticalmente ao centro */
    justify-content: end;
    /* Centraliza os itens dentro da div */
    width: 100%;
    /* Para ocupar toda a largura */
}

.nav-item {
    display: flex;
    align-items: center;
    /* Alinha o ícone e o texto verticalmente */
    margin-right: 15px;
    /* Espaço entre os itens do menu */
    margin-bottom: 0;
    /* Remove o espaço inferior */
}

.nav-link {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    color: #fff;
    display: flex;
    align-items: center;
    /* Alinha ícone e texto */
}

.nav-link svg {
    margin-right: 8px;
    /* Espaço de 2px entre o ícone e o texto */
}

.nav-link:hover {
    color: #fff;
}

.navbar-toggler {
    border-color: #fff;
}

.navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba(255, 255, 255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

.navbar-collapse {
    background-color: transparent;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.navbar-collapse.show {
    background-color: #f1f1f1;
    padding: 15px 10%;
}

.navbar-nav .nav-item {
    margin-bottom: 0;
    /* Remover margem inferior extra */
}

</style>
