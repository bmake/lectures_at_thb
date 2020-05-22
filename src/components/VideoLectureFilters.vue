<template>
  <v-responsive>
    <v-system-bar height="50vh" color="#AE001C">
      <v-spacer></v-spacer>
      <v-radio-group
        prepend-icon="school"
        row
        mandatory
        v-model="activeDepartment"
      >
        <v-radio
          v-for="n in this.departments"
          :key="`radio_${n}`"
          :label="`${n}`"
          :value="n"
        ></v-radio>
      </v-radio-group>
    </v-system-bar>
    <v-container fluid grid-list-xl>
      <v-row class="mb-9" justify="center" align="start">
        <v-flex xs12 sm6 md4 lg3>
          <video-carousel></video-carousel>
        </v-flex>
        <v-flex xs12 sm6 md4 lg3>
          <searchable-list
            :list-items="studyPrograms"
            heading="Study Program"
          ></searchable-list>
        </v-flex>
        <v-flex xs12 sm6 md4 lg3>
          <searchable-list
            :list-items="studyPrograms"
            heading="Module"
          ></searchable-list>
        </v-flex>
      </v-row>
    </v-container>
  </v-responsive>
</template>

<script>
import VideoCarousel from './VideoCarousel';
import SearchableList from './SearchableList';
export default {
  name: 'VideoLectureFilters',
  components: { SearchableList, VideoCarousel },
  data() {
    return {
      departments: ['Wirtschaft', 'Informatik', 'Technik'],
      studyPrograms: [
        'Bachelor Business Administration',
        'Master Business Administration',
        'Bachelor Information Systems',
        'Master Information Systems'
      ],
      activeDepartment: 0
    };
  },
  methods: {
    clearSearch() {
      this.search = '';
    }
  }
};
</script>

<style scoped></style>
