<template>
  <div>
    <div class="container px-4 py-5 mx-auto" style="width:70%">
        <div class="d-flex flex-lg-row flex-column-reverse justify-content-center">
            <div class="card card1">
                <div class="row justify-content-center my-auto">
                    <div class="col-md-8 col-10 my-5">
                        <div class="row justify-content-center px-3 mb-3 "> <img id="logo" class="rounded-circle" src="../assets/download.png"> </div>
                        <h3 class="mb-5 text-center heading">register E-KTP</h3>
                        <h6 class="msg-info">Please register your account</h6>
                        <form  @submit.prevent="Login">
                        <div class="form-group"> <label class="form-control-label text-muted">name</label> <input type="text" id="name" name="name" placeholder="Input your name " v-model="DataUser.nama" class="form-control"> </div>
                        <div class="form-group"> <label class="form-control-label text-muted">email</label> <input type="email" id="email" name="email" placeholder="Input your email " v-model="DataUser.email" class="form-control"> </div>
                        <p v-show="error.email">email sudah digunakan!</p>
                        <div class="form-group"> <label class="form-control-label text-muted">Password</label> <input type="password" id="psw" name="psw" placeholder="Password" v-model="DataUser.password" class="form-control"> </div>
                        <div class="form-group"> <label class="form-control-label text-muted">confirm password</label> <input type="password" id="password2" name="password2" placeholder="Input again your password " class="form-control" v-model="password2"> </div>
                        <p v-show="error.password">password tidak sama!</p>
                        <div class="row justify-content-center my-3 px-3"> <button  class="btn-block btn-color text-center">submit</button> </div>
                        </form>
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
name :"registerComponents",
methods:{
    Login(){
        this.error={}
        for(let i =0; i < this.DataLogin.length; i++){
            if(this.DataLogin[i].email == this.DataUser.email){
                this.error.email = true;
            }
        }
        if(this.DataUser.password != this.password2){
            this.error.password = true;
        }

        if(Object.keys(this.error).length === 0){
            userService.register(this.DataUser)
            .then(Response => {
                console.log(Response);
                this.$router.push("/")
            })
        }
    },
    getData(){
        userService.getAll()
        .then(Response => {
            this.DataLogin = Response.data
        })
    }
},
data(){
    return{
        DataUser:{
            "nama":"",
            "email":"",
            "password":""
        },
        DataLogin : [],
        error:{
            email:false,
            password:false
        },
        password2:""
        }
},
mounted() {
    this.getData();
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