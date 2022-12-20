<template>
  <div>   
  <div class="d-flex row w-100">
    <div class="col col-md-2">
      <sidebar/>
    </div>
    <div class="col col-md-7 ml-5">
      <formAnggota/>
    </div>
   </div>
  </div>
</template>

<script>
import formAnggota from '@/components/formAnggota.vue'
import sidebar from "../components/sidebar.vue"
export default {

    name:"anggotaKKPages",
    components:{
        sidebar,
        formAnggota
    }
}
</script>
<style>

</style>