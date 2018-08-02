<template>
    <div>
        <md-empty-state
         md-icon="Co-Blog"
         md-label="Create your first page"
         md-description="Creating project, you'll be able to upload your design and collaborate with people.">
            <div class="md-layout md-gutter md-alignment-center">
                <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                    <Register/>
                </div>
                <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                     <Login/>
                </div>
            </div>
        </md-empty-state>
  </div>
</template>

<script>


import Register from '@/components/Register'
import Login from '@/components/Login'

export default {
    name: 'auth',
    components:{
        Register,
        Login
    }
    
}
</script>



<style lang="scss" scoped>
 

  .md-layout-item {
    height: 40px;
    margin-top: 8px;
    margin-bottom: 8px;
    transition: .3s $md-transition-stand-timing;

    &:after {
      width: 100%;
      height: 100%;
      display: block;
      background: md-get-palette-color(purple, 200);
      content: " ";
    }
  }
</style>