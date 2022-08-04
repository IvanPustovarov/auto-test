<template>
  <button
    class="
      inline-flex
      items-center
      justify-center
      px-10
      py-2
      text-sm text-white
      font-semibold
      rounded
      border
      hover:bg-white
      focus:outline-none focus:ring-2
    "
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "OrderCall",
  props: {
    text: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
