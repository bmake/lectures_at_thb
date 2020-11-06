<template>
  <v-container fluid grid-list-xl>
    <v-layout wrap justify-space-around>
      <v-layout row wrap>
        <v-flex
          xs12
          sm6
          md4
          lg3
          v-for="videoLectureIri in videoLectureIris"
          :key="videoLectureIri"
        >
          <lecture-card :video-lecture-iri="videoLectureIri"> </lecture-card>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
import LectureCard from './LectureCard';

export default {
  name: 'Lectures',
  props: {
    videoLectureIris: Array
  },
  components: {
    LectureCard
  }
};
</script>

<style scoped></style>
