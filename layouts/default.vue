<template>
  <div class="flex flex-col w-full lg:min-h-screen scroll-smooth">
    <Header />
    <main class="flex-grow w-full flex flex-col mx-auto">
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
//   mounted() {
//     console.log(process.env.PROJECT_API)
// },
  computed: {
    showSignin() {
      return this.$store.state.showSignin;
    },
    isSignin() {
      const isSignin = this.$store.state.isSignin;
      return isSignin;
    },
  },
  methods: {
    setSignIn() {
      this.$store.commit("showSignin");
    },
    setSignStatus() {
      this.$store.dispatch("setSigninState");
    },
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