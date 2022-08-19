<template>
  <div class="details">
    <div class="details_title">
      <span @click="$router.go(-1)"> Go back</span>
      <span> Go forward</span>
    </div>
    <div class="details_div">
      <div class="details_img">
        <img
          :src="ig.small"
          v-for="(ig, index) in img"
          :key="index"
          @click="setimg(ig.small)"
        />
      </div>
      <div class="details_magnifying">
        <magnifying :skuImageList="imgs" :sup="img[0].small"></magnifying>
      </div>
      <div class="details_introduction">
        <p class="ntroduction_one">{{ detailsshop[0].title }}</p>
        <p class="ntroduction_two">
          ￥{{ 349 }}<span>￥{{ 399 }}</span>
        </p>
        <div class="ntroduction_title">
          <p>官方商城全场包邮</p>
        </div>
        <!-- 图片 -->
        <div class="ntroduction_img">
          <img
            :src="ig.small"
            v-for="(ig, index) in img"
            :key="index"
            @click="setimg(ig.small, index)"
          />
        </div>
        <!-- 尺码 -->
        <div class="details_select">
          <!-- 第一个尺寸框 -->
          <div class="select_one">
            <p>尺寸:</p>
            <el-select v-model="value" placeholder="尺码">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
          <!-- 第二个尺寸框 -->
          <div class="select_two">
            <p>数量:</p>
            <el-input-number
              v-model="num"
              controls-position="right"
              :min="1"
              :max="10"
            ></el-input-number>
          </div>
        </div>
        <!-- 按钮 -->
        <div class="details_btn">
          <button class="btnone" @click="addshopcar">加入购物车</button>
          <button class="btntwo">立即购买</button>
        </div>
      </div>
    </div>
    <div class="details_comments">
      <div class="comments_underline">
        <button
          v-for="(its, index) in comments"
          :key="index"
          @click="getits(index)"
          :class="{ active: index == 0 }"
        >
          {{ its }}
        </button>
      </div>
      <img :src="igh.small" v-for="(igh, index) in img" :key="index" />
    </div>
    <div class="details_comments">
      <div class="comments_underline">
        <button
          v-for="(its, index) in comments"
          :key="index"
          @click="getits(index)"
          :class="{ active: index == 1 }"
        >
          {{ its }}
        </button>
      </div>

      <p>产品满意度</p>
      <p>这是购买者对产品的评价</p>

      <div class="comments_elrate">
        <el-rate
          v-model="statevalue"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{value}"
        >
        </el-rate>
      </div>
    </div>
    <div class="details_comments">
      <div class="comments_underline">
        <button
          v-for="(its, index) in comments"
          :key="index"
          @click="getits(index)"
          :class="{ active: index == 2 }"
        >
          {{ its }}
        </button>
      </div>
      <div class="comments_btn"><button>商品咨询</button></div>
      <div class="comments_ul">
        <ul>
          <li v-for="(itq, index) in message" :key="index">
            <span class="span_one">{{ itq.title }}</span>
            <span class="span_two">{{ index }}</span>
            <span>{{ itq.name }}</span>
            <span class="ul_span">{{ itq.time }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="details_comments">
      <div class="comments_underline">
        <button
          v-for="(its, index) in comments"
          :key="index"
          @click="getits(index)"
          :class="{ active: index == 3 }"
        >
          {{ its }}
        </button>
      </div>
      <div class="clear">
        <div class="DTcomponent_one">
          <p class="one_title">配送/交换/退货/售后服务相关注意事项</p>
          <p class="two_title">
            商品的详细说明中包含配送/更换/退货/取消相关的指南时，会优先适用于下列说明事项:
          </p>
        </div>
        <DTcomponent></DTcomponent>
      </div>
    </div>
  </div>
</template>

<script>
import { getdetailspu, addShopCar } from "@/api/details.js";
import magnifying from "@/components/zoom/index.vue";
import ButtomVue from "../home/buttom/ButtomVue.vue";
import DTcomponent from "@/components/details/index.vue";
export default {
  name: "details",
  components: {
    magnifying,
    ButtomVue,
    DTcomponent,
  },
  data() {
    return {
      /* 详情商品的数据 */
      detailsshop: [],
      /* 左侧图片小框图片 */
      img: [],
      imgs: "",
      /* 商品颜色 */
      param: [],
      /* 选中的颜色 */
      paramss: "",
      options: [
        {
          value: "XS",
          label: "XS",
        },
        {
          value: "S",
          label: "S",
        },
        {
          value: "M",
          label: "M",
        },
        {
          value: "L",
          label: "L",
        },
        {
          value: "XL",
          label: "XL",
        },
        {
          value: "2XL",
          label: "2XL",
        },
        {
          value: "3XL",
          label: "3XL",
        },
        {
          value: "4XL",
          label: "4XL",
        },
        {
          value: "5XL",
          label: "5XL",
        },
      ],
      /* 尺寸绑定的值 */
      value: "XS",
      /* 数量双向绑定的值 */
      num: 1,
      /* 评论按钮 */
      comments: ["DETALL", "REVIEW", "Q&A(65)", "RETURN & DELIVERY"],
      /* 星星评分 */
      statevalue: 1.3,
      /* 留言 */
      message: [
        { title: "完整回答", name: "heay***", time: "2021.04.10" },
        { title: "完整回答", name: "heay***", time: "2021.04.11" },
        { title: "完整回答", name: "heay***", time: "2021.04.12" },
        { title: "完整回答", name: "heay***", time: "2021.04.13" },
        { title: "完整回答", name: "heay***", time: "2021.04.14" },
        { title: "完整回答", name: "heay***", time: "2021.04.15" },
      ],
    };
  },
  methods: {
    getdetailspu() {
      let spu_id = this.$route.query.shopdetail;
      getdetailspu(spu_id).then((data) => {
        this.detailsshop = data.data;
        this.img = JSON.parse(data.data[0].imgs);
        this.param = JSON.parse(data.data[0].param);
      });
    },
    /* 放大镜效果 */
    setimg(img, index) {
      console.log(img);
      this.imgs = img;
      this.paramss = this.param[index];
      /*  console.log(this.param[index]) */

      /*   console.log(this.param[index]) */
    },
    /* 评论按钮切换 */
    getits(index) {
      console.log(index);
      this.ipx = index;
    },
    /* 添加到购物车 */
    addshopcar() {
      let customer_id = this.$store.getters.id;
      let sku_id = this.detailsshop[0].spu_id;
      // console.log(this.detailsshop);
      let num = this.num;
      /*  let pa=this.paramss
      console.log(pa) */
      let params = [this.paramss, this.value];

      let data = {
        customer_id,
        sku_id,
        num,
        params,
      };

      console.log(data);
      addShopCar(data).then((data) => {
        if (data.code == 200) {
          this.$router.push("/shopCars");
          console.log(data);
          return this.$message.success("添加购物车成功");
        } else {
          return this.$message.error("添加购物车失败");
        }
      });
    },
  },
  created() {
    this.getdetailspu();
    /* this.imgs=img */
  },
  watch: {
    $route: {
      deep: true,
      handler(old, news) {
        this.getdetailspu();
      },
    },
  },
  destroyed() {
    this.getdetailspu();
  },
};
</script>

<style lang='scss'>
.details {
  width: 1200px;
  /*    background-color: red; */
  margin: 0 auto;
  .details_title {
    margin-left: -1000px;
    color: #1890ff;
    margin-top: 50px;
    span {
      display: inline-block;
      margin-right: 30px;
      cursor: pointer;
    }
  }
  .details_div {
    margin-top: 30px;
    width: 1100px;
    /*   background-color: red;  */
    .details_img {
      float: left;
      width: 60px;
      img {
        width: 100%;
      }
    }
    .details_magnifying {
      margin-left: 20px;
      float: left;
    }
    .details_introduction {
      float: left;
      margin-left: 20px;
      margin-top: 5px;
      width: 470px;
      /*  background-color: green; */
      .ntroduction_one {
        font-size: 30px;
        white-space: normal;
      }
      .ntroduction_two {
        font-size: 25px;
        margin-left: -350px;
        font-weight: bolder;
        margin-top: 25px;
        span {
          font-size: 16px;
          margin-left: 10px;
          text-decoration: line-through;
          color: #b0b0b0;
        }
      }
      .ntroduction_title {
        width: 100%;
        background-color: #f7f7f7;
        line-height: 50px;
        font-size: 14px;
        margin-top: 25px;
        align-items: center;
        p {
          color: #b0b0b0;
          margin-left: -330px;
        }
      }
      .ntroduction_img {
        width: 100%;
        margin-top: 50px;
        img {
          width: 63px;
          float: left;
          margin-right: 12px;
        }
      }
    }
    .details_select {
      width: 100%;
      margin-top: 170px;
      height: 52px;
      padding-top: 10px;
      /*  background-color: red; */
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      /*  display: block; */
      .select_one {
        /* margin-right: 50px; */
        width: 230px;
        float: left;
        display: flex;
        justify-content: center;
        align-items: center;
        p {
          width: 50px;
        }
      }
      .select_two {
        /*   margin-left: 150px; */
        float: left;
        width: 230px;
        display: flex;
        justify-content: center;
        align-items: center;
        p {
          width: 50px;
        }
      }
    }
    .details_select::after {
      content: "";
      display: block;
      clear: both;
    }
    .details_btn {
      width: 100%;
      margin-top: 30px;
      /*   background-color: red; */
      button {
        width: 223px;
        height: 60px;
        font-size: 20px;
        text-align: center;
        cursor: pointer;
        margin-right: 12px;
      }
      .btnone {
        background-color: white;
      }
      .btntwo {
        background-color: black;
        color: white;
      }
    }
  }
  .details_div::after {
    content: "";
    display: block;
    clear: both;
  }
  .details_comments {
    width: 1240px;
    margin-top: 120px;

    .comments_underline {
      width: 100%;
      display: flex;
      border-bottom: 1px solid black;
      button {
        flex-grow: 1;
        line-height: 65px;
        background-color: white;
        border: 1px solid #efefef;
        position: relative;
        cursor: pointer;
      }

      .active {
        border: 1px solid #000;
        &::before {
          content: "";
          width: 100%;
          height: 2px;
          background-color: #fff;
          position: absolute;
          left: 0;
          bottom: -2px;
        }
      }
    }
    .comments_btn {
      width: 100%;
      height: 50px;
      margin-top: 50px;
      border-bottom: 2px solid black;
      padding-bottom: 20px;
      button {
        width: 180px;
        height: 50px;
        margin-left: 1050px;
        line-height: 50px;
        background-color: #000;
        color: #fff;
      }
    }
    .comments_ul {
      width: 100%;
      ul {
        width: 100%;
        li {
          width: 100%;
          border-bottom: 1px solid #e7e7e7;
          position: relative;
          padding-bottom: 5px;
          span {
            display: inline-block;
            margin-right: 200px;
            margin-top: 20px;
          }
          .span_one {
            background-color: black;
            color: white;
            font-size: 14px;
            position: absolute;
            margin-left: -450px;
          }
          .span_two {
            position: absolute;
            margin-left: -350px;
          }
          .ul_span {
            margin-left: 350px;
            background-color: #fff;
            margin-bottom: 10px;
            position: absolute;
          }
        }
      }
    }
    .comments_elrate {
      margin-left: -1000px;
      position: relative;
      padding-bottom: 50px;
    }
    img {
      margin-top: 50px;
      width: 960px;
    }

    margin-top: 50px;
    line-height: 30px;
    /*      background-color: red; */
    p {
      /*   width: 100%; */
      /*  background-color: green; */
      display: block;
      margin-top: 50px;
      margin-left: -1000px;
    }
    .el-rate__icon {
      //评分图标大小
      margin-top: 30px;
      font-size: 35px;
    }
    .el-rate__text {
      font-size: 35px;
      margin-top: 30px;
      position: absolute;
    }
  }
}
.DTcomponent_one {
  position: relative;
  /*   background-color: blue; */
  overflow: hidden;

  .one_title {
    margin-top: 10px;
  }
  .two_title {
    padding-left: 370px;
    padding-top: -500px;
    margin-top: -900px;
    /*     margin-top: 500px; */
    /*   background-color: green; */
    /* position: absolute; */
  }
}
</style>