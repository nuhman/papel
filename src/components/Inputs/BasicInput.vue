<template>
  <div class=" row">
    <label for="expenseDetails" class="col-sm-2 col-form-label">{{
      labelTxt
    }}</label>
    <div class="col-lg-4 col-md-4 col-sm-4">
      <input
        type="text"
        v-bind:value="value"
        class="form-control"
        :placeholder="placeholderTxt"
        v-on:input="updateValue($event.target.value);"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    placeholderTxt: String,
    labelTxt: String,
    value: String
  },
  name: "BasicInput",
  data() {
    return {
      btnText: "ADD"
    };
  },
  methods: {
    updateValue: function(value) {
      this.$emit("input", value);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
