<template>
  <div>
<h1 class=" a text-center " style="font-family:aria">Update Anggota Keluarga</h1>
    <div class="d-flex justify-content-between">
    <router-link :to="{name:'Add'}" class="b btn btn-secondary mt-4">back</router-link>
      <button v-show="!buttonValue" class="btn btn-secondary mt-4 p-1 ml-5" style="width:8%; height:8%" @click="toggleUpdate" >ubah</button>
      <button v-show="buttonValue" class="btn btn-secondary mt-4 p-1 ml-5" style="width:8%; height:8%" @click="toggleCancel"  >canc</button> 
    </div>
  <div class="form">
<form class="needs-validation" @submit.prevent="updateAnggota" >
  <div class="form-row">
    <div class="col-md-4 mb-3 mt-3">
      <label for="validationTooltip01">Name</label>
      <input type="text" v-model="DataAnggota.nama" class="form-control" id="validationTooltip01" placeholder="" :disabled="hilang"  required >
      <div class="valid-tooltip">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3 mt-3">
      <label for="validationTooltip02">Nik</label>
      <input type="number" v-model="DataAnggota.nik" class="form-control" id="validationTooltip02" placeholder="" :disabled="hilang" required>
      <div class="valid-tooltip">
        Looks good!
      </div>
    </div>
     <div class="form-group col-md-4">
      <label for="inputState">agama</label>
      <select id="inputState" v-model="DataAnggota.agama" class="form-control" :disabled="hilang">
        <option selected>PILIH</option>
        <option>islam</option>
        <option>yahudi </option>
        <option>nasrani</option>
      </select>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationTooltip03">Pendidikan</label>
      <input type="text" class="form-control" v-model="DataAnggota.pendidikan" id="validationTooltip03" placeholder="" :disabled="hilang" required>
      <div class="invalid-tooltip">
        Please provide a valid city.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationTooltip04">Tempat lahir</label>
      <input type="text" class="form-control" v-model="DataAnggota.tempat_lahir" id="validationTooltip04" placeholder="" :disabled="hilang" required>
      <div class="invalid-tooltip">
        Please provide a valid state.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationTooltip05">tanggal lahir</label>
      <input type="date" class="form-control" v-model="DataAnggota.tanggal_lahir" id="validationTooltip05" placeholder="" :disabled="hilang" required>
      <div class="invalid-tooltip">
        Please provide a valid zip.
      </div>
    </div>
  </div>
    <div class="form-row">
      <div class="form-group col-md-4 mb-3 ml-4 ">
      <label for="inputState">jenis_kelamin</label>
      <select id="inputState" v-model="DataAnggota.jenis_kelamin" class="form-control" :disabled="hilang">
        <option selected>PILIH</option>
        <option>laki-laki</option>
        <option>perempuan </option>
      </select>
    </div>
   
     <div class="form-group col-md-3 ml-4">
      <label for="inputState">kepala keluarga</label>
      <select id="inputState" v-model="DataAnggota.kepala_keluarga" class="form-control" :disabled="hilang">
        <option selected>PILIH</option>
        <option>yes</option>
        <option>no </option>
      </select>
    </div>
  </div>
  <button class="btn btn-secondary"  type="submit">update</button>
</form>
  </div>
</div>
</template>

<script>
import Swal from 'sweetalert2'
import anggotaService from '../services/anggotaService.js'
export default {
 name:"detailAnggotaComponents",
 props:["anggotaProps"],

 methods:{
  toggleCancel(){
    location.reload();
  },
    toggleUpdate(){
      this.ubah = false
      this.hilang = false
      this.buttonValue = true
    },
        updateAnggota(){
        let data = this.DataAnggota;
        anggotaService.updateAK(data.id,data)
              .then(response => {
                  console.log(response.data);
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
                    this.$router.push('')
                })
              })
              .catch(e => {
                  console.log(e);
              });

           
},
    getById(id){
            anggotaService.getIdAK(id)
                .then(Response => {
                    this.DataAnggota =Response.data;
                    console.log(Response.data);
                })
                .catch(e =>{
                    console.log(e);
                })
                
        },
 },
 mounted(){
   if(this.$route.name == 'DetailAnggota'){
        this.getById(this.$route.params.ide)
    }
 },
 data(){
    return{
         DataAnggota:{
                "agama":null,
                "id_kk":null,
                "jenis_kelamin":null,
                "kepala_keluarga":null,
                "nama":null,
                "nik":null,
                "pendidikan":null,
                "tanggal_lahir":null,
                "tempat_lahir":null

            },
             hilang : true,
              buttonValue : false,
              ubah :true,
    }
 }
}
</script>

<style scoped>

.a{
  margin-left: 190px;
}
.form{
        padding: 4px;
        margin-left: 5%;
        margin-top: 5%;
        background: rgb(209, 207, 207);
        border-radius: 2rem;
        width: 130%;
    }
    .text{
       margin-left: 25%;
    }
    .form-group{
        padding: 2%;
        margin: auto;
    }
    .form-control{
        border-radius: 5rem;
    }
    form{
        padding: 3%;
    }
    .b{
      margin-left: 100px;
    }

</style>