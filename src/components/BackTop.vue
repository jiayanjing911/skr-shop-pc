<template>
  <div class="backtop">
    <div class="scroll">
      <div id="carList" @click="drawer = true" type="primary">
        <img src="../assets/image/购物车.png" alt />
      </div>
      <div id="service" @click="service = true" type="primary">
        <img src="../assets/image/客服优先.png" alt />
      </div>
      <div id="toTop" v-if="isToTop" @click="toTop(step)">
        <img src="../assets/image/方向-向上.png" alt />
      </div>
      <div id="toBottom" v-if="isToBottom" @click="toBottom(step)">
        <img src="../assets/image/方向-向下.png" alt />
      </div>
    </div>
    <!-- 购物车 -->
    <el-drawer
      title="我是标题"
      :visible.sync="drawer"
      :with-header="false"
      size="20%"
    >
      <div>
        <div class="drawerHeader">
          <span>购物车</span>
        </div>

        <div class="drawercontent">
          <span class="spanCard">
            <span>共 {{ carCount }} 件宝贝</span>
            <button>
              <router-link to="/shopCar">管理</router-link>
            </button>
          </span>
        </div>
        <!-- 购物车详情 -->
        <h2 v-if="isShow">你还没有去登录呢!</h2>

        <div
          class="shopListCar"
          v-for="(item, index) in shopCarList"
          :key="index"
        >
          <div class="shopImg">
            <img :src="item.img" />
          </div>
          <div class="details">
            <p class="showTitle">{{ item.title }}</p>
            <p class="shopCount">数量: {{ item.num }}</p>
            <p class="detailsSpan">
              <span>¥ {{ item.special_price }} </span>
              <span class="discoun_price">¥ {{ item.price }}</span>
            </p>
          </div>
        </div>
      </div>
    </el-drawer>
    <!-- 客服 -->
    <el-drawer
      title="我是标题"
      :visible.sync="service"
      :with-header="false"
      size="20%"
      class="bxo"
    >
      <div class="btnInput">
        <div class="drawerHeader">skr线上</div>
        <div class="drawerLogin">
          <h3>客服将尽快回复您,请等待!</h3>
          <el-input
            type="textarea"
            :rows="2"
            placeholder="客服将尽快回复您"
            v-model="textarea"
            class="service_input"
            clearable
            @change="service_change"
          >
          </el-input>
        </div>
      </div>
    </el-drawer>
  </div>
</template>
<script>
import { getShopCar } from "../api/shopcar.js";
export default {
  name: "BackTop",
  props: {
    step: {
      //此数据是控制动画快慢的
      type: Number,
      default: 50,
    },
  },
  data() {
    return {
      // 向上向下
      isToTop: true,
      isToBottom: true,
      drawer: false, // 购物车
      service: false, //客服
      shopCarList: [],
      carCount: 0,
      textarea: "",
    };
  },
  methods: {
    // 返回顶部
    toTop(i) {
      //参数i表示间隔的幅度大小，以此来控制速度
      document.documentElement.scrollTop -= i;
      if (document.documentElement.scrollTop > 0) {
        var c = setTimeout(() => this.toTop(i), 16);
      } else {
        clearTimeout(c);
      }
    },
    // 返回底部
    toBottom(i) {
      var clientHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      var scrollHeight = document.documentElement.scrollHeight;
      // var badyHeiget = document.bady.scrollHeight

      // console.log(clientHeight);
      var height = scrollHeight - clientHeight; //超出窗口上界的值就是底部的scrolTop的值
      document.documentElement.scrollTop += i;
      if (document.documentElement.scrollTop < height) {
        var c = setTimeout(() => this.toBottom(i), 16);
      } else {
        clearTimeout(c);
      }
    },
    // 购物车信息
    /**
     * 用户登录后id存储于store中,获取用户id显示购物车列表
     */
    getShopList() {
      console.log(this.$store.state.user.id);
      let customer_id = this.$store.getters.id;
      getShopCar({ customer_id }).then((data) => {
        console.log(data);
        if (!data.code === 200)
          return this.$message.error("你还没登录,请前往登录,获取购物车列表");
        this.carCount = data.data.length;
        this.shopCarList = data.data;
        return (this.isShow = false); // 控制显示输出
        // console.log(this.shopCarList);
      });
      this.isShow = true;
    },
    service_change() {
      this.textarea = "";
      this.$message.success("您的留言小的已经收到,请等待小的与您练习");
    },
  },
  // 返回顶/底部
  created() {
    var vm = this;
    window.onscroll = function () {
      let h = document.body.scrollHeight;
      let H = document.documentElement.scrollTop;
      let height =
        document.documentElement.clientHeight || document.body.clientHeight;
      // console.log(h, H, H + height);
      if (H < 60) {
        vm.isToTop = false;
        vm.isToBottom = true;
      } else if (H + height > h - 60) {
        vm.isToTop = true;
        vm.isToBottom = false;
      } else {
        vm.isToTop = true;
        vm.isToBottom = true;
      }
    };
  },
  // 解构调用
  created() {
    this.getShopList();
  },
};
</script>
<style scoped lang="scss">
.scroll {
  position: fixed;
  right: 20px;
  bottom: 10px;
  width: 45px;
  // height: 90px;
  cursor: pointer;
  // display: none;
  z-index: 100;
  // display: block;
  color: #fff;

  & > div {
    width: 50px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 35px;
    font-family: "黑体";
    background-color: black;

    &:hover {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
}
img {
  width: 20px;
}

.drawerHeader {
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  background-color: #000;
  color: #fff;
}
.drawercontent {
  .spanCard {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    background-color: #ccc;
    padding: 0 10px;
    font-size: 12px;
    button {
      width: 50px;
      height: 20px;
      border: 0;
      border-radius: 5px;
      outline: none;
      cursor: pointer;
    }
  }
}
.shopListCar {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;

  .shopImg {
    float: left;
    margin-right: 15px;

    img {
      width: 70px;
      margin-left: 20px;
    }
  }
  .details {
    float: left;
    text-align: left;
    .showTitle {
      height: 20px;
      width: 130px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 16px;
    }
    .shopCount {
      color: rgb(51, 48, 48);
      font-size: 14px;
    }
    .detailsSpan {
      .discoun_price {
        text-decoration-line: line-through;
        color: #bdb6b3;
      }
    }
  }
}

/* 备用 */
.bxo {
  height: 431px;
  top: 40%;
  line-height: 101px;
  bottom: 0px;
  text-align: center;
}
.service_input {
  top: 180px;
}
</style>
