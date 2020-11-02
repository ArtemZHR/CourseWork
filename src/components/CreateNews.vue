<template>
  <v-container>
    <v-layout row>
      <v-flex xs10 sm6 offset-sm3 offset-xs1>
        <h1 class="text--secondary mb-3">Create new news</h1>
        <v-form ref="form">
          <v-text-field
            name="title"
            label="News title"
            type="text"
            v-model="title"
            outlined
            :rules="[v => !!v || 'Title is required']"
          >

          </v-text-field> <v-text-field
            name="description"
            label="News description"
            type="text"
            v-model="description"
            outlined
            :rules="[v => !!v || 'Description is required']"
          >
          </v-text-field>
          <v-textarea
            name="text"
            type="text"
            v-model="textNews"
            outlined
            label="Text"
            :rules="[v => !!v || 'TextArea is required']"
          ></v-textarea>

          <div>
          <v-btn color="orange" dark @click="$refs.inputUpload.click()">Upload</v-btn>
          <input v-show="false" id="fileNews" ref="inputUpload" type="file" @change="sync">
            <v-spacer></v-spacer>
          <v-img height="30%" width="30%" :src="imageNews"></v-img>
          <v-spacer></v-spacer>
          <v-btn @click="uploadFiles" id="uploadForm"
          >Create news</v-btn>
          </div>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  name: 'CreateNews',
  data () {
    return {
      title: '',
      description: '',
      textNews: '',
      imageNews: ''
    }
  },
  methods: {
    sync (e) {
      const context = this
      e.preventDefault()
      const image = e.target.files[0]
      const reader = new FileReader()
      reader.onloadend = function () {
        context.imageNews = reader.result
      }

      reader.readAsDataURL(image)
    },

    uploadFiles () {
      const data = {
        title: this.title,
        description: this.description,
        textNews: this.textNews,
        imageNews: this.imageNews.toString()
      }
      this.$store.dispatch('SAVE_NEWS', data)
    }
  }
}
</script>

<style scoped>

</style>
