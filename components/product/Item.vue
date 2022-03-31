<template>
  <div class="flex flex-col sm:flex-row sm:justify-between">
    <div class="flex w-full space-x-2 sm:space-x-4">
      <div class="flex flex-col justify-between w-full">
        <div class="grid justify-between w-full grid-cols-12 pb-2">
          <div class="col-span-5 space-y-1 min">
            <!-- <pre>{{product}}</pre> -->
            <h3 class="text-lg font-semibold leading-snug">
              {{ product.name }}
            </h3>
            <p class="text-sm dark:text-coolGray-400">Classic</p>
          </div>

          <div class="flex items-center text-left col-span-3 min-w-[40px]">
            <p class="text-lg font-semibold text-right">৳ {{ product.price }}</p>
          </div>
          <div class="flex justify-end col-span-4 text-sm divide-x">
            <button
              @click="passId"
              class="block px-4 py-2 font-medium text-indigo-600 uppercase bg-white border-2 border-indigo-600 rounded hover:text-white hover:bg-indigo-600 font-poppins"
            >
              <svg viewBox="0 0 24 24" class="inline w-4 h-4">
                <path
                  fill="currentColor"
                  d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"
                />
              </svg>
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 		<div class="space-y-1 text-right">
			<p>Total amount:
				<span class="font-semibold">357 €</span>
			</p>
			<p class="text-sm dark:text-coolGray-400">Not including taxes and shipping costs</p>
		</div>
		<div class="flex justify-end space-x-4">
			<button type="button" class="px-6 py-2 border rounded-md dark:border-violet-400">Back
				<span class="sr-only sm:not-sr-only">to shop</span>
			</button>
			<button type="button" class="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-coolGray-900 dark:border-violet-400">
				<span class="sr-only sm:not-sr-only">Continue to</span>Checkout
			</button>
		</div> -->
</template>
<script>
export default {
  props: ["product"],
  methods: {
    passId() {
      this.$emit("product-id", this.product._id, false);
    },
  },
};
</script>