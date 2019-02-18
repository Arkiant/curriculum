<template>
  <main id="app">
    <app-side-nav></app-side-nav>
    <content>
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
      color: white;
      height: 100%;
      display: flex;
      background-color: #100E17;

      content {
        position: fixed;
        top: 0;
        margin-left: 20%;
        width: 80%;
        overflow-y: scroll;
        scroll-behavior: smooth;
        max-height: 100%;
        height: 100%;
      }
      
    }
  }
}

</style>
