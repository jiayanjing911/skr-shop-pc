-<template>
  <div class="tops clearfix">
    <div class="top">
      <div class="top1">
        <img src="../../assets/image/toplogo.png" alt="" srcset="" @click="$router.push('/home')">
      </div>
      <div class="top2">
        <div class="site-search">
          <div id="search">
            <div class="ipt">
              <input type="text" name="s" class="text" placeholder="潮流,从搜索开始" v-model="parent_name"
                style="background-color: transparent;" />
              <SvgIcon icon-class="头部搜索" @click="search" class="svg"></SvgIcon>
            </div>



          </div>
        </div>
      </div>
      <div class="top3">
        <div id="top3">
          <div @click="logout" v-if="$store.getters.token">
            <SvgIcon icon-class="2-退出" class="svg"></SvgIcon>
            <p>LOGOUT</p>
          </div>
          <div @click="$router.push('/register')"  v-if="!$store.getters.token">
            <SvgIcon icon-class="我要加入【灰】" class="svg"></SvgIcon>
            <p>注册</p>
          </div>
          <div @click="$router.push('/my')" v-if="$store.getters.token">
            <SvgIcon icon-class="用户-角色-用户名-单人_jurassic" class="svg"></SvgIcon>
            <p>MY</p>
          </div>
          <div @click="$router.push('/login')" v-if="!$store.getters.token">
            <SvgIcon icon-class="登录"></SvgIcon>
            <p>登录</p>
          </div>
          <div @click="$router.push('/shopCars')">
            <SvgIcon icon-class="购物车" class="svg"></SvgIcon>
      
            <p>{{shopcarlength}}</p>
          </div>



          <!-- <img src="../../assets/image/join.png" alt="" class="img1"  />
          <img src="../../assets/image/login.png" alt="" />
          <img src="../../assets/image/shopCar.png" alt="" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from '../SvgIcon/index.vue';
import { setToken, getToken } from '@/utils/localstlroage.js';

export default {
  name: "Top",
  data() {
    return {
      parent_name: "",
      shopcarlength:0,
    };
  },
  methods: {
    search() {
      console.log(this.parent_name);
      this.$router.push("/search?redirect=" + this.parent_name);
    },
    logout(){
      this.$router.push("/");
      
        setToken('token', '');
        
       
             this.$store.dispatch('user/register','').then(data=>{
                 
                 console.log(this.$store.getters.token);
                 return this.$message.success('退出成功')
             }).catch(error=>{
                 return error
             })
      
    
      
    }
  },
  components: { SvgIcon }
};
</script>

<style lang="scss" scoped>
.tops {
  background-color: #fff(230, 230, 235);
  width: 100%px;

  margin: 0 auto;


  .top {
    width: 1500px;
    margin: 0 auto;

    .top1 {
      float: left;

    }



    .top2 {
      margin: 0 auto;

      .site-search {
        margin: 0 auto;
        width: 250px;
        // height: 60px;
        // line-height: 60px;
      }

      #search {
        position: relative;
        // height: 60px;

        font-size: 24px;

        .ipt {
          height: 33px;
          width: 260px;
          border-bottom: 2px solid #000;
          padding-top: 20px;


          input {
            height: 27px;
            width: 220px;
            float: left;


          }

          .svg {
            float: right;
          }

        }


      }



      img {
        position: relative;
        top: -38px;
        width: 24px;
        height: 24px;
        margin-left: 222px;
      }

    }

    .top3 {

      width: 200px;
      font-size: 24px;
      position: absolute;
      right: 0;
      top: 10px;

      div {
        float: left;
        margin-right: 10px;

        p {
          font-size: 14px;
        }
      }

      #tops {
        float: left;
      }
    }
  }
}

.text {
  padding-left: 10px;
  border: none;
  outline: none;
}
</style>
