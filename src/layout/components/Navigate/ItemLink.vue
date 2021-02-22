<template>
  <component :is="type" v-bind="linkChange(to)" class="link_style">
      <slot /> 
  </component>
</template>

<script>
export default {
props: {
    to: {
      type: String,
      required: true
    }
  },
computed: {
    type() {
      return 'router-link'
    }
  },
  methods: {
    linkChange(to) {
      return {
        to: to
      }
    }
  }
}

</script>
<style lang="scss" scoped>
     .link_style {
        text-decoration:none;
    }
</style>
