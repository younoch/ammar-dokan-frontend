<template>
    <header class="w-full">
      <div class="bg-indigo-900">
        <div
          class="pb-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl"
        >
          <div class="relative flex items-center justify-end lg:justify-between">
            <div class="items-center hidden lg:flex">
              <nuxt-link
                to="/"
                aria-label="Company"
                title="Company"
                class="inline-flex items-center mr-8"
              >
                <span
                  class="ml-2 text-xl font-bold tracking-wide text-center text-gray-100 uppercase "
                  >Amar <br> Dhokan</span
                >
              </nuxt-link>
              <ul class="flex items-center space-x-8 text-xl lg:flex">
                <li>
                  <nuxt-link
                    to="/products"
                    aria-label="Our product"
                    title="Our product"
                    class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                    >Products</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link
                    to="/orders"
                    aria-label="Our product"
                    title="Our product"
                    class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                    >Orders</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link
                    to="/about-us"
                    aria-label="About us"
                    title="About us"
                    class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                    >About us</nuxt-link
                  >
                </li>
              </ul>
            </div>
            <ul

              class="items-center hidden space-x-8 cursor-default lg:flex"
            >
              <li>
                <div class="flex-shrink-0 w-10 h-10">
                </div>
              </li>
              <li @click="onLogout">
                <nuxt-link
                  class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded-b shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  to="/"
                  >Sign out</nuxt-link
                >
              </li>
            </ul>
            <div class="lg:hidden">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                class="p-2 mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                @click="isMenuOpen = true"
              >
                <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  ></path>
                </svg>
              </button>
              <div v-show="isMenuOpen" class="absolute top-0 left-0 w-full">
                <div class="p-5 bg-white border rounded-b shadow-sm">
                  <div class="flex items-center justify-between mb-4">
                    <div>
                      <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        class="inline-flex items-center"
                      >
                        <svg
                          class="w-8 text-deep-purple-accent-400"
                          viewBox="0 0 24 24"
                          stroke-linejoin="round"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-miterlimit="10"
                          stroke="currentColor"
                          fill="none"
                        >
                          <rect x="3" y="1" width="7" height="12"></rect>
                          <rect x="3" y="17" width="7" height="6"></rect>
                          <rect x="14" y="1" width="7" height="6"></rect>
                          <rect x="14" y="11" width="7" height="12"></rect>
                        </svg>
                        <span
                          class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase "
                          >Company</span
                        >
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        @click="isMenuOpen = false"
                      >
                        <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul class="space-y-4">
                      <li>
                        <a
                          href="/"
                          aria-label="Our product"
                          title="Our product"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >Product</a
                        >
                      </li>
                      <li>
                        <a
                          href="/"
                          aria-label="Our product"
                          title="Our product"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >Features</a
                        >
                      </li>
                      <li>
                        <a
                          href="/"
                          aria-label="About us"
                          title="About us"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >About us</a
                        >
                      </li>
                      <li >
                        <a
                          href="/"
                          aria-label="log out"
                          title="log out"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >Log out
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                          aria-label="Sign up"
                          title="Sign up"
                        >
                          Sign up
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  computed: {
  },
  methods: {
    onLogout() {
      this.$store.dispatch("LOGOUT");
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