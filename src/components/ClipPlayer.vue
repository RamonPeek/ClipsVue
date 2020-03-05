<template>
  <div id="clip_player">
    <md-card class="clip_player_container">
      <md-card-content>
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
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.clip_player_container {
  height: 95%;
}

</style>
