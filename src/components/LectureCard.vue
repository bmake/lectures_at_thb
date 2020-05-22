<template>
  <v-hover v-slot:default="{ hover }">
    <v-card class="text-xs-center ma-2">
      <v-fade-transition>
        <v-overlay v-if="hover" absolute color="grey" z-index="0" opacity="0">
          <v-btn
            color="red darken-4"
            :to="createLinToVideoLecture(videoLecture.videoLecture.value)"
          >
            <v-icon>ondemand_video</v-icon>
          </v-btn>
        </v-overlay>
      </v-fade-transition>
      <v-img
        :src="require(`@/assets/logos/${videoLecture.thumbnailName.value}`)"
        height="16vh"
        contain
      >
      </v-img>
      <v-card-title>
        <div class="heading">{{ videoLecture.label.value }}</div>
      </v-card-title>
      <v-card-text class="hyphens text-justify">
        <v-clamp autoresize :max-lines="4">
          {{ videoLecture.description.value }}
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
            :src="require(`@/assets/logos/${videoLecture.thumbnailName.value}`)"
            height="16vh"
            contain
          >
          </v-img>
          <v-card-title>
            <div class="black--text heading">
              {{ videoLecture.label.value }}
            </div>
          </v-card-title>
          <v-card-text class="hyphens text-justify black--text">
            <v-clamp autoresize>
              {{ videoLecture.description.value }}
            </v-clamp>
          </v-card-text>
          <v-card-actions z-index="1">
            <v-row align="center" justify="center">
              <v-btn icon="close" color="black" v-on:click="overlay = !overlay">
                <v-icon large dark>close</v-icon>
              </v-btn>
              <v-btn
                icon="close"
                color="black"
                :to="createLinToVideoLecture(videoLecture.videoLecture.value)"
              >
                <v-icon large dark>ondemand_video</v-icon>
              </v-btn>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-overlay>

      <v-card-actions z-index="1">
        <v-list-item class="grow">
          <v-row align="center" justify="space-around">
            <v-btn text color="red darken-4" v-on:click="overlay = !overlay">
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
      overlay: false
    };
  },
  components: {
    VClamp
  },
  methods: {
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
