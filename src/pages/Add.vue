<template>
  <div>   
  <div class="d-flex row w-100">
    <div class="col col-md-2">
      <sidebar/>
    </div>
    <div class="col col-md-7 ml-5">
      <addanggota/>
    </div>
   </div>
  </div>
</template>

<script>
import addanggota from '../components/addanggota.vue'
import sidebar from '../components/sidebar.vue'
export default {
    name:"addPages",
    components:{
        sidebar,addanggota
    },
   
    
}
</script>

<style>

</style>