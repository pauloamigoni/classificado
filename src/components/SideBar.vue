<template>
    <div class="sidebar-container">
        <!-- Bloco 1 -->
        <div class="block financing">
            <p>Simule o seu financiamento e veja o valor das parcelas</p>
        </div>

        <!-- Bloco 2 -->
        <div class="block consortium">
            <p>Realize seu sonho com facilidade</p>
        </div>

        <!-- Bloco 3 -->
        <div class="block insurance">
            <p>confira as soluções para te deixar tranquilo no dia a dia</p>
        </div>

        <!-- Bloco 4 -->
        <div class="block fast-sell">
            <p>Traga seu carro que vendemos</p>
        </div>

        <!-- Bloco 5 -->
        <div class="block fipe-table">
            <p>Consulte o preço do carro que você quer comprar ou vender</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "SideBar",
};
</script>

<style scoped>
/* Estilos principais para o container lateral */
.sidebar-container {
    display: flex;
    flex-direction: column;
    /* Empilha os blocos verticalmente */
    gap: 20px;
    /* Espaço entre os blocos */
    padding: 20px;
}

/* Estilo comum para todos os blocos */
.block {
    position: relative;
    padding: 20px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: white;
    font-size: 18px;
    line-height: 1.5;
    transition: transform 0.3s ease-in-out;
}

.block:hover {
    transform: scale(1.05);
}

/* Label no canto superior esquerdo */
.label {
    position: absolute;
    top: 15px;
    left: 15px;
    background-color: white;
    color: black;
    padding: 5px 10px;
    font-size: 12px;
    border-radius: 12px;
    font-weight: bold;
}

/* Ícone no canto superior direito */
.icon {
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 30px;
}

/* Cores personalizadas para cada bloco */
.financing {
    background-color: #e3701a;
}

.consortium {
    background-color: #6e6e6e;
}

.insurance {
    background-color: #37332b;
}

.fast-sell {
    background-color: #563bff;
}

.fipe-table {
    background-color: #7cc9b6;
}

/* Responsividade para telas menores */
@media (max-width: 768px) {
    .block {
        font-size: 16px;
        padding: 15px;
        min-height: 120px;
    }

    .icon {
        font-size: 24px;
    }
}
</style>
