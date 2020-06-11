<template>
  <div>
    <ProgressBar :height=toolbarHeight></ProgressBar>
    <v-toolbar dense dark>
      <v-app-bar-nav-icon @click="negateDrawer"></v-app-bar-nav-icon>
      <v-app-bar-nav-icon>
        <v-img
          src="../assets/mstile-150x150.png"
          height="50"
          width="50"
        ></v-img>
      </v-app-bar-nav-icon>

      <v-toolbar-title>{{ appTitle }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <div class="text-center">
        <v-menu>
          <template v-slot:activator="{ on: menu }">
            <v-tooltip bottom>
              <template v-slot:activator="{ on: tooltip }">
                <v-btn icon dark v-on="{ ...tooltip, ...menu }">
                  <flag :iso="$t(flag)" />
                </v-btn>
              </template>
              <span>{{ $t(description) }}</span>
            </v-tooltip>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
              v-on:click="setLocale(item.locale)"
            >
              <v-list-item-title>
                <flag :iso="item.flag" />
                {{ item.title }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

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
      items: [
        { title: ' DE', locale: 'de', flag: 'de' },
        { title: ' EN', locale: 'en', flag: 'gb' }
      ],
      toolbarHeight: 5,
      langs: ['de', 'en'],
      description: 'toolbar.description',
      flag: 'fl.current_flag'
    };
  },
  methods: {
    negateDrawer() {
      store.dispatch('negateDrawer');
    },
    negateDropdown() {
      store.dispatch('negateDropdown');
    },
    setLocale(locale) {
      this.$i18n.locale = locale;
    }
  },
  components: {
    ProgressBar
  }
};
</script>

<style scoped></style>
