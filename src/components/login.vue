<template>
<div>
<div class="container px-4 py-5 mx-auto" style="width:70%; " >
        <div class="d-flex flex-lg-row flex-column-reverse justify-content-center">
            <div class="card card1">
                <div class="row justify-content-center my-auto">
                    <div class="col-md-8 col-10 my-5">
                        <div class="row justify-content-center px-3 mb-3 "> <img id="logo" class="rounded-circle" src="../assets/images.png"> </div>
                        <h3 class="mb-5 text-center heading">LOGIN E-KTP</h3>
                        <h6 class="msg-info">Please login to your account</h6>
                        <form @submit.prevent="input">
                        <div class="form-group"> <label  class="form-control-label text-muted">Username</label> <input type="text" id="email" name="email" placeholder="email " v-model="DataUser.email"  class="form-control"> </div>
                        <div class="form-group"> <label class="form-control-label text-muted">Password</label> <input type="password" id="psw" name="psw" placeholder="Password" v-model="DataUser.password" class="form-control"> </div>
                        <p v-show="logingagal">user name atau password salah</p>
                        <div class="row justify-content-center my-3 px-3"> <button  class="btn-block btn-color text-center">masuk</button> </div>
                        </form>
                    </div>
                        <div class=" text-center mb-1">
                            <div  class="sm-text mx-auto mb-3">Don't have an account? <router-link to="/register" class="btn btn-white ml-2">Register</router-link></div>
                        </div>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>
import userService from '../services/userService.js'
export default {
name:"loginComponents",
 methods:{
    input(){
        userService.login(this.DataUser)
        .then(response =>{
            console.log(response);
            this.$router.push("/dashboard")
        })
        .catch(e =>{
            console.log(e);
            this.logingagal = true;
        })
    }
 },
 data(){
    return{
        DataUser:{
             "email":null,
            "password":null
        },
        logingagal:false,
    }
 }
}
</script>

<style scoped>
body {
    color: #000;
    overflow-x: hidden;
    height: 100%;
    background-image: linear-gradient(rgb(220, 205, 162),);
    background-repeat: no-repeat
    
}

input,
textarea {
    background-color: #F3E5F5;
    border-radius: 50px !important;
    padding: 12px 15px 12px 15px !important;
    width: 100%;
    box-sizing: border-box;
    border: none !important;
    border: 1px solid #F3E5F5 !important;
    font-size: 16px !important;
    color: #000 !important;
    font-weight: 400
}

input:focus,
textarea:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    border: 1px solid #D500F9 !important;
    outline-width: 0;
    font-weight: 400
}

button:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    outline-width: 0
}

.card {
    border-radius: 5rem;
    border: none
    
    
}

.card1 {
    width: 50%;
    background-color: #bbb4bb;
    padding: 0px 10px 10px 0px
    
}



#logo {
    width: 70px;
    height: 60px
}

.heading {
    margin-bottom: 60px !important
}

::placeholder {
    color: #000 !important;
    opacity: 1
}

:-ms-input-placeholder {
    color: #000 !important
}

::-ms-input-placeholder {
    color: #000 !important
}

.form-control-label {
    font-size: 12px;
    margin-left: 15px
}

.msg-info {
    padding-left: 15px;
    margin-bottom: 30px
}

.btn-color {
    border-radius: 80px;
    color: #fff;
    background-image: linear-gradient(to right, #b39f5d, #676367);
    padding: 15px;
    cursor: pointer;
    border: none !important;
    margin-top: 40px
}

.btn-color:hover {
    color: #fff;
    background-image: linear-gradient(to right, #302d31, #2b2a27)
}

.btn-white {
    border-radius: 50px;
    color: #D500F9;
    background-color: #fff;
    padding: 8px 40px;
    cursor: pointer;
    border: 2px solid #D500F9 !important
}

.btn-white:hover {
    color: #fff;
    background-image: linear-gradient(to right, #d4bb69, #ebe6ec)
}

a {
    color: #000
}

a:hover {
    color: #000
}

.bottom {
    width: 100%;
    margin-top: 50px !important
}

.sm-text {
    font-size: 15px
}

@media screen and (max-width: 992px) {
    .card1 {
        width: 100%;
        padding: 40px 30px 10px 30px
    }

    .card2 {
        width: 100%
    }

    .right {
        margin-top: 100px !important;
        margin-bottom: 100px !important
    }
}

@media screen and (max-width: 768px) {
    .container {
        padding: 10px !important
    }

    .card2 {
        padding: 50px
    }

    .right {
        margin-top: 50px !important;
        margin-bottom: 50px !important
    }
}
</style>