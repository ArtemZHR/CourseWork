<template>
  <v-row>
    <v-col
      v-for="item in newsList"
      :key="item._id"
      class="d-flex child-flex justify-space-around"
      cols="xs12 md6 lg4"
    >
      <v-card
        class="ma-auto ma-xs-10"
        max-width="80%"
        width="400"
      >
        <v-img
          class="white--text align-end"
          height="200px"
          :src="item.imageNews"
        >
          <v-card-title >{{item.title}}</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0">
          {{ item.description }}
        </v-card-subtitle>

        <v-card-text class="text--primary">
          <div>{{ item.textNews | spliceText }}</div>
        </v-card-text>

        <v-card-actions>
          <v-btn
            color="orange"
            text
            :to="'news/' + item._id"
          >
            Read
          </v-btn>

          </v-card-actions>
      </v-card>
    </v-col>
  </v-row>

</template>

<script>

export default {
  name: 'News',
  filters: {
    spliceText (value) {
      return value.split('').splice(0, 250).join('') + '...'
    }
  },
  computed: {
    newsList () {
      const a = this.$store.getters.NEWS
      if (this.$route.path !== '/news') {
        a.splice(-1, 10)
        console.log(a)
        return a
      } else {
        return this.$store.getters.NEWS
      }
    }
  },
  mounted () {
    // axios
    //   .get('http://localhost:3000/api/News')
    //   .then(response => (this.items = response.data))
    this.$store.dispatch('GET_NEWS')
  }
}

</script>

<style scoped>
</style>
