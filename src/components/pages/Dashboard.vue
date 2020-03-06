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
      <div class="clip_items_container">
        <ClipItem/>
        <ClipItem/>
        <ClipItem/>
        <ClipItem/>
                <ClipItem/>
        <ClipItem/>

      </div>
    </div>
  </div>
</template>

<script>
    import ClipSearch from '../ClipSearch'
    import ClipPlayer from '../ClipPlayer'
    import ClipList from '../ClipList'
    import ClipItem from '../ClipItem'

    export default {
    name: 'Dashboard',
    components: {
      ClipSearch,
      ClipPlayer,
      ClipList,
      ClipItem
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
  padding-top: calc(10px + 27%);
  width: calc(50% - 10px);
  margin-right: 10px;
  margin-bottom: 7px;
}

.clip_list_container {
  position: relative;
  padding-top: 28%;
  width: calc(50% - 10px);
  margin-left: 10px;
  margin-bottom: 7px;
}

.clip_items_container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
  width: calc(100% + 20px);
  margin-left: -19px;
}

.clip_items_container * {
  margin-left: 20px;
  min-width: calc(calc(100% / 5) - 20px);
  margin-bottom: 20px;
}

@media only screen and (max-width: 426px) {
  .clip_items_container * {
    min-width: calc(calc(100% / 1) - 20px);
  }
}

@media only screen and (min-width: 427px) and (max-width: 700px) {
  .clip_items_container * {
    min-width: calc(calc(100% / 2) - 20px);
  }
}

@media only screen and (min-width: 701px) and (max-width: 1000px) {
  .clip_items_container * {
    min-width: calc(calc(100% / 3) - 20px);
  }
}

@media only screen and (min-width: 1001px) and (max-width: 1300px) {
  .clip_items_container * {
    min-width: calc(calc(100% / 4) - 20px);
  }
}


@media only screen and (max-width: 900px) {

  .random_clip_container {
    position: relative;
    padding-top: 56.12%;
    width: 100%;
    margin-right: 0px;
  }

  .clip_list_container {
    position: relative;
    padding-top: 56.12%;
    width: 100%;
    margin-left: 0px;
  }

}

</style>
