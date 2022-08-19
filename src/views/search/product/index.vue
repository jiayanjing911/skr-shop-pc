<template>
 <div>
      <div class="shoplist">
      <div v-for="item in shoplist" :key="item.id" class="item">
          <div>
           <img :src="item.img">
          </div>
          <div>
              <p>{{item.title}}</p>
              <p class="noactivity">目前没有活动</p>
              <div class="total_parace">
          <span>{{item.special_price}}</span
          > <span>{{item.price}}</span
          >
           </div>
            <div class="total_two">
              <span
            >{{
              getpercentage(item.special_price,item.price).toFixed(0)
            }}%</span
          >
            </div>
          </div>
      </div>
      <!-- 分页 -->
         
  </div>
  <el-pagination
      :current-page.sync="pageage"

      :page-size="20"
      layout="total, prev, pager, next, jumper"
      :total="total">
    </el-pagination> 
 </div>
   
</template>

<script>
import { getSearch } from '@/api/search.js'
export default {
 name:'product',
 data(){
     return{
         shoplist:[],
         pageage:1,
         pagesize:20,
         total:0,
         list:[],
     }
 },
 methods:{
     getsearch(){
         let name=this.$route.query.redirect
        
         getSearch(name).then(data=>{
             console.log(data)

             this.total=data.data.length

             this.$store.dispatch('search/total',this.total)
             
             console.log(this.total)
             this.list=data.data
             console.log(this.list)
           this.shoplist=this.list.slice(0,20)
           console.log(this.shoplist)
         })
     },
     handleSizeChange(newsize){
    
     },
     handleCurrentChange(newsize){

     }
 },
 created(){
     this.getsearch()
 },
 watch:{
     '$route':{
         deep:true,
         handler(){
             this.getsearch()
         }
     },
     pageage:{
         deep:true,
         handler(news,old){
             this.shoplist=this.list.slice((news-1)*20,news*20)
             console.log(this.shoplist)
         }
     }
 },
   computed: {
    getpercentage() {
      return function (val1, val2) {
        //  return  this.shoplist.forEach(item=>{

        return (val1 / val2) * 100;
        //  })
      };
    },
  },
}
</script>

<style scoped lang="scss">
.shoplist{
    width:956px;
  /*   background-color: red; */
  /*   overflow: hidden; */
  margin-bottom: 40px;
    margin-top: 50px;
     .item{
         width: 182px;
        float: left;
        margin-left: 11px;
         margin-top: 10px; 
         outline: 1px solid #e8e8e8;
         overflow: hidden;
         img{
             width: 100%;
             height: 182px;
         }
         p{
             overflow: hidden;
             text-overflow:ellipsis;
             white-space: nowrap;
         }
         .noactivity{
             font-size: 14px;
              margin-left: -90px;
          margin-top: 10px;
             color:rgba(0, 0, 0, 0.45);
         }
          .total_parace{
         float: left;
          padding-left: 10px;
          margin-top: 10px;
          span:last-child{
              margin-left: 10px;
            color:rgba(0, 0, 0, 0.45);
            text-decoration: line-through;
            font-size: 15px;
          }
      }
      .total_two{
          float:right;
          margin-top: 10px;
          margin-right: 5px;
          color: red;
      }
     }
     .el-pagination{
         margin-top: 50px;
         background-color: red;
     }
}
.shoplist:after{
    content: '';
    display: block;
    clear: both;
    height: 0;
    visibility: hidden;
}
.item:nth-of-type(5n+1){
    margin-left: 0;
}
</style>