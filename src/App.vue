<template>
  <div id="app"><BasicForm /></div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld";
import BasicForm from "./components/Forms/BasicForm";

export default {
  name: "App",
  components: {
    //HelloWorld,
    BasicForm
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
  margin-top: 60px;
  margin-left: 20px;
  margin-right: 20px;
}
/*
#app > * {
  display: block;
  margin: 0 auto;
  margin-top: 20px;
}*/
</style>
