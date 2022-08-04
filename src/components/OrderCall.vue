<template>
  <div v-if="city" class="flex flex-row mb-4 input">
    <form
      @submit.prevent="submit"
      @keypress.enter.prevent
      class="flex flex-col"
    >
      <div>
        <input type="text" v-model="name" placeholder="Иван Иванов" />
        <input type="tel" v-model="phone" placeholder="+7 . . ." />
        <input type="email" v-model="email" placeholder="you@example.com" />
      </div>
      <div class="flex justify-between">
        <CustomButton
          @click="cancel"
          text="Отменить"
          class="bg-red hover:text-red hover:bg-white"
        />

        <CustomButton
          @click="submit"
          :disabled="!isValidForm"
          text="Подтвердить"
          class="
            bg-green
            hover:text-green hover:bg-white
            disabled:bg-gray disabled:hover:text-white
          "
        />
      </div>
    </form>
  </div>
</template>

<script>
import CustomButton from "./CustomButton.vue";
export default {
  components: { CustomButton },
  name: "OrderCall",
  props: {
    city: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      errors: false,
      name: "",
      phone: "",
      email: "",
    };
  },
  computed: {
    isNameValid() {
      return this.name.length;
    },
    isPhoneValid() {
      const phoneRegex = /^\+?[7]{1}[0-9]{10}$/g;
      return phoneRegex.test(this.phone);
    },
    isEmailValid() {
      const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
      return emailRegex.test(this.email);
    },
    isValidForm() {
      return this.isNameValid && this.isPhoneValid && this.isEmailValid;
    },
  },
  methods: {
    invalidateForm() {
      this.errors = true;
    },
    cancel() {
      this.name = "";
      this.phone = "";
      this.email = "";
      this.$store.commit({
        type: "changeShow",
        payload: false,
      });
    },
    submit() {
      const userData = {
        name: this.name,
        phone: this.phone,
        email: this.email,
        city_id: this.city.name,
      };
      this.$store.commit({
        type: "changeShow",
        payload: false,
      });
      this.$store.dispatch({
        type: "sendUser",
        payload: userData,
      });
      this.name = "";
      this.phone = "";
      this.email = "";
    },
  },
};
</script>


<style scoped lang="scss">
.input {
  color: black;
  input {
    padding: 5px;
    margin: 0 1rem 1rem 0;
    border-radius: 5px;
    border: 1px solid rgb(139, 134, 134);
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
