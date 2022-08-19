<template>
  <div class="right">
    <!-- <div
      class="card"
      v-for="(item, index) in NewShop[0]"
      :key="index"
      @click="carded"
    >
      <img :src="item.img" alt="" />
      <div class="card-anta">
        {{ item.title }}
        <p>www:stride.fun</p>
      </div>
    </div> -->
    <shop-item ></shop-item>
  </div>
</template>

<script>
import { getproduct } from "../../../api/home";
import ShopItem from "@/components/ShopItem/index.vue";
export default {
    name: "lunbo-Right",
    data() {
        return {
            ShopList: [],
            NewShop: [],
        };
    },
    methods: {
        // 初始化执行
        getShopList1() {
            getproduct("服饰").then((data) => {
                // console.log(data);
                this.ShopList = data.res;
                console.log(this.ShopList);
                let six = this.ShopList.slice(261, 267);
                this.NewShop.push(six);
                // let b = this.ShopList.slice(262, 263);
                // this.NewShop.push(b);
                // let c = this.ShopList.slice(265, 266);
                // this.NewShop.push(c);
                // let d = this.ShopList.slice(267, 268);
                // this.NewShop.push(d);
                // let e = this.ShopList.slice(268, 269);
                // this.NewShop.push(e);
                // let f = this.ShopList.slice(271, 272);
                // this.NewShop.push(f);
                console.log(this.NewShop);
            });
        },
        carded() {
            console.log("card run");
        },
    },
    created() {
        this.getShopList1();
    },
    components: { ShopItem }
};
</script>

<style lang="scss" scoped>
.right {
width: 46%;
  float: right;

  // .card {
  //   cursor: pointer;
    
  //   height: 380px;
  //   float: left;
  //   border: 1px solid #e8e8e8;
  //   margin-right: 18px;
  //   img {
  //     width: 100%;
  //     height: 75%;
  //   }
  //   .card-anta {
  //     color: rgba(0, 0, 0, 0.85);
  //     font-weight: 500;
  //     white-space: nowrap;
  //     font-size: 16px;
  //     text-overflow: ellipsis;
  //     padding-top: 20px;
  //     overflow: hidden; /*对超出容器的部分强制截取，高度不确定则换行*/
  //     text-overflow: ellipsis; /*显示省略符号来代表被修剪的文本。*/
  //     white-space: nowrap; /*禁止换行*/
  //     width: 80%;
  //     margin: 0 auto;
  //   }
  //   p {
  //     height: 10%;
  //     padding-top: 15px;
  //     color: rgba(0, 0, 0, 0.45);
  //     float: left;
  //     font-size: 14px;
  //   }
  // }
}
</style>