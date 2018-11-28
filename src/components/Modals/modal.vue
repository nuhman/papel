<template>
  <div>
    <div id="myModal" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <div id="modal" class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">{{ modalDetails.header }}</h4>
            <button type="button" class="close" data-dismiss="modal">
              &times;
            </button>
          </div>
          <div class="modal-body">
            <p>{{ modalDetails.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modalDetails: Object
  },

  name: "modal",
  data() {
    return {};
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
