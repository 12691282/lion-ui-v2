<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  
    <button @click="increment">
        Count is: {{ state.count }}, double is: {{ state.double }}
        number is: {{ state.number }}
    </button>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
 
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup() {
    const state = reactive({
      count: 0,
      number:1 ,
      double: computed(() => state.count * 2),
    })

    let increment = () => {
      state.count++
    }

    return {
      state,
      increment,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
