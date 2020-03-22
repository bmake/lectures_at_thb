<template>
  <v-container fluid grid-list-xl>
    <v-layout wrap justify-space-around>
      <v-layout row wrap>
        <v-flex
          xs12
          sm6
          md4
          lg3
          v-for="videoLecture in getVideoLectures"
          :key="videoLecture.label.value"
        >
          <v-hover v-slot:default="{ hover }">
            <v-card
              class="text-xs-center ma-3"
              :elevation="hover ? 12 : 2"
              min-height="430"
            >
              <v-responsive class="pt-4">
                <v-img
                  :src="
                    require(`@/assets/logos/${videoLecture.thumbnailName.value}`)
                  "
                  min-height="150"
                  contain
                >
                </v-img>
              </v-responsive>
              <v-card-text>
                <div class="subheading">{{ videoLecture.label.value }}</div>
              </v-card-text>
              <v-card-text>
                <div class="text-justify">
                  {{
                    hover
                      ? videoLecture.description.value
                      : videoLecture.description.value.substring(
                          0,
                          videoLecture.description.value.indexOf('. ') + 1
                        )
                  }}
                </div>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Lectures',
  computed: {
    getVideoLectures() {
      return this.$store.getters.getVideoLectures;
    }
  }
};
</script>

<style scoped></style>
