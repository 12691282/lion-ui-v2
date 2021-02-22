<template>
    <el-container :style="height_auto">
        <el-aside width="200px" class="scroll-wrapper">
        <el-menu default-active="1-4-1"
        @open="handleOpen"   @close="handleClose" 
        :collapse="isCollapse"  background-color="#545c64"
        text-color="#fff" active-text-color="#ffd04b" >
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
 
                <item-link v-for="(item, index) in itemsListFour"
                        :key="index" :to="item.to">
                     <el-menu-item :index="item.index">{{item.name}}</el-menu-item>
                </item-link>     
            </el-submenu>
        </el-menu>
    </el-aside>
</el-container>    
</template>
<script>
import ItemLink from './ItemLink'

export default {
    name : "menuItem",
    components:{
        ItemLink
    },
    data(){  
        return {
            fullHeight: "",
            buttonName : "go home",
            isCollapse: false,
            itemsListFour : [
                {"to" : "/home", "index" :"4-1", "name": "选项1"},
                {"to" : "/index", "index" :"4-2", "name": "选项2"},
                {"to" : "/home", "index" :"4-3", "name": "选项3"},
                {"to" : "/index", "index" :"4-4", "name": "选项4"},
            ]
        }
    },
    methods:{
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    },
    mounted () {

        this.$nextTick(function () {
          window.onresize = () => {
            return (() => {
              window.fullHeight = document.documentElement.clientHeight- 43
              this.fullHeight = window.fullHeight  
            })()
          }
       })
     
    },
    computed: {
        height_auto(){
            window.fullHeight = document.documentElement.clientHeight - 43
            this.fullHeight = window.fullHeight
            return `height:${this.fullHeight}px;`
        }
    }
};
</script>
<style lang="scss" scoped>
    .scroll-wrapper{
        overflow-x: hidden;
        margin-left: 10px;
    }
</style>