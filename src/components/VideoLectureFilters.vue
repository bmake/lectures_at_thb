<template>
  <v-responsive>
    <v-system-bar height="50vh" color="#AE001C">
      <v-spacer></v-spacer>
    </v-system-bar>
    <v-container fluid grid-list-xl>
      <v-row class="mb-9" justify="center" align="start">
        <v-flex xs12 sm6 md4 lg3 v-on:click="this.getStudyPrograms">
          <searchable-list
            :list-items="departments"
            :heading="$t('filter.heading')[0]"
            @activeItem="activeDepartmentValue"
            :selected-item-text="activeDepartment"
          ></searchable-list>
        </v-flex>
        <v-flex xs12 sm6 md4 lg3 v-on:click="this.getModules">
          <searchable-list
            :list-items="studyPrograms"
            :heading="$t('filter.heading')[1]"
            @activeItem="activeStudyProgramValue"
            :selected-item-text="activeStudyProgram"
          ></searchable-list>
        </v-flex>
        <v-flex xs12 sm6 md4 lg3>
          <searchable-list
            :list-items="modules"
            :heading="$t('filter.heading')[2]"
            @activeItem="activeModuleValue"
            :selected-item-text="activeModule"
          ></searchable-list>
        </v-flex>
      </v-row>
    </v-container>
  </v-responsive>
</template>

<script>
import SearchableList from './SearchableList';
import store from '../store/store';
import axios from 'axios';
import { mapState, mapGetters } from 'vuex';
import { eventBus } from '../main';

export default {
  name: 'VideoLectureFilters',
  components: { SearchableList},
  beforeMount() {
    if(this.$i18n.locale != "de" && this.$i18n.locale != "en") {
      this.setLocale("en");
    };
    this.getDepartments();
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
        .get('api/v1/collegeOrUniversity', {
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
          'api/v1/studyProgram/collegeOrUniversity/' +
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
          'api/v1/module/studyProgram/' +
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
      store.dispatch('replaceActiveDepartment', params);
    },
    activeStudyProgramValue: function(params) {
      store.dispatch('replaceActiveStudyProgram', params);
    },
    activeModuleValue: function(params) {
      store.dispatch('replaceActiveModule', params);
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
    },
    setLocale(locale) {
      eventBus.$emit('updateLocale');
      this.$i18n.locale = locale;
    }
  },
  computed: {
    ...mapState({
      activeDepartment: 'activeDepartment',
      activeStudyProgram: 'activeStudyProgram',
      activeModule: 'activeModule'
    }),
    ...mapGetters({
      departments: 'getDepartments',
      studyPrograms: 'getStudyPrograms',
      modules: 'getModules'
    })
  }
};
</script>

<style scoped></style>
