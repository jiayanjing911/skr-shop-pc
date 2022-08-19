<template>
  <div class="imgshop">
    <div class="imglist" @click="getdetails">
      <div>
          <div class="maskimg"></div>
        <img :src="img"  class="imgs"/>
        <div class="ant-card-meta-title">
          <p>{{title }}</p>
          <p class="ant-meta">www.stride.fun</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'edition',
     props:{
       id:{
        type:String,
        default:0,
       },
     img:{
         type:String,
         default:''
     },
     title:{
         type:String,
         default:''
     }
 },
 methods:{
   /* 跳往详情页 */
     getdetails(){
      this.$router.push('/detail?shopdetail='+this.id) 
    }
 }
}
</script>

<style scoepd lang='scss'>
    .imgshop {
        width: 100%;
        background-color: red;
    .imglist {
      width: 30%;
      float: left;
      margin-left: 2.5%;
      cursor: pointer;
      position: relative;
      margin-top: 50px;
      margin-bottom: 100px;
      .maskimg{
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color:green;
          z-index: 9999;
          opacity: 0.25;
        animation: spin 2s linear;
          display: none;
      }
      
       .imgs {
        width:100%;
        height:100%;
      } 
      .ant-card-meta-title {
        color: rgba(0, 0, 0, 0.85);
        font-size: 20px;
        .ant-meta {
          font-size: 14px;
          margin-top: 10px;
        }
      }
    }
     .imglist:hover{
        .maskimg{
            display: block;
        }
    }
  }
  .imglist::after {
    content: "";
    display: block;
    clear: both;
  }
  @keyframes spin {
            0% {
                opacity: 0;
            }
              30% {
               opacity: 0.1;
            }
              60% {
              opacity: 0.2;
            }
            100% {
               opacity: 0.25;
            }
        }
</style>