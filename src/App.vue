<template>
  <div id="app">
    <InfoHeader/>
    <Navigation/>
    <div class="component_container">
      <vue-page-transition name="fade">
        <router-view/>
      </vue-page-transition>
    </div>
  </div>
</template>

<script>

import Navigation from './components/Navigation'
import InfoHeader from './components/InfoHeader'


export default {
  name: 'App',
  components: {
    Navigation,
    InfoHeader
  },
}
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

::-webkit-scrollbar {
  display: none;
}

.component_container {
  width: calc(100% - calc(3vw + 155px));
  height: calc(100% - 30px);
  float: left;
  position: absolute;
  left: calc(3vw + 125px);
  top: 50px;
  margin: 15px;
}

@media only screen and (max-width: 768px) {

  .component_container {
    overflow-y: scroll;
    position: fixed;
    left: 0;
    width: calc(100% - 30px);
    height: calc(100% - 88px) !important;
  }
}

</style>
