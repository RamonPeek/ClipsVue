<template>
  <div id="login">
    <h1>Login</h1>
    <button v-on:click="message += 1">Add 1</button>
    <button v-on:click="message += 2">Add 2</button>
    <p>{{message}}</p>
  </div>
</template>

<script>
    export default {
    name: 'Login',
    components: {
    },
    data() {
        return {
            message: "test"
        }
    }
    }
</script>

<style scoped>
#login {

}
</style>
