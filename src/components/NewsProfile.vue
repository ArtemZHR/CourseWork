<template>
  <v-row>
    <v-col
      :key="item._id"
      cols="xs12 md6 lg4"
      v-for="item in newsList"
    >
      <v-card
        class="px-3 d-flex child-flex"
        max-width="100%"
      >
        <v-img
          :src="item.imageNews"
          class="white--text align-end ma-2"
          max-width="35%"
          min-width="35%"
          contain
        >
        </v-img>

        <div>
          <v-card-title>{{ item.title }}</v-card-title>
          <v-card-subtitle class="pb-0">
            {{ item.description }}
          </v-card-subtitle>

          <v-card-text class="text--primary">
            <div>{{ item.textNews }}</div>
          </v-card-text>
        </div>
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
