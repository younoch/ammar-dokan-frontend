<template>
  <div>
    <SocialHead
    title="Ammar Dokan"
    description=" Please checkout my shop"
/>
    <Login />
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: 'static/favicon/preview.png'
    }
  },
  name: "LogResistraion",
  middleware: "check-auth",
};
</script>