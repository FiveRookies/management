<template style="height: 100%; margin: 0">
        <div id="container1" style="height: 100%"></div>
</template>

<script>
import initpie from "@/assets/js/pie-simple.js";
export default {
  name: "pie-simple",
  mounted() {
    initpie.initpie();
  }
};
</script>

<style scoped>
/* .container {
    height: 100%;
} */
</style>


