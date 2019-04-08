<template>
  <Layout class="text-center">
    <h1 v-html="$page.wordPressPost.title" class="mb-4 font-display text-indigo-darker" />
    <img
      v-if="$page.wordPressPost.featuredMedia"
      :src="$page.wordPressPost.featuredMedia.url"
      :width="$page.wordPressPost.featuredMedia.width"
      :alt="$page.wordPressPost.featuredMedia.title"
    />
    <div v-html="$page.wordPressPost.content" class="wp-post py-8 text-left text-base leading-normal font-sans text-black" />
    <template v-if="$page.wordPressPost.categories.length">
      <h4>Posted in</h4>
      <ul class="list categories list-reset">
        <li v-for="category in $page.wordPressPost.categories" :key="category.id" class="list-reset">
          <g-link :to="category.path">{{ category.title }}</g-link>
        </li>
      </ul>
    </template>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  wordPressPost (path: $path) {
    title
    content
    featuredMedia {
      url
      width
      title
    }
    categories {
      id
      title
      path
    }
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.wordPressPost.title
    }
  }
}
</script>

<style scoped>
.wp-post >>> a {
  color: #2779bd;
}

.wp-post >>> h2,
.wp-post >>> h3,
.wp-post >>> h4 {
  color: #3d4852;
  font-family: fira-sans, sans-serif;
  margin: 1rem 0;
}

.wp-post >>> img {
  display: block;

  @media screen and (min-width: 768px) {
    max-width: 80%;
    margin: 0 auto;
  }
}

.wp-post >>> ul,
.wp-post >>> ol,
.wp-post >>> p {
  margin: 1rem 0;
}
</style>
