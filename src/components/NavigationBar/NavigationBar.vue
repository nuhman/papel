<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <a class="navbar-brand" href="#">{{ appName }}</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav" v-for="(link, index) in navLinks" :key="index">
        <li class="nav-item">
          <a class="nav-link" href="#">{{ link }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavigationBar",
  props: {
    appName: String,
    navLinks: Array
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
