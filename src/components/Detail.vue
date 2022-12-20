<template>
  <div class="p-5 d-flex justify-content-around">

<div class="a p-4 border border-secondary " style="border-radius:20px; height:100%">

    <h2 class="text-center"><img src="../assets/keluarga.png" width="10%" class="rounded-circle" alt=""> update Kartu Keluarga
     <button v-show="!buttonValue" class="btn btn-secondary rounded-circle p-1 ml-5" style="width:8%; height:8%" @click="toggleUpdate">ubah</button>
      <button v-show="buttonValue" class="btn btn-secondary rounded-circle p-1 ml-5" style="width:8%; height:8%" @click="toggleCancel">canc</button></h2>

  <form @submit.prevent="updatedata">
      <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Alamat</label>
      <input type="text" v-model="DataKeluarga.alamat" class="form-control" id="inputtext4" placeholder="input alamat" :disabled="hilang">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">desa kelurahan</label>
      <input type="text" v-model="DataKeluarga.desa_kelurahan" class="form-control" id="inputPassword4" placeholder="input desa" :disabled="hilang">
    </div>
  </div>

   <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputtext4">kabupaten kota</label>
      <input type="text" v-model="DataKeluarga.kabupaten_kota" class="form-control" id="inputEmail4" placeholder=" input kabupaten" :disabled="hilang">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">kecamatan</label>
      <input type="text" v-model="DataKeluarga.kecamatan" class="form-control" id="inputPassword4" placeholder="input kecamatan" :disabled="hilang">
    </div>
  </div>

   <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">kode post</label>
      <input type="text" v-model="DataKeluarga.kode_post" class="form-control" id="inputEmail4" placeholder="Input kodepost" :disabled="hilang">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">nomer kk</label>
      <input type="text" v-model="DataKeluarga.nomer_kk" class="form-control" id="inputPassword4" placeholder="Input KK" :disabled="hilang">
    </div>
  </div>
    <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">provinsi</label>
      <input type="text" v-model="DataKeluarga.provinsi" class="form-control" id="inputEmail4" placeholder="Input provinsi" :disabled="hilang">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">rt / rw</label>
      <input type="text" v-model="DataKeluarga.rt" class="form-control" id="inputPassword4" placeholder="Input rt" :disabled="hilang">
    </div>
  </div>
  <div class="d-flex justify-content-between mt-2">
  <button type="submit" class="btn btn-secondary">update</button>
  <router-link :to="{name:'Add'}" class="btn btn-secondary">anggota keluarga</router-link>
  </div>
  </form>
</div>
 
</div>
</template>

<script>
import dataService from '../services/dataService'
import Swal from 'sweetalert2'
export default {
    name:"DetailComponents",
    props:["datakeluargaProps"],
methods:{
    updatedata(){
        let data = this.DataKeluarga;
        dataService.updateKK(data.id,data)
              .then(response => {
                  console.log(response.data);
              })
                let timerInterval
                Swal.fire({
                timerProgressBar: true,
                didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft()
                }, 100)
                    },
                    willClose: () => {
                    clearInterval(timerInterval)
                    },
                    title: 'sukses',
                    timer:1000,
                    text: 'Data sudah diupdate',
                    footer: 'tetap semangat ><'
                })
                .then(() => {
                    this.$router.push('/dashboard')
                })
              .catch(e => {
                  console.log(e);
              });

           
},
    getById(id){
            dataService.getIdKK(id)
                .then(Response => {
                    this.DataKeluarga =Response.data;
                    console.log(Response.data);
                })
                .catch(e =>{
                    console.log(e);
                })
                
        },
        toggleUpdate(){
            this.hilang = false
            this.buttonValue = true
        },
        toggleCancel(){
          
            location.reload()
        
        }

        
},
  data(){
    return{
        DataKeluarga:{
            "id":null,
            "alamat":null,
            "desa_kelurahan":null,
            "kabupaten_kota":null,
            "kecamatan":null,
            "kode_post":null,
            "nomer_kk":null,
            "provinsi":null,
            "rt":null,
            "rw":null
        },
        hilang : true,
        buttonValue: false
    }
  },
   mounted(){
            if(this.$route.name == 'detailKaka'){
                console.log()
                this.getById(this.$route.params.id)
            }
    },
}
</script>

<style>

</style>