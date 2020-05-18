<template>
  <v-hover v-slot:default="{ hover }">
    <v-card
      class="text-xs-center ma-2"
      @click="overlay = !overlay"
      @mouseleave="flipped = false"
    >
      <v-fade-transition>
        <v-overlay v-if="hover" absolute color="grey" z-index="0">
          <v-icon>mdi-magnify</v-icon>
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
      <v-overlay :value="overlay">
        <v-card class="text-xs-center ma-2" max-width="300" color="white">
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
      <v-card-actions>
        <v-list-item class="grow">
          <v-row align="center" justify="space-around">
            <v-btn
              text
              color="deep-purple accent-4"
              :to="createLinToVideoLecture(videoLecture.videoLecture.value)"
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
