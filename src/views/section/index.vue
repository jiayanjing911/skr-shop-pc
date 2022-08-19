<template>

  <div class="section">
    <h1>{{ $route.params.iten }}</h1>
    <p>Home / Secondary</p>
    <div class="section-top">
      <div class="top">
        <h1>{{ $route.params.iten }}专区</h1>
        <p>www.stride.fun</p>
      </div>
      <div class="bottom">
        <h3>今日推荐</h3>
      </div>
      <div class="section-bot clearfix">
        <span class="left">共计{{ count }}件</span>

        <Classify @getshoplist="getshoplist" :page="page" :lists="list" v-if="list.length>0"></Classify>

      </div>
      <div class="clearfix">
        <shop-item v-for="(item, index) in shoplist" :key="index" :shop="item" :pshow="true" height="300px" width="19%">
        </shop-item>
      </div>
      <el-pagination background layout="prev, pager, next" :total="count" :current-page.sync='page' :page-size="value1">
      </el-pagination>
    </div>

  </div>
</template>
 
<script>
import { getSpu } from "@/api/home";
import Classify from "../../components/classify/index.vue";

export default {
  name: "Section",
  data() {
    return {
      list: [],
      shoplist: [],
      count: 0,
      page: 1,
      value1:10,
    };
  },
  methods: {
    getSpu(name) {
      console.log({ name });
      getSpu(name).then((data) => {
        console.log(data.data);
        this.list = data.data;
        this.shoplist = this.list.slice(0, this.value1);
        this.count = this.list.length;
        console.log(this.list);
      });
    },
    getshoplist(val,value1) {
      this.shoplist = val
      this.value1=value1
    },
  },
  components: { Classify },
  watch: {
 '$route': {
      deep: true,
      handler() {
        this.getSpu(this.$route.params.iten)
      }
    },   
    page: {
      deep: true,
      handler(nval, oval) {

        this.shoplist = this.list.slice((nval - 1) * this.value1, nval * this.value1)
        console.log(nval, this.shoplist);
      }
    },
  },
  created() {
    console.log(this.$route.params.iten, '......');
    this.getSpu(this.$route.params.iten)
  },
}

</script>

<style lang="scss" scoped>
.section {
  width: 1200px;
  margin: 20px auto;

  .section-top {

    .top {
      height: 300px;
      text-align: left;
      background-color: #5a5a5a;
      color: white;
      margin-top: 20px;

      * {
        padding-top: 50px;
        padding-left: 50px;
      }


    }

    .bottom {
      height: 50px;
      text-align: left;
      line-height: 50px;
      border-bottom: 2px solid #000;
    }

    .section-bot {
      margin-top: 20px;

    }
  }
}
</style>