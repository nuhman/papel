<template>
  <button
    type="submit"
    @click.prevent="handleClick"
    class="btn btn-outline-primary"
  >
    {{ btnText }}
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    btnText: {
      type: String,
      required: true
    },
    handleClick: {
      type: Function
    }
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button:hover {
  cursor: pointer;
}
</style>
