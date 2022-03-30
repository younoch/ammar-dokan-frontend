<template>
  <div class="flex flex-col w-full lg:min-h-screen scroll-smooth">
    <Header />
    <main class="flex flex-col flex-grow w-full mx-auto">
      <nuxt class="flex-grow" />
    </main>
    <footer
      class="flex items-center justify-center w-full text-white bg-indigo-900 h-14 "
    >
      <p>My Nuxt App &copy; {{ new Date().getFullYear() }}</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.logo {
  @apply inline-block;
  & img {
    height: 90px;
  }
}
nav {
  justify-content: space-between;
}
</style>