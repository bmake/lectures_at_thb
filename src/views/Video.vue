<template>
  <div class="grey lighten-4">
    <v-card
      class="mx-auto white"
      elevation="3"
      max-width="80%"
      outlined
      v-if="videoLecture != null"
    >
      <v-system-bar color="#AE001C">
        <v-spacer></v-spacer>
      </v-system-bar>
      <v-card-title class="display-1 text--primary">
        {{ videoLecture.headline }}
      </v-card-title>
      <div v-if="playerConfiguration != ''">
        <video-player :configuration="playerConfiguration"></video-player>
        <!--<div>{{ this.$store.state.loading }}</div>
        <div>{{ this.activeVideoData.lecturerVideo }}</div>
        <div>{{ this.activeVideoData.screencastVideo }}</div>
        <div>{{ this.playerConfiguration }}</div>-->
      </div>
      <v-container>
        <v-row no-gutters>
          <v-col :key="1" cols="12" sm="2">
            <v-img
              :src="require(`@/assets/logos/${videoLecture.thumbnail}`)"
              class="white--text align-end"
            >
            </v-img>
          </v-col>
          <v-col :key="2" cols="12" sm="10">
            <v-card-text>
              {{ videoLecture.description }}
            </v-card-text>
          </v-col>
        </v-row>
        <v-row class="mb-4" no-gutters>
          <v-col v-for="(videoObject, index) in videoObjects" :key="index">
            <div class="text-center">
              <v-btn
                class="mx-4"
                fab
                dark
                medium
                color="#AE001C"
                @click="changeActiveVideo(index)"
              >
                {{ String(index + 1) }}
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import store from '../store/store';
import axios from 'axios';

export default {
  name: 'Video',
  data() {
    return {
      videoLectureIri: this.$route.params.id,
      videoLecture: null,
      videoObjects: null,
      activeVideoData: {},
      activeVideoObject: 0,
      playerConfiguration: ''
    };
  },
  created() {
    this.getVideoLectureDetails();
    this.getVideoObjects();
  },
  beforeMount() {
    const pluginVideoPlayer = document.createElement('script');
    pluginVideoPlayer.setAttribute('src', '../js/video-player.js');
    pluginVideoPlayer.async = true;
    document.head.appendChild(pluginVideoPlayer);

    const pluginVideoWebComponent = document.createElement('script');
    pluginVideoWebComponent.setAttribute(
      'src',
      '../js/webcomponents-bundle.js'
    );
    pluginVideoWebComponent.async = true;
    document.head.appendChild(pluginVideoWebComponent);
  },
  methods: {
    async getVideoLectureDetails() {
      await store.dispatch('incrementLoading');
      axios
        .get('http://localhost:3000/v1/videoLecture/' + this.videoLectureIri, {
          headers: {
            'Accept-Language': this.$i18n.locale,
            'Cache-Control': 'no-cache'
          }
        })
        .then(response => {
          this.videoLecture = response.data.result;
        })
        .catch(function(error) {
          // eslint-disable-next-line no-console
          console.log(error);
          // TODO: implement catch functionality
        })
        .finally(() => store.dispatch('decrementLoading'));
    },
    async getVideoObjects() {
      await store.dispatch('incrementLoading');
      axios
        .get(
          'http://localhost:3000/v1/videoLecture/' +
            this.videoLectureIri +
            '/videoObjects',
          {
            headers: {
              'Accept-Language': this.$i18n.locale,
              'Cache-Control': 'no-cache'
            }
          }
        )
        .then(response => {
          this.videoObjects = response.data.result;
          this.getActiveVideoConfig();
        })
        .catch(function(error) {
          // eslint-disable-next-line no-console
          console.log(error);
          // TODO: implement catch functionality
        })
        .finally(() => store.dispatch('decrementLoading'));
    },
    async getActiveVideoConfig() {
      await store.dispatch('incrementLoading');
      const lecturerQueryUrl =
        'http://localhost:3000/v1/vimeo/' +
        this.videoObjects[this.activeVideoObject].lecturerVideoID;
      const screencastQueryUrl =
        'http://localhost:3000/v1/vimeo/' +
        this.videoObjects[this.activeVideoObject].screencastVideoID;
      await axios
        .get(lecturerQueryUrl)
        .then(response => {
          let arr = response.data.result;
          this.activeVideoData['lecturerVideo'] = this.sortActiveVideoData(arr);
        })
        .catch(function(error) {
          // eslint-disable-next-line no-console
          console.log(error);
          // TODO: implement catch functionality
        })
        .finally(() => store.dispatch('decrementLoading'));
      await store.dispatch('incrementLoading');
      await axios
        .get(screencastQueryUrl)
        .then(response => {
          let arr = response.data.result;
          this.activeVideoData['screencastVideo'] = this.sortActiveVideoData(arr);
        })
        .catch(function(error) {
          // eslint-disable-next-line no-console
          console.log(error);
          // TODO: implement catch functionality
        })
        .finally(() => {
          store.dispatch('decrementLoading');
        });
      await this.createPlayerConfiguration();
    },
    sortActiveVideoData(arr) {
      arr.sort(function(a, b) {
        let m = parseInt(a['quality'].slice(0, -1));
        let n = parseInt(b['quality'].slice(0, -1));
        return (m - n);
      });
      return arr;
    },
    changeActiveVideo(index) {
      this.activeVideoObject = index;
    },
    createPlayerConfiguration() {
      let configuration = {};
      let lecturerStream = {};
      let screencastStream = {};

      if (this.activeVideoData['lecturerVideo'].length === 1) {
        lecturerStream['hd'] = this.activeVideoData['lecturerVideo'][0].url;
      } else if (this.activeVideoData['lecturerVideo'].length === 3) {
        lecturerStream['sd'] = this.activeVideoData['lecturerVideo'][0].url;
        lecturerStream['hd'] = this.activeVideoData['lecturerVideo'][2].url;
      } else if (this.activeVideoData['lecturerVideo'].length > 3) {
        lecturerStream['sd'] = this.activeVideoData['lecturerVideo'][0].url;
        lecturerStream['hd'] = this.activeVideoData['lecturerVideo'][this.activeVideoData['lecturerVideo'].length - 1].url;
      }
      lecturerStream['poster'] = this.activeVideoData['lecturerVideo'][0].thumbnail;

      if (this.activeVideoData['screencastVideo'].length === 1) {
        screencastStream['hd'] = this.activeVideoData['screencastVideo'][0].url;
      } else if (this.activeVideoData['screencastVideo'].length === 3) {
        screencastStream['sd'] = this.activeVideoData['screencastVideo'][0].url;
        screencastStream['hd'] = this.activeVideoData['screencastVideo'][2].url;
      } else if (this.activeVideoData['screencastVideo'].length > 3) {
        screencastStream['sd'] = this.activeVideoData['screencastVideo'][0].url;
        screencastStream['hd'] = this.activeVideoData['screencastVideo'][this.activeVideoData['screencastVideo'].length - 1].url;
      }
      screencastStream['poster'] = this.activeVideoData['screencastVideo'][0].thumbnail;

      configuration['streams'] = [lecturerStream, screencastStream];
      configuration['initialState'] = {
        playState: 'PAUSED',
        position: 0
      };
      this.playerConfiguration = JSON.stringify(configuration);
    }
  },
  watch: {
    activeVideoObject: function() {
      this.playerConfiguration = '';
      this.getActiveVideoConfig();
    }
  }
};
</script>

<style scoped></style>
