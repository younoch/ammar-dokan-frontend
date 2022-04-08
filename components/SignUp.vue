<template>
  <div x-data="{show:false}">
    <span
      @click="showModal = true"
      class="font-semibold text-indigo-500 hover:text-indigo-700"
      type="button"
    >
      Signup Now !
    </span>
    <div
      v-if="showModal"
      x-transition:enter="transition ease-out duration-300"
      x-transition:enter-start="opacity-0 scale-90"
      x-transition:enter-end="opacity-100 scale-100"
      x-transition:leave="transition ease-in duration-300"
      x-transition:leave-start="opacity-100 scale-100"
      x-transition:leave-end="opacity-0 scale-90"
      class="
        absolute
        inset-0
        flex
        items-center
        justify-center
        bg-gray-700 bg-opacity-50
      "
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
          lg:m-0 lg:w-1/3
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
            <div class="space-y-1">
              <div>
                <label for="email" class="block mb-2 text-sm"
                  >Email address</label
                >
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  v-model="signup.email"
                  class="
                    w-full
                    px-3
                    py-2
                    text-blue-800
                    border border-blue-300
                    rounded-md
                    bg-blue-50
                    focus:outline-none focus:ring-1 focus:ring-blue-300
                  "
                  @input="setEmail($event.target.value)"
                />
              </div>
              <div class="min-h-[16px] text-sm text-left text-red-500">
                <p v-if="!$v.signup.email.required && errorEmail">
                  <span class="text-xl mdi mdi-information-outline"></span>
                  Field is required.
                </p>
                <p v-if="!$v.signup.email.email">
                  <span class="text-xl mdi mdi-information-outline"></span>
                  Please insert email in correct format
                </p>
              </div>

              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  v-model="signup.password"
                  class="
                    w-full
                    px-3
                    py-2
                    text-blue-800
                    border border-blue-300
                    rounded-md
                    bg-blue-50
                    focus:outline-none focus:ring-1 focus:ring-blue-300
                  "
                  @input="setPassword($event.target.value)"
                />
              </div>
              <div class="text-red-500 text-sm text-left">
                <p v-if="!$v.signup.password.required && errorPassword">
                  <span class="text-base mdi mdi-information-outline"></span>
                  Password is required.
                </p>
                <p v-if="!$v.signup.password.minLength">
                  <span class="text-base mdi mdi-information-outline"></span>
                  Password must have at least 3 letters.
                </p>
              </div>
            </div>
            <div class="mt-6 space-y-2">
              <div class="flex gap-x-2">
                <button
                  type="submit"
                  class="w-full px-8 py-3 text-blue-100 bg-blue-600 rounded-md disabled:bg-blue-200"
                  :disabled="$v.$invalid"
                >
                  Sign up
                </button>
                <button
                  @click="showModal = false"
                  type="button"
                  class="
                    w-full
                    px-8
                    py-3
                    text-blue-600
                    border border-blue-600
                    rounded-md
                  "
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
import { required, email, minLength } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      errorEmail: false,
      errorPassword: false,
      showModal: false,
      signup: {
        email: "",
        password: "",
      },
    };
  },
  validations: {
    signup: {
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(3),
      },
    },
  },
  methods: {
    async submitSignup() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
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
      }
    },
    setEmail(value) {
      this.errorEmail = true;
      this.signup.email = value;
      this.$v.signup.email.$touch();
    },
    setPassword(value) {
      this.errorPassword = true;
      this.signup.password = value;
      this.$v.signup.password.$touch();
    },
  },
};
</script>