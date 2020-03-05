<template>
  <div id="clip_player">
    <md-card>
      <md-card-content class="clip_container">
        <video width="100%" height="100%" controls>
          <source src="test.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
    export default {
    name: 'ClipPlayer',
    components: {
    },
    }
</script>

<style scoped>
#clip_player {
    position: relative;
    width: 100%;
    padding-bottom: 56%;
    height: 100%;
}

.clip_container {
  padding-bottom: 16px !important;
}
</style>
