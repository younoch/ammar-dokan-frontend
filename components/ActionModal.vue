
<template>
  <div
    class="fixed top-0 left-0 z-10 flex items-center justify-center w-full h-full "
    v-if="open"
  >
    <div
      class="absolute w-full h-full bg-gray-900 opacity-50"
      @click="close"
    ></div>

    <div class="absolute max-h-full" :class="maxWidth">
      <div class="container overflow-hidden bg-white md:rounded-lg">
        <div class="flex items-center justify-between px-4 py-3 mb-2 bg-indigo-600">
          <h3 class="font-semibold text-white">{{ title }}</h3>
          <div
            @click="close"
            class="flex text-2xl leading-none text-white cursor-pointer select-none"
          >
            &#215;
          </div>
        </div>
        <div class="flex items-start justify-between px-4 py-4">
          <div class="max-h-full">
            <!-- Content Slot-->
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: true,
    };
  },
  props: {
    type: {
      type: String,
      default: "info",
    },
    title: {
      type: String,
      default: "",
    },
    header: {
      type: String,
      required: false,
      default: "",
    },
    width: {
      type: String,
      default: "full",
      validator: (value) =>
        ["xs", "sm", "md", "lg", "full"].indexOf(value) !== -1,
    },
  },
  methods: {
    close() {
      this.open = false;
      this.$emit("close");
    },
  },
  computed: {
    maxWidth() {
      switch (this.width) {
        case "xs":
          return "max-w-lg";
        case "sm":
          return "max-w-xl";
        case "md":
          return "max-w-2xl";
        case "lg":
          return "max-w-3xl";
        case "full":
          return "max-w-full";
      }
    },
    shade() {
      switch (this.type) {
        case "info":
          return "gray";
        case "warning":
          return "yellow";
        case "success":
          return "teal";
        case "danger":
          return "red";
      }
    },
    color() {
      return `text-${this.shade}-600`;
    },
  },
  mounted() {
    const onEscape = (e) => {
      if (e.key === "Esc" || e.key === "Escape") {
        this.close();
      }
    };

    document.addEventListener("keydown", onEscape);

    this.$once("hook:beforeDestroy", () => {
      document.removeEventListener("keydown", onEscape);
    });
  },
};
</script>
