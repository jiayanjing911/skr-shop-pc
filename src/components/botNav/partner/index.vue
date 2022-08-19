<!-- 合租伙伴查询 -->
<template>
  <div class="partner">
    <div class="partner-our">
      <span>营销联盟</span>
    </div>
    <div class="partner-img">
      <img
        src="../../../assets/images/partner.jpg"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Partner",
};
</script>

<style lang="scss" scoped>
.partner {
  width: 100%;

  .partner-our {
    box-sizing: border-box;
    height: 200px;
    width: 1342px;
    padding-top: 80px;
    margin: 0 auto;
    span {
      font-size: 44px;
      line-height: 100%;
    }
  }
  .partner-img {
    margin: 0 auto;
    img {
      width: 1240px;
      height: 500px;
    }
  }
}
</style>