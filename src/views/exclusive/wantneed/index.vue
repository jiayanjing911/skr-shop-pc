<template>
  <div class="exclude">
    <div class="clearfix">
      <lunbo></lunbo>
      <lunbo-right></lunbo-right>
    </div>
    <div>
      <p class="title">WANT.NEED</p>
      <button class="btn">+ ALL(10943)</button>
    </div>
    
    <div class="clearfix"> <Want v-for="is in shoplist" :key="is.id" :img="is.img" :title="is.title" :special_price="is.special_price" :price="is.price" :id="is.id"></Want></div>
   
      <div>
      <p class="title">EDITION</p>
    </div>
      <EXDUSIVE v-for="ig in imglist" :key="ig.id" :img="ig.img" :title="ig.title" :id="ig.id"></EXDUSIVE>
     <div class="imgs">
         <img :src="imgs.img" v-for="imgs in img" :key="imgs.id" class="src">
     </div>
        <div>
      <p class="title">TALKING</p>
    </div>
    <div class="clearfix"><EXDUSIVE v-for="igt in imglists" :key="igt.id" :img="igt.img" :title="igt.title" :id="igt.id"></EXDUSIVE></div>
     <div>
      <p class="title">WANT.NEED</p>
      <button class="btn">+ ALL(10943)</button>
    </div>
     <div class="clearfix"> <Want v-for="iss in shoplists" :key="iss.id" :img="iss.img" :title="iss.title" :special_price="iss.special_price" :price="iss.price" :id="iss.id"></Want></div>
    <div>
    </div>
  </div>
</template>

<script>
import EXDUSIVE from '@/views/exclusive/edition/index.vue'
import Want from '@/views/exclusive/want/index.vue'
import { getproduct } from "@/api/home";
import Lunbo from './Lunbo.vue';
import LunboRight from './lunbo-right.vue';
export default {
  name: "exclusive",
  components:{
     EXDUSIVE,
     Want,
    Lunbo,
    LunboRight
  },
  data() {
    return {
        /* 轮播图下的那个商品数组 */
      shoplist: [],
      /* 服饰总数组数据 */
      list: [],
      /* 三张图片商品 */
      imglist: [],
      /* 四张图片渲染 */
      img:[],
      /* 下面的三张图片 */
      imglists:[],
      /* 商品数组 */
      shoplists:[]
    };
  },
  methods: {
    getproduct() {
      getproduct("服饰").then((data) => {
        console.log(data.res);
        this.list = data.res;
        this.shoplist = this.list.slice(39, 47);
        this.imglist = this.list.slice(60, 63);
        this.img=this.list.slice(10,14)
        this.imglists=this.list.slice(64,67)
        this.shoplists=this.list.slice(49,57)
        console.log(this.imglist);
        console.log(this.shoplist);
      });
    },
  },
  created() {
    this.getproduct();
  },
 
};
</script>

<style scoped lang='scss'>
.exclude {
  width: 100%;
  /*  background-color: red; */
  .title {
    color: #333;
    font-family: "ProximaNova-Thin";
    font-size: 48px;
    text-transform: uppercase;
    text-align: center;
    margin: 30px 0 20px 0;
    font-weight: 100;
    /*    position: relative; */
  }
  .btn {
    padding: 0 20px 0 18px;
    height: 30px;
    /* position: absolute; */
    margin-left: 8%;
    transform: translate(-50%, 0);
    color: #aaa7a7;
    background-color: white;
    border: 1px solid gainsboro;
  }
}
        .imgs{
            width: 100%;
           /*  background-color: red; */
              display: flex;
              margin-top: 200px;
          .src{
                width: 23.5%;
                margin-left: 2%;
                cursor: pointer;
               
            }
            .src:nth-of-type(1){
                   margin-left: 0;
               }
            
        }
</style>