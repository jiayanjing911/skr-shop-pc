<template>
  <div class="orderlist">
    <div class="order-head">
      <div><h3>最近订单</h3></div>
      <div><p>more+</p></div>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%"
      height="500"
      row-class-name="ordersrow"
      header-row-class-name="orderstitlerow"
      @row-click="orderDetail"
    >
      <el-table-column
        fixed
        prop="order_create_time"
        label="订单日期"
        width="180"
      >
      </el-table-column>
      <el-table-column prop="code" label="订单号" width="180">
      </el-table-column>
      <el-table-column prop="skus[0].title" label="商品信息"> </el-table-column>
      <el-table-column prop="skus[0].num" label="数量"> </el-table-column>
      <el-table-column prop="skus[0].price" label="商品价格"> </el-table-column>
      <el-table-column prop="status" label="进度"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getUserOrder } from "@/api/user.js";
export default {
  name: "OrderUserList",
  data() {
    return {
      orderData: [],
    };
  },
  methods: {
    getUserOrder() {
      let customer_id = this.$store.getters.id;
      console.log(customer_id);
      const data = {
        customer_id: customer_id||7,
      };
      return getUserOrder(data).then((res) => {
        console.log(res);
        this.orderData = res.data;
      });
    },
    orderDetail(row, comuln, event) {
      let res = this.orderData.filter((item, index) => {
        return item.id == row.id;
      });
    //   console.log(res);
      this.$router.push(
        `/orderdetail/${row.id}/${res[0].status}`
      );
    },
  },
  created() {
    this.getUserOrder();
  },
  computed: {
    tableData() {
      let str = JSON.stringify(this.orderData);
      let arr = JSON.parse(str);
      let res = arr.filter((item) => {
        switch (item.status) {
          case 0:
            item.status = "待支付";
            break;
          case 1:
            item.status = "待发货";
            break;
          case 2:
            item.status = "已发货";
            break;
          case 3:
            item.status = "已完成";
            break;
        }
        return item;
      });
      return res;
    },
  },
};
</script>

<style>
.orderlist {
  width: 100%;
  padding: 0;
  margin: 20px auto;
}
.order-head {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #000;
}
.ordersrow {
  height: 60px;
}
.orderstitlerow {
  height: 80px;
}
</style>