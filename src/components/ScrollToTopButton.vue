<template>
  <a
    href="#"
    class="w-12 h-12 back-to-top rounded-full bg-indigo-darker text-center flex justify-center items-center"
    @click="backToTop"
  >
    <ArrowThinUp class="w-8 h-8 fill-current text-grey-lightest" />
  </a>
</template>

<script>
import ArrowThinUp from '~/assets/svgs/arrow-thin-up.svg'

export default {
  components: {
    ArrowThinUp
  },
  methods: {
    backToTop() {
      document.body.scrollTop = 0 // For Safari
      document.documentElement.scrollTop = 0 // Everyone else
    }
  }
}
</script>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
}
</style>
