<template>
  <div id="app">
    <main>
      <app-side-nav></app-side-nav>
      <content>
        <div id="nav">
          <router-link to="/">Currículum</router-link> |
          <router-link to="/projects">Projects</router-link>
        </div>
        <router-view/>
      </content>
    </main>
  </div>
</template>

<script>
export default {
  components: {
    appSideNav: () => import('@/components/SideNav.vue')
  }
}
</script>


<style lang="scss">
html {
  body {
    padding: 0px;
    margin: 0px;
    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      main {
        display: flex;
        content {
          width: 80%;
          height: 100vh;          
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
  }
}

</style>
