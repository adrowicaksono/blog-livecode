<template>
  <div>
    <md-content>
       <md-field md-clearable>
        <label>Title</label>
        <md-input v-model="title"></md-input>
       </md-field>
    </md-content>
    <md-content>
       <md-field>
        <label>Category</label>
        <md-input v-model="category"></md-input>
       </md-field>
    </md-content>
    <md-content class="md-primary">
      <vue-editor v-model="content"></vue-editor>
    </md-content>
    <md-content class="md-accent">
      <div>
        <md-button @click="submitArt" class="md-raised">Submit</md-button>
      </div>
    </md-content>
  </div>
</template>



</template>


<script>
import axios from 'axios'
import { VueEditor } from 'vue2-editor'
import jwt from 'jsonwebtoken'
export default {
  components: {
    VueEditor,
  },
  data(){
    return{
      title :'add title here...',
      content:"your text here",
      category:'add category here...'
    }
  },
  methods:{
    submitArt(){
      console.log(this.content)
          console.log("direct lah")
          console.log(this.title, this.content, this.category)
          axios
          .post('http://35.240.238.98/articles',{
              title: this.title,
              content : this.content,
              category: this.category
          }, {
              headers : {
                  token : localStorage.getItem("token")
              }
          })
          .then((respon)=>{
              console.log(respon)
              this.title  = ''
              this.content = ''
              this.category = ''
              this.$router.replace('/home')
          })
          .catch(function(err){
              swal({
                  title: 'Error!',
                  text: err.message,
                  type: 'error',
                  confirmButtonText: 'Cool'
              })
                this.$router.replace('/home')
          })
    }
  },
}
</script>

<style lang="scss" scoped>
  .md-content {
    width: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
  small {
    display: block;
  }
</style>

