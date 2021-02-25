<template>
    <div>{{name}}</div>
    <h1>count ：{{count}}</h1>
    <span>
      <button @click="addItem" >add numb</button>
    </span> 

    <span style="margin-left:10px;">
      <button @click="lessItem" >less numb</button>
    </span>   
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default  {

  setup () {
      const store = useStore()
      return {
        count : computed(() => store.getters['permission/getCount']),
        addItem : () => store.dispatch('permission/addItem'),
        lessItem : () => store.dispatch('permission/lessItem')
      }
  },
  
  name:  'role',
  data (){
    return {
        name : "role module"
    }
  },
  methods:{
    
  }
}

</script>
<style scoped>
 
</style>