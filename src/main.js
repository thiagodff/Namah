import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.filter("formatPrice", (value) => {
  value = Number(value);

  if (!isNaN(value)) {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  } else {
    return value;
  }
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
