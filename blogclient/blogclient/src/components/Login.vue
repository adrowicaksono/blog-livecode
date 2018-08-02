<template>
  <div>
    <md-card md-with-hover v-show="!onLogin">
      <md-ripple>
        <md-card-header>
          <div class="md-title">Card with hover effect</div>
          <div class="md-subhead">It also have a ripple</div>
        </md-card-header>

        <md-card-content>
          <div>
            <md-field md-clearable>
              <label>Email</label>
              <md-input v-model="email"></md-input>
            </md-field>

            <md-field>
              <label>Password toggle</label>
              <md-input v-model="password" type="password"></md-input>
            </md-field>
          </div>
        </md-card-content>

        <md-card-actions>
          <md-button @click="showRegister">Register</md-button>
          <md-button @click="login">Login</md-button>
        </md-card-actions>
      </md-ripple>
    </md-card>

    <md-card md-with-hover v-show="onLogin">
      <md-ripple>
        <md-card-header>
          <div class="md-title">Card with hover effect</div>
          <div class="md-subhead">It also have a ripple</div>
        </md-card-header>

        <md-card-content >
          <div>
             <md-field md-clearable>
                <label>Name</label>
                <md-input v-model="name"></md-input>
            </md-field>

            <md-field md-clearable>
              <label>Email</label>
              <md-input v-model="email"></md-input>
            </md-field>

            <md-field>
              <label>Password toggle</label>
              <md-input v-model="password" type="password"></md-input>
            </md-field>
          </div>
        </md-card-content>

        <md-card-actions>
          <md-button @click="onLogin = false">Cancel</md-button>
          <md-button @click="register">Register</md-button>
        </md-card-actions>
      </md-ripple>
    </md-card>

  </div>
</template>

<style lang="scss" scoped>
  
</style>

<script>
import swal from 'sweetalert2'
import axios from 'axios'

export default {
  name: 'RegularCards',
  data: () => ({
      name : 'Initial Value',
      email: 'Initial Value',
      password: 'mysecurepassword',
      onLogin: false
    })
    ,
    methods:{
      showRegister(){
        this.onLogin = true;
      },
      login(){
        if(!localStorage.getItem("token")){
          axios
          .post('http://35.240.238.98/auth', {
            email : this.email,
            password : this.password
          })
          .then(respon=>{
            console.log("berhasil login", respon.data.token)
            localStorage.setItem('token', respon.data.token)
            this.$router.push('/home')
          })
          }else{
            swal({
                    title: 'info!',
                    text: "you have logged",
                    type: 'info!',
                    confirmButtonText: 'Cool'
                  })
          }
      },
      register(){
        console.log("register", this.registerName, this.registerPassword, this.registerEmail)
        axios.post('http://35.240.238.98/users',{
          name: this.name,
          email : this.email,
          password : this.password,
        })
        .then(result=>{
          console.log("success register")
          swal({
                  title: 'success!',
                  text: "succesfully register, continue with login",
                  type: 'Success!',
                  confirmButtonText: 'Continue'
                })
        })
        .catch(function(err){
          swal({
                  title: 'error!',
                  text: err.message,
                  type: 'error!',
                  confirmButtonText: 'Continue'
                })
          
        })
      }
  
      
      
    }

}
</script>



<style lang="scss" scoped>
  .md-field:last-child {
    margin-bottom: 40px;
  }

  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
  .md-dialog {
    max-width: 768px;
  }
</style>
