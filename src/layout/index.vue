<template>
    
    <div>中心</div>
        <keep-alive>
        <router-view :key="key" />
      </keep-alive>
</template>

<script>
export default {
    name:"main",
    computed : {
        key(){
            this.$route.path
        } 
    },
    mounted(){
        console.log()
    }
}
</script>