<template>
<div>   
  <div class="d-flex row w-100">
    <div class="col col-md-2">
      <sidebar/>
    </div>
    <div class="col col-md-7 ml-5">
      <card ></card>
    </div>
   </div>
  </div>
</template>

<script>

import sidebar from '../components/sidebar.vue'
import card from '../components/card.vue'
export default {

name:"dashboardPage",
 components:{
    sidebar,
    card,
   
 },
 data(){
  return{
    DataAnggota:[]
  }
 }
}
</script>

<style >
body{
  background-color: antiquewhite;
}
</style>