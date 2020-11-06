<template>
  <v-hover v-slot:default="{ hover }" v-if="this.videoLecture != null">
    <v-card class="text-xs-center ma-2">
      <v-fade-transition>
        <v-overlay v-if="hover" absolute color="grey" z-index="0" opacity="0">
          <v-btn
            color="red darken-4"
            :to="createLinToVideoLecture(videoLecture.iri)"
          >
            <v-icon>description</v-icon>
          </v-btn>
        </v-overlay>
      </v-fade-transition>
      <v-img
        :src="require(`@/assets/logos/${videoLecture.thumbnail}`)"
        height="16vh"
        contain
      >
      </v-img>
      <v-card-title>
        <div class="heading">{{ videoLecture.name }}</div>
      </v-card-title>
      <v-card-text class="hyphens text-justify">
        <v-clamp autoresize :max-lines="4">
          {{ videoLecture.description }}
        </v-clamp>
      </v-card-text>
      <v-overlay :value="overlay" z-index="1" opacity="0.75">
        <v-card
          class="text-xs-center ma-2"
          max-width="400"
          color="white"
          elevation="24"
        >
          <v-img
            :src="require(`@/assets/logos/${videoLecture.thumbnail}`)"
            height="16vh"
            contain
          >
          </v-img>
          <v-card-title>
            <div class="black--text heading">
              {{ videoLecture.name }}
            </div>
          </v-card-title>
          <v-card-text class="hyphens text-justify black--text">
            <v-clamp autoresize>
              {{ videoLecture.description }}
            </v-clamp>
          </v-card-text>
          <v-card-actions z-index="1">
            <v-list-item class="grow">
              <v-row align="center" justify="space-around">
                <v-btn color="red darken-4" v-on:click="overlay = !overlay">
                  <v-icon large dark>close</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                  color="red darken-4"
                  :to="createLinToVideoLecture(videoLecture.iri)"
                >
                  <v-icon large dark>description</v-icon>
                </v-btn>
              </v-row>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </v-overlay>

      <v-card-actions z-index="1">
        <v-list-item class="grow">
          <v-row align="center" justify="space-around">
            <v-btn
              x-small
              text
              color="red darken-4"
              v-on:click="overlay = !overlay"
            >
              More
            </v-btn>
            <v-spacer></v-spacer>
            <v-chip>Duration: {{ formatDuration(videoLecture.duration) }} </v-chip>
            <v-card-subtitle></v-card-subtitle>
          </v-row>
        </v-list-item>
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
    videoLectureIri: String
  },
  data() {
    return {
      overlay: false,
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
    formatDuration(seconds) {
      const hours = Math.floor(seconds / 3600);
      const minutes = (seconds % 3600) / 60;
      if (hours < 1) {
        return Number(minutes / 60).toFixed(1) + 'h';
      } else {
        return Number(hours + (minutes / 60)).toFixed(1) + 'h';
      }
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
