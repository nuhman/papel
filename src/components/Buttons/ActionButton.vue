<template>
  <button class="btn btn-primary">{{ btnText }}</button>
</template>

<script>
export default {
  name: "ActionButton",
  props: ["btnText"],
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
