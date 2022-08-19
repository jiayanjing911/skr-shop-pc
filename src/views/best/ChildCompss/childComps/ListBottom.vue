<template>
  <div class="listBottom">
    <ul>
      <li v-for="(item, index) in imgBottomList" :key="index" @click="getdetails(item)">
        <span class="icon_best">
          <strong>{{ 8 + index }}</strong>
        </span>
        <img :src="item.img" alt="" />
        <div class="textMax">
          <div class="text_wrap">
            <div class="front">{{ item.title }}</div>
          </div>
          <div class="price">
            <span class="discount_price">{{ item.price }}</span>
            <span class="base_price">{{ item.price + 100 }}</span>
            <span class="discount_rate">10%</span>
          </div>
          <p class="reservation">预定</p>
          <div class="review_box">
            <div class="graph">
              <span class="inner" style="width: 98%"></span>
            </div>
            <div class="review_count"></div>
          </div>
        </div>
      </li>
    </ul>
    <el-pagination
      :page-size="pageSize"
      background
      layout="prev, pager, next"
      :total="total"
      :current-page="1"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>

<script>
import { getImg } from "@/api/best.js";
export default {
  name: "ListBottom",
  data() {
    return {
      imgBottomList: [],
      total: 0,
      pageSize: 15,
      nArr:[],
    };
  },
  props: {
    listBottom: {
      type: String,
      defalut: "",
    },
  },
  methods: {
    // 分割res数组
    getNewArray(array, subGroupLength) {
      let index = 0;
      let newArray = [];
      while (index < array.length) {
        newArray.push(array.slice(index, (index += subGroupLength)));
      }
      return newArray;
    },
    async getImg_(parent_name, start, end) {
      const res = await getImg({ parent_name, start, end });
      this.total = res.length;
      this.nArr=this.getNewArray(res,this.pageSize);
      if (this.listBottom == "All" || "鞋类") {
        this.imgBottomList = res.slice(0, this.pageSize);
      } else {
        this.imgBottomList = res;
      }
    },
    handleCurrentChange(val) {
      for (let i = 0; i < this.nArr.length; i++) {
        if (val-1==i) {
          this.imgBottomList=this.nArr[i]
        }
      }
    },
    getdetails(item){
      console.log(item.id)
      this.$router.push('/detail?shopdetail='+item.id) 
    }
  },
  created() {
    if (this.listBottom == "All") {
      let arr = ["鞋类"];
      arr.forEach((item) => {
        this.getImg_(item, 8, 98, "price");
      });
    } else {
      this.getImg_(this.listBottom, 8, 98);
    }
  },
  watch: {
    listBottom() {
      if (this.listBottom == "All") {
        this.getImg_("鞋类", 8, 98, "price");
      } else {
        this.getImg_(this.listBottom, 8, 98);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.listBottom {
  margin-top: 60px;
}
li:hover {
  box-shadow: 0 0 4px 3px #ddd;
  transform: scale(1.01);
}
ul {
  display: flex;
  flex-wrap: wrap;
  margin-right: -22px;
  li {
    width: calc((100% - 20px * 5) / 5);
    margin-right: 15px;
    margin-bottom: 10px;
    position: relative;
    border: 1px solid #ddd;
    border-radius: 5px;
    .icon_best {
      width: 35px;
      height: 35px;
      background: #666;
      position: absolute;
      text-align: center;
      line-height: 30px;
      top: 0;
      left: 0;
      strong {
        color: white;
        display: block;
        margin-top: 4px;
        font-size: 16px;
      }
      p {
        font-size: 14px;
        color: white;
        text-align: center;
        font-family: "ProximaNova-Regular";
      }
    }
    img {
      width: 100%;
    }
    .textMax {
      padding: 4%;
      height: 90px;
      text-align: justify;
      .text_wrap {
        height: 31px;
        .front {
          font-size: 18px;
          color: #000000;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          margin-bottom: 9px;
        }
      }
      .price {
        position: relative;
        font-family: "ProximaNova-Regular";
        line-height: 100%;
        margin-bottom: 10px;
        .discount_price {
          font-size: 16px;
          color: #000 !important;
          margin-right: 8px;
        }
        .base_price {
          font-size: 13px;
          color: #808080;
          text-decoration: line-through;
        }
        .discount_rate {
          display: block;
          position: absolute;
          top: 0;
          right: 0;
          font-size: 14px;
          color: #ff4000;
        }
      }
      .reservation {
        border: 1px solid #9b9b9b;
        font-size: 12px;
        text-align: center;
        line-height: 18px;
        width: 30px;
        height: 18px;
        color: #b2b2b2;
        box-shadow: 1px 1px 2px #9b9b9b;
      }
    }
  }
}
</style>