<template>
  <div>
    <h2>page1</h2>
    <div>
      {{ seconds }}
    </div>
    <input type="button" value="Homepage" @click="$router.push('/')" />
  </div>
</template>

<script>
import timeout from "../mixins/timeout";
export default {
  mixins: [timeout],
  data() {
    return {
      timeoutEnabled: false,
    };
  },
};
</script>