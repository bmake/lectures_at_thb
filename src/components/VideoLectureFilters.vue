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
            :list-items="modules"
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
import store from '../store/store';
import axios from 'axios';
import queries from '../../config';
import { mapGetters } from 'vuex';
export default {
  name: 'VideoLectureFilters',
  components: { SearchableList, VideoCarousel },
  data() {
    this.getStudyPrograms();
    this.getModules();
    return {
      departments: ['Wirtschaft', 'Informatik', 'Technik'],
      activeDepartment: 0,
      activeStudyProgram: 0,
      activeModule: 0
    };
  },
  methods: {
    clearSearch() {
      this.search = '';
    },
    getStudyPrograms() {
      store.dispatch('setLoading', true);
      axios
        .get('http://localhost:3030/lectures_at_thb/query', {
          params: {
            query: queries.studyPrograms
          }
        })
        .then(response => {
          let studyPrograms = this._.map(response.data.results.bindings, x => {
            return x.studyProgram.value;
          });
          store.dispatch('addStudyPrograms', studyPrograms);
          store.dispatch('setLoading', false);
        })
        .catch(function(error) {
          // eslint-disable-next-line no-console
          console.log(error);
          // TODO: implement catch functionality
        });
    },
    getModules() {
      store.dispatch('setLoading', true);
      axios
        .get('http://localhost:3030/lectures_at_thb/query', {
          params: {
            query: queries.modules
          }
        })
        .then(response => {
          let modules = this._.map(response.data.results.bindings, x => {
            return x.module.value;
          });
          store.dispatch('addModules', modules);
          store.dispatch('setLoading', false);
        })
        .catch(function(error) {
          // eslint-disable-next-line no-console
          console.log(error);
          // TODO: implement catch functionality
        });
    }
  },
  computed: {
    ...mapGetters({
      studyPrograms: 'getStudyPrograms',
      modules: 'getModules',
    })
  }
};
</script>

<style scoped></style>
