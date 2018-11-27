<template>
  <div class=" row">
    <label for="expenseDetails" class="col-sm-2 col-form-label"
      >{{ labelTxt }}
      <i
        data-toggle="tooltip"
        title="Hooray!"
        class="zmdi zmdi-info zmdi-hc-lg"
      ></i>
    </label>
    <div class="col-lg-4 col-md-4 col-sm-4">
      <vue-tags-input
        :placeholder="placeholderTxt"
        v-model="tag"
        :tags="tags"
        @tags-changed="addTags"
      />
    </div>
  </div>
</template>

<script>
import VueTagsInput from "@johmun/vue-tags-input";

export default {
  components: {
    VueTagsInput
  },
  props: {
    placeholderTxt: String,
    labelTxt: String,
    value: String
  },
  name: "TagInput",
  data() {
    return {
      tag: "",
      tags: []
    };
  },

  methods: {
    addTags: function(_tags) {
      this.tags = _tags;
      this.$store.state.currentExpenseObj.tags = [];

      let self = this;
      this.tags.forEach(function(val) {
        self.$store.state.currentExpenseObj.tags.push("#" + val.text);
      });
      //console.log(this.$store.state.cuurentExpenseObj.tags);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
