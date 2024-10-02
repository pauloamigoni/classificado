# Classificado de Veículos

## Descrição do Projeto
O **Classificado de Veículos** é uma aplicação web construída com Vue.js que oferece uma plataforma para a exibição e pesquisa de veículos disponíveis para compra e venda. A aplicação apresenta os veículos em destaques e promoções, com a possibilidade de visualizar os detalhes de cada veículo, incluindo fotos, descrição, especificações técnicas e acessórios.

## Funcionalidades Principais
- **Página Inicial**: Exibe os veículos em destaques e promoções em carrosséis.
- **Detalhes do Veículo**: Ao clicar em um veículo, o usuário pode visualizar todas as informações detalhadas sobre o modelo, como preço, quilometragem, transmissão, tipo de combustível, e fotos.
- **Carrossel de Fotos**: Possibilidade de visualizar as fotos do veículo em um carrossel, com suporte para fotos em 360º.
- **Busca de Veículos**: Implementação de um sistema de busca para encontrar veículos cadastrados na plataforma.
- **Sistema de Classificados**: A aplicação suporta a listagem de veículos, categorizados por diferentes segmentos, como "Carros para a família", "Primeiro carro", "Motoristas de aplicativo", entre outros.
- **Loja e Contato**: Exibição de informações de contato da loja, incluindo um mapa e links para redes sociais.

## Tecnologias Utilizadas
- **Frontend**: Vue.js com Pinia para gerenciamento de estado e Vue Router para navegação.
- **Estilização**: Bootstrap 5 e CSS customizado.
- **Backend (API)**: Integração com uma API externa para busca de dados dos veículos, utilizando o Axios.
- **Outras Bibliotecas**: 
  - Vue3 Carousel para os carrosséis.
  - FontAwesome para os ícones.
  - PhotoSphereViewer para a exibição de fotos em 360º.

## Estrutura de Arquivos
- **src/views**: Contém as views principais da aplicação, como `HomeView.vue` e `VehicleDetail.vue`.
- **src/components**: Contém os componentes reutilizáveis, como `VehicleCard.vue`, `VehicleBanner.vue`, e `NavBar.vue`.
- **src/store**: Gerenciamento de estado com Pinia, onde a `vehicleStore` lida com a busca e armazenamento dos dados dos veículos.
- **src/api**: Contém o arquivo `vehicleService.js` responsável por fazer as requisições à API.
- **public**: Pasta que contém imagens e ícones usados na aplicação.

## Como Rodar o Projeto Localmente

1. Clone o repositório:  
   `git clone https://github.com/pauloamigoni/classificado.git`

2. Entre no diretório do projeto:  
   `cd classificado`

3. Instale as dependências necessárias:  
   `npm install`

4. Execute a aplicação localmente:  
   `npm run serve`

5. Abra o navegador e acesse o endereço:  
   `http://localhost:8080`