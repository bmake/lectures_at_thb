<template>
  <v-app>
    <toolbar></toolbar>

    <v-content transition="slide-x-transition">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar';

export default {
  name: 'App',
  components: { Toolbar }
};
</script>

<style></style>
