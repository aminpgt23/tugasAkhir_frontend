<template>
  <div class="d-flex row">
    <div class="col col-md-2">
      <sidebar/>
    </div>
    <div class="col col-md-7 ml-5">
      <user :datauserProps="dataUser"/>
    </div>
   </div>
</template>

<script>
import sidebar from '../components/sidebar.vue'
import user from '../components/user.vue'
export default {
    name:"userPages",
components:{
    user,sidebar
},
data(){
    return{
        dataUser:[]
    }
}
}
</script>

<style>

</style>