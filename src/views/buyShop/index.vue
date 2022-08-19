<template>
  <div class="buyShop">
    <h1>结算</h1>
    <div class="box">
      <div class="box-left">
        <!-- 收获地址 -->
        <div class="address">
          <div class="address-top">
            <p>收货地址</p>
          </div>
          <!-- 收获地址详情  -->
          <div class="address-bottom"></div>
        </div>
        <!-- 商品明细 -->
        <div class="buyDetail">
          <div class="buyDetail-top">
            <p>商品明细（共 {{}} ）件</p>
          </div>
          <!-- 商品列表 -->
          <div class="buyDetail-bottom">
            <div class="list" v-for="(shopcar, index) in buyShop" :key="index">
              <ul class="shopcar">
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
                </li>
                <li>
                  <!-- 现价 -->
                  <p>现价：&nbsp;{{ shopcar.price }}&nbsp;￥</p>
                  <!-- 原价 -->
                  <p>原价：&nbsp;{{ shopcar.special_price }}&nbsp;￥</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="box-right">
        <h1>请选择支付方式</h1>
        <div class="pay">
          <div class="pay-WeChat">
            <img
              src="http://192.168.205.195:8080/static/img/wecart.76711447.jpeg"
              alt="微信支付"
            />
          </div>
          <div class="pay-Alipay">
            <img
              src="http://192.168.205.195:8080/static/img/alipay.3eb09b48.jpeg"
              alt="支付宝支付"
            />
          </div>
        </div>
        <div class="shop-total">
          <ul>
            <li><p>商品小计：</p></li>
            <li>
              <p>商品总价：</p>
              <p>￥{{}}</p>
            </li>
            <li>
              <p>优惠：</p>
              <p>￥{{}}</p>
            </li>
            <li>
              <p>其他：</p>
              <p>+￥{{}}</p>
            </li>
            <li>
              <div>
                <p>总计</p>
                <p>￥{{}}</p>
              </div>

              <el-button type="danger" class="el-button">提交订单</el-button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "buyShop",
  data() {
    return {
      //buyShop 付钱
      buyShop: [
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
};
</script>

<style lang="scss" scoped>
.buyShop {
  width: 1200px;
  margin: 0px auto;
  margin-top: 120px;
  h1 {
    display: flex;
    margin-left: 20px;
    color: #000;
  }
  .box {
    display: flex;
    /* 订单明细 */
    .box-left {
      width: 770px;
      height: 1000px;
      margin-left: 4px;
      /* 地址 */
      .address {
        width: 768px;
        height: 180px;
        margin-top: 10px;
        border: 1px solid #4c4c4c;
        .address-top {
          height: 40px;
          background-color: #4c4c4c;
          p {
            text-align: left;
            font-size: 20px;
            font-weight: 500;
            line-height: 40px;
            margin-left: 20px;
            color: white;
          }
        }
      }
      /* 商品明细 */
      .buyDetail {
        width: 768px;
        height: 798px;
        margin-top: 10px;
        border: 1px solid #4c4c4c;

        .buyDetail-top {
          height: 40px;
          background-color: #4c4c4c;
          p {
            text-align: left;
            font-size: 20px;
            font-weight: 500;
            line-height: 40px;
            margin-left: 20px;
            color: white;
          }
        }
        .buyDetail-bottom::-webkit-scrollbar {
          display: none;
        }
        .buyDetail-bottom {
          width: 768px;
          height: 758px;
          overflow: auto;

          /* 商品列表 */
          .list {
            width: 730px;
            height: 150px;
            margin: 0 auto;

            .shopcar {
              height: 150px;
              background-color: aliceblue;
              margin-top: 10px;
              border-radius: 10px;

              li {
                width: 200px;
                float: left;
                width: 150px;
                height: 150px;
                img {
                  width: 140px;
                  height: 140px;
                  margin: 5px auto;
                  margin-left: 20px;
                  border-radius: 10px;
                }
              }
              li:nth-child(2) {
                text-align: left;
                width: 300px;
                p {
                  font-size: 15px;
                  margin-top: 40px;
                  width: 240px;
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
              }
              li:nth-child(3) {
                text-align: right;
                width: 200px;
                p:nth-child(1) {
                  margin-top: 40px;
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
        }
      }
    }
    .box-right {
      width: 398px;
      height: 700px;
      margin-left: 26px;
      margin-top: 10px;
      background-color: paleturquoise;
      .pay {
        width: 398px;
        height: 150px;
        .pay-WeChat {
          width: 195px;
          height: 145px;
          margin-left: 3px;
          margin-top: 3px;
          float: left;
          img {
            width: 100%;
            height: 142px;
          }
        }
        .pay-WeChat:hover {
          cursor: not-allowed;
        }
        .pay-Alipay {
          width: 195px;
          height: 145px;
          margin-left: 3px;
          margin-top: 3px;
          border: 1px solid #4c4c4c;
          float: left;
          img {
            width: 100%;
            height: 142px;
          }
        }
        .pay-Alipay:hover {
          cursor: pointer;
        }
      }
      .shop-total {
        width: 390px;
        margin: 20px auto;
        height: 480px;
        background-color: aliceblue;
        ul {
          border: 1px solid #999;

          li {
            display: flex;
            line-height: 48px;
            width: 370px;
            height: 48px;
            margin: 0 auto;
            border-bottom: 1px solid #999;
            p {
              width: 100px;
            }
            p:nth-child(1) {
              text-align: left;
            }
            p:nth-child(2) {
              text-align: right;
              margin-left: 160px;
              color: plum;
            }
          }
          li:nth-child(1) {
            width: 386px;
            border: 1px solid #999;
            background-color: #f6f6f6;
          }
          li:nth-child(5) {
            display: inline-block;
            border: none;
            height: 100px;
            div {
              float: left;
              p:nth-child(1) {
                margin-left: 20px;
              }
              p:nth-child(2) {
                margin-left: 20px;
                text-align: left;
                font-size: 28px;
                font-weight: 666;
              }
            }

            .el-button {
              padding: 14px 26px;
              float: right;
              margin-right: 20px;
              margin-top: 50px;
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
}
</style>