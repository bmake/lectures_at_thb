<template>
  <v-footer>
    <v-col class="text-center" cols="12">
      <strong>&copy; {{ $t('page.description') }}</strong> -
      {{ new Date().getFullYear() }} &bull; <router-link :to="{ name: 'impressum' }">{{ $t('impressum.title') }}</router-link> &bull; <router-link :to="{ name: 'privacy' }">{{ $t('privacy.title') }}</router-link>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer'
};
</script>
<style scoped></style>
