<template>
  <section class="grid grid-cols-6 gap-2 container mx-auto h-full my-2">
    <div class="col-span-4 flex flex-col">
      <div class="bg-indigo-800 px-8 py-3 rounded-lg flex justify-between">
        <h2 class="text-white uppercase text-2xl font-bold">Products list</h2>
        <button
          class="
            text-indigo-600 text-lg
            font-medium
            ca
            hover:bg-indigo-50
            px-4
            py-1
            bg-white
            rounded-lg
          "
          @click="showCreateModal = true"
        >
          <fa class="mr-1" :icon="['fa', 'plus']" /> Add new
        </button>
      </div>
      <action-modal
        v-if="showCreateModal"
        type="info"
        title="Confirm Action"
        width="sm"
        v-on:close="showCreateModal = false"
      >
        <form action="#" method="POST">
          <div class="shadow sm:rounded-md sm:overflow-hidden">
            <div class="pr-4 py-5 bg-white space-y-6">
              <div class="grid grid-cols-6 gap-6 justify-between">
                <div class="col-span-3">
                  <label
                    for="product_name"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Product Name:
                  </label>
                  <div class="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="text"
                      name="product_name"
                      id="product_name"
                      class="
                        focus:ring-indigo-500 focus:border-indigo-500
                        flex-1
                        block
                        w-full
                        rounded-none rounded-r-md
                        sm:text-sm
                        border-gray-300
                      "
                      placeholder="Eg: Mango"
                    />
                  </div>
                </div>
                <div class="col-span-3">
                  <label
                    for="product_price"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Product Price:
                  </label>
                  <div class="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="number"
                      name="product_price"
                      id="product_price"
                      class="
                        focus:ring-indigo-500 focus:border-indigo-500
                        flex-1
                        block
                        w-full
                        rounded-none rounded-r-md
                        sm:text-sm
                        border-gray-300
                      "
                      placeholder="Eg: Mango"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700">
                  Cover photo
                </label>
                <div
                  class="
                    mt-1
                    flex
                    justify-center
                    px-6
                    pt-5
                    pb-6
                    border-2 border-gray-300 border-dashed
                    rounded-md
                  "
                >
                  <div class="space-y-1 text-center">
                    <svg
                      class="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="True"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div class="flex text-sm text-gray-600">
                      <label
                        for="file-upload"
                        class="
                          relative
                          cursor-pointer
                          bg-white
                          rounded-md
                          font-medium
                          text-indigo-600
                          hover:text-indigo-500
                          focus-within:outline-none
                          focus-within:ring-2
                          focus-within:ring-offset-2
                          focus-within:ring-indigo-500
                        "
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          class="sr-only"
                        />
                      </label>
                      <p class="pl-1">or drag and drop</p>
                    </div>
                    <p class="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="submit"
                class="
                  inline-flex
                  justify-center
                  py-2
                  px-4
                  border border-transparent
                  shadow-sm
                  text-sm
                  font-medium
                  rounded-md
                  text-white
                  bg-indigo-600
                  hover:bg-indigo-700
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-indigo-500
                "
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </action-modal>

      <div
        class="
          flex flex-col flex-grow
          divide-y divide-coolGray-700
          px-8
          py-4
          border-2 border-indigo-600
          rounded-md
          mt-2
          bg-indigo-50
        "
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
    <div class="col-span-2 flex flex-col">
      <div class="bg-indigo-800 border-2 px-8 py-3 rounded-lg">
        <h2 class="text-white text-center uppercase text-2xl font-bold">
          Details
        </h2>
      </div>
      <ProductDetails
        :product-details="productDetails"
        class="mt-2 flex-grow"
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