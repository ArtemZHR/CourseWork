<template>
    <GmapMap
      :center="myCoordinates"
      :zoom="zoom"
      style="width:640px; height:360px; margin: 32px auto;"
    ></GmapMap>
</template>
<script>
export default {
  data () {
    return {
      map: null,
      myCoordinates: {
        lat: 50.429848,
        lng: 30.544403
      },
      zoom: 17
    }
  }
}
</script>
