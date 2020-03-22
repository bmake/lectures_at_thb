<template>
  <span>
    <background></background>
    <v-progress-circular v-if="$store.loading"></v-progress-circular>
    <lectures v-else></lectures>
  </span>
</template>

<script>
import Background from '../components/THBImage';
import Lectures from '../components/Lectures';
import axios from 'axios';
import queries from '../../config';
import store from '../store/store.js';

export default {
  name: 'home',
  components: {
    Background,
    Lectures
  },
  data() {
    this.getData();
    return { videoLectrues: store.state.videoLectures };
  },
  methods: {
    getData() {
      axios
        .get('http://localhost:3030/lectures_at_thb/query', {
          params: {
            query: queries.query
          }
        })
        .then(response => {
          let videoLectures = response.data.results.bindings;
          store.replaceState({ videoLectures: videoLectures });
        })
        .catch(function(error) {
          print(error);
          // TODO: implement catch functionality
        })
        .finally(store.replaceState({ loading: false }));
    }
  }
};
</script>
