<template>
  <div class="home">
    <h2 id="experience">Experiencia</h2>
    <div class="work-content">
      <app-work 
      v-for="(work, key) in works" 
      :key="key + '-work'" 
      :work="work"></app-work>
    </div>

    <h2 id="skills">Conocimientos técnicos</h2>

    <div class="work-content">
      <app-skill 
      v-for="(skill, key) in skills"
      :key="key+ '-skill'"
      :skill="skill"></app-skill>
     </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      skills: [
        { 
          category: "Lenguajes de programación", data: [
            { name: 'Php', score: 7 },
            { name: 'Symfony 2', score: 7 },
            { name: 'Golang', score: 8 },
            { name: 'Python', score: 2 },
            { name: 'Django', score: 4 },
          ]
        },
        { 
          category: "Frontend", data: [
            { name: 'Vuejs', score: 6 },
            { name: 'Javascript', score: 8 },
            { name: 'Html5', score: 5 },
            { name: 'Css3', score: 4 },
            { name: 'Scss', score: 4 },
            { name: 'Webpack', score: 3 },
          ]
        },
        { 
          category: "Sistemas", data: [
            { name: 'Docker', score: 8 },
            { name: 'Apache', score: 6 },
            { name: 'Vagrant', score: 7 },
            { name: 'Linux', score: 6 },
          ]
        }
      ]
    }
  },
  computed: {
    works: function() {
      return this.getWorks();
    }
  },
  created() {
    this.initWorks();
  },
  components: {
    appWork: () => import('@/components/Work.vue'),
    appSkill: () => import('@/components/Skill.vue')
  },
  mounted() {
    /* Fix scroll functionality */
    setTimeout(() => this.scrollFix(this.$route.hash), 1000);
  },
  methods: {
    ...mapActions([
      'initWorks'
    ]),
    ...mapGetters([
      'getWorks'
    ]),
    scrollFix: function(hashbang) { /* Fix scroll functionality */
        if( hashbang == "") {
            hashbang = "#experience";
        }
        
        location.href = hashbang;
    }
  }
}
</script>

<style lang="scss">

  @import '../scss/mixins';
  
  h2 {
    @include title-format();
  }

  div.work-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    
  }
</style>

