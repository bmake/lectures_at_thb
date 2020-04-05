<template>
  <v-app>
    <toolbar></toolbar>

    <navdrawer></navdrawer>

    <v-content transition="slide-x-transition">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar';
import Navdrawer from './components/Navdrawer';

export default {
  name: 'App',
  components: { Toolbar, Navdrawer }
};
</script>

<style></style>
