<template>
  <v-app>
    <nav-drawer></nav-drawer>
    <toolbar></toolbar>
    <v-content transition="slide-x-transition">
      <router-view></router-view>
    </v-content>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar';
import NavDrawer from './components/NavDrawer';
import Footer from "./components/Footer";

export default {
  name: 'App',
  components: { Toolbar, NavDrawer, Footer }
};
</script>

<style>
/*video-player.caption div#video-player-container div#video-container captions-display div#container__captions div.caption-cue-text {
  font-size: x-large !important;
}*/
</style>
