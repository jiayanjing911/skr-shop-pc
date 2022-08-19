<template>
  <div class="ancladlist clearfix">
          <div><h2>{{type}}</h2><p>more <SvgIcon icon-class="sanjiao3"></SvgIcon> </p></div>
          <div> 
            <shop-item v-for="(item, index) in shop.slice(7, 14)" :key="index" :shop="item" :pshow="true"
              height="100%" width="13%"></shop-item>
          </div>
          </div>
       
</template>

<script>
export default {
    name:'AncladList',
props:{
   shop:Array, 
   type:String,
}
}
</script>

<style lang="scss" scoped>
 .ancladlist{
    p{
      font-size: 24px;
    }
    div:first-of-type{
      float: left;
      width: 10%;
      
    }
     div:last-of-type{
      float: left;
      width: 90%;
      
    }
  }
</style>