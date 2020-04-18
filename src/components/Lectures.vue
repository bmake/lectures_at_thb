<template>
  <v-container fluid grid-list-xl>
    <v-layout wrap justify-space-around>
      <v-layout row wrap>
        <v-flex
          xs12
          sm6
          md4
          lg3
          v-for="videoLecture in getVideoLectures"
          :key="videoLecture.label.value"
        >
          <v-hover v-slot:default="{ hover }">
            <v-card class="text-xs-center ma-2" :elevation="hover ? 16 : 2">
              <v-img
                :src="
                  require(`@/assets/logos/${videoLecture.thumbnailName.value}`)
                "
                height="16vh"
                contain
              >
              </v-img>
              <v-card-title>
                <div class="heading">{{ videoLecture.label.value }}</div>
              </v-card-title>
              <v-card-text height="15vh" class="hyphens text-justify">
                <v-clamp autoresize :max-lines="4">
                  {{ videoLecture.description.value }}
                </v-clamp>
              </v-card-text>
              <v-card-actions>
                <v-list-item class="grow">
                  <v-row align="center" justify="space-around">
                    <v-btn
                      text
                      color="deep-purple accent-4"
                      :to="
                        createLinToVideoLecture(videoLecture.videoLecture.value)
                      "
                    >
                      More
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-card-subtitle> </v-card-subtitle>
                  </v-row>
                </v-list-item>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
import VClamp from 'vue-clamp';

export default {
  name: 'Lectures',
  components: {
    VClamp
  },
  computed: {
    getVideoLectures() {
      return this.$store.getters.getVideoLectures;
    }
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
