<template>
  <button type="submit" @click.prevent="asd" class="btn btn-outline-primary">
    {{ btnText }}
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: ["btnText"],
  data() {
    return {};
  },
  methods: {
    asd: function() {
      alert("hi");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button:hover {
  cursor: pointer;
}
</style>
