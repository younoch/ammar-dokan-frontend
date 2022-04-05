<template>
  <div class="flex flex-col justify-between w-full min-h-screen scroll-smooth">
    <Header />
    <main class="flex flex-col flex-grow w-full mx-auto min-h-[100vh-40px]">
      <nuxt class="flex-grow" />
    </main>
    <footer
      class="flex items-center  justify-center w-full  bg-indigo-900 h-10 lg:h-14 "
    >
      <p class="text-white text-sm lg:text-base">My Nuxt App &copy; {{ new Date().getFullYear() }}</p>
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