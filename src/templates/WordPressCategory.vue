<template>
  <Layout>
    <h1 class="mx-4 mb-4 font-display text-indigo-darker sm:text-center lg:text-left">{{ $page.wordPressCategory.title }} </h1>
    <ul class="post-list container mx-auto list-reset flex flex-wrap">
      <li v-for="{ node } in $page.wordPressCategory.belongsTo.edges" :key="node.id" class="sm:w-full md:w-1/2 lg:w-1/3 mb-6">
        <PostCard :post="node" />
      </li>
    </ul>
    <ScrollToTopButton />
    <Pager :info="$page.wordPressCategory.belongsTo.pageInfo" class="font-sans pager"/>
  </Layout>
</template>

<page-query>
query Category ($path: String, $page: Int) {
  wordPressCategory (path: $path) {
    title
    belongsTo (page: $page, perPage: 9) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ... on WordPressPost {
            id
            title
            path
            date
            excerpt
            featuredMedia {
              url
              width
              height
            }
        	}
        }
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'
import Post from '~/components/Post.vue'
import PostCard from '~/components/PostCard.vue'
import ScrollToTopButton from '~/components/ScrollToTopButton.vue'

export default {
  components: {
    Pager,
    Post,
    PostCard,
    ScrollToTopButton
  },
  metaInfo() {
    return {
      title: this.$page.wordPressCategory.title
    }
  }
}
</script>
