<template>
    <div>
        <md-empty-state
         md-icon="Co-Blog"
         md-label="Create your first page"
         md-description="Creating project, you'll be able to upload your design and collaborate with people.">
            <div>
                <div class="row">
                    <div class="col">
                        <md-content class="md-primary">
                            <Login/>
                        </md-content>
                    </div>
                </div>
                
            </div>
        </md-empty-state>
  </div>
</template>

<script>



import Login from '@/components/Login'

export default {
    name: 'auth',
    components:{
        Login
    }
    
}
</script>

<style lang="scss" scoped>
  .md-content {
    width: 200px;
    height: 200px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
</style>

