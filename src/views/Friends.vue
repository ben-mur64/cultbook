<template>
<div class="wrapper">
  <h1> You have {{numFriends}} fellow servants! </h1>
  <div class="people">
    <div class="person container" v-for="person in friends" :key="person.id">
      <div class="row">
        <div class="image col-sm-4">
          <img :src="person.avatar">
        </div>
        <div class="info col-sm-4">
          <h1>{{person.full_name}}</h1>
        </div>
        <div class="info col-sm-4">
          <h2>{{person.job_title}}</h2>
          <br />
          <p>Serves:</p>
          <h2>{{person.god}}</h2>
        </div>
      </div>
      <button class="auto" @click="removeFriend(person)">Remove Friend</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Friends',
  methods: {
    removeFriend(person) {
      this.$root.$data.recompute++;
      this.$root.$data.friends.delete(person);
    }
  },
  computed: {
    friends() {
      this.$root.$data.recompute;
      return this.$root.$data.friends;
    },
    numFriends() {
      this.$root.$data.recompute;
      return this.$root.$data.friends.size;
    }
  }
}
</script>

<style scoped>
.wrapper {
  justify-content: center;
}

.people {
  margin-top: 20px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
}

.person {
  background: #5c7f59;
  margin: 10px;
  margin-top: 50px;
  width: 400px;
  padding: 0;
  padding: 10px 10px;
}

.row {
  margin: 0;
  height: 128px;
  padding-bottom: 5px;
}

.person img {
  border: 2px solid #333;
  height: 128px;
  width: 128px;
  object-fit: cover;
}

.person .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  color: #000;
  padding-top: 10px;
}

h1 {
  font-size: 18px;
  font-weight: bold;
}

h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}

button {
  height: 50px;
  background: red;
  color: white;
  border: none;
  width: 100%;
  margin-top: 5px;
}

.auto {
  margin-left: auto;
}
</style>
