<!-- 关于我们 -->
<template>
  <div class="about">
    <div class="about-our">
      <span>关于我们</span>
    </div>
    <div class="about-img">
      <img
        src="../../../assets/images/life.gif"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style lang="scss" scoped>
.about {
  width: 100%;

  .about-our {
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
  .about-img {
    margin: 0 auto;
    img {
      width: 1070px;
      height: 841px;
    }
  }
}
</style>