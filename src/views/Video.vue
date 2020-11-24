<template>
  <div class="grey lighten-4">
    <v-card class="mx-auto white" elevation="3" max-width="80%" outlined>
      <v-system-bar color="#AE001C">
        <v-spacer></v-spacer>
      </v-system-bar>
      <v-card-title class="display-1 text--primary">{{
        videoLecture.headline
      }}</v-card-title>
      <!--<v-img height="700" src="../assets/fbw_image.jpg"></v-img>-->
      <video-player configuration='{
      "streams": [{"hd": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"}]
    }'></video-player>

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
      </v-container>
      <!--<v-card-text class="text-md-body-1 font-weight-medium text&#45;&#45;primary">
      {{ videoLecture.description }}
    </v-card-text>-->
      <!--<div>
     <video-player configuration='{
      "streams": [{"hd": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"}]
    }'></video-player>
   </div>-->
    </v-card>

    <v-container width="80vh">
      <v-row no-gutters>
        <v-col v-for="(n, index) in lectures" :key="index" cols="12" sm="3">
          <v-card max-width="90%">
            <v-row align="center">
              <v-col cols="6" sm="2">
                <v-card-title class="display-1">
                  {{ index + 1 }}
                </v-card-title>
              </v-col>
              <v-col cols="6" sm="4">
                <v-card-text class="text--primary text-lg-body-1 font-weight-medium">
                  {{ n }}
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import store from '../store/store';
import axios from 'axios';

export default {
  name: 'Video',
  data() {
    return {
      videoLectureIri: null,
      videoLecture: null,
      lectures: ['lecture 01', 'lecture 02', 'lecture 03', 'lecture 04']
    };
  },
  created() {
    this.videoLectureIri = this.$route.params.id;
    this.getVideoLectureDetails();
  },
  mounted() {
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
    }
  }
};
</script>

<style scoped></style>
