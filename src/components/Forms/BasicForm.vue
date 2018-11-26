<template>
  <form class="form-group expenseForm">
    <BasicInput
      :inputTxt="newExpense.desc"
      placeholderTxt="Dinner at Avi's"
      labelTxt="Description"
    />
    <BasicInput
      :inputTxt="newExpense.cost"
      placeholderTxt="250"
      labelTxt="Cost (in Rs.)"
    />
    <DatePicker :dateTxt="newExpense.date" />
    <ActionButton :handleClick="addExpense" btnText="ADD" />
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
      newExpense: {
        desc: "def",
        cost: "000",
        date: "12/1/2018"
      }
    };
  },
  methods: {
    addExpense: function() {
      alert("adding..." + this.newExpense.desc);
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
