<template>
    <div>
        <router-view v-slot="{ Component }">
            <keep-alive>
                <component :is="Component" />
            </keep-alive>
        </router-view> 
    </div>
</template>
<script>
export default {
    name : "content",
    data(){  
         
    },
    methods:{
       
    },
    computed: {
        key(){
            this.$route.path
        }
    }
};
</script>
<style scoped>
   
</style>