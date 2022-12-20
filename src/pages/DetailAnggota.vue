<template>
  <div>   
  <div class="d-flex row w-100">
    <div class="col col-md-2">
      <sidebar/>
    </div>
    <div class="col col-md-7 ml-5">
      <detailAnggota :anggotaProps="DataAnggota" />
      <addanggota v-show="none" @UpdateAK="UpdateAK"/>
    </div>
   </div>
  </div>
</template>

<script>
import addanggota from '../components/addanggota.vue'
import detailAnggota from '../components/detailAnggota.vue'
import sidebar from '../components/sidebar.vue'
export default {
name:"DetailAnggotaPages",
components:{
    sidebar,
    detailAnggota,
    addanggota
},
data(){
  return{
    DataAnggota:[]
  }
},
methods:{
  UpdateAK(item){
    this.DataAnggota = item;
  }

}
}
</script>

<style>

</style>