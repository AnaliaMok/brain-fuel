<template>
  <div class="container mx-auto">
    <header class="header mb-8 py-4">
      <strong>
        <g-link to="/">BrainFuel</g-link>
      </strong>
      <nav class="nav font-display">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about">About</g-link>
      </nav>
    </header>
    <slot/>
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

.header {
  display: flex;
  justify-content: space-between;
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
