<template>
    <div >
       <el-menu default-active="1-4-1" 
        
       class="el-menu-vertical-demo"
        @open="handleOpen" 
        @close="handleClose" 
        :collapse="isCollapse"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b" >
            <el-submenu index="1">
                <template #title>
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                </template>
                <el-menu-item-group>
                    <template #title>分组一</template>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                    <template #title>选项4</template>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-submenu index="2">
                
                <template #title>
                    <i class="el-icon-menu"></i>
                    <sapn>导航二</sapn>
                </template>
                <el-menu-item index="2-1">选项4</el-menu-item>
                <el-menu-item index="2-2">选项4</el-menu-item>
                <el-menu-item index="2-3">选项4</el-menu-item>
            </el-submenu>
         
            <el-submenu index="4">        
                 <template #title> 
                    <i class="el-icon-setting"></i>
                    <span>导航三</span> 
                </template>
                <el-menu-item index="4-1">选项4</el-menu-item>
                <el-menu-item index="4-2">选项4</el-menu-item>
                <el-menu-item index="4-3">选项4</el-menu-item>
                <el-menu-item index="4-4">选项4</el-menu-item>
                <el-menu-item index="4-5">选项4</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>  
</template>
<script>
export default {
    name : "menuItem",
    data(){  
        return {
            buttonName : "go home",
            isCollapse: false
        }
    },
    methods:{
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        goHome(){
          this.$router.replace({path:'/home'})
        },
        goMain(){
          this.$router.replace({path:'/'})
        }
    },
    computed: {
      
    }
};
</script>
<style lang="scss" scoped>
  
</style>