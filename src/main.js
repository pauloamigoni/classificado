import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importa o roteador
import { createPinia } from 'pinia'; // Pinia
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faRoad, faGasPump, faGauge, faFill, faGear, faHouse } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { fab, faTwitterSquare, faFacebook, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
library.add(faRoad, faGasPump, faGauge, faFill, faGear, faFacebookF, fab, faTwitterSquare, faFacebook, faLinkedin, faGithub, faInstagram, faWhatsapp, faHouse);
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';


// Cria a aplicação e usa o roteador e o Pinia
createApp(App)
    .use(router)
    .use(createPinia()) // Adiciona o Pinia
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app');
