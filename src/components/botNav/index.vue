<template>
  <div class="botNav">
    <div class="content">
      <!-- <router-view></router-view> -->
      <div class="content-item">
        <router-link to="/about">关于我们</router-link>
      </div>
      <div class="content-item">
        <router-link to="/consulting">咨询服务</router-link>
      </div>
      <div class="content-item">
        <router-link to="/partner">合租伙伴查询</router-link>
      </div>
      <div class="content-item">
        <router-link to="/clause">服务条款</router-link>
      </div>
      <div class="content-item">
        <router-link to="/privacy">隐私政策</router-link>
      </div>
      <div class="content-item">
        <router-link to="/ministry">服务中心</router-link>
      </div>
      <div class="content-item">
        <router-link to="/recruitment">招聘信息</router-link>
      </div>
      <div class="content-item">
        <router-link to="/world">全球的</router-link>
      </div>
    </div>
    <btn-nav></btn-nav>
  </div>
</template>

<script>
import BtnNav from './BtnNav.vue';

export default {
  components: { BtnNav },
  name: "BotNav",
};
</script>

<style lang="scss" scoped>
.botNav {
  width: 100%;
  padding-top: 90px;
  .content {

    height: 60px;
    background-color: #848484;
    margin: 0 auto;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC",
      "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial,
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

    line-height: 60px;
    .content-item {
      width: 110px;
      height: 60px;
      display: inline-block;
      &:hover{
        background-color: #636262;
        a{
          color: rgb(209,209,202);
        }
      }
      a {
        font-size: 14px;
        color: #fff;
      }
    }
  }
}
</style>