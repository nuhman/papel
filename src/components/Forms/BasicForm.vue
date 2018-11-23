<template>
  <form class="form-group expenseForm">
    <BasicInput placeholderTxt="Dinner at Avi's" labelTxt="Description" />
    <BasicInput placeholderTxt="250" labelTxt="Cost (in Rs.)" /> <DatePicker />
    <ActionButton btnText="ADD" />
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
