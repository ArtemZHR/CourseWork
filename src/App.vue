<template>
  <v-app>
    <app-bar></app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <app-footer></app-footer>
  </v-app>
</template>

<script>
import AppFooter from './layout/appFooter'
import AppBar from './layout/appBar'

export default {
  name: 'App',

  components: { AppFooter, AppBar }
}
</script>

<style scoped>

</style>
