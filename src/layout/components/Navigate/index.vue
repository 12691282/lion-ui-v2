<template>
    <div :class="dynamicClass" >
        <div class="navigate_title">
            <transition name="sidebarLogoFade">
                <router-link class="navigate_title_link" to="/">
                    <h1 class="title_font">{{ title }} </h1>
                </router-link> 
            </transition>
        </div>
        <div>
            <menu-item />
        </div> 
    </div>
</template>
<script>
import MenuItem from './MenuItem'

export default {
    name : "main",
    components:{
        MenuItem
    },
    data(){  
        return {
            title:"lion 系统",
            typeClass : "mobile"
        }     
    },
    methods:{
     
        changeClass(){
            if(this.typeClass === "mobile"){
                this.typeClass = "device";
            } else if(this.typeClass === "device"){
                this.typeClass = "mobile";
            }
            this.$message(this.typeClass)
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
        line-height: 40px;
        position: relative;
        height: 40px;
        width: 100%;
        min-width: 200px;
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
 
    
</style>