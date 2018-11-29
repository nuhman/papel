<template>
  <div>
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
      <DatePicker />
      <TagInput
        v-model="tagsTxt"
        placeholderTxt="taco, family, misc"
        labelTxt="Tags"
        :tagToolTip="tagToolTip"
      />
      <ActionButton
        data-toggle="modal"
        data-target="#myModal"
        :handleClick="addExpense"
        btnText="ADD"
      />
    </form>
    <modal :modalDetails="modalDetails"></modal>
  </div>
</template>

<script>
import BasicInput from "../Inputs/BasicInput";
import TagInput from "../Inputs/TagInput";
import DatePicker from "../Inputs/DatePicker";
import ActionButton from "../Buttons/ActionButton";
import modal from "../Modals/modal";

export default {
  name: "BasicForm",
  components: {
    BasicInput,
    TagInput,
    DatePicker,
    ActionButton,
    modal
  },
  data: function() {
    return {
      descTxt: "",
      costTxt: "",
      tagsTxt: "s",
      tagToolTip: "Press `enter` or `return` to add a tag",
      successfulModal: {
        isSuccess: true,
        header: "Success!",
        text: "Item added to expenses list"
      },
      failureModal: {
        isSuccess: false,
        header: "Sorry!",
        text: "Please enter all the details"
      },
      modalDetails: {
        isSuccess: false,
        header: "",
        text: ""
      }
    };
  },
  methods: {
    addExpense: function() {
      if (
        !!this.descTxt &&
        !!this.costTxt &&
        !!this.$store.state.currentExpenseObj.date
      ) {
        this.$store.commit("updateCurrentExpense", {
          ...this.$store.state.currentExpenseObj,
          desc: this.descTxt,
          cost: this.costTxt
        });

        this.$store.commit(
          "addNewExpense",
          this.$store.state.currentExpenseObj
        );

        this.modalDetails = this.successfulModal;
        this.descTxt = "";
        this.costTxt = "";
        console.log("here: " + this.tagsTxt);
      } else {
        this.modalDetails = this.failureModal;
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
