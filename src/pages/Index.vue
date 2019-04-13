<template>
  <Layout>
    <h1 class="mx-4 mb-4 font-display text-indigo-darker sm:text-center lg:text-left">Welcome to BrainFuel's Blog!</h1>
    <p class="mx-4 mb-8 font-sans text-black sm:text-center lg:text-left">This is a test site to combine Gridsome, WordPress and TailwindCSS</p>
    <ul class="post-list container mx-auto list-reset flex flex-wrap">
      <li v-for="{ node } in $page.allWordPressPost.edges" :key="node.id" class="sm:w-full md:w-1/2 lg:w-1/3 mb-6">
        <PostCard :post="node" />
      </li>
    </ul>
    <ScrollToTopButton />
    <Pager :info="$page.allWordPressPost.pageInfo" class="font-sans pager" />
  </Layout>
</template>

<page-query>
query Home ($page: Int) {
  allWordPressPost (page: $page, perPage: 9) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        date
        path
        featuredMedia {
          url
          width
          height
        }
        categories {
          id
          title
          path
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
    PostCard,
    ScrollToTopButton
  },
  metaInfo: {
    title: 'Home'
  },
  data() {
    return {
      currentCategory: []
    }
  }
}
</script>


