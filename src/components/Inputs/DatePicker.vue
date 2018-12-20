<template>
  <div class="row">
    <label for="expenseDetails" class="col-sm-2 col-form-label"> Date </label>
    <div class="col-lg-2 col-md-4 col-sm-4">
      <date-picker class="dp" v-model="date" :config="options"></date-picker>
    </div>
  </div>
</template>

<script>
import datePicker from "vue-bootstrap-datetimepicker";
import $ from "jquery";
import "pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css";

export default {
  props: {},
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
  },
  mounted: function() {
    // fires when the component is mounted for first time    
    
    var self = this;

    // initialize state.currentExpenseObj.date to current date
    this.$store.commit("updateCurrentExpense", {
      ...this.$store.state.currentExpenseObj,
      date: this.convertToDateTxt(self.date)
    });

    // initialize datetimepicker
    $(".dp").datetimepicker();

    // listen to any changes in datetimepicker widget,
    // and update state.currentDate with that
    $(".dp")
      .datetimepicker()
      .on("dp.change", function(e) {
        var newDate = e.date.format(e.date._f);
        self.date = newDate;
        self.$store.commit("updateCurrentExpense", {
          ...self.$store.state.currentExpenseObj,
          date: newDate
        });
      });
  },
  
  methods: {
    
   /**
    * Returns string representation of the date (`dd/mm/yyyy`)
    *
    * @param {Date} today: todays date as a date object.  
    */
    convertToDateTxt(today) {      
      var dd = today.getDate();
      var mm = today.getMonth() + 1; //January is 0!
      var yyyy = today.getFullYear();
      
      if (dd < 10) {
        dd = "0" + dd;
      }
      
      if (mm < 10) {
        mm = "0" + mm;
      }
      
      return dd + "/" + mm + "/" + yyyy;      
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
