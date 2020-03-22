<template>
  <v-toolbar dense dark>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-app-bar-nav-icon>
      <v-img src="../assets/mstile-150x150.png" height="50" width="50"></v-img>
    </v-app-bar-nav-icon>

    <v-toolbar-title>{{ appTitle }}</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
import 'material-design-icons-iconfont/dist/material-design-icons.css';

export default {
  name: 'Toolbar',
  data() {
    return {
      appTitle: 'lectures@THB',
      items: [{ title: 'About' }, { title: 'Team' }, { title: 'Impressum' }]
    };
  }
};
</script>

<style scoped></style>
