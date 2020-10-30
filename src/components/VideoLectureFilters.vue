<template>
  <v-responsive>
    <v-system-bar height="50vh" color="#AE001C">
      <v-spacer></v-spacer>
      <!--<v-radio-group
        prepend-icon="school"
        row
        mandatory
        v-model="activeDepartment"
      >
        <v-radio
          v-for="n in departments"
          :key="`radio_${n['iri']}`"
          :label="`${n['name']}`"
          :value="n['iri']"
          v-on:click="getStudyPrograms"
        ></v-radio>
      </v-radio-group>-->
    </v-system-bar>
    <v-container fluid grid-list-xl>
      <v-row class="mb-9" justify="center" align="start">
        <!--<v-flex xs12 sm6 md4 lg3>
          <video-carousel></video-carousel>
        </v-flex>-->
        <v-flex xs12 sm6 md4 lg3 v-on:click="this.getStudyPrograms">
          <searchable-list
            :list-items="departments"
            heading="Departments"
            @activeItem="activeDepartmentValue"
          ></searchable-list>
        </v-flex>
        <v-flex xs12 sm6 md4 lg3 v-on:click="this.getModules">
          <searchable-list
            :list-items="studyPrograms"
            heading="Study Program"
            @activeItem="activeStudyProgramValue"
          ></searchable-list>
        </v-flex>
        <v-flex xs12 sm6 md4 lg3>
          <searchable-list
            :list-items="modules"
            heading="Module"
            @activeItem="activeModuleValue"
          ></searchable-list>
        </v-flex>
      </v-row>
    </v-container>
  </v-responsive>
</template>

<script>
//import VideoCarousel from './VideoCarousel';
import SearchableList from './SearchableList';
import store from '../store/store';
import axios from 'axios';
import { mapGetters } from 'vuex';
import { eventBus } from '../main';

export default {
  name: 'VideoLectureFilters',
  components: { SearchableList},
  data() {
    return {
      activeDepartment: null,
      activeStudyProgram: null,
      activeModule: null
    };
  },
  beforeMount() {
    this.getDepartments();
    this.getStudyPrograms();
  },
  beforeUpdate() {
    eventBus.$on('updateLocale', () => {
      this.updateData();
    });
  },
  methods: {
    clearSearch() {
      this.search = '';
    },
    async getDepartments() {
      await store.dispatch('incrementLoading');
      return axios
        .get('http://localhost:3000/v1/collegeOrUniversity', {
          headers: {
            'Accept-Language': this.$i18n.locale,
            'Cache-Control': 'no-cache'
          }
        })
        .then(response => {
          let departments = this._.map(response.data.result, department => {
            return {
              iri: department.iri,
              name: this.renameDepartment(department.name)
            };
          });
          store.dispatch('addDepartments', departments);
        })
        .catch(function(error) {
          // eslint-disable-next-line no-console
          console.log(error);
          // TODO: implement catch functionality
        })
        .finally(() => store.dispatch('decrementLoading'));
    },
    async getStudyPrograms() {
      await store.dispatch('incrementLoading');
      return axios
        .get(
          'http://localhost:3000/v1/studyProgram/collegeOrUniversity/' +
            this.activeDepartment,
          {
            headers: {
              'Accept-Language': this.$i18n.locale,
              'Cache-Control': 'no-cache'
            }
          }
        )
        .then(response => {
          const studyPrograms = this._.map(
            response.data.result,
            studyProgram => {
              return {
                iri: studyProgram.iri,
                name: studyProgram.name
              };
            }
          );
          store.dispatch('addStudyPrograms', studyPrograms);
        })
        .catch(function(error) {
          // eslint-disable-next-line no-console
          console.log(error);
          // TODO: implement catch functionality
        })
        .finally(() => store.dispatch('decrementLoading'));
    },
    async getModules() {
      await store.dispatch('incrementLoading');
      return axios
        .get(
          'http://localhost:3000/v1/module/studyProgram/' +
            this.activeStudyProgram,
          {
            headers: {
              'Accept-Language': this.$i18n.locale,
              'Cache-Control': 'no-cache'
            }
          }
        )
        .then(response => {
          const modules = this._.map(response.data.result, module => {
            return {
              iri: module.iri,
              name: module.name
            };
          });
          store.dispatch('addModules', modules);
        })
        .catch(function(error) {
          // eslint-disable-next-line no-console
          console.log(error);
          // TODO: implement catch functionality
        })
        .finally(() => store.dispatch('decrementLoading'));
    },
    activeDepartmentValue: function(params) {
      this.activeDepartment = params;
    },
    activeStudyProgramValue: function(params) {
      this.activeStudyProgram = params;
    },
    activeModuleValue: function(params) {
      this.activeModule = params;
      this.$emit('activeModule', this.activeModule);
    },
    updateData() {
      return Promise.all([
        this.getDepartments(),
        this.getStudyPrograms(),
        this.getModules()
      ]);
    },
    renameDepartment(department) {
      return this._.split(department, '-', 2)[1];
    }
  },
  computed: {
    ...mapGetters({
      departments: 'getDepartments',
      studyPrograms: 'getStudyPrograms',
      modules: 'getModules'
    })
  }
};
</script>

<style scoped></style>
