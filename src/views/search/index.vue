<template>
  <div class="box">
    
         <div class="search_box" >
          <p>'{{$route.query.redirect}}'有{{$store.getters.total}}个搜索结果</p>
     </div>
     <div class="search_classification">
         <ul>
             <router-link to="/search/product" class="routerlink active">产品</router-link>
              <router-link to="/search/activity" class="routerlink" @click="handle">活动</router-link>
               <router-link to="/search/show" class="routerlink">买家秀</router-link>
         </ul>
     </div>
     <!-- <product></product> -->
  <keep-alive include="product">
         <router-view></router-view>
  </keep-alive>
  </div>
</template>

<script>
/* import product from '@/views/secondsearch/idnex.vue' */
export default{
    name:'search',
    /*  components:{
        product
        }, */
    data(){
        return{
         total:10,
         ipx:0
        }
    },
    methods:{
      handle(e){
        console.log(e)
      }
    },
    created(){
        console.log(this.$route.query.redirect)
        console.log(this.$store.getters.total)
        console.log(this.$store.getters.token)
    }
}
</script>

<style scoped lang="scss">
.box{
    width:965px;
    margin: 0 auto;

}
.search_box{
    width: 965;
    height: 17.6vh;
    display: flex;
    justify-content: center;
    align-items: center;
   /*  margin-top: 7.4vh auto; */
      margin: 20px auto;
    font-size: 3.6vh;
    border-top: 1px solid #e1e1e1;
    background-color: #fafafa;
}
.search_classification{
   width: 956px;
  /*  background-color: red; */
   height: 45px;
   line-height: 45px;
   ul{
       display: flex;
       width: 100%;
       .routerlink{
           flex-grow: 1;
           /* background-color: #333; */
           border: 1px solid black;
       }
   }
}
 .active{
   background-color: #333;
   color: white;
 }
</style>
