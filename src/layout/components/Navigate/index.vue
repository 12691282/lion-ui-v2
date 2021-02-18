<template>
    <div :class="dynamicClass" class="sidebar_container" >
        <div class="navigate_title">
            <transition name="sidebarLogoFade">
                <router-link class="navigate_title_link" to="/">
                    <h1 class="title_font">{{ title }} </h1>
                </router-link> 
            </transition>
        </div>
        <div>
            <button class="button_style" @click="goHome()" > {{buttonName}} </button>
            <button class="button_style" @click="goMain()" > go main page </button>
            <button class="button_style"  @click="changeClass()" > change  Class </button>
        </div>    
    </div>
</template>
<script>
export default {
    name : "main",
    data(){  
        return {
            title:"lion 系统",
            buttonName : "go home",
            typeClass : "mobile"
        }     
    },
    methods:{
        goHome(){
          this.$router.replace({path:'/home'})
        },
        goMain(){
          this.$router.replace({path:'/'})
        },
        changeClass(){
            if(this.typeClass === "mobile"){
                this.typeClass = "device";
            } else if(this.typeClass === "device"){
                this.typeClass = "mobile";
            } 
        }
    },
    computed: {
        dynamicClass(){
            return {
                test_class : this.typeClass === "device"
            }
        }
    }

};
</script>
<style lang="scss" scoped>

    .navigate_title{
        line-height: 50px;
        position: relative;
        height: 50px;
        width: 100%;
        text-align: center;
        background: #2b2f3a;

      & .navigate_title_link{
    
            height: 100%;
            width: 100%;

            & .title_font {
                display: inline-block;
                width: 120px;
                height: 10px;
                font-size: 16px;
                margin: 0;
                color: #fff;
                font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
                
            }
            
        }
    }    

    .button_style{
        margin-top: 10px;
        display: block;
    }
    .sidebar_container{
        position: relative;
        width: 100%;
    }
    .test_class{
        border: 1px solid black;
    }
</style>