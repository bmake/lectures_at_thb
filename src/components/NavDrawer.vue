<template>
  <nav>
    <v-navigation-drawer app v-model="$store.state.drawer" absolute temporary>
      <v-list dense>
        <v-list-item v-for="item in links" :key="item.title">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-btn :to="item.route">{{ $t(item.title) }}</v-btn>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { icon: 'mdi-view-dashboard', title: 'navbar.home', route: '/' },
        { icon: 'mdi-view-dashboard', title: 'navbar.about', route: { name: 'about'} }
      ]
    };
  }
};
</script>
