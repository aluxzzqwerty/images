<template>
  <div class="ui secondary pointing menu">
    <router-link class="active item" to="/"> Image Storage </router-link>

    <div class="right menu">
      <div v-if="isSignedIn" class="horizontal">
        <router-link class="item" to="/">Galleries</router-link>
        <router-link class="item" to="/upload">Upload</router-link>
        <a class="item" @click="logout">Logout</a>
      </div>
      <a v-else href="#" class="ui item" @click="login"> Login </a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AppHeader",
  computed: mapGetters(["isSignedIn"]),
  methods: {
    ...mapActions(["login", "logout"]),
  },
};
</script>

<style scoped>
.horizontal {
  display: flex;
}
</style>