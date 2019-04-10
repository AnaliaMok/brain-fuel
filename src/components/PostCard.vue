<template>
  <div class="font-sans rounded-lg overflow-hidden mx-4 shadow-md h-full bg-white">
    <g-link :to="post.path" class="no-underline">
      <g-image
        :src="post.featuredMedia.url"
        :alt="post.title"
        :title="post.title"
        width="768"
        height="512"
        class="bg-grey"
      />
    </g-link>
    <div class="p-4 bg-white ">
      <span class="block font-display mb-2 text-blue-dark text-base">{{ formatDate(post.date) }}</span>
      <h2 v-html="post.title" class="font-display text-2xl text-black mb-2" />
      <g-link :to="post.path" class="inline-block my-2 text-blue-dark no-underline">
        Read More
      </g-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    featuredMedia() {
      return {
        url: this.post.featuredMedia.url || '',
        width: 768,
        height: 512
      }
    }
  }
}
</script>

<style>
</style>
