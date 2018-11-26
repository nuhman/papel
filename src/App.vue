<template>
  <div id="app">
    <NavigationBar :appName="appName" :navLinks="navLinks" />
    <router-view :expenseStore="expenseStore"></router-view>
    <!--
      <BasicForm />
      <ListGroup :expenseStore="expenseStore" />
    -->
  </div>
</template>

<script>
import BasicForm from "./components/Forms/BasicForm";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import ListGroup from "./components/ListGroups/ListGroup";

export default {
  name: "App",
  components: {
    //HelloWorld,
    BasicForm,
    ListGroup,
    NavigationBar
  },
  data: function() {
    return {
      appName: this.$store.state.appName,
      navLinks: this.$store.state.navLinks,
      expenseStore: this.$store.state.expenseStore
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}

/*
#app > * {
  display: block;
  margin: 0 auto;
  margin-top: 20px;
}*/
</style>
