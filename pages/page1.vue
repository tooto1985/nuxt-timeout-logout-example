<template>
  <div>
    <h2>page1</h2>
    <div>
      {{ seconds }}
    </div>
  </div>
</template>

<script>
import timeout from "../mixins/timeout";
export default {
  mixins: [timeout],
  data() {
    return {
      timeoutEnabled: false
    }
  }
};
</script>