<template>
  <Layout class="about">
    <h1 class="mb-4 font-display text-indigo-darker sm:text-center lg:text-left">{{ $static.page.title }}</h1>
    <div class="text-black font-sans" v-html="$static.page.content"></div>
  </Layout>
</template>

<static-query>
query AboutPage {
  page: wordPressPage(path:"/pages/about"){
    title
    content
    featuredMedia {
      url
    }
  }
}
</static-query>

<script>
export default {
  metaInfo: {
    title: 'About me'
  }
}
</script>

<style scoped>
.about >>> p,
.about >>> ul {
  margin-bottom: 1rem;
}

.about >>> h2,
.about >>> h3,
.about >>> h4 {
  color: #3d4852;
  font-family: fira-sans, sans-serif;
  margin: 1rem 0;
}

.about >>> a {
  color: #2779bd;
}
</style>

