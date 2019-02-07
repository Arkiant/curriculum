<template>
  <div class="home">
    <h2>Experiencia Laboral</h2>
    <Work 
    v-for="(work ,key) in works" 
    :key="key" 
    :business="work.business"
    :initialDate="work.initial_date"
    :finalDate="work.final_date"
    :category="work.category"
    :functions="work.functions"></Work>
  </div>
</template>

<script>
const axios = require('axios');
import Work from '@/components/Work.vue';
// @ is an alias to /src

export default {
  data: function() {
    return {
      works: []
    }
  },
  mounted() {
    axios.get('https://curriculum-6563e.firebaseio.com/experience.json').then( response => {
      this.works = response.data;
    }).catch( error => {
      console.log(error);
    })
  },
  components: {
    Work
  }
}
</script>
