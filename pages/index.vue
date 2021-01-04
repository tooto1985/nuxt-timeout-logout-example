<template>
  <div>
    <h1>Homepage</h1>
    <input
      type="button"
      value="page1 (timeoutEnabled=false)"
      @click="$router.push('/page1')"
    />
    <input
      type="button"
      value="page2 (timeoutEnabled=true)"
      @click="$router.push('/page2')"
    />
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
