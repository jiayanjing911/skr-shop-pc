<template>
  <div class="btnnav" style="clearfix">
    <el-row class="el-row-box">
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <div>
            <span>网站名称</span>
            <br />
            <a>© 2009-2021 Stride.fun 版权所有ICP主体备案号: 苏ICP备2021007111号</a>
            <br />
            <span>网站备案信息</span>
            <br />
            <span>
              <img src="../../assets/image/put_on_records.png" alt />
              <a>苏公网安备 3201140210859号</a>
            </span>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          <div class="rigth-left-border">
            <div>
              <span>消费者损害赔偿保险</span>
              <br />
              <span>客户在一现金支付安全交易时可以是使用Wconcept订阅的 消费者损害赔偿保险服务</span>
              <br />
              <span>赔偿对象: 不送/退货,拒绝赔偿/商场破产</span>
              <br />
              <span>检查服务订阅事实</span>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'BtnNav'
};
</script>

<style lang="scss" scoped>
.btnnav {
  width: 100vm;
  height: 80vm;
  color: rgb(103, 103, 103);

  // 两边盒子的共同属性
  .el-row {
    width: 80vm;
    height: 130px;
    margin-top: 50px;

    .bg-purple {
      margin: 0 auto;
      text-align: left;
      width: 50%;
      height: 50%;
    }
    .bg-purple-light {
      width: 50%;
      height: 50%;
      border-left: 1px solid #000;

      .rigth-left-border {
        width: 150%;
        text-align: left;
        margin-left: 40%;
      }
    }
    .el-row-box {
      margin-top: 50px;
    }
  }
}
</style>
