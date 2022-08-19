<template>
  <div>
    <div class="shopcar">
      <hr />
      <h2>
        我的购物车<span>共{{ length }}件</span>
      </h2>
      <div class="shopcar_one">
        <input
          type="checkbox"
          v-model="isall"
          @change="checkbox = isall ? shopcarlist : []"
        />&nbsp;&nbsp;<span>全选</span>
      </div>
      <div class="shopcar_shop" v-for="item in shopcarlist" :key="item.id">
        <div class="shop_one">
          <input type="checkbox" :value="item" v-model="checkbox" />
          <div class="one_img">
            <img :src="item.img" />
          </div>
          <div class="one_title">
            <p class="title_one">{{ item.title }}</p>
            <p class="title_two">
              颜色:{{ JSON.parse(item.params)[0]
              }}<span>尺寸:{{ JSON.parse(item.params)[1] }}</span>
            </p>
            <span class="title_three">数量:</span>
            <button class="title_thour" @click="even(item)">-</button>
            <span class="title_five">{{ item.num }}</span>
            <button class="title_fix" @click="add(item)">+</button>
          </div>
        </div>
        <div class="shop_two">
          <p class="two_one">￥&nbsp;{{ item.special_price }}</p>
          <p class="two_two">￥&nbsp;{{ item.price }}</p>
          <p class="two_three">删除</p>
        </div>
      </div>
    </div>
    <div class="shopcar_footer">
      <div class="footer_one">
        <p class="one_title">总价</p>
        <p class="one_total">￥{{ total }}</p>
      </div>
      <div class="footer_two">
        <button>结算</button>
      </div>
    </div>
  </div>
</template>

 
<script>
import { getshopcar } from "@/api/Shopcars.js";
import ButtomVue from "../home/buttom/ButtomVue.vue";
export default {
  components: { ButtomVue },
  name: "ShopCars",
  data() {
    return {
      shopcarlist: [],
      length: 0,
      params: [],
      total: 0,
      flag: false,
      /* 选中的数组 */
      checkbox: [],
      /* 全选按钮 */
      isall: false,
    };
  },
  methods: {
    getshopcar() {
        let customer_id = this.$store.getters.id;
        console.log(customer_id);
      getshopcar({customer_id}).then((res) => {
        console.log(res);
        this.shopcarlist = res.data;
      });
      this.length = this.shopcarlist.length;
    },
    /* 购物车数量加一 */
    add(item) {
      item.num += 1;

      console.log(item.num);
    },
    /* 购物车减一 */
    even(item) {
      if (item.num == 1) {
        item = 1;
      }
      item.num -= 1;
    },
    /* 选中商品 */
    state(e) {
      console.log(e);
      this.shopcarlist.some((item) => {
        if ((item.id = e.id)) {
          e.target.checked = this.flag;
        }
      });
      console.log(e.target.checked);
    },
  },
  created() {
    this.getshopcar();
  },
  watch: {
    checkbox: {
      deep: true,
      handler(val) {
        let tod = 0;
        val.forEach((item) => {
          tod = tod + item.special_price * item.num;
        });
        this.total = tod;
        this.checkbox.length === this.shopcarlist.length && (this.isall = true);
      },
    },
  },
};
</script>

<style scoped lang='scss'>
.shopcar {
  width: 1240px;
  margin: 0 auto;
  /*   background-color: red; */
  hr {
    width: 70px;
    margin-top: 20px;
    /*  margin-left: 100px; */
    border-bottom: 5px solid black;
  }
  input {
    width: 15px;
  }
  h2 {
    text-align: left;
    margin-top: 10px;
    width: 100%;
    /*    background-color: blue; */
    /*  margin-left: 100px; */
    span {
      display: inline-block;
      margin-left: 20px;
      font-size: 12px;
      color: #999;
      letter-spacing: 1px;
    }
  }
  .shopcar_one {
    width: 100%;
    text-align: left;
    margin-top: 20px;
  }
  .shopcar_shop {
    /*     background-color: red; */
    border-bottom: 1px solid #e8e8e8;
    margin-top: 20px;
    text-align: left;
    padding-bottom: 10px;
    display: flex;
    div {
      flex-grow: 1;
    }
    .shop_one {
      display: flex;
      justify-content: center;
      align-items: center;
      .one_img {
        margin-left: 50px;
      }
      .one_title {
        text-align: left;
        margin-left: -230px;
        .title_one {
          color: rgba(0, 0, 0, 0.85);
          font-weight: 500;
          font-size: 18px;
        }
        .title_two {
          font-size: 14px;
          color: rgba(0, 0, 0, 0.65);
          span {
            display: inline-block;
            margin-left: 5px;
          }
        }
        .title_three {
          font-size: 14px;
          color: rgba(0, 0, 0, 0.65);
          margin-right: 20px;
        }
        .title_thour,
        .title_fix {
          width: 30px;
          height: 26px;
          background-color: white;
          border: 1px solid #e8e8e8;
        }
        .title_five {
          display: inline-block;
          width: 78px;
          height: 26px;
          margin: 0 5px;
          outline: 1px solid #ccc;
          background-color: #efefef4d;
          text-align: center;
          line-height: 26px;
          font-size: 12px;
        }
        p {
          margin-bottom: 5px;
        }
      }
      img {
        width: 100px;
      }
    }
    .shop_two {
      /*  background-color: green; */
      justify-content: center;
      align-items: center;
      text-align: right;
      line-height: 25px;
      padding-top: 15px;
      padding-right: 50px;
      .two_one {
        font-size: 16px;
        color: #000;
        font-weight: 500;
      }
      .two_two {
        color: #777;
        text-decoration: line-through;
        font-size: 14px;
      }
    }
  }
}
.shopcar_footer {
  width: 100%;
  margin-top: 50px;
  background-color: #3e3e3e;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 70px;
  .footer_one {
    margin-right: 50px;
    color: white;
    .one_title {
      font-size: 12px;
      padding-right: 5px;
      padding-bottom: 5px;
    }
    .one_total {
      font-size: 20px;
    }
  }
  .footer_two {
    margin-right: 150px;
    button {
      width: 150px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      background-color: #ed4025;
      color: #fff;
      border: none;
    }
  }
}
</style>