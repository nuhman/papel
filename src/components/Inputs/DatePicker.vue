<template>
  <div class="row">
    <label for="expenseDetails" class="col-sm-2 col-form-label"> Date </label>
    <div class="col-sm-2">
      <date-picker v-model="date" :config="options"></date-picker>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
// Import this component
import datePicker from "vue-bootstrap-datetimepicker";

// Import date picker css
import "pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css";

export default {
  name: "DatePicker",
  data() {
    return {
      date: new Date(),
      options: {
        format: "DD/MM/YYYY",
        useCurrent: false
      }
    };
  },
  components: {
    datePicker
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
