<template>
  <div>
    <v-card
      class="mx-auto"
      style="padding: 1em"
    >
      <v-card-title>
        {{ $t('privacy.title') }}
      </v-card-title>
    </v-card>
    <div style="padding: 2em; padding-left: 4em; padding-right: 4em">
      <v-row class="font-weight-bold" style="padding: 1em">{{ $t('privacy.subtitle') }}</v-row>
      <v-row v-for="(t, i) in $t('address')" v-bind:key="i" style="padding: 0.2em; padding-left: 1em">{{ t }}</v-row>
      <v-row class="font-weight-bold" style="padding: 1em">{{ $t('privacy.dataprotection.title') }}</v-row>
      <v-row v-for="(t, i) in $t('privacy.dataprotection.text')" v-bind:key="i" style="padding: 0.2em; padding-left: 1em; padding-right: 1em">{{ t }}</v-row>
      <v-row class="font-weight-bold" style="padding: 1em">{{ $t('privacy.InfDelBlo.title') }}</v-row>
      <v-row style="padding-left: 1em; padding-right: 1em">{{ $t('privacy.InfDelBlo.text') }}</v-row>
      <v-row class="font-weight-bold" style="padding: 1em">{{ $t('privacy.log.title') }}</v-row>
      <v-row v-for="(t, i) in $t('privacy.log.text')" v-bind:key="i" style="padding: 0.2em; padding-left: 1em; padding-right: 1em">{{ t }}</v-row>
      <v-row class="font-weight-bold" style="padding: 1em">{{ $t('privacy.cookie.title') }}</v-row>
      <v-row style="padding-left: 1em; padding-right: 1em">{{ $t('privacy.cookie.text') }}</v-row>
      <v-row class="font-weight-bold" style="padding: 1em">{{ $t('privacy.changeData.title') }}</v-row>
      <v-row style="padding-left: 1em; padding-right: 1em">{{ $t('privacy.changeData.text') }}</v-row>
      <v-row class="font-weight-bold" style="padding: 1em">{{ $t('privacy.contactData.title') }}</v-row>
      <v-row style="padding-left: 1em; padding-right: 1em">{{ $t('privacy.contactData.text') }}</v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Privacy'
};
</script>
<style scoped></style>
