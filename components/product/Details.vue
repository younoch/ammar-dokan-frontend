<template>
  <section
    class="flex flex-col p-4 border-2 border-indigo-600 rounded-lg bg-indigo-50"
  >
    <!-- :src="productDetails.productImage" -->
    <picture>
      <img
        class="object-cover w-full h-48 cover-fill"
        src="
          https://www.ledgerinsights.com/wp-content/uploads/2020/10/sugar.2-810x476.jpg
        "
        alt="image not found"
      />
    </picture>

    <div class="flex justify-between py-1">
      <h1 class="text-3xl font-bold text-indigo-600 capitalize">
        {{ productDetails.name }}
      </h1>
      <h3 class="text-2xl font-medium text-indigo-600">
        {{ productPrice }}
      </h3>
    </div>
    <div class="flex justify-between py-1">
      <h2 class="text-xl font-medium text-center text-indigo-600">Category:</h2>
      <h3 class="text-2xl font-medium text-indigo-600">Classic</h3>
    </div>

    <div class="flex justify-between flex-grow py-2 place-items-end">
      <button
        class="px-4 py-1 text-lg font-medium text-indigo-600 bg-white rounded-lg ca hover:bg-indigo-50"
        @click="showEditModal = true"
      >
        <fa class="mr-2" :icon="['fa', 'square-pen']" /> Edit
      </button>
      <action-modal
        v-if="showEditModal"
        type="info"
        title="Update product"
        width="sm"
        @close="showEditModal = false"
      >
        <ProductUpdate :product ="productDetails"  />
      </action-modal>
      <div>
        <button @click="showDeleteModal = true">
          <fa class="mr-2" :icon="['fa', 'trash']" /> Delete
        </button>
      </div>
    </div>
    <action-modal
      v-if="showDeleteModal"
      type="danger"
      title="Confirm Action"
      width="sm"
      @close="showDeleteModal = false"
    >
      <p class="text-gray-800">
        Are you sure you want you delete this product? This action cannot be
        undone.
      </p>

      <div class="mt-4 text-right">
        <button
          @click="showDeleteModal = false"
          class="px-4 py-2 text-sm text-gray-600 focus:outline-none hover:underline"
        >
          Cancel
        </button>
        <button
          @click="deleteProduct"
          class="px-4 py-2 mr-2 text-sm text-white bg-red-500 rounded focus:outline-none hover:bg-red-400"
        >
          Confirm
        </button>
      </div>
    </action-modal>
  </section>
</template>

<script>
export default {
  data() {
    return {
      showDeleteModal: false,
      showEditModal: false
      
    };
  },

  props: ["product-details"],
  computed: {
    productPrice() {
      return this.productDetails.price;
    },
  },
  methods: {
    async deleteProduct() {
      try {
        let res = await this.$axios({
          method: "delete",
          url:"/products/" + this.productDetails._id,
          headers: {
            Authorization: `Bearer ${this.$store.state.currentToken}`,
          },
        });
        let data = res.data;
        this.showDeleteModal = false;
        alert(data.message);
        this.$router.push("/products");
      } catch (error) {
        alert(error.response.data.message);
        this.showDeleteModal = false;
        return error.response;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  @apply w-36 px-5 py-2 rounded-lg border-2 hover:bg-indigo-500 border-indigo-600 text-indigo-600 hover:text-white bg-white;
}
</style>