<template>
  <div>
    <itemcontainerVue father-component="item" />
  </div>
</template>

<script>
import itemcontainerVue from "../../components/itemcontainer.vue";
export default {
  name: "item",
  components: {
    itemcontainerVue
  },
  mounted() {
    // 代码插入页面后就开始计时
    this.$store.commit("REMBER_TIME");
  }
};
</script>
