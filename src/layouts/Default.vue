<template>
  <div class="bg-grey-lightest">
    <header class="mb-8 px-4 py-6">
      <div class="container mx-auto flex justify-between">
        <strong>
          <g-link to="/" class="font-display text-2xl text-indigo-dark no-underline">BrainFuel</g-link>
        </strong>
        <nav class="nav font-display">
          <g-link class="nav__link no-underline text-indigo-dark" to="/">Home</g-link>
          <g-link class="nav__link no-underline text-indigo-dark" to="/about">About</g-link>
        </nav>
      </div>
    </header>
    <main class="container mx-auto">
      <slot/>
    </main>
    <footer class="container mx-auto px-4 py-8 font-display text-center text-grey-darkest">
      &copy; 2019 BrainFuel
    </footer>
  </div>
</template>

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
.post-list {
  list-style: none;
  padding-left: 0;
}
.post-list li {
  padding: 1em 0;
}
</style>
