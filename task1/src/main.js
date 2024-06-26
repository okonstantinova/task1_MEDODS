import Vue from "vue";
import Vuelidate from "vuelidate";

import App from "./App.vue";
Vue.config.devtools = true;
Vue.use(Vuelidate);

new Vue({
    el: "#app",
    render: (h) => h(App),
});


