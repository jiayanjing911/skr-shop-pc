<template>
  <div class="shopCar">
    <h1>我的购物车</h1>
    <div class="allin">
      <input style="margin-left: 10px" type="checkbox" />&emsp;全选
    </div>

    <div class="list" v-for="(shopcar, index) in shopcarlist" :key="index">
      <ul class="shopcar">
        <li>
          <input type="checkbox" />
        </li>
        <li>
          <img :src="shopcar.img" alt="" />
        </li>
        <li>
          <!-- title -->
          <p>{{ shopcar.title }}</p>
          <!-- 颜色  尺码  -->
          <span class="color">颜色：{{ shopcar.param[0] }}</span
          >&nbsp;;
          <span>尺码：{{ shopcar.param[1] }}</span>
          <div class="nums">
            <span>数量：</span>
            <el-button style="display: inline-block" @click="reduce()"
              >-</el-button
            >
            <!-- num -->
            <input type="text" v-model="shopcar.num" />
            <el-button style="display: inline-block" @click="add()"
              >+</el-button
            >
          </div>
        </li>
        <li>
          <!-- 现价 -->
          <p>现价：&nbsp;{{ shopcar.price }}&nbsp;￥</p>
          <!-- 原价 -->
          <p>原价：&nbsp;{{ shopcar.special_price }}&nbsp;￥</p>
          <!-- 删除 -->
          <p>删除</p>
        </li>
      </ul>
    </div>
    <footer>
      <ul class="footer">
        <li>总价：￥</li>
        &emsp;|&emsp;
        <li>
          <el-button
            type="danger"
            style="padding: 10px 30px"
            @click="$router.push('/buyShop')"
            >结算</el-button
          >
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
import { getShopCar } from "@/api/shopcar";
export default {
  name: "ShopCar",
  data() {
    return {
      shopcarlist: [
        {
          id: 1,
          title: "安踏女服星标系列国旗中袖半袖短T恤短t",
          spu_id: 3,
          param: ["纯净白", "s"],
          num: 1,
          img: "https://img.fishfay.com/shopgoods/4/162030502/162030502-2-1.jpg",
          price: 299.0,
          special_price: 449.0,
        },
        {
          id: 1,
          title: "安踏女服星标系列国旗中袖半袖短T恤短t",
          spu_id: 3,
          param: ["纯净白", "s"],
          num: 5000000000000,
          img: "https://img.fishfay.com/shopgoods/4/162030502/162030502-2-1.jpg",
          price: 299.0,
          special_price: 449.0,
        },
        {
          id: 1,
          title: "安踏女服星标系列国旗中袖半袖短T恤短t",
          spu_id: 3,
          param: ["纯净白", "s"],
          num: 1,
          img: "https://img.fishfay.com/shopgoods/4/162030502/162030502-2-1.jpg",
          price: 299.0,
          special_price: 449.0,
        },
      ],
    };
  },
  methods: {
    getShopCar() {
      let customer_id = this.$store.gitters.id;
      getShopCar({ customer_id }).then((data) => {
        this.shopcarlist = data.data;
      });
    },

    // 减少商品数量
    reduce() {},
    // 增加商品数量
    add() {},
  },
  created() {
    this.getShopCar();
  },
};
</script>

<style lang="scss" scoped>
.shopCar {
  width: 1240px;
  background-color: white;
  margin: 20px auto;
  h1 {
    display: flex;
    margin-left: 10px;
    line-height: 80px;
    position: relative;
  }
  h1::before {
    content: "";
    width: 110px;
    height: 5px;
    background-color: #000;
    position: absolute;
    top: 10px;
    left: 0px;
  }
  .allin {
    display: flex;
    line-height: 43px;
    margin-left: 10px;
    input {
      margin-top: 15px;
    }
  }
  .list {
    width: 1200px;
    height: 210px;
    margin: 0 auto;

    .shopcar {
      height: 200px;
      background-color: aliceblue;
      border-radius: 10px;
      li:nth-child(1) {
        line-height: 200px;
      }

      li {
        float: left;
        width: 200px;
        height: 200px;
        img {
          width: 190px;
          height: 190px;
          margin: 5px auto;
          border-radius: 10px;
        }
      }
      li:nth-child(3) {
        text-align: left;
        width: 500px;
        p {
          font-size: 20px;
          margin-top: 50px;
          margin-left: 50px;
          font-weight: 900;
        }
        .color {
          margin-left: 50px;
        }
        span {
          font-weight: 500;
          color: rgba(0, 0, 0, 0.5);
        }
        .nums {
          width: 300px;
          display: flex;
          margin-left: 50px;
          span {
            margin-left: 0px;
            line-height: 40px;
          }
          input {
            text-align: center;
            overflow: hidden;
            width: 80px;
            height: 40px;
            line-height: 40px;
            font-size: 20px;
            background-color: #fff;
            border: 1px solid rgb(124, 124, 124);
          }
        }
      }
      li:nth-child(4) {
        text-align: right;
        width: 300px;
        p {
          margin-right: 50px;
        }
        p:nth-child(1) {
          margin-top: 60px;
          color: palevioletred;
          font-size: 20px;
        }
        p:nth-child(2) {
          text-decoration-line: line-through;
        }
        p:nth-child(3) {
          font-size: 18px;
          color: blue;
          cursor: pointer;
        }
      }
    }
  }
  footer {
    width: 1200px;
    height: 60px;
    background-color: #000;
    color: #fff;
    margin: 20px auto;
    .footer {
      margin-left: 960px;
      li {
        display: inline-block;
        margin-top: 12px;
      }
    }
  }
}
</style>