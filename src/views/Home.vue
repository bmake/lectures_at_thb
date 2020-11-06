<template>
  <div>
    <background></background>
    <video-lecture-filters
      @activeModule="activeModuleValue"
      ref="filters"
    ></video-lecture-filters>
    <lectures
      v-if="activeModuleValue !== null"
      :video-lecture-iris="videoLectureIris"
      ref="lectures"
    ></lectures>
  </div>
</template>

<script>
import Background from '../components/THBImage';
import Lectures from '../components/Lectures';
import VideoLectureFilters from '../components/VideoLectureFilters';
import axios from 'axios';
import store from '../store/store.js';
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  components: {
    Background,
    VideoLectureFilters,
    Lectures
  },
  data() {
    return {
      activeModule: null
    };
  },
  methods: {
    async getVideoLectureIris() {
      await store.dispatch('incrementLoading');
      await store.dispatch('resetVideoLectures');
      return axios
        .get(
          'http://localhost:3000/v1/videoLecture/module/' + this.activeModule,
          {
            headers: {
              'Accept-Language': this.$i18n.locale,
              'Cache-Control': 'no-cache'
            }
          }
        )
        .then(response => {
          const videoLectureIris = this._.map(
            response.data.result,
            videoLecture => {
              return videoLecture.iri;
            }
          );
          store.dispatch('addVideoLectureIris', videoLectureIris);
        })
        .catch(function(error) {
          // eslint-disable-next-line no-console
          console.log(error);
          // TODO: implement catch functionality
        })
        .finally(() => store.dispatch('decrementLoading'));
    },
    scrollToLectures() {
      this.$refs['lectures'].$el.scrollIntoView({ behavior: 'smooth' });
    },
    activeModuleValue: function(params) {
      this.activeModule = params;
      this.getVideoLectureIris();
    }
  },
  updated() {
    setTimeout(() => this.scrollToLectures(), 750);
  },
  computed: {
    ...mapGetters({
      videoLectureIris: 'getVideoLectureIris'
    })
  }
};
</script>
<style scoped></style>
