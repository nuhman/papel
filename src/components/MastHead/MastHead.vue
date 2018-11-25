<template>
  <header class="masthead text-white text-center">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-xl-9 mx-auto">
          <h1 class="mb-5">{{ heading }}</h1>
        </div>
        <div class="col-md-10 col-lg-8 col-xl-7 mx-auto">
          <form>
            <div class="add-btn form-row">
              <div class="col-12 col-md-6">
                <button
                  @click.prevent="navigateToLink"
                  type="submit"
                  class="btn btn-block btn-lg btn-primary"
                >
                  {{ btnText }}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    btnText: {
      type: String,
      default: "GET STARTED"
    },
    heading: {
      type: String,
      default: "Budget better, save more and simply feel in control with papel!"
    }
  },
  name: "MastHead",
  data() {
    return {};
  },
  methods: {
    navigateToLink: function() {
      this.$router.push("/add");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Lato", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
}

header.masthead {
  position: relative;
  background-color: #343a40;
  background: url("https://images.pexels.com/photos/414144/pexels-photo-414144.jpeg?cs=srgb&dl=cold-dark-eerie-414144.jpg&fm=jpg")
    no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  padding-top: 8rem;
  padding-bottom: 8rem;
}

header.masthead .overlay {
  position: absolute;
  background-color: #212529;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  opacity: 0.3;
}

header.masthead h1 {
  font-size: 2rem;
}

@media (min-width: 768px) {
  header.masthead {
    padding-top: 12rem;
    padding-bottom: 12rem;
  }
  header.masthead h1 {
    font-size: 3rem;
  }
}
.add-btn {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
