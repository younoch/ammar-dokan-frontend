<template>
  <section>
    <form @submit.prevent="submitProduct" enctype="multipart/form-data">
      <div class="shadow sm:rounded-md sm:overflow-hidden">
        <div class="py-5 pr-4 space-y-6 bg-white">
          <div class="grid justify-between grid-cols-6 gap-6">
            <div class="col-span-3">
              <label
                for="product_name"
                class="block text-sm font-medium text-gray-700"
              >
                Product Name:
              </label>
              <div class="flex mt-1 rounded-md shadow-sm">
                <input
                  type="text"
                  name="product_name"
                  id="product_name"
                  v-model="CreateProduct.name"
                  class="flex-1 block w-full border-gray-300 rounded-none focus:ring-indigo-500 focus:border-indigo-500 rounded-r-md sm:text-sm"
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
              <div class="flex mt-1 rounded-md shadow-sm">
                <input
                  type="number"
                  name="product_price"
                  id="product_price"
                  v-model="CreateProduct.price"
                  class="flex-1 block w-full border-gray-300 rounded-none focus:ring-indigo-500 focus:border-indigo-500 rounded-r-md sm:text-sm"
                  placeholder="Eg: Mango"
                />
              </div>
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">
              Cover photo
            </label>
            <label
              class="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md "
              for="file-upload"
            >
              <div class="space-y-1 text-center">
                <svg
                  class="w-12 h-12 mx-auto text-gray-400"
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
                <div class="flex justify-center text-sm text-gray-600">
                  <label
                    
                    class="relative font-medium text-indigo-600 bg-white rounded-md cursor-pointer hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    @click="uoloadImage"
                  >
                    <p class="text-center">Upload a file</p>
                  </label>
                  <input
                    id="file-upload"
                    name="file-upload"
                    ref="fileUpload"
                    style="display: none"
                    class="text-center"
                    type="file"
                    accept="image/*"
                    @change="onFileSelected"
                  />
                </div>
                <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>
            </label>
            <img  class="w-10 " :src="imageUrl" alt="">
          </div>
        </div>
        <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
          <button
            type="submit"
            class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    
    return {
      imageUrl: '',
      CreateProduct: {
        name: "",
        price: null,
        productImage: null,
      },
    };
  },
  methods: {
    onFileSelected(e) {
/*       const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.CreateProduct.productImage = e.target.result;
        console.log(this.CreateProduct.productImage);
      }; */
      const files = e.target.files
      let filename = files[0].name
      if(filename.lastIndexOf('.') <=0) {
        return alert('Please add a valid files!')
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result
      })
      fileReader.readAsDataURL(files[0]);
      this.CreateProduct.productImage = files[0]
      // this.CreateProduct.productImage = "uploads/2022-03-20T03-16-57.148Zdownload (2).jpeg"
    },
    uoloadImage() {
      this.$refs.fileUpload.click()
    },
    async submitProduct() {
      const formData = new FormData();
      Object.keys(this.CreateProduct).forEach((key) => {
        formData.append(key, this.CreateProduct[key])
      })
      try {
        let res = await this.$axios({
          method: "post",
          url: process.env.PROJECT_API + "/products",
          data: formData,
          headers: {
            Authorization: `Bearer ${this.$store.state.currentToken}`,
          },
        });
        return res;
      } catch (error) {
        alert(error.response.data.message);

        return error.response;
      }
    },
  },
};
</script>