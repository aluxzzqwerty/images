<template>
  <div>
    <AppHeader />
    <div class="ui container">
      <router-view />
    </div>
  </div>
</template>

<script>
import AppHeader from "./AppHeader.vue";
export default {
  components: { AppHeader },
  name: "App",
};
</script>

<style>
</style>
