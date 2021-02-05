<template>
    welcome home !
    <button @click="goMain()" > go main page </button>
</template>

<script>
export default  {
  name:  'home',
  methods:{
      goMain(){
          this.$router.replace({path:'/'})
      }
  }
}

</script>
