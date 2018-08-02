<template>
 
  <div class="md-layout">
    <div class="md-layout-item">
      <Article v-for="(article, i) in articles" :key="{i}"
        v-bind:article="article"
      />
    </div>
  </div>

  

</template>

<script>
// @ is an alias to /src
import Article from '@/components/Article.vue/'
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'
export default {
  
  name: 'home',
  data(){
    return{
      articles : ''
    }
  }, 
  components: {
    HelloWorld,
    Article
  },
  created(){
    this.getArticle()
  },
  methods:{
    getArticle(){
        axios
        .get('http://35.240.238.98/articles')
        .then((articles)=>{
          this.articles = articles.data
          console.log(this.articles)
        })
    }
  }
}
</script>

<style lang="scss" scoped>


  .md-layout-item {
    height: 40px;

    &:nth-child(1) {
      background: md-get-palette-color(grey, 300);
    }

    &:nth-child(2) {
      background: md-get-palette-color(grey, 400);
    }

    &:nth-child(3) {
      background: md-get-palette-color(grey, 500);
    }
  }
</style>
