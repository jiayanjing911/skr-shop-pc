<template>
<div class="tops">
  <div class="top">
    <!-- skr部分 -->
    <div class="top1" @click="top1">
      <span>S</span>
        <span class="trl"></span>
        <span>K</span>
        <span>R</span>
      </div>
      <!-- 搜索框部分 -->
      <div class="top2">
        <div class="site-search">
       <div id="search">
            <div class="ipt">
              <input type="text"  name="s" class="text" placeholder="潮流,从搜索开始" style= "background-color:transparent;border:0;" />
            </div>
           <img src="../assets/search.png" alt="" @click="search">
       </div>
   </div>
      </div>
      <!-- 登录购物车部分 -->
      <div class="top3">
        <div id="top3">
          <img src="../assets/join.png" alt="" class="img1" @click="join">
          <img src="../assets/login.png" alt="" @click="login">
          <img src="../assets/shopCar.png" alt="" class="img3" @click="shopCar">
          <p>0</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// 导出Top.vue
export default {
    name:'Top',
    data() {
      return {
        
      }
    },
    methods: {
      top1(){

      },
      search(){

      },
      join(){

      },
      login(){

      },
      shopCar(){

      }
    },
    
    
}
</script>

<style lang="scss">

.tops{
  background-color: #fff(230, 230, 235);
  width: 100%;
  height: 65px;
  margin: 0 auto;
  line-height: 65px;
  .top{
    width:80% ;
    margin: 0 auto;
    .top1{
  float: left;
  cursor: pointer;
}
.trl{
  position: relative;
  top: -9px;
    width:0;
    height:0px;
    border:3px solid ;
    border-bottom: 5px solid #000;
    border-color: transparent transparent #000 transparent;
    }
  span{
    font-weight: 750;
    font-size: 25px;
    
  }
  } 
  .top2{
    margin: 0 auto;
    .site-search{
    	margin: 0 auto;
    	width:300px;
      height: 60px;
      line-height: 60px;
}
#search{
	position:relative;
}
#search input{
  height: 32px;
  width: 300px;
	padding-right:30px;
  outline: none;
  background-color: rgba(32, 74, 102, 0);
 
        

}
.ipt{
  height: 46px;
  width: 328px;
  border-bottom: 2px solid #000;
}
img{
  cursor: pointer;
  position: relative;
  top: -38px;
  width: 28px;
  height: 28px;
  margin-left: 300px;
}
  }
  .top3{
    cursor: pointer;
    float: right;
    width: 200px;
    img{
      height: 38px;
      width: 36px;
      position: relative;
      top: -49px;
    }
    p{
      position: relative;
      top: -116px;
      padding-left: 78%;
    }
    .img1{
      margin-right: 25px;
    }
    .img3{
      width: 25px;
      height: 24px;
      position: relative;
      right: -30px;
      top: -65px;
    }
    #tops{
      float: left;
    }
  }
}


</style>