<template>
  <div id="dashboard">
    <ClipSearch/>
    <div class="test">
    <ClipPlayer/>

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

.test {
  width: 3
  00px;
}

</style>
