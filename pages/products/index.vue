<template>
  <section class="grid grid-cols-6 p-6 sm:p-10">
    <div class="grid grid-cols-6 p-6 sm:p-10">
      <div class="flex flex-col col-span-4 divide-y divide-coolGray-700">
        <ProductsList class="w-full" product='item' v-for="(item, idx) in products" :key="idx" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  async asyncData(context) {
    const products = await context.app
      .$axios({
        method: "get",
        url: process.env.PROJECT_API + "/products",
        headers: {
          Authorization: `Bearer ${context.store.state.currentToken}`,
        },
      })
      .then((res) => res.data.products);
    return {
      products,
    };
  },

  computed: {
    /*     gettersusers() {
      const loggedUserId = this.$route.params.id;
      const allUsers = this.$store.getters.allUsers;
      this.loggedUser = allUsers.find((el) => el.id == loggedUserId);
      console.log(this.loggedUser);
      return allUsers;
    }, */
    /*     users() {
      return this.$store.state.users;
    }, */
  },
  mounted() {
    // this.$store.dispatch("getUsers");
  },
  methods: {},
};
</script>

<style>
</style>