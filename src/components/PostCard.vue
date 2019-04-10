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
      <div class="text-blue-dark text-base">
        <span class="inline-block font-display mb-2">{{ formatDate(post.date) }}</span>
        <template v-if="post.categories && post.categories.length">
          &#8226;
          <ul class="inline-block list categories list-reset">
            <li v-for="category in post.categories" :key="category.id" class="list-reset">
              <g-link :to="category.path" class="text-base text-indigo-dark font-medium font-display no-underline hover:underline hover:text-indigo-darkest">
                {{ category.title }}
              </g-link>
            </li>
          </ul>
        </template>
      </div>
      <h2 v-html="post.title" class="font-display text-2xl text-black mb-2" />
      <g-link :to="post.path" class="inline-block my-2 text-blue-dark no-underline hover:underline hover:text-blue-darker">
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
