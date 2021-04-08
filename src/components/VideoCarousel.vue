<template>
  <v-carousel light hide-delimiters cycle show-arrows-on-hover>
    <v-carousel-item v-for="(videoLecture, i) in randomVideoLectures" :key="i">
      <lecture-card :video-lecture="videoLecture"> </lecture-card>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import LectureCard from './LectureCard';
export default {
  name: 'VideoCarousel',
  components: { LectureCard },
  computed: {
    randomVideoLectures() {
      let videoLectures = this._.shuffle(this.$store.getters.getVideoLectures);
      videoLectures = this._.slice(videoLectures, 0, 5);
      return videoLectures;
    }
  }
};
</script>

<style scoped></style>
