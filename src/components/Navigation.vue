<template>
  <div id="navigation">
    <p class="navigation_title">Dev menu</p>
    <ul class="navigation_items">
        <li class="navigation_item"><router-link to="/"><p class="navigation_item_icon"><font-awesome-icon icon="home" /></p><p class="navigation_item_text">Dashboard</p></router-link></li>
        <li class="navigation_item"><router-link to="/clips"><p class="navigation_item_icon"><font-awesome-icon icon="film" /></p><p class="navigation_item_text">Clips</p></router-link></li>
        <li class="navigation_item"><router-link to="/categories"><p class="navigation_item_icon"><font-awesome-icon icon="tags" /><p class="navigation_item_text">Categories</p></router-link></li>
        <li class="navigation_item"><router-link to="/login"><p class="navigation_item_icon"><font-awesome-icon icon="sign-in-alt" /></p><p class="navigation_item_text">Login</p></router-link></li>
    </ul>
  </div>
</template>

<script>
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    export default {
    name: 'Navigation',
    components: {
        FontAwesomeIcon
    }
    }
</script>

<style scoped>
#navigation {
  height: 100%;
  width: calc(3vw + 125px);
  position: fixed;
  float: left;
  background-color: #ddd;
}

.navigation_item {
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: 25px;
}

.navigation_item_icon {
    padding-right: 10px;
    float: left;
}

.navigation_title {
  font-size: 16pt;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
}


@media only screen and (max-width: 768px) {
  #navigation {
    height: 80px;
    width: 100%;
    bottom: 0;
    left: 0;
    font-size: 18pt;
    background-color: white;
    border-top: 3px solid #448AFF;
  }

  .navigation_items {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  .navigation_title {
    display: none;
  }

  .navigation_item {
    margin: unset !important;
    padding-top: 10px;
  }

  .navigation_item_text {
    display: none;
  }

  .navigation_item_icon {
    color: #448AFF !important;
}
}
</style>
