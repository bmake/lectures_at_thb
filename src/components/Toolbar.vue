<template>
  <v-toolbar dense dark>
    <v-app-bar-nav-icon @click="negateDrawer"></v-app-bar-nav-icon>
    <v-app-bar-nav-icon>
      <v-img src="../assets/mstile-150x150.png" height="50" width="50"></v-img>
    </v-app-bar-nav-icon>

    <v-toolbar-title>{{ appTitle }}</v-toolbar-title>

    <v-spacer></v-spacer>

    <template>
      <div class="text-center">
        <v-menu>
          <template v-slot:activator="{ on: menu }">
            <v-tooltip bottom>
              <template v-slot:activator="{ on: tooltip }">
                <v-btn icon dark v-on="{ ...tooltip, ...menu }">
                  <v-icon>mdi-view-dashboard</v-icon>
                </v-btn>
              </template>
              <span>{{ $t(description)}}</span>
            </v-tooltip>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index" @click="setLocale(item.locale)">
              <v-list-item-title><flag :iso="item.flag" />{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </template>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import store from '../store/store';

export default {
  name: 'Toolbar',
  data() {
    return {
      appTitle: 'lectures@THB',
      items: [{ title: " DE", locale: 'de', flag: "de" }, { title: " ENG", locale: 'en', flag: "gb" }],
      langs: ['de', 'en'],
      description: 'toolbar.description',
    };
  },
  methods: {
    negateDrawer() {
      store.dispatch('negateDrawer');
    },
    negateDropdown() {
      store.dispatch('negateDropdown');
    },
    setLocale(locale){
      this.$i18n.locale = locale
    }
  }
};
</script>

<style scoped></style>
