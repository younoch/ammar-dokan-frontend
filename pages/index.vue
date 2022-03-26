<template>
  <div>
    <Login />
  </div>
</template>

<script>
export default {
  name: "LogResistraion",
  middleware: "check-auth",
};
</script>