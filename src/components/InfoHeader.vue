<template>
  <div id="infoheader">

  </div>
</template>

<script>
    //import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    export default {
    name: 'Navigation',
    components: {
        //FontAwesomeIcon
    }
    }
</script>

<style scoped>
#infoheader {
  height: 50px;
  width: 100%;
  position: fixed;
  background-color: #111;
  color: #448AFF !important;
  border-bottom: 2px solid #448AFF;
  top: 0;
  left: 0;
  z-index: 9000;
}


@media only screen and (max-width: 768px) {
  #infoheader {
    height: 70px;
    width: 100%;
    bottom: 0;
    left: 0;
    font-size: 18pt;
  }
}
</style>
