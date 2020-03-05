<template>
  <div id="navigation">
    <p class="navigation_title">Dev menu</p>
    <ul>
        <li class="navigation_item"><router-link to="/"><p class="navigation_item_icon"><font-awesome-icon icon="home" /></p>Dashboard</router-link></li>
        <li class="navigation_item"><router-link to="/clips"><p class="navigation_item_icon"><font-awesome-icon icon="film" /></p>Clips</router-link></li>
        <li class="navigation_item"><router-link to="/categories"><p class="navigation_item_icon"><font-awesome-icon icon="tags" /></p>Categories</router-link></li>
        <li class="navigation_item"><router-link to="/login"><p class="navigation_item_icon"><font-awesome-icon icon="sign-in-alt" /></p>Login</router-link></li>
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
    float: left;
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
</style>
