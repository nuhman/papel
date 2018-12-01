<template>
  <div class="expList plist-group">
    <div
      v-for="expense in expenses"
      :key="expense['.key']"
      class=" col-md-4 col-lg-4 col-sm-4"
    >
      <div
        href="#"
        class="item list-group-item list-group-item-action flex-column align-items-start"
      >
        <div class="d-flex w-100 justify-content-between">
          <h4 class="mb-1">{{ expense.title }}</h4>
          <small>{{ expense.date }}</small>
        </div>
        <p class="mb-1">Rs. {{ expense.cost }}</p>
        <small class="tags" v-for="(tag, i) in expense.tags" :key="i"
          ><a href="">{{ tag }} </a></small
        >
        <p class="options">
          <a @click="removeExpense(expense['.key']);">
            <i title="delete this item" class="zmdi zmdi-delete zmdi-hc-2x"></i>
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { expensesRef } from "../../firebase";

export default {
  props: {
    expenseStore: {
      type: Array,
      required: true
    }
  },
  name: "ListGroup",
  data() {
    return {
      btnText: "ADD",
      newExpense: {}
    };
  },
  firebase: {
    expenses: expensesRef
  },
  methods: {
    removeExpense(key) {
      expensesRef.child(key).remove();
    }

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.expList {
  margin-top: 20px;
}
div {
  margin: 0 auto;
}
.tags {
  margin-right: 10px;
}
.item {
}
.options {
  margin-top: 10px;
  margin-bottom: 10px;
  color: red;
}
.options > *:hover {
  cursor: pointer;
}
</style>
