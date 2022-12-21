<template>
   <div>
     <div>
        <h1 style="font-family:aria" class="text-center">data user</h1>
  <div class=" border border-secondary mt-4 ml-3"
   style="width:130%; border-radius:15px">
   <table class="table">
  <thead>
    <tr>
      <th scope="col">no</th>
      <th scope="col">email</th>
      <th scope="col">name</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item,index) in DataLogin" :key="index" >
      <th scope="row">{{index +=1}}</th>
      <td>{{DataUser.email}}</td>
      <td>{{DataUser.name}}</td>
     
      <button   class="btn-secondary p-1 my-2">update</button>
      <button  class="btn-secondary p-1 ml-1 my-2">delete</button>
    </tr>
  </tbody>
</table>
    <!-- <h2  class="text-center">-tidak ada data-</h2> -->
</div> 
</div>
  </div>
</template>

<script>
import userService from '../services/userService'
export default {
    name:"userComponents",
    methods:{
        input(){
              let data = this.DataLogin;
            userService.register(data)
            .then( response =>{
                this.DataLogin = response.data
                console.log(this.DataLogin);
            })
        },
        getUser(){
        userService.getAll()
        .then(Response =>{
        this.Datalogin =Response.data
       
        })
        .catch(e =>{
          console.log(e);
            
          })
        
        },
    data(){
        return{
        DataLogin : [],
        }   
    },
        mounted(){  
                this.getUser();
        }
}
}
</script>

<style>

</style>