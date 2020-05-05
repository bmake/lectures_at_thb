<template>
  <div>
    <ProgressBar height="5"></ProgressBar>
    <v-toolbar dense dark>
      <v-app-bar-nav-icon @click="negateDrawer"></v-app-bar-nav-icon>
      <v-app-bar-nav-icon>
        <v-img src="../assets/mstile-150x150.png" height="50" width="50"></v-img>
      </v-app-bar-nav-icon>

      <v-toolbar-title>{{ appTitle }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import store from '../store/store';
import ProgressBar from './ProgressBar';

export default {
  name: 'Toolbar',
  data() {
    return {
      appTitle: 'lectures@THB',
      items: [{ title: 'About' }, { title: 'Team' }, { title: 'Impressum' }]
    };
  },
  methods: {
    negateDrawer() {
      store.dispatch('negateDrawer');
    }
  },
  components: {
    ProgressBar
  }
};
</script>

<style scoped></style>
