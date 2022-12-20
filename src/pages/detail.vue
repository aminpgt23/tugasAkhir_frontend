<template>
     
  <div class="d-flex row w-100">
    <div class="col col-md-3">
      <sidebar/>
    </div>
    <div class="col col-md-7 ml-5">
      <Detail :datakeluargaProps="DataKeluarga"/>
        <card v-show="none" @updateKaka="UpdateKaka" ></card>
    </div>
   </div>
 

</template>

<script>
import card from'../components/card.vue'
import Detail from '../components/Detail.vue'
import sidebar from '../components/sidebar.vue'
export default {
    name:"detailComponents",
    components:{
        sidebar,
        Detail,
        card
    },
    data(){
        return{
            DataKeluarga:[]
        }
    },
    methods:{
        UpdateKaka(item){
            this.DataKeluarga = item;
        }
    }
}
</script>

<style>

</style>