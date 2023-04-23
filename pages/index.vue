<template>
  <div>
    <AppMain> </AppMain>
  </div>
</template>

<script setup lang="ts">
const { pending, data: count } = useLazyAsyncData("count", () =>
  $fetch("/api/count")
);
watch(count, (newCount) => {
  console.log("触发了");
  // 因为count一开始是空的，所以没有访问权限
  // to its contents immediately, but you can watch it.
});
// definePageMeta({
//   middleware: "auth",
// });
</script>

<style></style>
