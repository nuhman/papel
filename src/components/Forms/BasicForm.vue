<template>
  <form class="form-group expenseForm">
    <BasicInput
      v-model="descTxt"
      placeholderTxt="Dinner at Avi's"
      labelTxt="Description"
    />
    <BasicInput
      v-model="costTxt"
      placeholderTxt="250"
      labelTxt="Cost (in Rs.)"
    />
    <DatePicker /> <ActionButton :handleClick="addExpense" btnText="ADD" />
  </form>
</template>

<script>
//import HelloWorld from "./components/HelloWorld";
import BasicInput from "../Inputs/BasicInput";
import DatePicker from "../Inputs/DatePicker";
import ActionButton from "../Buttons/ActionButton";

export default {
  name: "BasicForm",
  components: {
    //HelloWorld,
    BasicInput,
    DatePicker,
    ActionButton
  },
  data: function() {
    return {
      descTxt: "",
      costTxt: ""
    };
  },
  methods: {
    addExpense: function() {
      if (!!this.descTxt && !!this.costTxt && !!this.$store.state.currentDate) {
        this.$store.state.expenseStore.push({
          desc: this.descTxt,
          cost: this.costTxt,
          date: this.$store.state.currentDate,
          tags: ["#data", "#personal"]
        });
      }
      return;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form > * {
  margin-bottom: 20px;
}
.expenseForm {
  background: #ecf0f1;
  padding: 20px;
  border-radius: 10px;
  margin: 20px;
}
</style>
