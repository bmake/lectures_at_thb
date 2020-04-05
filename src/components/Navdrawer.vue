<template>
  <nav>
    <v-navigation-drawer app v-model=count class="primary" temporary>
      <v-list nav dense
        >"
        <v-list-tile v-for="link in links" :key="link.text" :to="link.route">
          <v-list-tile-action>
            <v-icon large color="white">{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">
              <v-btn icon target="_blank" color="white">
                {{ link.text }}
              </v-btn>
            </v-list-tile-title>
          </v-list-tile-content>
          <v-divider></v-divider>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import store from '../store/store.js';
// eslint-disable-next-line no-unused-vars
import { mapState } from 'vuex';
export default {
  computed: {
    count () {
      // eslint-disable-next-line no-console
      console.log(this.$store.state.drawer)
      return this.$store.state.drawer
    }
  },
  data() {
    return {
      links: [
        { icon: 'mdi-view-dashboard', text: 'Link 1', route: '/' },
        { icon: 'mdi-view-dashboard', text: 'Link 2', route: '/projects' },
        { icon: 'mdi-view-dashboard', text: 'Link 3', route: '/team' }
      ]
    };
  }
};
</script>
