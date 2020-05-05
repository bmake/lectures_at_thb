<template>
  <v-app>
    <nav-drawer></nav-drawer>
    <toolbar></toolbar>
    <v-content transition="slide-x-transition">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar';
import NavDrawer from './components/NavDrawer';

export default {
  name: 'App',
  components: { Toolbar, NavDrawer }
};
</script>

<style></style>
