<template>
  <div id="clip_search">
    <md-card>
      <md-card-content class="search_bar_parent">
            <div class="search_bar_container">
                <md-field class="search_bar">
                    <label>Clip title</label>
                    <md-input v-model="searchTag"></md-input>
                </md-field>
            </div>
            <div class="search_button_container">
                <md-button class="md-raised md-primary search_button">Search</md-button>
            </div>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
    export default {
    name: 'ClipSearch',
    components: {
    },
    }
</script>

<style scoped>
#clip_search {

}

.search_bar_parent {
  height: 80px !important;
}

.search_bar_content_container {
    width: 100%;
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
}

.search_bar_container {
    float: left;
    width: calc(100% - 100px);
    margin: 0px !important;
    padding-top: 0px !important;
    padding-left: 10px !important;
    padding-right: 10px !important;
    padding-bottom: 10px !important;
}

.search_bar {
    margin: 0px !important;
}

.search_button_container {
    width: 100px;
    float: left;
}
</style>
