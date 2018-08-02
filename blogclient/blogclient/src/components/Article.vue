<template>
    <div>

    
     <md-card>
      <md-card-media-actions>
        <md-card-media>
          <h1 v-html="article.title">
            {{article.title}}
          </h1>
          <div v-html="article.content">
              {{article.content}}
          </div>
          <h6>
             auhtor : {{article.authorId.name}}
          </h6>
        </md-card-media>
        <md-card-actions>
          <md-button class="md-icon-button">
            <md-icon @click="showDialog" >edit</md-icon>
          </md-button>
          <md-button class="md-icon-button">
            <md-icon>bookmark</md-icon>
          </md-button>
          <md-button class="md-icon-button">
            <md-icon>share</md-icon>
          </md-button>
        </md-card-actions>
      </md-card-media-actions>
    </md-card>
    <div>
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>Article</md-dialog-title>

     
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
       

      <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false">Close</md-button>
        <md-button class="md-primary" @click="showDialog = false">Save</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-button class="md-primary md-raised" @click="showDialog = true">Show Dialog</md-button>
  </div>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
export default {
    components: {
     VueEditor,
    },
    data(){
        return{
            title :'add title here...',
            content:"your text here",
            category:'add category here...',
            showDialog: false
        }
    },
    props:['article']
}
</script>

<style lang="scss" scoped>
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


