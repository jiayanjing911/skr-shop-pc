<template>
  <div class="box">
    <div class="parentname_box">
          <p>{{parent_name}}</p>
    </div>
    <!-- 标题 -->
    <div class="parentnamelabel">
        <div class="parenttitle">
            <p>热门标签</p>
        </div>
        <div>
            <el-button round v-for="(itname,index) in list" :key="index" @click="getsearch(itname)"># {{itname}}</el-button>
        </div>
        <div class="top2">
        <div class="site-search">
          <div id="search">
            <div class="ipt">
              <input type="text" name="s" class="text" placeholder="潮流,从搜索开始" v-model="parent_names"
                style="background-color: transparent;" />
            </div>
            <img src="../../assets/image/search.png" alt="" @click="search"/>
          </div>
        </div>
      </div>
        <div>
        </div>
    </div>
    <div class="primary">
        <span @click="$router.push('/')">HOME</span>&nbsp;/&nbsp;
        <span>primary</span>
    </div>
    <!-- 商品 -->
    <div class="shop">
        <div class="shopleft">
            <div class="shopleft_one">
                <div class="one_title">
                    <p style="color:#fff">{{parent_name}}</p>
                    <p>Stride.fun</p>
                </div>
                <div class="two_title">
                    <p>热销</p>
                </div>
                
            </div>
          <!--   <div class="shopleft_two"> -->
                    <ul class="shopleft_two">
                        <li v-for="leftit in leftlist" :key="leftit.id" class="two_li">
                            <p class="two_title">{{leftit.title}}</p>
                            <p class="two_sale">{{leftit.sale}}件</p>
                        </li>
                    </ul>
              <!--   </div> -->
        </div>
        <div class="shopright">
          <div class="right_one">
                <h2>今日推荐</h2>
          </div>
          <div class="right_two">
              <span>共计{{total}}件</span>
              <Classify  @getshoplist="getshoplist" :page="pageage" :lists="shoplists" v-if="shoplists.length>0"></Classify>
          </div>
          <div class="right_three">
              <ShopItem v-for="igt in shoplist" :shop="igt" :key="igt.id" :width="width" :pshow="true" class="shopit"></ShopItem>
          </div>
        </div>
    </div>
    <!-- 分页功能 -->
     <el-pagination
     
      :current-page.sync="pageage"
      :page-size="pagesize"
      layout="total,  prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
import {getproduct} from '@/api/proimary.js'
import {getSecond} from '@/api/navraptop.js'
import Classify from '@/components/classify/index.vue'
export default {
    name: "proimary",
    data() {
        return {
            /* 一级分类获取的商品 */
            shoplists: [],
            /* 分页一级分类获取的商品 */
            shoplist: [],
            /* 一级标题的名称 */
            parent_name: "",
            /* 搜索框绑定的数据 */
            parent_names: "",
            /* 获取的二级分类标签 */
            list: [],
            /* 左边栏商品数组 */
            leftlist: [],
            /* 商品总条数 */
            total: 0,
            /* 当前页码值 */
            pageage: 1,
            /* 一页显示多少条数据 */
            pagesize: 10,
            /* shopitem组件的宽度 */
            width: "18%",

        };
    },
    methods: {
        /* 获取一级分类商品 */
        getproduct() {
            let parent_name = this.$route.query.parentName;
            this.parent_name = parent_name;
            getproduct(parent_name).then(data => {
                console.log(data);
                this.shoplists = data.res;
                this.shoplist = this.shoplists.slice(0, this.pagesize);
                this.leftlist = this.shoplists.slice(10, 20);
                this.total = data.res.length;
                this.getSecond();
                console.log(this.shoplists,this.shoplist,this.leftlist);
            });
        },
        /* 获取二级导航 */
        getSecond() {
            getSecond(this.parent_name).then(data => {
                console.log(data.data);
                this.list = data.data.slice(0, 5);
                console.log(this.list);
            });
        },
        /* 点击搜索跳到商品页面 */
        search() {
            this.$router.push("/search?redirect=" + this.parent_names);
        },
        /* 点击二级标签跳转商品页面 */
        getsearch(item) {
            this.$router.push("/search?redirect=" + item);
        },
        getshoplist(val,value1) {
      this.shoplist = val
      this.pagesize=value1
    },
    },
    created() {
        this.getproduct();
    },
    watch: {
        /* 监听路由 根据不同路由页面商品不同 */
        "$route": {
            deep: true,
            handler() {
                this.getproduct();
            }
        },
        /* 监听页码 切换商品页面 */
        pageage: {
            deep: true,
            handler(news, old) {
                this.shoplist = this.shoplists.slice((news - 1) * this.pagesize, news * this.pagesize);
            }
        }
    },
    components: { Classify }
}
</script>

<style scoped lang='scss'>
  .box{
      width: 100%;
    /*   background-color: red; */
      .parentname_box{
        color: #333;
    font-family: "ProximaNova-Thin";
    font-size: 48px;
    text-transform: uppercase;
    text-align: center;
    margin: 60px 0 20px 0;
    font-weight: 100;
      }
       .parentnamelabel{
           width: 100%;
           display: flex;
           margin-top: 50px;
          /*  background-color: red; */
           justify-content: center;
           align-items: center;
           position: relative;
           overflow: hidden;
           div{
           flex-grow: 1;
          /*  margin-right: 160px; */
          /*  background-color: green; */
           .el-button{
               margin-right: 30px;
           }
           }
           div:nth-of-type(3){
               margin-right: 10px;
           }
           .parenttitle{
               margin-left: -90px;
           }
            .top2 {
       /* margin: 0 auto; */
       width: 250px;
       position: absolute;
       right: 10px;
      .site-search {
        width: 250px;
        height: 60px;
        line-height: 60px;
      }

      #search {
        position: relative;
        height: 60px;
      }

      #search input {
        height: 27px;
        width: 220px;
        padding-right: 30px;
        border: none;
      }

      .ipt {
        height: 43px;
        width: 250px;
        border-bottom: 2px solid #000;
      }

      img {
        position: relative;
        top: -38px;
        width: 24px;
        height: 24px;
        margin-left: 222px;
      }

      #search button {
        direction: ltr;
        text-indent: -9999em;
      }
    }
       }
       .shop{
           width: 100%;
           margin-top: 15px;
         /*   background-color: red; */
           .shopleft{
               float: left;
               width: 12%;
         
               margin-left: 50px;
               overflow: hidden;
               .shopleft_one{
                   width:100%;
                
                 /*   border: 1px solid black; */
                   font-size: 25px;
                 
                   .one_title{
                     background-color: #5a5a5a;
                       padding-top: 25px;
                          height: 105px;
                       margin-left: -30px;
                       p{
                           margin-top: 10px;
                       }
                   }
                   .two_title{
                       font-size: 20px;
                       background-color: #f2f2f2;
                     p{
                     padding: 10px 10px;
                     margin-left: -80px;
                     }
                   }
               }
               .shopleft_two{
                   width: 100%;
                   .two_li{
                       width: 100%;
                       padding-left: 30px;
                       line-height: 20px;
                       margin-top: 10px;
                       border-bottom: 1px solid rgba(0, 0, 0, 0.2);
                       p{
                           float: left;
                       }
                       .two_title{
                        padding-top: 10px;
                           font-size: 14px;
                           width: 100px;
                       }
                       .two_sale{
                           margin-top: 10px;
                           font-size: 14px;
                           margin-left: 8px;
                           color: rgba(0, 0, 0, 0.3);
                       }
                   }
                   .two_li::after{
                       content: '';
                       display: block;
                       clear: both;
                   }
               }
           }
           .shopright{
               float: left;
               width: 75%;
               margin-left: 80px;
              /*  background-color: red; */
               .right_one{
                   width: 100%;
                 /*  background-color:green;  */
                 border-bottom: 1px solid black;
                 background-color: #ede9e9;
                  line-height: 50px;
                  h2{
                      margin-left: -90%;
                      font-size: 18px;
                  }
               }
               .right_two{
                   margin-top: 10px;
                   margin-left: -90%;
               }
               .right_three{
                   width: 100%;
                   margin-top: 20px;
                   padding-left: 20px;
                   
               }
               .right_three::after{
                  content: '';
                  display: block;
                  clear: both;
               }
           }
       }
         .shop::after{
             content: '';
             display: block;
             clear: both;
         }
  }
  .primary{
      margin-top: 20px;
      margin-left: -50%;
      font-size: 15px;
      color:rgba(0, 0, 0, 0.3);
      cursor: pointer;
  }
</style>