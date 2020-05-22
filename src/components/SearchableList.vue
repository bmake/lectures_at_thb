<template>
  <v-card class="mx-auto" tile>
    <v-card-title>
      <div class="heading">{{ heading }}</div>
    </v-card-title>
    <v-text-field
      v-if="listItems.length > 5"
      class="mx-3"
      flat
      label="Search"
      prepend-inner-icon="search"
      solo-inverted
      v-model="search"
      clearable
      @click:clear="clearSearch"
    ></v-text-field>
    <v-list>
      <v-list-item-group v-model="item" color="primary">
        <v-list-item v-for="(item, i) in filteredItems" :key="i">
          <v-list-item-content>
            <v-list-item-title v-text="item"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: 'SearchableList',
  props: {
    heading: String,
    listItems: Array
  },
  data() {
    return {
      search: ''
    };
  },
  computed: {
    filteredItems() {
      return this.listItems.filter(listItem => {
        if (!this.search) return this.listItems;
        return listItem.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  },
  methods: {
    clearSearch() {
      this.search = '';
    }
  }
};
</script>

<style scoped>
.v-list {
  height: 30vh;
  overflow-y: auto;
}
</style>
