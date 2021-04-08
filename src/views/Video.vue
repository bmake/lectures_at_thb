<template>
  <div class="grey lighten-4">
    <v-card
      class="mx-auto white"
      elevation="3"
      max-width="90%"
      outlined
      v-if="videoLecture != null"
    >
      <v-system-bar color="#AE001C"> </v-system-bar>
      <v-card-title class="headline font-weight-medium">
        {{ videoLecture.headline }}
      </v-card-title>
      <v-card-subtitle class="subtitle-1 font-weight-medium">
        von
        {{
          formatContributors(videoLecture.creator, videoLecture.contributors)
        }}
      </v-card-subtitle>
      <div>
        <v-card v-if="playerConfiguration != ''" outlined class="grey" tile>
          <div class="d-block pa-2 grey darken-3 white--text"></div>
          <v-responsive>
            <v-row no-gutters>
              <v-col :key="1" cols="12" sm="9">
                <div ref="videoBox">
                  <video-player
                    :configuration="playerConfiguration"
                  ></video-player>
                </div>
              </v-col>
              <v-col :key="2" cols="12" sm="3">
                <v-divider color="#808080"></v-divider>
                <div v-if="videoObjects">
                  <v-card-text
                    class="text-md-body-1 font-weight-bold grey lighten-2"
                    style="padding-top: 0.5em;padding-bottom: 0.5em"
                    >Playlist</v-card-text
                  >
                  <div class="grey lighten-4" v-resize="onResize">
                    <v-virtual-scroll
                      :items="videoObjects"
                      v-bind:height="
                        videoBoxHeight == 0 ? 300 : videoBoxHeight - 83
                      "
                      item-height="85"
                      ><!--v-bind:height="videoBoxHeight == 0 ? 300 : videoBoxHeight - 83"-->
                      <template v-slot:default="{ videoObject, index }">
                        <v-divider></v-divider>
                        <v-list-item
                          :key="index"
                          @click="changeActiveVideo(index)"
                          v-bind:class="{
                            'grey darken-1': index == activeVideoObject
                          }"
                          style="height: 85px"
                        >
                          <v-btn
                            fab
                            dark
                            x-small
                            color="#AE001C"
                            class="text-sm-body-2 font-weight-bold"
                          >
                            {{ String(index + 1) }}
                          </v-btn>
                          <v-list-item-content style="margin-left: 0.8em">
                            <p
                              class="text-break subtitle-2"
                              v-bind:class="{
                                'white--text': index == activeVideoObject
                              }"
                            >
                              {{ videoObjects[index].headline }}
                            </p>
                            <p
                              v-text="getDuration(videoObjects[index].duration)"
                              class="caption"
                              style="margin-bottom: 5px"
                              v-bind:class="{
                                'white--text': index == activeVideoObject
                              }"
                            ></p>
                          </v-list-item-content>
                        </v-list-item>
                        <!--<v-divider></v-divider>-->
                      </template>
                    </v-virtual-scroll>
                    <div
                      class="d-block pa-5 grey darken-3 white--text"
                      style="height: 41px"
                    ></div>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-responsive>
        </v-card>
        <!--<div>videoObjects: {{videoObjects}}</div>
        <div>activeVideoData-lecturerVideo: {{activeVideoData['lecturerVideo']}}</div>
        <div>activeVideoData-screencastVideo: {{activeVideoData['screencastVideo']}}</div>-->
        <div>
          <v-row no-gutters style="padding: 1em">
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
        </div>
      </div>
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
      playerConfiguration: '',
      videoBoxHeight: 0
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
  mounted() {
    setTimeout(() => {
      this.videoBoxHeight = this.$refs.videoBox.clientHeight;
    }, 1000);
    setTimeout(() => {
      this.videoBoxHeight = this.$refs.videoBox.clientHeight;
    }, 2000);
    setTimeout(() => {
      this.videoBoxHeight = this.$refs.videoBox.clientHeight;
    }, 3000);
    setTimeout(() => {
      this.videoBoxHeight = this.$refs.videoBox.clientHeight;
    }, 4000);
    setTimeout(() => {
      this.videoBoxHeight = this.$refs.videoBox.clientHeight;
    }, 5000);
    setTimeout(() => {
      this.videoBoxHeight = this.$refs.videoBox.clientHeight;
    }, 6000);
    setTimeout(() => {
      this.videoBoxHeight = this.$refs.videoBox.clientHeight;
    }, 7000);
    setTimeout(() => {
      this.videoBoxHeight = this.$refs.videoBox.clientHeight;
    }, 8000);
    setTimeout(() => {
      this.videoBoxHeight = this.$refs.videoBox.clientHeight;
    }, 9000);
    setTimeout(() => {
      this.videoBoxHeight = this.$refs.videoBox.clientHeight;
    }, 10000);
    setTimeout(() => {
      this.videoBoxHeight = this.$refs.videoBox.clientHeight;
    }, 12000);
    setTimeout(() => {
      this.videoBoxHeight = this.$refs.videoBox.clientHeight;
    }, 13000);
    setTimeout(() => {
      this.videoBoxHeight = this.$refs.videoBox.clientHeight;
    }, 14000);
    setTimeout(() => {
      this.videoBoxHeight = this.$refs.videoBox.clientHeight;
    }, 15000);
    setTimeout(() => {
      this.videoBoxHeight = this.$refs.videoBox.clientHeight;
    }, 18000);
    setTimeout(() => {
      this.videoBoxHeight = this.$refs.videoBox.clientHeight;
    }, 20000);
    setTimeout(() => {
      this.videoBoxHeight = this.$refs.videoBox.clientHeight;
    }, 22000);
    setTimeout(() => {
      this.videoBoxHeight = this.$refs.videoBox.clientHeight;
    }, 25000);
  },
  methods: {
    onResize() {
      setTimeout(() => {
        this.videoBoxHeight = this.$refs.videoBox.clientHeight;
      }, 1000);
    },
    formatContributors(creators, contributors) {
      creators = this._.split(creators, ', ');
      contributors = this._.split(contributors, ', ');
      contributors = contributors.filter(c => creators.indexOf(c) === -1);
      let str = creators.join(', ');
      if (contributors[0] !== '') {
        str = str.concat(', ');
        str = str.concat(contributors.join(', '));
      }
      return str;
    },
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
          this.activeVideoData['screencastVideo'] = this.sortActiveVideoData(
            arr
          );
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
    getDuration(PTTime) {
      const formattedTime = PTTime.replace('PT', '')
        .replace('H', ':')
        .replace('M', ':')
        .replace('S', '');
      return formattedTime;
    },
    sortActiveVideoData(arr) {
      arr.sort(function(a, b) {
        let m = parseInt(a['quality'].slice(0, -1));
        let n = parseInt(b['quality'].slice(0, -1));
        return m - n;
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
      if (this.activeVideoData['lecturerVideo'].length === 3) {
        lecturerStream['sd'] = this.activeVideoData['lecturerVideo'][0].url;
        lecturerStream['hd'] = this.activeVideoData['lecturerVideo'][2].url;
      } else if (this.activeVideoData['lecturerVideo'].length > 3) {
        lecturerStream['sd'] = this.activeVideoData['lecturerVideo'][0].url;
        lecturerStream['hd'] = this.activeVideoData['lecturerVideo'][
          this.activeVideoData['lecturerVideo'].length - 1
        ].url;
      } else {
        lecturerStream['sd'] = this.activeVideoData['lecturerVideo'][0].url;
      }
      lecturerStream['poster'] = this.activeVideoData[
        'lecturerVideo'
      ][0].thumbnail;
      if (this.activeVideoData['screencastVideo'].length === 3) {
        screencastStream['sd'] = this.activeVideoData['screencastVideo'][0].url;
        screencastStream['hd'] = this.activeVideoData['screencastVideo'][2].url;
      } else if (this.activeVideoData['screencastVideo'].length > 3) {
        screencastStream['sd'] = this.activeVideoData['screencastVideo'][0].url;
        screencastStream['hd'] = this.activeVideoData['screencastVideo'][
          this.activeVideoData['screencastVideo'].length - 1
        ].url;
      } else {
        screencastStream['sd'] = this.activeVideoData['screencastVideo'][0].url;
      }
      screencastStream['poster'] = this.activeVideoData[
        'screencastVideo'
      ][0].thumbnail;
      configuration['streams'] = [lecturerStream, screencastStream];
      configuration['initialState'] = {
        playState: 'PAUSED',
        position: 0
      };
      this.playerConfiguration = JSON.stringify(configuration);
    }
    /*nextVideo(index) {
        if (index < this.videoObjects.length - 1) {
          this.activeVideoObject = index + 1
          return index + 1
        } else {
          return index
        }
      }*/
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
