<template>
  <div id="app">
    <NavigationBar :appName="appName" :navLinks="navLinks" /> <BasicForm />
    <ListGroup :expenseStore="expenseStore" />
  </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld";
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
      appName: "papel",
      navLinks: ["Home", "About", "Contact"],
      expenseStore: [
        {
          desc: "lunch",
          cost: 120,
          date: "12/11/2018",
          tags: ["#biriyani", "#friends"]
        },
        {
          desc: "football",
          cost: 1400,
          date: "13/11/2018",
          tags: ["#games", "#friends"]
        },
        {
          desc: "recharge",
          cost: 399,
          date: "22/11/2018",
          tags: ["#data", "#personal"]
        }
      ]
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
