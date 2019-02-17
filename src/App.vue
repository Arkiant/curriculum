<template>
  <main id="app">
    <app-side-nav></app-side-nav>
    <content>
      <!--
      <div id="nav">
        <router-link to="/">Currículum</router-link> |
        <router-link to="/projects">Projects</router-link>
      </div>
      -->
      <router-view/>
    </content>
  </main>
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
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      height: 100%;
      display: flex;
      background-color: #1A1A21;

      content {
        position: fixed;
        top: 0;
        margin-left: 20%;
        width: 80%;
        overflow-y: scroll;
        max-height: 100%;
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
