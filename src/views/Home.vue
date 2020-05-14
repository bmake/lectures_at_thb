<template>
  <div>
    <background></background>
    <lectures></lectures>
  </div>
</template>

<script>
import Background from '../components/THBImage';
import Lectures from '../components/Lectures';
import axios from 'axios';
import queries from '../../config';
import store from '../store/store.js';
import { mapGetters } from 'vuex';

export default {
  name: 'home',
  components: {
    Background,
    Lectures
  },
  data() {
    this.getData();
    return { data: this.videoLectures };
  },
  methods: {
    getData() {
      store.dispatch('setLoading', true);
      axios
        .get('http://localhost:3030/lectures_at_thb/query', {
          params: {
            query: queries.query
          }
        })
        .then(response => {
          let videoLectures = response.data.results.bindings;
          store.dispatch('addVideoLectures', videoLectures);
          store.dispatch('setLoading', false);
        })
        .catch(function(error) {
          // eslint-disable-next-line no-console
          console.log(error);
          // TODO: implement catch functionality
        });
    }
  },
  computed: {
    ...mapGetters({
      videoLectures: 'getVideoLectures',
      loading: 'getLoading'
    })
  }
};
</script>
<style scoped></style>
