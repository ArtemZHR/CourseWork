<template>
  <v-row>
    <v-col
      v-for="image in newsList"
      :key="image.id"
      class="d-flex child-flex justify-center align-content-center"
      cols="xs12 md6 lg4"
    >
      <v-card
        class="ma-auto ma-xs-10"
        height="307"
        max-width="307"
      >
      <v-img
        :src="image.imageNews"
        aspect-ratio="1"
        class="grey lighten-2 ma-2"
        height="290"
        width="290"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>

      </v-card>
    </v-col>
  </v-row>
</template>

<script>

export default {
  name: 'Gallery',
  computed: {
    newsList () {
      return this.$store.getters.NEWS
    }
  },
  mounted () {
    this.$store.dispatch('GET_NEWS')
  }
}

</script>

<style scoped>

</style>
