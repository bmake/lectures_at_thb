<template>
  <v-app>
    <nav-drawer></nav-drawer>
    <toolbar></toolbar>
    <ProgressBar></ProgressBar>
    <v-content transition="slide-x-transition">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar';
import NavDrawer from './components/NavDrawer';
import ProgressBar from './components/ProgressBar';

export default {
  name: 'App',
  components: { Toolbar, NavDrawer, ProgressBar }
};
</script>

<style></style>
