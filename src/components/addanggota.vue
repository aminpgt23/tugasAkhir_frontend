<template>
  <div>
     <div>
        
        <router-link class="btn btn-secondary mt-4 ml-3" :to="{name:'AnggotaKK'}" >tambah anggota</router-link>
  <div class=" border border-secondary mt-4 ml-3"
   style="width:130%; border-radius:15px">
   <table class="table">
  <thead>
    <tr>
      <th scope="col">NO</th>
      <th scope="col">nama</th>
      <th scope="col">kepala keluarga</th>
      <th scope="col">Agama</th>
      <th scope="col">nik</th>
      <th scope="col">pendidikan</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item,index) in DataAnggota" :key="index">
      <th scope="row">{{index+=1}}</th>
      <td>{{item.nama}}</td>
      <td>{{item.kepala_keluarga}}</td>
      <td>{{item.agama}}</td>
      <td>{{item.nik}}</td>
      <td>{{item.pendidikan}}</td>
      <router-link :to="{name:'DetailAnggota', params:{ide:item.id}}" @click.prevent="$emit('UpdateAK', item)"  class="btn-secondary p-1 my-2">details</router-link>
      <button  @click="deleteAK(item.id)" class="btn-secondary ml-2 my-2">delete</button>
    </tr>
  </tbody>
</table>
    <h2 v-if="DataAnggota.length < 1" class="text-center">-tidak ada data-</h2>
</div> 
</div>
  </div>
</template>

<script>
import anggotaService from '../services/anggotaService'
export default {
name:"addComponents",
methods:{
     deleteAK(id){
      if(confirm("apakah akan dihapus?")){
        anggotaService.deleteAK(id)
        .then(Response => {
            console.log(Response.data);
          })
          .catch(e =>{
            console.log(e);
          });
          location.reload();
          }else{
          alert("hapus batal");
        }
  },
     getData(){
        anggotaService.getAll()
        .then(Response => {
        this.DataAnggota =Response.data;
        console.log(this.DataAnggota); 
        })
        
        .catch(e =>{
          console.log(e);
            
          })
          
        
        },
        getIdkaka(id){
            anggotaService.getIdKK(id)
            .then(Response => {
                this.DataAnggota = Response.data;
                console.log(this.DataAnggota)
            })
        },
},
         mounted(){
          this.getData();
          if(this.$route.name == 'Add'){
                this.getIdkaka(this.$route.params.id)
          }
        },
        data(){
            return{
                DataAnggota:[]
            }
        }
}
</script>

<style>

</style>