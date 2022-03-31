<template>
  <section
    class="flex flex-col p-4 border-2 border-indigo-600 rounded-lg bg-indigo-50"
  >
    <!-- :src="productDetails.productImage" -->
    <picture>
      <img
        class="object-cover w-full h-48 cover-fill"
        src=""
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
        class="px-4 py-1 text-lg font-medium text-indigo-600 bg-white rounded-lg hover:bg-indigo-50"
        @click="showEditModal = true"
      >
        <svg
          enable-background="new 0 0 18 18"
          height="18px"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 19 19"
          width="19px"
          xml:space="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          class="inline-block"
        >
          <g>
            <path
              d="M8.44,7.25C8.348,7.342,8.277,7.447,8.215,7.557L8.174,7.516L8.149,7.69   C8.049,7.925,8.014,8.183,8.042,8.442l-0.399,2.796l2.797-0.399c0.259,0.028,0.517-0.007,0.752-0.107l0.174-0.024l-0.041-0.041   c0.109-0.062,0.215-0.133,0.307-0.225l5.053-5.053l-3.191-3.191L8.44,7.25z"
              class="fill-indigo-600"
            />
            <path
              d="M18.183,1.568l-0.87-0.87c-0.641-0.641-1.637-0.684-2.225-0.097l-0.797,0.797l3.191,3.191l0.797-0.798   C18.867,3.205,18.824,2.209,18.183,1.568z"
              class="fill-indigo-600"
            />
            <path
              d="M15,9.696V17H2V2h8.953l1.523-1.42c0.162-0.161,0.353-0.221,0.555-0.293   c0.043-0.119,0.104-0.18,0.176-0.287H0v19h17V7.928L15,9.696z"
              class="fill-indigo-600"
            />
          </g>
        </svg>
        Edit
      </button>
      <action-modal
        v-if="showEditModal"
        type="info"
        title="Update product"
        width="sm"
        @close="showEditModal = false"
      >
        <ProductUpdate :product="productDetails" />
      </action-modal>
      
        <button @click="showDeleteModal = true">
          <svg
            class="inline-block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
          >
            <path
              d="M 10 2 L 9 3 L 3 3 L 3 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 4.3652344 7 L 6.0683594 22 L 17.931641 22 L 19.634766 7 L 4.3652344 7 z"
            />
          </svg>
          Delete
        </button>
      
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
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  data() {
    return {
      showDeleteModal: false,
      showEditModal: false,
    };
  },
  components: {
    FontAwesomeIcon,
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
          url: "/products/" + this.productDetails._id,
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
button svg path {
  @apply fill-indigo-600;
}
button:hover svg path {
  @apply fill-indigo-50;
}
</style>