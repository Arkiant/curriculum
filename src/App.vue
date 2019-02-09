<template>
  <div id="app">
    <div class="container">
      <app-side-nav></app-side-nav>
      <content>
        <div id="nav">
          <router-link to="/">Currículum</router-link> |
          <router-link to="/projects">Projects</router-link>
        </div>
        <router-view/>
      </content>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    appSideNav: () => import('@/views/SideNav.vue')
  }
}
</script>


<style lang="scss">
html {
  body {
    padding: 0px;
    margin: 0px;
  }
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .container {
    display: flex;
    content {
      width: 80%;
    }
  }
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
