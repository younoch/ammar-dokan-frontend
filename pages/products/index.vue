<template>
  <section class="container grid h-full grid-cols-6 gap-2 mx-auto my-2">
    <div class="flex-col lg:flex lg:col-span-4" :class="tabSwitch ? 'col-span-6': `hidden`">
      <div class="flex justify-between px-2 lg:px-8 py-3 bg-indigo-800 rounded-lg">
        <h2 class="lg:text-2xl text-xl font-bold text-white uppercase">Products list</h2>
        <button
          class="px-4 py-1 lg:text-lg font-medium text-indigo-600 bg-white rounded-lg ca hover:bg-indigo-50"
          @click="showCreateModal = true"
        >
          <span class="mr-1 text-2xl font-bold leading-3">+</span> Add new
        </button>
      </div>
      <action-modal
        v-if="showCreateModal"
        type="info"
        title="Create new product"
        width="sm"
        @close="showCreateModal = false"
      >
        <ProductCreate />
      </action-modal>

      <div
        class="flex flex-col flex-grow px-2 lg:px-8 py-4 mt-2 border-2 border-indigo-600 divide-y rounded-md divide-coolGray-700 bg-indigo-50"
      >
        <ProductItem
          class="w-full"
          :product="item"
          @product-id="selectProduct"
          v-for="(item, idx) in products"
          :key="idx"
        />
      </div>
    </div>
    <div class="flex-col lg:flex lg:col-span-2" :class="!tabSwitch ? 'col-span-6': `hidden`">
      <div class="px-8 py-3 bg-indigo-800 border-2 rounded-lg">
        <h2 class="lg:text-2xl text-xl font-bold text-center text-white uppercase">
          Details
        </h2>
      </div>
      <ProductDetails
        :product-details="productDetails"
        class="flex-grow mt-2"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "products",
  middleware: ["check-auth", "auth"],
  data() {
    return {
      productDetails: "",
      showCreateModal: false,
      tabSwitch: true
    };
  },
  async asyncData(context) {
    const products = await context.app
      .$axios({
        method: "get",
        url: "/products",
        headers: {
          Authorization: `Bearer ${context.store.state.currentToken}`,
        },
      })
      .then((res) => res.data.products);
    return {
      products,
    };
  },

  computed: {},
  mounted() {
    this.productDetails = this.products[0];
  },
  methods: {
    selectProduct(id,visibility) {
      this.tabSwitch = visibility
      console.log({visibility});
      this.products.find((el) => {
        if (el._id === id) {
          this.productDetails = el;
        }
      });
    },
  },
};
</script>

<style>
</style>