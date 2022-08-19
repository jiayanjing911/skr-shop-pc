<template>
  <div class="orderDetail">
    <div class="orderstatus">
      <div class="os-title">
        <div class="order_id">
          <p>订单号：{{ orderDetail.code }}</p>
        </div>
        <div class="order_time">{{ handlerDate }}</div>
      </div>
      <div class="os-content">
        <div class="order_process">
          <el-steps :active="orderDetail.status" simple="">
            <el-step title="待支付" icon="el-icon-upload"></el-step>
            <el-step title="待发货" icon="el-icon-upload">
              <svg-icon slot="icon" icon-class="022-货车发货" class-name="truck"></svg-icon>
            </el-step>
            <el-step title="等待收货" icon="el-icon-picture">
              <svg-icon slot="icon" icon-class="收件箱,空盒子" class-name="truck"></svg-icon>
            </el-step>
            <el-step title="已完成" icon="el-icon-picture"></el-step>
          </el-steps>
        </div>
        <div class="order_pay_or_cancle">
          <p><el-button type="danger" @click="payOrder">立即付款</el-button></p>
          <p>
            <el-button type="text" @click="deleteOrder">取消订单</el-button>
          </p>
        </div>
      </div>
    </div>
    <div class="shopinfo">
      <div class="si-title">
        <span>商品清单</span>
      </div>
      <div class="si-content">
        <ul v-for="(item, index) in this.orderDetail.skus" :key="index">
          <li>
            <img :src="JSON.parse(item.imgs)[0].small" alt="" />
          </li>
          <li class="info">
            <h3>{{ item.title }}</h3>
            <p>颜色：{{ JSON.parse(item.param)[0] }}111</p>
           
            <p>数量：{{ item.num }}</p>
          </li>
          <li class="price">
            <span>￥{{ item.actual_price }}</span>
            <p>￥{{ item.price }}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="orderinfo">
      <ul class="consignee">
        <li>收获人信息</li>
        <li>
          <p>姓名：{{ this.orderDetail.name }}</p>
        </li>
        <li>
          <p>电话：{{ this.orderDetail.tel }}</p>
        </li>
        <li>
          <p>地址：{{ this.orderDetail.address }}</p>
        </li>
      </ul>
      <ul class="distribution">
        <li>配送信息</li>
        <li>
          <p>配送方式：{{ "------" }}</p>
        </li>
        <li>
          <p>运单号：{{ "-------" }}</p>
        </li>
        <li>
          <p>运费：￥{{ "---" }}</p>
        </li>
      </ul>
      <ul class="payment">
        <li>付款信息</li>
        <li>
          <p>商品数量：{{ num }}</p>
        </li>
        <li>
          <p>商品总额：￥{{ price }}</p>
        </li>
        <li>
          <p>应付金额：￥{{ actual_price }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getOrderDetail, payOrder, deleteOrder } from "@/api/user.js";
export default {
  name: "orderDetail",
  data() {
    return {
      orderDetail: {},
    };
  },
  methods: {
    getOrderDetail() {
      let data = {
        order_id: this.$route.params.order_id,
        status: this.$route.params.status,
      };
      console.log(data);
      getOrderDetail(data).then((res) => {
        console.log(res);
        this.orderDetail = res.data;
        console.log(this.orderDetail);
      });
    },
    // 时间戳：1637244864707
    /* 时间戳转换为时间 */
    timestampToTime(timestamp) {
      timestamp = timestamp ? timestamp : null;
      let date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      let Y = date.getFullYear() + "-";
      let M =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-";
      let D =
        (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + " ";
      let h =
        (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":";
      let m =
        (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
        ":";
      let s =
        date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
      return Y + M + D + h + m + s;
    },
    payOrder() {
      let data = {
        outTradeNo: `${this.orderDetail.code || "无"}`,
        totalAmount: this.actual_price || "无",
        subject: `来自${this.orderDetail.address || "未知地址"}的订单`,
        body: this.orderDetail || "无",
      };
      console.log(data);
      payOrder(data).then((res) => {
        console.log(res);
      });
    },
    deleteOrder() {
      let data = {
        id: this.orderDetail.id,
      };
      this.$confirm("此操作将删除本订单, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true,
      })
        .then(() => {
          deleteOrder(data).then((res) => {
            console.log(res);
            this.$message({
              type: "success",
              message: "删除成功!",
            });
            this.$router.push("/my");
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
  created() {
    this.getOrderDetail();
  },
  computed: {
    handlerDate() {
      let str = JSON.stringify(this.orderDetail || []);
      let obj = JSON.parse(str);
      let res = this.timestampToTime(
        obj.update_time && JSON.parse(obj.update_time)
      );
      return res;
    },
    num() {
      let arr = this.orderDetail.skus || [];
      let res = 0;
      arr.filter((item) => {
        let num = item.num;
        res += num;
        return res;
      });
      // console.log(res);
      return res;
    },
    price() {
      let arr = this.orderDetail.skus || [];
      let res = 0;
      arr.filter((item) => {
        let num = item.price;
        res += num;
        return res;
      });
      // console.log(res);
      return res;
    },
    actual_price() {
      let arr = this.orderDetail.skus || [];
      let res = 0;
      arr.filter((item) => {
        let num = item.actual_price;
        res += num;
        return res;
      });
      // console.log(res);
      return res;
    },
    outTradeNo() {
      return res;
    },
  },
};
</script>

<style lang="scss" scoped >
.orderDetail {
  width: 60vw;
  min-width: 800px;
  margin: 30px auto;
}
.orderstatus {
  .os-title {
    margin-top: 4px;
    padding: 0 20px;
    height: 50px;
    font-size: 16px;
    line-height: 50px;
    background-color: #f5f5f5;
    display: flex;
    justify-content: space-between;
  }
  .os-content {
    width: 100%;
    padding: 20px;
    border: 1px solid #cccccc;
    box-sizing: border-box;
    display: flex;
    .order_process {
      width: 80%;
      padding-top: 40px;
      margin-right: 20px;
    }
    .order_pay_or_cancle {
      border-left: 1px solid #ccc;
      width: 20%;
      padding-top: 40px;
      text-align: center;
    }
  }
}
.shopinfo {
  width: 100%;
  font-size: 15px;
  .si-title {
    margin-top: 4px;
    padding: 0 20px;
    height: 50px;
    font-size: 16px;
    line-height: 50px;
    background-color: #f5f5f5;
    display: flex;
    justify-content: space-between;
  }
  .si-content {
    width: 100%;
    padding: 20px;
    border: 1px solid #cccccc;
    box-sizing: border-box;
    ul {
      cursor: pointer;
      height: 120px;
      display: flex;
      li > img {
        width: 100px;
        height: 100px;
        margin: 5px 10px;
      }
      .info {
        width: 60%;
        padding: 15px 10px;
        text-align: left;
        h3 {
          color: rgb(0, 0, 0);
          font-weight: 600;
        }
        p {
          margin-top: 5px;
          color: #999999;
        }
      }
      .price {
        padding: 5px;
        width: 20%;
        padding: 30px 10px;
        text-align: end;
        span {
          font-size: 16px;
          font-weight: bolder;
        }
        p {
          font-size: 14px;
          color: #4c4c4c;
          -webkit-text-decoration: line-through #999999;
          text-decoration: line-through #999999;
        }
      }
    }
  }
}
.orderinfo {
  display: flex;
  margin-top: 20px;
  padding: 40px;
  border: 1px solid #cccccc;
  text-align: left;
  font-size: 14px;
  line-height: 30px;
  .consignee {
    width: 50%;
    li > p {
      color: #999999;
      margin-bottom: 5px;
    }
  }
  .distribution {
    width: 20%;
    li > p {
      color: #999999;
      margin-bottom: 5px;
    }
  }
  .payment {
    width: 30%;
    padding-left: 150px;
    li > p {
      color: #999999;
      margin-bottom: 5px;
    }
  }
}
.truck{
  width: 200%;
  height: 200%;
}
</style>