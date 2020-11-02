<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="grey darken-2 white--text text-center"
      width="100%"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon.title"
          class="mx-4 white--text"
          icon
          :href="icon.url"
        >
          <v-icon size="24px">
            {{ icon.title }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        <strong>Artem Zhiruk</strong> — {{ new Date().getFullYear() }}
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'appFooter',
  data () {
    return {
      icons: [
        { title: 'mdi-facebook', url: 'https://www.facebook.com/libraryofcongress/' },
        { title: 'mdi-twitter', url: 'https://twitter.com/librarycongress' },
        { title: 'mdi-youtube', url: 'https://www.youtube.com/c/loc' },
        { title: 'mdi-instagram', url: 'https://www.instagram.com/librarycongress/' }
      ]
    }
  }
}
</script>

<style scoped>
</style>
