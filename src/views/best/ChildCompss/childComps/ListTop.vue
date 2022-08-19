<template>
  <div class="listTop">
    <ul>
      <li v-for="(item, index) in imgTopList" :key="index" @click="getdetails(item)">
        <span class="icon_best">
          <strong>{{ index + 1 }}</strong>
          <p>BEST</p>
        </span>
        <img :src="item.img" alt="" />
        <div class="textMax">
          <div class="text_wrap">
            <div class="brand">LOEUVRE</div>
            <div class="front">{{ item.title }}</div>
          </div>
          <div class="price">
            <span class="discount_price">{{ item.price }}</span>
            <span class="base_price">{{ item.price + 1000 }}</span>
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
  </div>
</template>

<script>
import { getImg } from "@/api/best.js";
export default {
  name: "ListTop",
  data() {
    return {
      imgTopList: [],
    };
  },
  props: {
    listTop: {
      type: String,
      defalut: "",
    },
  },
  methods: {
    async getImg_(parent_name, start, end, sort_) {
      const res = await getImg({ parent_name, start, end, sort_ });
      // console.log(res, this.listTop);
      if (this.listTop == "All" || "服饰") {
        this.imgTopList = res;
      } else {
        this.imgTopList = res;
      }
    },
    getdetails(item){
      this.$router.push('/detail?shopdetail='+item.id) 
    }
  },
  created() {
    if (this.listTop == "All") {
      let arr = ["服饰"];
      arr.forEach((item) => {
        this.getImg_(item, 1, 3, "price");
      });
    } else {
      this.getImg_(this.listTop, 1, 3, "price");
    }
  },
  watch: {
    listTop() {
      if (this.listTop == "All") {
        this.getImg_('服饰', 1, 3, "price");
      } else {
        // console.log(this.listTop);
        this.getImg_(this.listTop, 1, 3, "price");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.lst_top {
  padding: 4% 20px 0 20px;
  background-color: #f2f2f2;
}
li:hover {
  box-shadow: 0 0 4px 6px #ddd;
  transform: scale(1.02);
}
ul {
  width: 100%;
  display: flex;
  padding-bottom: 50px;
  flex-wrap: wrap;
  justify-content: space-around;
  li {
    width: calc((100% / 3 - 4%));
    position: relative;
    border: 1px solid #bbb;
    .icon_best {
      width: 70px;
      height: 79px;
      background-image: url(//static.wconcept.co.kr/web/images/common/bg_best.png);
      position: absolute;
      top: 0;
      left: 0;
      strong {
        text-align: center;
        color: white;
        display: block;
        height: 36px;
        margin-top: 4px;
        font-size: 34px;
        font-family: "ProximaNova-Semibold";
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
      height: 126px;
      text-align: justify;
      .text_wrap {
        height: 61px;
        .brand {
          color: #000000;
          font-size: 14px;
          margin-bottom: 10px !important;
          font-family: "yg750";
          font-weight: 900;   
        }
        .front {
          font-size:22px;
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
        margin: 10px 0px;
        .discount_price {
          font-size: 18px;
          color: #000 !important;
          margin: 9px 8px 9px 0px;
        }
        .base_price {
          font-size: 14px;
          color: #808080;
          text-decoration: line-through;
        }
        .discount_rate {
          display: block;
          position: absolute;
          top: 0;
          right: 0;
          font-size: 16px;
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