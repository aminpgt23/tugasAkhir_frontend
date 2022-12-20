<template>
<div class="p-3">

<div class="a p-4 border border-secondary bg-light" style="border-radius:20px; height:100%">

    <h2 class="text-center"><img src="../assets/keluarga.png" width="10%" class="rounded-circle" alt=""> Tambah Kartu Keluarga</h2>

  <form action="" class="mt-5" @submit.prevent="inputKK">
      <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Alamat</label>
      <input type="text" v-model="DataKeluarga.alamat" class="form-control" id="inputtext4" placeholder="input alamat">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">desa kelurahan</label>
      <input type="text" v-model="DataKeluarga.desa_kelurahan" class="form-control" id="inputPassword4" placeholder="input desa">
    </div>
  </div>

   <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputtext4">kabupaten kota</label>
      <input type="text" v-model="DataKeluarga.kabupaten_kota" class="form-control" id="inputEmail4" placeholder=" input kabupaten">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">kecamatan</label>
      <input type="text" v-model="DataKeluarga.kecamatan" class="form-control" id="inputPassword4" placeholder="input kecamatan">
    </div>
  </div>

   <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">kode post</label>
      <input type="number" v-model="DataKeluarga.kode_post" class="form-control" id="inputEmail4" placeholder="Input kodepost">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">nomer kk</label>
      <input type="number" v-model="DataKeluarga.nomer_kk" class="form-control" id="inputPassword4" placeholder="Input KK">
    </div>
  </div>
    <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">provinsi</label>
      <input type="text" v-model="DataKeluarga.provinsi" class="form-control" id="inputEmail4" placeholder="Input provinsi">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">rt / rw</label>
      <input type="number" v-model="DataKeluarga.rt" class="form-control" id="inputPassword4" placeholder="Input rt">
    </div>
  </div>
  <button type="submit" class="btn btn-secondary">submit</button>
  </form>
</div>
</div>
</template>

<script>

import dataService from '../services/dataService'

export default {
    name:"FormComponents",
    props: ["DatakeluargaProps"],
   

    data(){
    return{
      buttonText:"submit",
        DataKeluarga:{
            "alamat":null,
            "desa_kelurahan":null,
            "kabupaten_kota":null,
            "kecamatan":null,
            "kode_post":null,
            "nomer_kk":null,
            "provinsi":null,
            "rt":null,
            "rw":null
        }
    }
    },
    methods:{
     inputKK(){
      let data =this.DataKeluarga;
        dataService.create(data)
      .then(response => {
        console.log(response.data);
      });
            this.$fire({
        type: 'success',
        title: 'sukses',
        text: 'Data sudah terdaftar',
        footer: 'tetap semangat ><'
      }).then(() => {
        this.$router.push('/dashboard')
      })
      },
       
    },
  }

</script>

<style scoped>
.a{
    margin-left: 90px;
    padding-top: 10px;
}
</style>