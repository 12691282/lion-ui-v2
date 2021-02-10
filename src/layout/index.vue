<template>
    <div  :class="dynamicClass" class="wrapperClass" >
        <div >
            导航栏:
            <div  style="width:100px;">
                <button  @click="goHome()" > go home </button>
                <button  @click="changeClass()" > change  Class </button>
            </div>    
        </div>
   
        <div class="content">
            <router-view v-slot="{ Component }">
                <keep-alive>
                    <component :is="Component" />
                </keep-alive>
            </router-view> 
        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
    name:"main",
    data(){  
        return {
            device : "device"
        }     
    },
    computed : {
        key(){
            this.$route.path
        },
        dynamicClass(){
            return {
                mobile: this.device === 'mobile'
             }
        }
    },
    mounted(){

    },
    methods:{
        changeClass(){
             if(this.device === 'mobile'){
                   this.device = 'device';
             } else if(this.device === 'device'){
                   this.device = 'mobile';
             } 
        },
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
    .mobile{
        border: 1px solid black;
    }
    .navigate{
        display: inline-block;
    }
    .content{
        display: inline-block;
    }

</style>