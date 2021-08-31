<!--Work in progress-->
<template>
  <div class="about">
    <v-card
      class="mx-auto"
      style="padding: 1em"
    >
      <v-card-title>
        {{ $t('aboutus.title') }}
      </v-card-title>
    </v-card>
    <div style="padding: 2em; padding-left: 4em; padding-right: 4em">
      <v-row v-for="(t, i) in $t('aboutus.text')" v-bind:key="i" style="padding: 0.5em" no-gutters>
        {{ t }}
      </v-row>
      <v-row no-gutters style="padding: 2em; padding-left: 4em; padding-right: 4em">
        <v-img max-width="50%" src="../assets/NetzgraphHome.png">
        </v-img>
      </v-row>
    </div>
  </div>
</template>
