<template>
  <Layout class="text-center">
    <h1 v-html="$page.wordPressPost.title" class="mb-4 font-display text-indigo-darker" />
    <h3 class="mb-8 font-display text-grey-darkest text-center">
      <ul class="inline-block list categories list-reset">
        <li v-for="category in $page.wordPressPost.categories" :key="category.id" class="list-reset">
          <g-link :to="category.path" class="text-blue-dark no-underline hover:underline hover:text-blue">{{ category.title }}</g-link>
        </li>
      </ul>
      &#8226;
      <span class="inline-block">{{ formatDate($page.wordPressPost.date) }}</span>
    </h3>
    <img
      v-if="$page.wordPressPost.featuredMedia"
      :src="$page.wordPressPost.featuredMedia.url"
      :width="$page.wordPressPost.featuredMedia.width"
      :alt="$page.wordPressPost.featuredMedia.title"
    />
    <div v-html="$page.wordPressPost.content" class="wp-post py-8 text-left text-base leading-normal font-sans text-black" />
    <template v-if="$page.wordPressPost.categories.length">
      <h4 class="text-display text-grey-darkest">Posted in</h4>
      <ul class="list categories list-reset">
        <li v-for="category in $page.wordPressPost.categories" :key="category.id" class="list-reset">
          <g-link :to="category.path" class="text-blue-dark">{{ category.title }}</g-link>
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
    date
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
