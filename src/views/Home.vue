<template>
  <div>
    <v-carousel height="400" cycle>
      <v-carousel-item
        v-for="item in newsList"
        :key="item._id"
      >
        <v-img :src="item.imageNews" ></v-img>
      </v-carousel-item>
    </v-carousel>

    <app-news></app-news>
  </div>
</template>

<script>
import AppNews from '../components/News'

export default {
  name: 'Home',
  computed: {
    newsList () {
      return this.$store.getters.NEWS
    }
  },
  mounted () {
    this.$store.dispatch('GET_NEWS')
  },
  components: { AppNews }
}
</script>
