<template>
  <div class="home">
    <h2>Experiencia Laboral</h2>
    <app-work 
    v-for="(work ,key) in works" 
    :key="key" 
    :work="work"></app-work>

    <h2>Conocimientos técnicos</h2>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    works: function() {
      return this.getWorks();
    }
  },
  created() {
    this.initWorks();
  },
  components: {
    appWork: () => import('@/components/Work.vue')
  },
  methods: {
    ...mapActions([
      'initWorks'
    ]),
    ...mapGetters([
      'getWorks'
    ])
  }
}
</script>

<style lang="scss">

  @import '../scss/mixins';

  div.home {
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      color: white;
      @include title-format()
    }
  }
</style>

