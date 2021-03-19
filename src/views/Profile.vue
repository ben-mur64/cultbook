<template>
<div class="wrapper">
  <div class="container">
    <div class="row">
      <div class="col-sm-4 col-12 splash-box">
        <img :src="prof.avatar" class="splash-img">
      </div>
      <div class="col-sm-8 col-12">
        <div class="container">
          <div class="row">
            <div class="col-sm-4 col-12 splash-box">
              <h2> User Details: </h2>
            </div>
            <div class="col-sm-4 col-12 splash-box">
              <label for="fname">Name:</label>
              <input type="text" id="fname" name="fname">
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4 col-12 splash-box">
              <h2> Biography: </h2>
            </div>
            <div class="col-sm-4 col-12 splash-box">
              <label for="bio">Write about yourself:</label>
              <input type="text" id="bio" name="bio">
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4 col-12 splash-box">
              <h2> Submit: </h2>
            </div>
            <div class="col-sm-4 col-12 splash-box">
                <button type="button" class="button">Update My Account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Profile',
  components: {
  },
  computed: {
    profile() {
        return this.$root.$data.profile;
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.splash-img {
    height: auto;
    width: auto;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
}
</style>
