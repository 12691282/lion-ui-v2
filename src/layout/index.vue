<template>
    <div  class="wrapperClass" >
        <navigate class="navigate-container" />
        <content class="content-container" />       
    </div>
</template>

<script>
import { Navigate, Content } from './components'

export default {
    name:"main",
    data(){  
        return {
      
        }     
    },
    components:{
        Navigate, Content
    },
    computed : {
       
    },
    mounted(){

    },
    methods:{
       
    }
}
</script>
<style lang="scss" scoped>
   

</style>