<template>
  <div class="wrapper">
    <div class="title"><h1>Dashboard</h1></div>
    <hr class="top">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-12" id="mission-box">
            <h2>Our Mission Statement:</h2>
            <p><em>
                Ever feel lonely as a follower of the Great Old Ones?
                Can't find anyone to commit ritual sacrifice and turn into a fish with?
                Not any more!
                Find friends who share your beliefs at Cultbook!
            </em></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
hr.top {
  border-top: 1px solid white;
  margin-bottom: 2rem;
}

.title {
  color: #04d9e8;
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 20px;
  padding-top: 30px;
}

#mission-box {
  max-height: 500px;
  min-height: 300px;
  padding: 0 !important;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #ffffff;
}
</style>
