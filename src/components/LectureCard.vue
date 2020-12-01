<template>
  <v-hover v-slot:="{ hover }" v-if="this.videoLecture != null">
    <v-card
      class="text-xs-center ma-2"
      :elevation="hover ? 12 : 2"
      :class="{ 'on-hover': hover }"
      :to="{ name: 'video', params: { id: createLinToVideoLecture(videoLecture.iri) } }"
    >
      <v-img
        :src="require(`@/assets/logos/${videoLecture.thumbnail}`)"
        height="16vh"
        contain
      >
      </v-img>
      <v-card-title>
        <div class="hyphens text-justify" style="height:6vh">
          <v-clamp autoresize :max-lines="2">
            {{ videoLecture.headline }}
          </v-clamp>
        </div>
      </v-card-title>
      <v-card-text class="hyphens text-justify">
        <v-clamp autoresize :max-lines="4">
          {{ videoLecture.description }}
        </v-clamp>
      </v-card-text>

      <v-card-actions>
        <v-list class="transparent">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-teach</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-subtitle>Lecturer(s)</v-list-item-subtitle>
              <v-list-item-title>
                {{
                  formatContributors(
                    videoLecture.creator,
                    videoLecture.contributors
                  )
                }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-clock</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-subtitle>Duration</v-list-item-subtitle>
              <v-list-item-title v-text="formatDuration(videoLecture.duration)">
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
import VClamp from 'vue-clamp';
import store from '../store/store';
import axios from 'axios';
import { eventBus } from '../main';

export default {
  name: 'LectureCard',
  props: {
    videoLectureIri: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      videoLecture: null
    };
  },
  components: {
    VClamp
  },
  methods: {
    createLinToVideoLecture(videoLectureIRI) {
      const dashIndex = videoLectureIRI.search('#') + 1;
      return videoLectureIRI.substring(dashIndex, videoLectureIRI.length);
    },
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
    },
    updateData() {
      return Promise.all([this.getVideoLectureDetails()]);
    },
    formatDuration(totalSeconds) {
      const hours = Math.floor(totalSeconds / 3600);
      totalSeconds %= 3600;
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      let length = '';
      if (hours > 0) {
        length = length.concat(hours.toString());
        length = length.concat(':');
      }
      length = length.concat(String(minutes).padStart(2, '0'));
      length = length.concat(':');
      if (seconds > 0) {
        length = length.concat(String(seconds).padStart(2, '0'));
      }
      return length;
    },
    formatContributors(creators, contributors) {
      creators = this._.split(creators, ', ');
      contributors = this._.split(contributors, ', ');
      contributors = contributors.filter(c => creators.indexOf(c) === -1);
      let str = creators.join(', ');
      if (contributors[0] !== '') {
        str = str.concat(', ');
        str = str.concat(contributors.join(', '));
      }
      return str;
    },
    routeToVideoPage(videoLectureIRI) {
      const dashIndex = videoLectureIRI.search('#') + 1;
      const localIRI = videoLectureIRI.substring(
        dashIndex,
        videoLectureIRI.length
      );
      let routeData = this.$router.resolve({
        name: 'video',
        params: { id: localIRI }
      });
      window.open(routeData.href, '_blank');
    }
  },
  beforeMount() {
    this.getVideoLectureDetails();
  },
  beforeUpdate() {
    eventBus.$on('updateLocale', () => {
      this.updateData();
    });
  }
};
</script>

<style scoped>
.hyphens {
  hyphens: auto;
}
</style>
