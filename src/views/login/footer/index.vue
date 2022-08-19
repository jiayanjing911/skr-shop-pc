<template>
  <div>
   <hr>
   <div class="loginfooter">
      <div>
           <ul>
           <li class="li_one">还不是SKR-SHOP成员?</li>
           <li class="li_two">如果您注册成为会员,您将获得10%的折扣卷</li>
       </ul>
      </div>
       <div>
           <div class="register" @click="$router.push('/register')">
               注册
           </div>
       </div>
        <div>
           <ul>
           <li>需要非会员订单/交货查询码?</li>
       </ul>
      </div>
      <div>
           <div class="register">
               非会员订单查询
           </div>
       </div>
   </div>
   <hr>
  </div>
</template>

<script>
export default {
  name:'Loginfooter',
  data(){
      return{

      }
  }
}
</script>

<style scoped lang="scss">
 .loginfooter{
     width: 100%;
     display: flex;
     height: 100px;
     line-height: 50px;
     padding-top: 50px;
     div{
         flex-grow: 1;
         
     }
     .register{
         width: 160px;
         height: 40px;
         line-height: 40px;
         background-color: #7d7d7d;
         color: white;
     }
 }
.li_one{
    margin-top: -20px;
}
 .li_two{
     margin-top: -20px;
     margin-left: 100px;
 }
 li{
     font-size: 14px;
 }
</style>