<template>
  <div class=" row">
    <label for="expenseDetails" class="col-sm-2 col-form-label">{{
      labelTxt
    }}</label>
    <div class="col-sm-4">
      <input type="text" class="form-control" :placeholder="placeholderTxt" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["placeholderTxt", "labelTxt"],
  name: "BasicInput",
  data() {
    return {
      btnText: "ADD"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
