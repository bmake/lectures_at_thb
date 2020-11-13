<template>
  <div>
    <v-img
      :src="require(`@/assets/logos/${videoLecture.thumbnail}`)"
      height="16vh"
      contain
    >
    </v-img>
    <h1>{{ videoLecture.name }}</h1>
    <div>
      {{ videoLecture.description }}
    </div>
  </div>
</template>

<script>
import store from '../store/store';
import axios from 'axios';

export default {
  name: 'Video',
  data() {
    return {
      videoLectureIri: null,
      videoLecture: null
    };
  },
  created() {
    this.videoLectureIri = this.$route.params.id;
    this.getVideoLectureDetails();
  },
  methods: {
    async getVideoLectureDetails() {
      await store.dispatch('incrementLoading');
      axios
        .get('http://localhost:3000/v1/videoLecture/' + this.videoLectureIri, {
          headers: {
            'Accept-Language': this.$i18n.locale,
            'Cache-Control': 'no-cache'
          }
        })
        .then(response => {
          this.videoLecture = response.data.result;
        })
        .catch(function(error) {
          // eslint-disable-next-line no-console
          console.log(error);
          // TODO: implement catch functionality
        })
        .finally(() => store.dispatch('decrementLoading'));
    }
  }
};
</script>

<style scoped></style>
