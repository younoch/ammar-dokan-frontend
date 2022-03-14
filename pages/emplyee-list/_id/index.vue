<template>
  <!-- class="grid grid-cols-12" -->
  <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="w-full p-4 lg:w-1/4 md:w-1/2">
        <a class="relative block h-48 overflow-hidden rounded">
          <img alt="ecommerce" class="block object-cover object-center w-full h-full" src="https://dummyimage.com/420x260">
        </a>
        <div class="mt-4">
          <h3 class="mb-1 text-xs tracking-widest text-gray-500 title-font">CATEGORY</h3>
          <h2 class="text-lg font-medium text-gray-900 title-font">The Catalyzer</h2>
          <p class="mt-1">$16.00</p>
        </div>
      </div>
      <div class="w-full p-4 lg:w-1/4 md:w-1/2">
        <a class="relative block h-48 overflow-hidden rounded">
          <img alt="ecommerce" class="block object-cover object-center w-full h-full" src="https://dummyimage.com/421x261">
        </a>
        <div class="mt-4">
          <h3 class="mb-1 text-xs tracking-widest text-gray-500 title-font">CATEGORY</h3>
          <h2 class="text-lg font-medium text-gray-900 title-font">Shooting Stars</h2>
          <p class="mt-1">$21.15</p>
        </div>
      </div>
      <div class="w-full p-4 lg:w-1/4 md:w-1/2">
        <a class="relative block h-48 overflow-hidden rounded">
          <img alt="ecommerce" class="block object-cover object-center w-full h-full" src="https://dummyimage.com/422x262">
        </a>
        <div class="mt-4">
          <h3 class="mb-1 text-xs tracking-widest text-gray-500 title-font">CATEGORY</h3>
          <h2 class="text-lg font-medium text-gray-900 title-font">Neptune</h2>
          <p class="mt-1">$12.00</p>
        </div>
      </div>
      <div class="w-full p-4 lg:w-1/4 md:w-1/2">
        <a class="relative block h-48 overflow-hidden rounded">
          <img alt="ecommerce" class="block object-cover object-center w-full h-full" src="https://dummyimage.com/423x263">
        </a>
        <div class="mt-4">
          <h3 class="mb-1 text-xs tracking-widest text-gray-500 title-font">CATEGORY</h3>
          <h2 class="text-lg font-medium text-gray-900 title-font">The 400 Blows</h2>
          <p class="mt-1">$18.40</p>
        </div>
      </div>
      <div class="w-full p-4 lg:w-1/4 md:w-1/2">
        <a class="relative block h-48 overflow-hidden rounded">
          <img alt="ecommerce" class="block object-cover object-center w-full h-full" src="https://dummyimage.com/424x264">
        </a>
        <div class="mt-4">
          <h3 class="mb-1 text-xs tracking-widest text-gray-500 title-font">CATEGORY</h3>
          <h2 class="text-lg font-medium text-gray-900 title-font">The Catalyzer</h2>
          <p class="mt-1">$16.00</p>
        </div>
      </div>
      <div class="w-full p-4 lg:w-1/4 md:w-1/2">
        <a class="relative block h-48 overflow-hidden rounded">
          <img alt="ecommerce" class="block object-cover object-center w-full h-full" src="https://dummyimage.com/425x265">
        </a>
        <div class="mt-4">
          <h3 class="mb-1 text-xs tracking-widest text-gray-500 title-font">CATEGORY</h3>
          <h2 class="text-lg font-medium text-gray-900 title-font">Shooting Stars</h2>
          <p class="mt-1">$21.15</p>
        </div>
      </div>
      <div class="w-full p-4 lg:w-1/4 md:w-1/2">
        <a class="relative block h-48 overflow-hidden rounded">
          <img alt="ecommerce" class="block object-cover object-center w-full h-full" src="https://dummyimage.com/427x267">
        </a>
        <div class="mt-4">
          <h3 class="mb-1 text-xs tracking-widest text-gray-500 title-font">CATEGORY</h3>
          <h2 class="text-lg font-medium text-gray-900 title-font">Neptune</h2>
          <p class="mt-1">$12.00</p>
        </div>
      </div>
      <div class="w-full p-4 lg:w-1/4 md:w-1/2">
        <a class="relative block h-48 overflow-hidden rounded">
          <img alt="ecommerce" class="block object-cover object-center w-full h-full" src="https://dummyimage.com/428x268">
        </a>
        <div class="mt-4">
          <h3 class="mb-1 text-xs tracking-widest text-gray-500 title-font">CATEGORY</h3>
          <h2 class="text-lg font-medium text-gray-900 title-font">The 400 Blows</h2>
          <p class="mt-1">$18.40</p>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  data() {
    return {
      isShowProfile: false,
      loggedUser: "",
    };
  },
  computed: {
    gettersusers() {
      const loggedUserId = this.$route.params.id;
      const allUsers = this.$store.getters.allUsers;
      this.loggedUser = allUsers.find(el => el.id == loggedUserId);
      console.log(this.loggedUser);
      return allUsers;
    },
    users() {
      return this.$store.state.users;
    },
  },
  mounted() {
    this.$store.dispatch("getUsers");
  },
  methods: {
    showProfile() {
      this.isShowProfile = !this.isShowProfile;
    },
  },
};
</script>

<style>
</style>