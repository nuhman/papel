<template>
  <div id="app">
    <NavigationBar :appName="appName" :navLinks="navLinks" /> <BasicForm />
  </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld";
import BasicForm from "./components/Forms/BasicForm";
import NavigationBar from "./components/NavigationBar/NavigationBar";
export default {
  name: "App",
  components: {
    //HelloWorld,
    BasicForm,
    NavigationBar
  },
  data: function() {
    return {
      appName: "papel",
      navLinks: ["Home", "About", "Contact"]
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
