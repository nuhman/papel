<template>
  <div class="form-group">
    <BasicInput placeholderTxt="Dinner at Avi's" labelTxt="Expense details" />
    <BasicInput placeholderTxt="250" labelTxt="Expense (in Rs.)" />
    <ActionButton btnText="ADD" />
  </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld";
import BasicInput from "../Inputs/BasicInput";
import ActionButton from "../Buttons/ActionButton";

export default {
  name: "BasicForm",
  components: {
    //HelloWorld,
    BasicInput,
    ActionButton
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div > * {
  margin-bottom: 20px;
}
</style>
