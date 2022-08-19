<template>
  <div class="event">
    <div class="ev-title">EVENT</div>
    <div class="ev-dragram">
      <el-carousel :interval="3000" arrow="always" indicator-position="none" height="45vh">
        <el-carousel-item v-for="(item, index) in ev_dragram" :key="index">
          <div class="mask"></div>
          <div class="txt">
            <p>{{ item.txt1 }}</p>
            <span class="txt2">{{ item.txt2 }}</span>
            <span class="txt3">{{ item.txt3 }}</span>
          </div>
          <div class="cet-img">
            <li v-for="item1 in item.cet_img" :key="item1">
              <img :src="item1" alt="" />
            </li>
          </div>
          <img :src="item.dragram_img" alt="" />
        </el-carousel-item>
      </el-carousel>
      <div></div>
    </div>
    <div class="senction">
      <div class="my_brand_cont">
        <div class="cont-title">
          <h3>
            <p>MY❤BRAND EVENT</p>
          </h3>
        </div>
        <div class="cont">
          <div class="cont-info">
            <p>
              로그인 하시면 MY❤에 등록한 BRAND의 최근 EVENT를 확인할 수
              있습니다.
            </p>
          </div>
          <div class="cont-btn">
            <router-link to="">로그인</router-link>
          </div>
        </div>
      </div>
      <div class="benefit">
        <div class="benefit-title">
          <h3>
            <p>BENEFIT</p>
          </h3>
        </div>
        <div class="benefit-cont">
          <ul>
            <li class="ev_cont" v-for="(item, index) in ev_senction" :key="index">
              <img :src="item" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="hotkeyword">
      <div class="hot-title">
        <h3>hot keyword</h3>
      </div>
      <div class="hot">
        <div class="hot-show">
          <ul>
            <li v-for="(item, index) in hot_keyword" :key="index">
              <a href="">{{ item }}</a>
            </li>
          </ul>
        </div>
        <div class="hot-search">
          <div class="search">
            <el-input v-model="hot_search" placeholder="제목 또는 내용, 브랜드명 입력">
            </el-input>
            <el-button type="primary" icon="el-icon-search"></el-button>
          </div>
        </div>
      </div>
    </div>
    <tab-btn @tabBtn="getShopList" />
    <div class="sort">
      <ul>
        <li v-for="(item, index) in sort" :key="index">
          <a href="">{{ item }}</a>
        </li>
      </ul>
      <select class="sort_select">
        <option v-for="(item, index) in sort_options" :key="index" :value="item.value" :selected="index === sort_value">
          {{ item.label }}
        </option>
      </select>
    </div>
    <div class="ev-shop clearfix">
      <div class="shoplist clearfix">
        <shop-item v-for="(item, index) in shoplist" :key="index" :shop="item" width="19%" height="45%"
          :priceshow="false" />
      </div>
      <div class="shoppage">
        <el-pagination background layout="prev, pager, next" :total="page_total" :current-page.sync='page'
          :page-size="10">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import a from "@/assets/ev-diagram-img/PIA1.jpg";
import b from "@/assets/ev-diagram-img/PIA2.jpg";
import c from "@/assets/ev-diagram-img/PIA3.jpg";
import d from "@/assets/ev-diagram-img/PIA4.jpg";
import cet1 from "@/assets/ev-diagram-img/cet1.jpg";
import cet2 from "@/assets/ev-diagram-img/cet2.jpg";
import cet3 from "@/assets/ev-diagram-img/cet3.jpg";
import ev_1 from "@/assets/ev-diagram-img/ev_1.png";
import ev_2 from "@/assets/ev-diagram-img/ev_2.png";
import ev_3 from "@/assets/ev-diagram-img/ev_3.jpg";
import ev_4 from "@/assets/ev-diagram-img/ev_4.jpg";
import { getShopList } from "@/api/shop.js";
export default {
  name: "Event",
  data() {
    return {
      ev_dragram: [
        {
          dragram_img: a,
          cet_img: [cet1, cet2, cet3],
          txt1: "10%세일",
          txt2: "JSNY",
          txt3: "21SUMMER",
        },
        {
          dragram_img: b,
          cet_img: [cet1, cet2, cet3],
          txt1: "10%세일",
          txt2: "JSNY",
          txt3: "21SUMMER",
        },
        {
          dragram_img: c,
          cet_img: [cet1, cet2, cet3],
          txt1: "10%세일",
          txt2: "JSNY",
          txt3: "21SUMMER",
        },
        {
          dragram_img: d,
          cet_img: [cet1, cet2, cet3],
          txt1: "10%세일",
          txt2: "JSNY",
          txt3: "21SUMMER",
        },
      ],
      ev_senction: { ev_1, ev_2, ev_3, ev_4 },
      hot_keyword: [
        "21SS도 함께할 베스트 아이템! #The Best, Forever",
        "매일 입고 싶은 클래식 #프론트로우 데님 컬렉션",
        "봄을 담은 #블라우스&셔츠 ",
        "W컨셉에서만 만나볼 수 있는 #봄기운을 담은 백",
        "4월, 새롭게 주목할 #주얼리 브랜드 ",
      ],
      hot_search: "",
      sort: ["全部", "收藏", "趋势", "社论", "销量", "事件"],
      sort_options: [
        {
          value: "选项1",
          label: " 진행중 이벤트 ",
        },
        {
          value: "选项1",
          label: " 진행중 이벤트 ",
        },
      ],
      sort_value: 0,
      shoplist: [],
      list: [],
      page: 1,
      page_total: 0,
    };
  },
  methods: {
    getShopList(item) {
      // console.log(item);
      const data = {
        parent_name: item || "全部",

      };
      getShopList(data).then((res) => {
        
        this.list = res.res;
        this.shoplist = this.list.slice((this.page - 1) * 10, this.page * 10)
        this.page_total = this.list.length
        console.log(res,this.shoplist,this.page_total);
      });
    },
   
  },
  watch: {
    page: {
      deep:true,
      handler(nval, oval) {
        this.shoplist = this.list.slice((nval - 1) * 10, nval * 10)
        console.log(nval,this.shoplist);
      }
    },

  },
  created() {
    this.getShopList();
  },
};
</script>

<style lang="scss" scoped>
.event {
  padding: 0;
  margin: 0 auto;
  width: 80%;
}

.ev-title {
  color: #333;
  font-family: "ProximaNova-Thin";
  font-size: 48px;
  text-transform: uppercase;
  text-align: center;
  margin: 60px 0 20px 0;
  font-weight: 100;
}

.el-carousel__item>img {
  color: #475669;
  height: 500px;
  font-size: 18px;
  opacity: 0.75;
  margin: 0;
  width: 100%;
  height: 100%;
}

.ev-dragram {
  position: relative;
  margin: 0 auto;
  width: 100%;
  min-height: 45vh;
  width: 100%;
}

.mask {
  position: absolute;
  bottom: 0;
  z-index: 100;
  width: 100%;
  height: 150px;
  background-color: rgba($color: #fff, $alpha: 0.5);
}

.txt {
  position: absolute;
  z-index: 200;
  bottom: 0;
  // background-color: #333;
  width: 150px;
  margin: 35px 650px 0px 155px;
  box-sizing: border-box;
  text-align: left;

  p {
    display: block;
    font-size: 14px;
    color: #666;
  }

  .txt2 {
    display: block;
    color: #000;
    font-size: 40px;
    margin-top: 3px;
  }

  .txt3 {
    display: block;
    font-size: 22px;
  }
}

.cet-img {
  position: absolute;
  bottom: -10px;
  right: 160px;
  z-index: 200;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  width: 440px;
  background-color: #fff;

  li {
    width: 32%;
    height: 100%;

    img {
      width: 100%;
    }
  }
}

.senction {
  width: 100%;
  height: 187px;
  margin: 70px auto;
  display: flex;
  justify-content: space-between;

  .my_brand_cont {
    display: block;
    width: 45%;

    .cont-title {
      border-bottom: 2px solid #000;

      h3 {
        width: 100%;
        font-size: 26px;
        color: #000000;
        text-align: left;
      }
    }

    .cont {
      width: 100%;
      font-size: 14px;
      color: #333;
      padding: 30px 0;

      .cont-info {
        p {
          text-align: center;
        }
      }

      .cont-btn {
        display: block;
        width: 140px;
        height: 40px;
        margin-top: 18px;
        background-color: #000;
        font-size: 14px;
        margin: 18px auto;
        text-align: center;
        line-height: 40px;

        a {
          color: #fff;
        }
      }
    }
  }

  .benefit {
    display: block;
    width: 45%;

    .benefit-title {
      h3 {
        width: 100%;
        font-size: 26px;
        color: #000000;
        text-align: left;
        margin-left: 5%;
      }
    }

    .benefit-cont {
      width: 100%;
      font-size: 14px;
      color: #333;
      padding: 30px 0;

      ul {
        margin: 0 auto;
        padding: 0;
        display: flex;
        justify-content: space-between;

        .ev_cont {
          position: relative;
          width: 25%;

          img {
            width: 70%;
          }

          &:not(:last-child)::after {
            position: absolute;
            right: 0;
            content: "";
            width: 1px;
            height: 100%;
            background-color: #000;
          }
        }
      }
    }
  }
}

.hotkeyword {
  width: 100%;
  height: 20vh;
  margin: 40px 0;
  background-color: #eee;
  display: flex;

  .hot-title {
    width: 20%;
    height: 100%;
    text-transform: uppercase;
    background-color: #5a5a5a;
    color: #fff;
    font-size: 26px;
    text-align: center;
    font-family: "ProximaNova-Thin";
  }

  .hot {
    display: flex;

    .hot-show {
      width: 60%;
      height: 100%;
      padding: 10px 15px;
      overflow: hidden;

      ul {
        li {
          float: left;
          height: 37px;
          border-radius: 20px;
          background-color: #fff;
          line-height: 37px;
          margin: 5px 3px;

          a {
            display: inline-block;
            height: 100%;
            color: #333333;
            padding: 0 13px;
            font-family: "yg740";
            font-size: 14px;
          }
        }
      }
    }

    .hot-search {
      width: 20%;
      height: 100%;
      padding: 10px 15px;

      .search {
        display: flex;
        width: 100%;
        height: 40px;
        margin: 50px 0;
      }
    }
  }
}

.sort {
  width: 100%;
  margin: 40px 0;
  display: flex;
  justify-content: space-between;
  height: 32px;
  line-height: 32px;

  ul {
    display: flex;
    width: 85%;
    height: 32px;

    li {
      height: 100%;
      line-height: 32px;
      padding: 6px 20px 6px 21px;
      position: relative;

      &:not(:last-child)::after {
        position: absolute;
        right: 0;
        content: "";
        width: 1px;
        height: 100%;
        background-color: aqua;
      }
    }
  }

  .sort_select {
    width: 150px;
    height: 100%;
    line-height: 32px;
  }
}

.shoplist {
  width: 100%;

  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>