<template>
  <div id="dashboard">
    <ClipSearch/>
    <div class="random_clip_and_trending_container">
      <div class="random_clip_container">
        <ClipPlayer/>
      </div>
      <div class="clip_list_container">
        <ClipList/>
      </div>
    </div>
  </div>
</template>

<script>
    import ClipSearch from '../ClipSearch'
    import ClipPlayer from '../ClipPlayer'
    import ClipList from '../ClipList'

    export default {
    name: 'Dashboard',
    components: {
      ClipSearch,
      ClipPlayer,
      ClipList
    },
    }
</script>

<style scoped>
#dashboard {

}

.random_clip_and_trending_container {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 16px;
}

.random_clip_container {
  position: relative;
  padding-top: 28%;
  width: calc(50% - 8px);
  margin-right: 8px;
}

.clip_list_container {
  position: relative;
  padding-top: 28%;
  width: calc(50% - 8px);
  margin-left: 8px;
}

</style>
