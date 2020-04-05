<template>
  <nav>
    <v-navigation-drawer app v-model="$store.state.drawer" absolute temporary>
      <v-list dense>
        <v-list-item v-for="item in links" :key="item.title">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
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
        { icon: 'mdi-view-dashboard', title: 'Link 1', route: '/' },
        { icon: 'mdi-view-dashboard', title: 'Link 2', route: '/projects' },
        { icon: 'mdi-view-dashboard', title: 'Link 3', route: '/team' }
      ]
    };
  }
};
</script>
