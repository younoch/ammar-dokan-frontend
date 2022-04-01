<template>
  <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <p class="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase sm:text-center">
      20 Nov 2020
    </p>
    <div class="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
      <div class="mb-4">
        <a href="/" aria-label="Article" class="inline-block max-w-lg font-sans text-3xl font-extrabold leading-none tracking-tight text-black transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-4xl">
          The quick, brown fox jumps over a lazy dog
        </a>
      </div>
      <p class="text-base text-gray-700 md:text-lg">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.
      </p>
    </div>
    <div class="mb-10 sm:text-center">
      <a href="/" aria-label="Author" class="inline-block mb-1">
        <img alt="avatar" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" class="object-cover w-10 h-10 rounded-full shadow-sm" />
      </a>
      <div>
        <a href="/" aria-label="Author" class="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700">Mohammad Younoch</a>
        <p class="text-sm font-medium leading-4 text-gray-600 mt-3">Frontend Developer (Vue/Nuxt)</p>
        <p class="text-sm font-medium leading-4 text-gray-600"> Developer eXperience Hub</p>
      </div>
    </div>
    <div class="sm:text-center">
      <a href="/" aria-label="" class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">Read more</a>
    </div>
  </div>
</template>
<script>
export default {
     name: "about-us",
    middleware: ['check-auth','auth'],
};
</script>