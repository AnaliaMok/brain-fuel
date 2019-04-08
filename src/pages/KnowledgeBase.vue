<template>
  <Layout>
    <h1 class="font-display">Knowledge Base</h1>
  </Layout>
</template>

<page-query>
query KB ($page: Int) {
  allWordPressKnowledgeItem (page: $page, perPage: 10) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        path

        featuredMedia {
          url
        }

        knowledgeItemCat
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Knowledge Base'
  }
}
</script>

<style>
</style>
