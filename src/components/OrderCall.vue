<template>
  <div v-if="city" class="flex flex-row mb-4 input">
    <form
      @submit.prevent="submit"
      :class="this.errors ? 'errors' : false"
      @keypress.enter.prevent
    >
      <input
        type="text"
        v-model="name"
        placeholder="Иван Иванов"
        required
        @invalid="invalidateForm"
      />
      <input
        type="tel"
        v-model="phone"
        placeholder="+7 . . ."
        required
        @invalid="invalidateForm"
      />
      <input
        type="email"
        v-model="email"
        placeholder="you@example.com"
        required
        @invalid="invalidateForm"
      />
      <div class="flex justify-between">
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
            bg-red
            border border-purple-200
            hover:text-red hover:bg-white
            focus:outline-none
            focus:ring-2
            focus:ring-purple-600
            focus:ring-offset-2
          "
        >
          Cancel
        </button>
        <button
          :disabled="!isValidForm"
          @click="submit"
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
          Confirm
        </button>
      </div>
    </form>
    <div class="text-black font-medium">{{ city.name }}</div>
  </div>
</template>

<script>
export default {
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
  watch: {},
  computed: {
    isNameValid() {
      return this.name.length;
    },
    isPhoneValid() {
      // eslint-disable-next-line no-useless-escape
      let phoneRegex = /^\+?[7]{1}[0-9]{10}$/g;
      return phoneRegex.test(this.phone);
    },
    isEmailValid() {
      // eslint-disable-next-line no-useless-escape
      let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
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
    padding: 4px;
    margin-right: 1rem;
    border-radius: 5px;
    border: 1px solid gray;
  }
}

form.errors {
  :invalid {
    outline: 2px solid red;
  }
}
</style>
