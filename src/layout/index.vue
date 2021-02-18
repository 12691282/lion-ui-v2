<template>
    <div  class="wrapperClass" >
        <navigate class="navigate" />
        <content class="content" />       
    </div>
</template>

<script>
import { Navigate, Content } from './components'
import { mapState } from 'vuex'

export default {
    name:"main",
    data(){  
        return {
            device : "device"
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
        goHome(){
          this.$router.replace({path:'/home'})
        }
    }
}
</script>
<style scoped>
    .wrapperClass{
        position: relative;
        height: 100%;
        width : 100%
    }
    .navigate{ 
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        height: 100%;
        width: 200px;
    }
    .content{
       margin-left: 200px;
    }

</style>