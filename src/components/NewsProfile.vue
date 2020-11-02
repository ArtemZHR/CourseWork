<template>
  <v-row>
    <v-col
      v-for="item in newsList"
      :key="item._id"
      class="d-flex child-flex justify-space-around pa-0"
      cols="xs12 md6 lg4"
    >
      <v-card
        class="px-3"
        max-width="100%"
        width="400"
      >
        <v-img
          class="white--text align-end"
          height="200px"
          :src="item.imageNews"
        >
          <v-card-title >{{ item.title }}</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0">
          {{ item.description }}
        </v-card-subtitle>

        <v-card-text class="text--primary">
          <div>{{ item.textNews }}</div>
        </v-card-text>

      </v-card>
    </v-col>
  </v-row>

</template>

<script>
export default {
  name: 'NewsProfile',
  computed: {
    newsList () {
      return this.$store.getters.NEWS.filter(news => news._id === this.$route.params.id)
    }
  },
  mounted () {
    this.$store.dispatch('GET_NEWS')
  }
}
</script>

<style scoped>

</style>
