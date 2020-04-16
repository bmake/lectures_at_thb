<template>
  <v-parallax
    src="https://www.stuermer-draenger.de/wp-content/uploads/2019/04/SuD_Case_FHB-Foto-02_LY01.jpg"
    height="900"
  >
    <v-row align="center" justify="center">
      <v-card color="rgb(255,255,255,0.6)">
        <v-col class="text-center" cols="12">
          <h1 class="display-3 font-weight-bold mb-4">Video lectures</h1>
          <h4 class="display-1">
            {{ $t('page.description')}}
          </h4>
        </v-col>
      </v-card>
    </v-row>
  </v-parallax>
</template>

<script>
export default {
  name: 'THBImage'
};
</script>

<style scoped>
.text-center {
  color: #be0024;
}
</style>
