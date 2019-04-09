<template>
  <div class="bg-grey-lightest">
    <header class="mb-8 px-4 py-6">
      <div class="container mx-auto flex justify-between">
        <strong>
          <g-link to="/" class="font-display text-2xl text-indigo-dark no-underline">BrainFuel</g-link>
        </strong>
        <nav class="nav font-display flex items-center">
          <g-link class="nav__link no-underline text-indigo-dark" to="/">Home</g-link>
          <g-link class="nav__link no-underline text-indigo-dark" to="/about">About</g-link>
          <a href="https://github.com/AnaliaMok" class="w-8 h-8 ml-4 text-indigo-dark hover:text-purple">
            <GitHubSquare class="max-w-full max-h-full fill-current text-indigo-dark"/>
          </a>
        </nav>
      </div>
    </header>
    <main class="container mx-auto px-4 lg:px-0">
      <slot/>
    </main>
    <footer class="container mx-auto px-4 py-8 font-display text-center text-grey-darkest">
      &copy; 2019 BrainFuel
    </footer>
  </div>
</template>

<script>
import GitHubSquare from '~/assets/svgs/github-square.svg'

export default {
  components: {
    GitHubSquare
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

img {
  max-width: 100%;
}

nav[role='navigation'] {
  text-align: center;
}
nav[role='navigation'] a {
  display: inline-block;
  margin: 1em 0.75em 2em;
}

.nav__link {
  margin-left: 20px;
}

.pager a {
  color: #1c3d5a;
  font-size: 1.125rem;
  text-decoration: none;
}
.pager a.active {
  color: #9561e2;
  font-weight: 600;
}
</style>
