<template>
<div class="p-4 w-100">
    <div class="navbar bg-light">
        <h2><img class="rounded-circle" width="15%"
        style=" -webkit-animation: mover 2s infinite alternate;
        animation: mover 1s infinite alternate;" src="../assets/ap.png" alt=""> DASHBOARD</h2>
    </div>

<div class="d-flex">

 <div class="card-body d-flex bg-light ml-3 mr-4" style=" height:150px; width:200px">
      <div class="box">
        <div>
          <div class="card-title p-2 ">
            <h4>Jumlah Kartu Keluarga</h4>
            <h1 class="d-flex justify-content-between">{{DataKeluarga.length}} </h1>
          </div>
        </div>
      </div>
    </div>

    <div class="card-body d-flex bg-light ml-3 mr-4" style="height:150px; width:150px">
      <div class="box">
        <div>
          <div class="card-title p-3">
            <h4>Jumlah Warga</h4>
            <h1 class="d-flex justify-content-between">{{DataAnggota.length}} </h1>
          </div>
        </div>
      </div>
    </div>
</div>

  <div class="bg-light  border border-secondary mt-4 ml-3"
   style="width:140%; border-radius:15px">
   <table class="table">
  <thead>
    <tr>
      <th scope="col">NO</th>
      <th scope="col">No KK</th>
      <th scope="col">Alamat</th>
      <th scope="col">Kota</th>
      <th scope="col">Kode Pos</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item,index) in DataKeluarga" :key="index">
      <th scope="row">{{index+=1}}</th>
      <td>{{item.nomer_kk}}</td>
      <td>{{item.alamat}}</td>
      <td>{{item.kabupaten_kota}}</td>
      <td>{{item.kode_post}}</td>
      <router-link type="button" :to="{name:'detailKaka', params:{id: item.id}}" @click.prevent="$emit('updateKaka',item)" class="swal2-confirm btn-secondary p-1 m-2">detail</router-link>
      <button   @click="deleteData(item.id)" class="btn-secondary">delete</button>
    </tr>
    
   
  </tbody>
</table>
<h2 v-if="DataKeluarga.length < 1 " class="text-center">-tidak ada data-</h2>
</div>  
</div>
</template>

<script>
import dataService from '../services/dataService.js'
import anggotaService from '../services/anggotaService.js'
export default {
    name:"cardComponents",
  

    methods:{
      deleteData(id){
      if(confirm("apakah akan dihapus?")){
        dataService.deleteKK(id)
        .then(response => {
            console.log(response.data);
            anggotaService.deleteIdKK(id)
              .then(response =>{
              console.log(response.data);
            })
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
        dataService.getAll()
        .then(Response => {
        this.DataKeluarga =Response.data;
        console.log(this.DataKeluarga); 
        })
        .catch(e =>{
          console.log(e);
            
          })
        
        },
        getwarga(){
          anggotaService.getAll()
          .then(Response =>{
            this.DataAnggota = Response.data;
            console.log(this.DataAnggota) 
          })
          .catch(e=>{
            console.log(e)
          })
        }
        
        
      },
        data(){
        return{
          DataKeluarga:[],
          DataAnggota:[]
        }
    },
    mounted(){
          this.getData();
          this.getwarga();
        },
}
</script>

<style scoped>

.card-title{
 border-radius: 20px;
  height: 100px;
}
.card-body{
  border-radius: 2rem;
}

.navbar{
    border-bottom-left-radius:10rem;
    border-top-left-radius: 10rem;
    box-shadow: 10rem;
    padding: 5px;
    width:1000px;
    margin-bottom: 10px;
}


</style>