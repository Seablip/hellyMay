<template>
  <div>
    <itemcontainerVue father-component="home" />
  </div>
</template>

<script>
import itemcontainerVue from "../../components/itemcontainer.vue";
export default {
  name: "home",
  components: {
    itemcontainerVue
  }
};
</script>
