<template>
  <div>
    <ProgressBar :height="toolbarHeight"></ProgressBar>
    <v-toolbar dense dark>
      <v-app-bar-nav-icon @click="negateDrawer"></v-app-bar-nav-icon>
      <v-app-bar-nav-icon style="margin-right: 10px">
        <router-link to="/">
          <v-img
            src="../assets/fbwTube_white.png"
            height="32"
            width="32"
            style="border-radius: 50%; background-color: white;"
          ></v-img
          ><!--style="border-radius: 50%; background-color: white"-->
        </router-link>
      </v-app-bar-nav-icon>

      <router-link to="/" style="color: white; text-decoration: none">
        <v-toolbar-title>{{ appTitle }}</v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>

      <div class="text-center">
        <v-menu>
          <template v-slot:activator="{ on: menu }">
            <v-tooltip bottom>
              <template v-slot:activator="{ on: tooltip }">
                <v-btn icon dark v-on="{ ...tooltip, ...menu }">
                  <flag :iso="$t(flag)" />
                </v-btn>
              </template>
              <span>{{ $t(description) }}</span>
            </v-tooltip>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
              v-on:click="setLocale(item.locale)"
            >
              <v-list-item-title>
                <flag :iso="item.flag" />
                {{ item.title }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <div class="text-center fill-height">
        <template>
          <v-form class="fill-height" @submit.prevent="searchLectures">
            <v-row class="fill-height" style="margin: 0">
              <v-col class="fill-height" cols="12" sm="10" style="padding: 0">
                <v-text-field
                  style="margin-top: 0.25em"
                  v-model="searchStr"
                  label="Suchen..."
                  solo
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="2" style="padding: 0">
                <v-btn icon type="submit" style="">
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </template>
      </div>
    </v-toolbar>
  </div>
</template>

<script>
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import store from '../store/store';
import ProgressBar from './ProgressBar';
import { eventBus } from '../main';
import axios from 'axios';

export default {
  name: 'Toolbar',
  data() {
    return {
      appTitle: 'eLectures@THB',
      items: [
        { title: ' DE', locale: 'de', flag: 'de' },
        { title: ' EN', locale: 'en', flag: 'gb' }
      ],
      toolbarHeight: 5,
      langs: ['de', 'en'],
      description: 'toolbar.description',
      flag: 'fl.current_flag',
      searchStr: '',
      searchList: []
    };
  },
  methods: {
    negateDrawer() {
      store.dispatch('negateDrawer');
    },
    negateDropdown() {
      store.dispatch('negateDropdown');
    },
    setLocale(locale) {
      eventBus.$emit('updateLocale');
      this.$i18n.locale = locale;
    },
    async getVideoLectureAllRelatedInfo() {
      await store.dispatch('incrementLoading');
      return axios
        .get('http://localhost:3000/v1/videoLectureAllRelatedInfo', {
          headers: {
            'Accept-Language': this.$i18n.locale,
            'Cache-Control': 'no-cache'
          }
        })
        .then(response => {
          this.searchList = response.data.result;
        })
        .catch(function(error) {
          // eslint-disable-next-line no-console
          console.log(error);
          // TODO: implement catch functionality
        })
        .finally(() => store.dispatch('decrementLoading'));
    },
    async searchLectures() {
      await this.getVideoLectureAllRelatedInfo();
      await store.dispatch('replaceActiveSearch', 'search');
      const list = this.searchList;
      const options = {
        includeScore: true,
        keys: ['headline', 'keywords', 'description']
      };
      // eslint-disable-next-line no-undef
      const fuse = new Fuse(list, options);
      const result = fuse.search(this.searchStr);
      const videoLectureIris = this._.map(result, videoLecture => {
        return videoLecture.item.iri;
      });
      await store.dispatch('addVideoLectureIris', videoLectureIris);
      //console.log(videoLectureIris);
    }
  },
  components: {
    ProgressBar
  }
};
</script>

<style scoped></style>
