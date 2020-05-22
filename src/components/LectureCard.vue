<template>
  <v-hover v-slot:default="{ hover }">
    <v-card class="text-xs-center ma-2" @mouseleave="flipped = false">
      <v-fade-transition>
        <v-overlay v-if="hover" absolute color="grey" z-index="0" opacity="0">
          <v-btn
            x-large
            color="red darken-4"
            :to="createLinToVideoLecture(videoLecture.videoLecture.value)"
          >
            <v-icon>mdi-arrow-right</v-icon>
          </v-btn>
        </v-overlay>
      </v-fade-transition>
      <v-img
        :src="require(`@/assets/logos/${videoLecture.thumbnailName.value}`)"
        height="16vh"
        contain
        v-if="!flipped"
      >
      </v-img>
      <v-card-title>
        <div class="heading">{{ videoLecture.label.value }}</div>
      </v-card-title>
      <v-card-text class="hyphens text-justify">
        <v-clamp autoresize :max-lines="4" :expanded="flipped">
          {{ videoLecture.description.value }}
        </v-clamp>
      </v-card-text>
      <v-overlay :value="overlay" v-if="hover">
        <v-card
          v-on:click="overlay = !overlay"
          class="text-xs-center ma-2"
          max-width="400"
          color="white"
          elevation="24"
        >
          <v-img
            :src="require(`@/assets/logos/${videoLecture.thumbnailName.value}`)"
            height="16vh"
            contain
            v-if="!flipped"
          >
          </v-img>
          <v-card-title>
            <div class="black--text heading">
              {{ videoLecture.label.value }}
            </div>
          </v-card-title>
          <v-card-text class="hyphens text-justify black--text">
            <v-clamp autoresize :max-lines="4" :expanded="overlay">
              {{ videoLecture.description.value }}
            </v-clamp>
          </v-card-text>
        </v-card>
      </v-overlay>

      <v-card-actions z-index="1">
        <v-list-item class="grow">
          <v-row align="center" justify="space-around">
            <v-btn
              text
              color="deep-purple accent-4"
              v-on:click.prevent
              v-on:click="overlay = !overlay"
            >
              More
            </v-btn>

            <v-spacer></v-spacer>
            <v-card-subtitle></v-card-subtitle>
          </v-row>
        </v-list-item>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
import VClamp from 'vue-clamp';

export default {
  name: 'LectureCard',
  props: {
    videoLecture: Object
  },
  data() {
    return {
      overlay: false,
      flipped: false
    };
  },
  components: {
    VClamp
  },
  methods: {
    flip() {
      this.flipped = !this.flipped;
    },
    createLinToVideoLecture(videoLectureIRI) {
      const dashIndex = videoLectureIRI.search('#') + 1;
      return videoLectureIRI.substring(dashIndex, videoLectureIRI.length);
    }
  }
};
</script>

<style scoped>
.hyphens {
  hyphens: auto;
}
</style>
