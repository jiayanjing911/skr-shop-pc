<template>
  <div class="list">
    <div class="list_12">
      <list-top :listTop="getmsg"></list-top>
      <list-mid :listMiddle="getmsg"></list-mid>
    </div>
    <div class="list_3">
      <list-bottom :listBottom="getmsg"></list-bottom>
    </div>
  </div>
</template>

<script>
import ListTop from "./childComps/ListTop.vue";
import ListBottom from "./childComps/ListBottom.vue";
import ListMid from "./childComps/ListMid.vue";
export default {
  name: "BestList",
  components: {
    ListTop,
    ListMid,
    ListBottom,
  },
  props: {
    getmsg: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      total: 0,
      shoplist:[],
      page_total:1
    };
  },
};
</script>

<style lang="scss" scoped>
.list_12 {
  margin-top: 90px;
  padding: 4% 20px 50px 20px;
  background-color: #f2f2f2;
}
</style>