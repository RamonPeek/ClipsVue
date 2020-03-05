<template>
  <div id="dashboard">
    <ClipSearch/>
    <div class="random_clip_and_trending_container">
      <div class="random_clip_container">
        <ClipPlayer/>
      </div>
      <div class="random_clip_container">
        <ClipPlayer/>
      </div>
    </div>
  </div>
</template>

<script>
    import ClipSearch from '../ClipSearch'
    import ClipPlayer from '../ClipPlayer'

    export default {
    name: 'Dashboard',
    components: {
      ClipSearch,
      ClipPlayer
    },
    }
</script>

<style scoped>
#dashboard {

}

.random_clip_and_trending_container {
  width: 100%;
  height: 0;
  padding-bottom: 28%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 16px;
}

.random_clip_container {
  width: calc(50% - 8px);
}

.random_clip_container:nth-child(odd) {
  margin-right: 8px;
}

.random_clip_container:nth-child(even) {
  margin-left: 8px;
}

</style>
