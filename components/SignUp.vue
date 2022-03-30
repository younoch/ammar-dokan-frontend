<template>
  <div x-data="{show:false}">
    <div class="flex items-center justify-center mt-4">
      <button
        @click="showModal = true"
        class="w-full px-4 py-2 font-semibold text-blue-100 bg-indigo-500 rounded-lg hover:bg-indigo-700"
        type="button"
      >
        Signup Modal
      </button>
    </div>
    <div
      v-show="showModal"
      x-transition:enter="transition ease-out duration-300"
      x-transition:enter-start="opacity-0 scale-90"
      x-transition:enter-end="opacity-100 scale-100"
      x-transition:leave="transition ease-in duration-300"
      x-transition:leave-start="opacity-100 scale-100"
      x-transition:leave-end="opacity-0 scale-90"
      class="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 "
    >
      <div
        @click.="showModal = false"
        class="
          flex flex-col
          w-full
          p-20
          m-8
          bg-white
          rounded-md
          lg:m-0 lg:w-1/4
          sm:p-10
          md:min-w-[330px]
        "
      >
        <div class="mb-8 text-center">
          <h1 class="my-3 text-4xl font-bold">Sign up</h1>
          <p class="text-sm text-coolGray-600">It's quick and easy.</p>
        </div>
        <client-only>
        <form @submit.prevent="submitSignup">
           <div class="space-y-4">
            <div>
              <label for="email" class="block mb-2 text-sm"
                >Email address</label
              >
              <input
                type="email"
                name="email"
                placeholder="email"
                v-model="signup.email"
                class="w-full px-3 py-2 text-blue-800 border border-blue-300 rounded-md bg-blue-50 focus:outline-none focus:ring-1 focus:ring-blue-300"
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="password"
                v-model="signup.password"
                class="w-full px-3 py-2 text-blue-800 border border-blue-300 rounded-md bg-blue-50 focus:outline-none focus:ring-1 focus:ring-blue-300"
              />
            </div>
          </div> 
         <div class="mt-6 space-y-2">
            <div class="flex gap-x-2">
              <button
                type="submit"
                class="w-full px-8 py-3 text-blue-100 bg-blue-600 rounded-md"
              >
                Sign up
              </button>
              <button
                @click="showModal = false"
                type="button"
                class="w-full px-8 py-3 text-blue-600 border border-blue-600 rounded-md "
              >
                Cancel
              </button>
            </div>
            <p class="px-6 text-sm text-center text-coolGray-600">
              I agree to abide by templatana's
              <a href="#" class="text-blue-600 hover:underline"
                >Terms of Service</a
              >. and it's
              <a href="#" class="text-blue-600 hover:underline"
                >Privacy Policy</a
              >.
            </p>
          </div>
        </form>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      signup: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async submitSignup() {
      try {
        let res = await this.$axios({
          method: "post",
          url: "/user/signup",
          data: this.signup,
        });
        let data = res.data;
        alert(data.message);
        return data;
      } catch (error) {
        alert(error.response.data.message);
        return error.response;
      }
    },
  },
};
</script>