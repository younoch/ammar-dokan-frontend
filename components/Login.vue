<template>
  <div class="flex items-center justify-center">
    <div class="flex justify-center flex-1 m-0 bg-white shadow sm:rounded-lg">
      <div class="p-4 lg:w-5/12 xl:w-5/12 sm:p-8">
        <div class="flex flex-col items-center mt-3 lg:mt-8">
          <h1
            class="text-2xl font-medium text-center text-gray-600 xl:text-3xl"
          >
            Login For <br>
            <span class="text-3xl font-extrabold text-indigo-600 uppercase">Amar Dhokan</span>
          </h1>
          <div class="flex-1 w-full mt-6 lg:mt-8">
            <!--             <div class="flex flex-col items-center">
              <button
                class="flex items-center justify-center w-full max-w-xs py-3 font-bold text-gray-800 transition-all duration-300 ease-in-out bg-indigo-100 rounded-lg shadow-sm focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
              >
                <div class="p-2 bg-white rounded-full">
                  <svg class="w-4" viewBox="0 0 533.5 544.3">
                    <path
                      d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                      fill="#4285f4"
                    />
                    <path
                      d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                      fill="#34a853"
                    />
                    <path
                      d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                      fill="#fbbc04"
                    />
                    <path
                      d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                      fill="#ea4335"
                    />
                  </svg>
                </div>
                <span class="ml-4"> Sign Up with Google </span>
              </button>

              <button
                class="flex items-center justify-center w-full max-w-xs py-3 mt-5 font-bold text-gray-800 transition-all duration-300 ease-in-out bg-indigo-100 rounded-lg shadow-sm focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
              >
                <div class="p-1 bg-white rounded-full">
                  <svg class="w-6" viewBox="0 0 32 32">
                    <path
                      fill-rule="evenodd"
                      d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0116 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z"
                    />
                  </svg>
                </div>
                <span class="ml-4"> Sign Up with GitHub </span>
              </button>
            </div> -->
            <!--             <div class="my-12 text-center border-b">
              <div
                class="inline-block px-2 text-sm font-medium leading-none tracking-wide text-gray-600 transform translate-y-1/2 bg-white "
              >
                Or sign up with e-mail
              </div>
            </div> -->

            <form class="max-w-sm mx-auto" @submit.prevent="submitLogin">
              <div
                class="form-group"
                :class="{ 'form-group--error': $v.login.email.$error }"
              >
                <label
                  class="mb-2 text-gray-600 Lg:text-lg form__label"
                  for="email"
                >Email / Username
                </label>
                <input
                  id="email"
                  v-model.trim="login.email"
                  class="
                    w-full
                    px-6
                    py-3
                    text-sm
                    font-medium
                    placeholder-gray-500
                    bg-gray-100
                    border border-gray-200
                    rounded-lg
                    lg:px-8 lg:py-4
                    focus:outline-none focus:border-gray-400 focus:bg-white
                    form__input
                  "
                  type="email"
                  placeholder="Email"
                  @input="setEmail($event.target.value)"
                >
              </div>
              <div class="text-sm text-red-500">
                <p v-if="!$v.login.email.required && errorEmail">
                  <span class="text-base mdi mdi-information-outline" />
                  Field is required.
                </p>
                <p v-if="!$v.login.email.email">
                  <span class="text-base mdi mdi-information-outline" />
                  Please insert email in correct format
                </p>
              </div>

              <div class="mt-4 lg:mt-5">
                <label
                  class="mb-2 text-gray-600 lg:text-lg"
                  for="email"
                >Password</label>
                <input
                  v-model="login.password"
                  class="
                    w-full
                    px-6
                    py-3
                    text-sm
                    font-medium
                    placeholder-gray-500
                    bg-gray-100
                    border border-gray-200
                    rounded-lg
                    lg:px-8 lg:py-4
                    focus:outline-none focus:border-gray-400 focus:bg-white
                  "
                  type="password"
                  placeholder="Password"
                  @input="setPassword($event.target.value)"
                >
              </div>

              <div
                v-if="!$v.login.password.required && errorPassword"
                class="text-red-500"
              >
                <span class="text-xl mdi mdi-information-outline" />
                Password is required.
              </div>
              <div v-if="!$v.login.password.minLength" class="text-red-500">
                <span class="text-xl mdi mdi-information-outline" />
                Password must have at least 3 letters.
              </div>

              <!--<div class="flex justify-between mb-2">
                <a
                  href="#"
                  class="text-xs text-blue-600 test-right hover:underline"
                  >Forgot password?
                  </a>
              </div> -->
              <button
                type="submit"
                class="
                  flex
                  items-center
                  justify-center
                  w-full
                  py-2
                  mt-5
                  font-semibold
                  tracking-wide
                  text-gray-100
                  transition-all
                  duration-300
                  ease-in-out
                  bg-indigo-500
                  disabled:bg-indigo-200
                  rounded-lg
                  lg:py-3
                  hover:bg-indigo-700
                  focus:shadow-outline focus:outline-none
                "
                :disabled="$v.$invalid"
              >
                <span v-if="hideLoadingIcon" class="text-xl mdi mdi-login-variant" />
                <span v-else v-html="loadingIcon" />
                <span class="ml-2"> Sign In </span>
              </button>

              <div
                class="
                  mt-2
                  text-center text-gray-600
                  lg:mt-10 lg:text-lg
                  inline
                "
              >
                <span class="inline text-sm">Don't have an account yet?</span>
                <SignUp class="inline cursor-pointer" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="flex-1 hidden text-center bg-[#5A31F4] lg:flex">
        <div
          class="w-full m-12 bg-center bg-no-repeat bg-contain xl:m-16"
          style="
            background-image: url('https://image.winudf.com/v2/image1/Y29tLnNob3BpZnkuYXJyaXZlX2ljb25fMTU4ODA3MTAyOF8wMzI/icon.png?w=&fakeurl=1');
          "
        />
      </div>
    </div>
  </div>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators'
export default {
  name: 'SignIn',
  data () {
    return {
      loadingIcon: `<svg role="status" class="inline mr-3 w-5 h-5 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"></path>
<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"></path>
</svg>`,
      hideLoadingIcon: true,
      errorEmail: false,
      errorPassword: false,
      login: {
        email: '',
        password: ''
      }
    }
  },

  computed: {
    // a computed getter
  },
  validations: {
    login: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(3)
      }
    }
  },
  methods: {
    async submitLogin () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.hideLoadingIcon = false
        try {
          const res = await this.$axios({
            method: 'post',
            url: '/user/login',
            data: this.login
          })
          const data = res.data
          this.$store.commit('CURRENT_TOKEN', data.token)
          this.$store.dispatch('SET_LOGOUT_TIMER', 5 * 60 * 1000)
          this.$router.push('/products')
          this.errorEmail = this.errorPassword = false
          return data
        } catch (error) {
          alert(error.response.data.message)
          this.hideLoadingIcon = true
          return error.response
        }
      } else {
        alert('Fill all field in correct way')
      }
    },
    setEmail (value) {
      this.errorEmail = true
      this.login.email = value
      this.$v.login.email.$touch()
    },
    setPassword (value) {
      this.errorPassword = true
      this.login.password = value
      this.$v.login.password.$touch()
    }
  }
}
</script>

<style lang="scss" scoped>
input {
  border: 1px solid silver;
  border-radius: 4px;
  background: white;
  padding: 5px 10px;
}

.dirty {
  border-color: #5a5;
  background: #efe;
}

.dirty:focus {
  outline-color: #8e8;
}

.error {
  border-color: red;
  background: #fdd;
}

.error:focus {
  outline-color: #f99;
}
</style>
