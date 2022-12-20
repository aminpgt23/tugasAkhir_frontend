<template>
<div>   
  <div class="d-flex row">
    <div class="col col-md-2">
      <sidebar/>
    </div>
    <div class="col col-md-7 ml-5">
      <Form/>
    </div>
   </div>
  </div>
</template>

<script>
import sidebar from "../components/sidebar.vue"
import Form from '../components/Form.vue'
export default {
    
    name:"formPage",
  components : {
    sidebar,
    Form
}
}
</script>

<style>

</style>