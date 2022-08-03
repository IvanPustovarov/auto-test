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
        <button
          :disabled="show"
          @click="goToCity('Moscow')"
          class="
            inline-flex
            items-center
            justify-center
            px-20
            py-3
            text-sm text-white
            font-semibold
            rounded
            border border-purple-200
            bg-blue-600
            hover:text-sky-900 hover:bg-white
            focus:outline-none
            focus:ring-2
            focus:ring-purple-600
            focus:ring-offset-2
            mr-2
          "
        >
          Заказать в Москву
        </button>

        <button
          :disabled="show"
          @click="goToCity('St-Petersburg')"
          class="
            inline-flex
            items-center
            justify-center
            px-10
            text-sm text-white
            font-semibold
            rounded
            bg-green
            border border-purple-200
            hover:text-green hover:bg-white
            focus:outline-none
            focus:ring-2
            focus:ring-purple-600
            focus:ring-offset-2
          "
        >
          Заказать в Санкт-Петербург
        </button>
      </div>
      <dialog
        class="backdrop:bg-gray-50 open:bg-black open:text-white modal-window"
        :open="show"
      >
        <form method="dialog">
          <button
            @click="cancel"
            class="
              inline-flex
              items-center
              justify-center
              px-10
              py-2
              text-sm text-white
              font-semibold
              rounded
              bg-green
              border border-purple-200
              hover:text-green hover:bg-white
              focus:outline-none
              focus:ring-2
              focus:ring-purple-600
              focus:ring-offset-2
            "
          >
            cancel
          </button>
          {{ city }}
        </form>
      </dialog>
    </div>
  </div>
</template>

<script>
import "@/index.css";

export default {
  name: "App",
  components: {},
  methods: {
    goToCity(city) {
      this.city = city;
      this.show = !this.show;
    },
    cancel() {
      this.show = false;
    },
  },
  data() {
    return {
      show: false,
      city: "",
    };
  },
};
</script>

<style lang="scss">
#app {
  height: 100vh;
}

.ordercall {
  background-color: rgb(63, 61, 61);
}

.modal-window {
  border-radius: 5px;
  position: absolute;
  top: 10rem;
}
</style>
