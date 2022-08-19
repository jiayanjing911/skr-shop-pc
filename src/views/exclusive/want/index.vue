<template>
  <div class="shopitem">
       <div class="items" @click="getdetails">
            <div>
                <img :src="img" />
            </div>
            <div>
            <p>{{title}}</p>
          <p class="pop">www.stride.fun</p>
         <div class="total_parace">
          <span>{{special_price}}</span
          > <span>{{price}}</span
          >
           </div>
            <div class="total_two">
              <span
            >{{
              getpercentage(special_price,price).toFixed(0)
            }}%</span
          >
            </div>
        
          
            </div>
          
        </div>
      </div>
</template>

<script>
export default {
 name:'want',
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
     },
     special_price:{
         type:Number,
         default:0
     },
     price:{
         type:Number,
         default:0,
     }
 },
 methods:{
   /* 跳往详情页 */
     getdetails(){
      this.$router.push('/detail?shopdetail='+this.id) 
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

<style scope lang="scss">
       .shopitem {
       width: 10.75%;
      margin-top: 30px; 
       margin-left: 2%;
      outline: 1px solid #e8e8e8;
      cursor: pointer;
    float: left;
      img {
        width: 100%;
      }
      p{
          margin-top: 5px;
  white-space: nowrap; 
 overflow: hidden;
 text-overflow: ellipsis;
      }
      .pop{
          color:rgba(0, 0, 0, 0.45);
          font-size: 14px;
          margin-left: -60px;
          margin-top: 10px;
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
    .shopitem:nth-of-type(1) {
      margin-left: 0;
    }
    .shopitem:hover {
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    }

  .shopitem::after {
    content: "";
    display: block;
    clear: both;
  }


</style>