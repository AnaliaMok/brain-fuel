<template>
  <div class="font-sans">
    <h2 v-html="post.title" class="font-display text-2xl mb-2" />
    <div v-html="post.excerpt" class="leading-normal text-base" />
    <g-link :to="post.path">
      Read More
    </g-link>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>
