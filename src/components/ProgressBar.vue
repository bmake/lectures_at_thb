<template>
  <v-progress-linear
    :indeterminate="$store.state.loading"
    :active="$store.state.loading"
    color="red"
  ></v-progress-linear>
</template>

<script>
export default {
  methods: {
    getLoading(state) {
      return state.loading;
    }
  }
};
</script>

<style scoped></style>
