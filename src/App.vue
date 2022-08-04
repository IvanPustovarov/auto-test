<template>
  <div class="bg-gray-50 h-full" :class="{ ordercall: show }">
    <div
      class="
        max-w-7xl
        mx-auto
        py-12
        px-4
        sm:px-6
        lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between
      "
    >
      <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <CustomButton
          v-for="city in cities"
          :key="city.city_id"
          :disabled="show"
          @click="goToCity(city)"
          :class="{ disabled: show }"
          class="
            px-20
            py-3
            bg-blue-600
            hover:text-sky-900
            focus:ring-offset-2
            mr-2
          "
          :text="city.text"
        />
      </div>
      <dialog
        class="backdrop:bg-gray-50 open:bg-white open:text-white modal-window"
        :open="show"
      >
        <form method="dialog">
          <h1 class="text-black font-bold mb-5" v-if="city">
            Заказать звонок в город {{ city.name }}
          </h1>
          <OrderCall :city="city" />
        </form>
      </dialog>
    </div>
  </div>
</template>

<script>
import "@/index.css";
import OrderCall from "@/components/OrderCall.vue";
import CustomButton from "./components/CustomButton.vue";

export default {
  name: "App",
  components: {
    OrderCall,
    CustomButton,
  },
  methods: {
    goToCity(city) {
      this.city = city;
      this.$store.commit({
        type: "changeShow",
        payload: true,
      });
    },
  },
  data() {
    return {
      city: null,
    };
  },
  computed: {
    show() {
      return this.$store.state.isShow;
    },
    cities() {
      return this.$store.state.cities;
    },
  },
};
</script>

<style lang="scss">
#app {
  height: 100vh;
}

.ordercall {
  background-color: rgb(92, 89, 89);
}
.disabled {
  display: none;
}

.modal-window {
  border-radius: 5px;
  position: absolute;
  top: 10rem;
}
</style>
