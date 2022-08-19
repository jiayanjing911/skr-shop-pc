<template>
 <div>
    <div class="DTcomponent">
             <div class="DTcomponent_title">
               <!--  <p>配送信息</p>  -->
              <h6>配送信息</h6>
             </div>
             <div class="DTcomponent_shop">
               <ul>
                 <li>根据商品的特性及配送地不同配送类型及所需时间会有所不同。</li>
                 <li>部分订购商品或预约商品的情况，除了基本配送日之外，可能会发生追加配送需要日。</li>
                 <li>即使是同一品牌的商品，由于各商品的出库日期不同，也可以分别配送。</li>
                 <li>图书山区可能会追加运费和退货费。</li>
                 <li>商品的配送费根据供应企业的政策而不同，公休日和休息日是不能配送的。</li>
               </ul>
             </div>
  </div>
   <div class="DTcomponent">
             <div class="DTcomponent_title">
               <!--  <p>配送信息</p>  -->
              <h6>取消/退货/换货指南</h6>
             </div>
             <div class="DTcomponent_shop">
               <ul>
                 <li>商品除了瑕疵之外，尺寸，颜色交换等单纯变心的交换/退货的快递费由顾客负担，产生往返快递费。</li>
                 <li>结算结束后立即取消订单，可在“MY Page>取消/更换/退货申请”中直接办理。</li>
                 <li>订购完成后因库存不足等可能会进行取消订单处理，请谅解。</li>
                 <li>订购状态正在准备商品的情况下，可能已经配送或包装完毕，不能直接进行处理，请通过顾客中心咨询。</li>
                 <li>换货申请第一次仅限于一次，配送完成后不可追加换货申请。</li>
                 <li>请在配送完成后的7天内接收未使用的产品。</li>
               </ul>
             </div>
  </div>
   <div class="DTcomponent">
             <div class="DTcomponent_title">
               <!--  <p>配送信息</p>  -->
              <h6>无法退货/换货时</h6>
             </div>
             <div class="DTcomponent_shop">
               <ul>
                 <li>使用或者损毁产品，遗漏赠品，商品TAG，保证书，商品附件或者丢失的</li>
                 <li>拆开密封包装或者损毁，丢失内部包装材料的(但非拆封确认产品除外)</li>
                 <li>商品价值的丧失达到难以再销售的程度</li>
                 <li>根据您的要求，订制的产品，除了您以外，很难使用</li>
                 <li>配送的商品安装完毕(家电，家具等)</li>
                 <li>有其他有关电子商务等消费者保护的法律规定的撤销要约限制情形的</li>
               </ul>
             </div>
  </div>
   <div class="DTcomponent">
             <div class="DTcomponent_title">
               <!--  <p>配送信息</p>  -->
              <h6>A/S指南</h6>
             </div>
             <div class="DTcomponent_shop">
               <ul>
                 <li>至于能否以售后服务(A/S)为标准，根据品牌和商品不同，所以有关咨询请通过doubicon客服中心咨询。</li>
                 <li>因商品不良而发生的退货、更换、A/S、退款、质量保证及损害赔偿等事项，可以根据消费者纠纷解决标准(公平交易委员会告示)接受。</li>
               </ul>
             </div>
  </div>
 </div>
</template>

<script>
export default {
   name:'DTcomponent'
}
</script>

<style scoped lang='scss'>
  .DTcomponent{
    width: 100%;

  /*   background-color: red; */
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #e8e8e8;
    border-bottom: 1px solid #e8e8e8;
     background-color: #fafafa; 
   .DTcomponent_title{
 height: 100%;
 width: 30%;
 overflow: hidden;
   flex-grow: 1;
   h6{
     text-align: center;
     height: 100%;
   font-size: 16px;
   }
   }
   .DTcomponent_shop{
/*   background-color: blue; */
width: 70%;
background-color: white;
  flex-grow: 1;
  ul{
   font-size: 13px;
    margin-left: 50px;
    text-align: left;
    li:before {
           content: "";
           width: 4px;
           height: 4px;
           display: inline-block;
           border-radius: 50%;
           background: #333;
           vertical-align: middle;
           margin-right: 14px;
           }

  }
   }
  }
  .DTcomponent::after{
    content: '';
    display: block;
    clear: both;
  }
</style>