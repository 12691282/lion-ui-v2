<template>
     <img alt="Vue logo" src="../../assets/logo.png">
     <HelloWorld :msg="'Hello world'"/>
   
</template>

<script>
 
import HelloWorld from '@c/HelloWorld'
  
export default  {
  components: { HelloWorld },
  name:  'test',
  methods: {
     goHome (){
        this.$router.push({path:'/home'})
     }
  }

}

</script>
<style scoped>
 .home {
   display: block;
 }
</style>
