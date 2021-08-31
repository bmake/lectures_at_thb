<!--Work in progress-->
<template>
  <div>
    <v-card
      class="mx-auto"
      style="padding: 1em"
    >
      <v-card-title>
        {{ $t('impressum.title') }}
      </v-card-title>
    </v-card>
    <div style="padding: 2em; padding-left: 4em; padding-right: 4em">
      <v-row class="font-weight-bold" style="padding: 1em">{{ $t('impressum.subtitle') }}</v-row>
      <v-row v-for="(t, i) in $t('address')" v-bind:key="i" style="padding: 0.2em; padding-left: 1em">{{ t }}</v-row>
      <v-row class="font-weight-bold" style="padding: 1em">{{ $t('impressum.content.title') }}</v-row>
      <v-row style="padding-left: 1em; padding-right: 1em">{{ $t('impressum.content.text') }}</v-row>
      <v-row class="font-weight-bold" style="padding: 1em">{{ $t('impressum.link.title') }}</v-row>
      <v-row style="padding-left: 1em; padding-right: 1em">{{ $t('impressum.link.text') }}</v-row>
      <v-row class="font-weight-bold" style="padding: 1em">{{ $t('impressum.copyright.title') }}</v-row>
      <v-row style="padding-left: 1em; padding-right: 1em">{{ $t('impressum.copyright.text') }}</v-row>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Impressum'
};
</script>
<style scoped></style>
