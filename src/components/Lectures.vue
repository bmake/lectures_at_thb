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
          <lecture-card :video-lecture="videoLecture">
          </lecture-card>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
import LectureCard from './LectureCard';

export default {
  name: 'Lectures',
  components: {
    LectureCard
  },
  computed: {
    getVideoLectures() {
      return this.$store.getters.getVideoLectures;
    }
  },
};
</script>

<style scoped></style>
