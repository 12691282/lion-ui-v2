<template>
    home test
     <h1>{{ $store.state.count }}</h1>
    <div>
      <button @click="addfn()">增加</button>
      <button @click="lessfn()">减少</button> 
    </div>
</template>

<script>
export default  {
  name:  'homeTest',
  data (){
    return {
        count : 0
    }
  },
  methods:{
    addfn(){
       //提交名为addmu的mutations
       this.$store.commit('addmu');
    },
    lessfn(){
       //提交名为lessmu的mutations
       this.$store.commit('lessmu');
    }
  }
}

</script>
<style scoped>
 
</style>