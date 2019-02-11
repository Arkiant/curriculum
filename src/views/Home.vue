<template>
  <div class="home">
    <h2>Experiencia Laboral</h2>
    <app-work 
    v-for="(work ,key) in works" 
    :key="key" 
    :business="work.business"
    :initialDate="work.initial_date"
    :finalDate="work.final_date"
    :category="work.category"
    :functions="work.functions"></app-work>
  </div>
</template>

<script>
const axios = require('axios');
const moment = require('moment');
// @ is an alias to /src

function sortByDate(a, b) {
  let a_final_date = moment(a.final_date, ["DD-MM-YYY"]);
  let b_final_date = moment(b.final_date, ["DD-MM-YYY"]);

  if(a_final_date.isAfter(b_final_date)) {
    return -1;
  } 
  
  if ( a_final_date.isBefore(b_final_date)) {
    return 1;
  }

  return 0;
}

function convertObjectToArray(object) {
  return Object.entries(object).map(e => Object.assign(e[1], {key: e[0]}));
}

export default {
  data: function() {
    return {
      works: []
    }
  },
  mounted() {
    axios.get('https://curriculum-6563e.firebaseio.com/experience.json').then( response => {
      this.works = convertObjectToArray(response.data).sort(sortByDate);
    }).catch( error => {
      console.log(error);
    })
  },
  components: {
    appWork: () => import('@/components/Work.vue')
  }
}
</script>

<style lang="scss" scoped>
  h2 {
    color: #333;
    text-decoration: underline;
  }
</style>

