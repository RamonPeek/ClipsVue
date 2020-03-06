<template>
  <div id="app">
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

export default {
  name: 'App',
  components: {
    Navigation
  },
}
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

#app {
  width: 100%;
  height: 100%;
}

.component_container {
  width: calc(100% - calc(3vw + 155px));
  height: calc(100% - 30px);
  float: left;
  position: absolute;
  left: calc(3vw + 125px);
  margin: 15px;
}

@media only screen and (max-width: 768px) {

  .component_container {
    left: 0;
    width: calc(100% - 40px);
  }

}
</style>
