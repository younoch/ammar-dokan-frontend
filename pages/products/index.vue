<template>
  <section class="container grid h-full grid-cols-6 gap-2 mx-auto my-2">
    <div class="flex flex-col col-span-4">
      <div class="flex justify-between px-8 py-3 bg-indigo-800 rounded-lg">
        <h2 class="text-2xl font-bold text-white uppercase">Products list</h2>
        <button
          class="px-4 py-1 text-lg font-medium text-indigo-600 bg-white rounded-lg ca hover:bg-indigo-50"
          @click="showCreateModal = true"
        >
          <fa class="mr-1" :icon="['fa', 'plus']" /> Add new
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
        class="flex flex-col flex-grow px-8 py-4 mt-2 border-2 border-indigo-600 divide-y rounded-md divide-coolGray-700 bg-indigo-50"
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
    <div class="flex flex-col col-span-2">
      <div class="px-8 py-3 bg-indigo-800 border-2 rounded-lg">
        <h2 class="text-2xl font-bold text-center text-white uppercase">
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
  data() {
    return {
      productDetails: "",
      showCreateModal: false,
    };
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

  computed: {},
  mounted() {
    this.productDetails = this.products[0];
  },
  methods: {
    selectProduct(id) {
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