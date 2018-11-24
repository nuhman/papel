<template>
  <div class="list-group">
    <div
      v-for="(expense, index) in expenseStore"
      :key="index"
      class=" col-md-4 col-lg-4 col-sm-4"
    >
      <a
        href="#"
        class="list-group-item list-group-item-action flex-column align-items-start"
      >
        <div class="d-flex w-100 justify-content-between">
          <h4 class="mb-1">{{ expense.desc }}</h4>
          <small>{{ expense.date }}</small>
        </div>
        <p class="mb-1">Rs. {{ expense.cost }}</p>
        <small class="tags" v-for="(tag, i) in expense.tags" :key="i"
          ><a href="">{{ tag }} </a></small
        >
      </a>
    </div>
  </div>
</template>

<script>
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
      btnText: "ADD"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
}
.tags {
  margin-right: 10px;
}
</style>
