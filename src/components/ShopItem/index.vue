<template>
  <div class="shop_item" :style="{width:width,height:height}" @click="getdetails()">
    <div class="shop_img">
      <img :src="shop.img" alt="" />
    </div>
    <div class="shop_item_details">
      <div class="shop_title">{{shop.title}}</div>
      <div v-if="!pshow" class="shop_price">{{shop.price}}</div>
      <div v-else class="shop_price">COST:￥{{shop.price}}</div>
      <p v-show='pshows'>www.stride.fun</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopItem",
  props:{
    //渲染数据
    shop:Object,
    //是否显示p标签
    pshow:{
      type:Boolean,
      default:false,
    },
     pshows:{
      type:Boolean,
      default:false,
    },
    //宽度
    width:String,
    //高度
    height:String,

  },
  data() {
    return {};
  },
  methods:{
    getdetails(){
       console.log(this.shop)
      this.$router.push('/detail?shopdetail='+this.shop.id) 
    }
  }
};
</script>

<style lang="scss" scoped>
.shop_item {
  margin: 4px;
  width: 176px;
  height: 280px;
  border: 1px solid #ccc;
  background-color: #fff;
  cursor: pointer;
  float: left;
  // padding-bottom: 10px;
  &:hover{
    transform: scale(1.007);
    box-shadow: 0 0 4px 4px #eee;
  }
  .shop_img{
    width: 100%;
    // height: 100%;
    img {
    width: 100%;
    min-height: 25vh;
  }
  }
  .shop_item_details {
    padding: 24px;
    text-align: center;
    .shop_title {
      color: #333;
      margin-bottom: 8px;
      line-height: 1.5;
      list-style: none;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .shop_price{
        color: #666;
        font-family: 'yg740';
        font-size: 12px;
        line-height: 1.5;
        word-break: keep-all;
    }
  }
}
</style>