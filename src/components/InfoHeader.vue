<template>
  <div id="infoheader">
      <div class="logo_placeholder">
          <p class="logo_text">Clips</p>
      </div>
      <div class="user_profile">
          <div class="user_profile_name">
              MockUser
          </div>
          <div class="user_profile_picture_container">
              <div class="user_profile_picture">
              </div>
          </div>
      </div>
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
  background-color: #06142d;
  color: #448AFF !important;
  border-bottom: 2px solid #448AFF;
  top: 0;
  left: 0;
  z-index: 9000;
}

.logo_placeholder {
    width: calc(3vw + 125px);
    height: 100%;
    text-align: center;
    float: left;
}

.logo_text {
    font-size: 20pt;
    padding-top: 10pt;
}

.user_profile {
    margin-left: calc(100% - calc(calc(3vw + 125px) + 200px));
    width: 195px;
    height: 100%;
    float: left;
}

.user_profile_name {
    width: calc(100% - 40px);
    height: 40px;
    margin-top: 4px;
    text-align: right;
    font-size: 13pt;
    padding-right: 10px;
    padding-top: 10px;
    float: left;
}

.user_profile_picture_container {
    width: 35px;
    height: 35px;
    margin-top: 6px;
    float: left;
    background-color: #448AFF;
    border-radius: 100%;
}

.user_profile_picture {
    width: 29px;
    height: 29px;
    border-radius: 100%;
    margin: 3px;
    -moz-box-shadow:    inset 0 0 5px #000000;
   -webkit-box-shadow: inset 0 0 5px #000000;
   box-shadow:         inset 0 0 5px #000000;
   background-image: url("https://i.imgur.com/qpRgNCK.png");
   background-size: contain;
}

@media only screen and (max-width: 768px) {
}
</style>
