<template>
  <div>
    <v-navigation-drawer app temporary right v-model="drawer">
      <v-list>
        <v-list-item :key="item.title" :to="item.url" v-for="item in items">
          <v-list-item-icon>
            <v-icon v-if="item.icon">
              {{ item.icon }}
            </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

      <v-app-bar app color="grey darken-2" dark dense>
        <v-toolbar-title>
          <router-link class="pointer" tag="span" to="/"
          >
            <v-img height="40px" src='@/assets/books.png' width="50"></v-img>
          </router-link>
        </v-toolbar-title>
        <v-spacer v-model="drawer"
        ></v-spacer>
        <v-app-bar-nav-icon
          @click.stop="drawer = !drawer"
          class="hidden-md-and-up"
        >
        </v-app-bar-nav-icon>
        <v-toolbar-items class="hidden-sm-and-down">
          <div>
            <v-btn
              :key="item.title"
              :to="item.url"
              class="ma-1"
              color="grey darken-1"
              v-for="item in items"
            >
              <v-icon left>
                {{ item.icon }}
              </v-icon>
              {{ item.title }}
            </v-btn>
          </div>
        </v-toolbar-items>

        <v-menu bottom></v-menu>
      </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'appBar',

  data () {
    return {
      drawer: false,
      items: [
        { title: 'Новини', icon: 'mdi-newspaper-variant-outline', url: '/news' },
        { title: 'Додати', icon: 'mdi-newspaper-variant-outline', url: '/create' },
        { title: 'Галерея', icon: 'mdi-table-large', url: '/gallery' },
        { title: 'Контакти', icon: 'mdi-account-box-outline', url: '/contacts' },
        {
          title: 'Про нас',
          icon: ' mdi-information-outline ',
          url: '/about'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .pointer{
    cursor: pointer;
  }
</style>
