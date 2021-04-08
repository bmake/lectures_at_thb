<template>
  <v-progress-linear
    :indeterminate="$store.state.loading !== 0"
    :active="$store.state.loading !== 0"
    color="red"
    :height="height"
  ></v-progress-linear>
</template>

<script>
export default {
  props: {
    height: Number
  },
  methods: {
    getLoading(state) {
      return state.loading;
    }
  }
};
</script>

<style scoped></style>
