<template>
  <div>
    <nav ref="nav" :class="{ navFixed: isFixed } ">
      <div class="nav">
        <img class="img" src="../../assets/image/s,k,r.png" alt="图片logo" v-show="isShow"
          @click="$router.push('/home')" />
        <ul class="classify">
          <li v-for="(item, index) in parentName" :key="index">
            <router-link to="/proimary" @click.native="parentNamehandle(item)">{{ item }}</router-link>
            <div>
              <suspension-vue :item="item" :typeList="typeList[item]"></suspension-vue>
            </div>

          </li>

          <li></li>
          <li>
            <router-link to="/popslideshow">POP</router-link>
          </li>
          <li>
            <router-link to="/exclusive">EXCLUSIVE</router-link>
          </li>
          <li>
            <router-link to="/event">EVENT</router-link>
          </li>
          <li>
            <router-link to="/best">BEST</router-link>
          </li>
        </ul>
        <ul class="member" v-show="isShow">
          <li>
            <a href>搜索</a>

          </li>
          <li>
            <router-link to="/my">MY</router-link>
          </li>
          <li>
            <router-link to="/shopCars">购物车</router-link>
          </li>
          <div></div>
        </ul>
      </div>
    </nav>
    <div>
    </div>
  </div>
</template>

<script>
import { getParentName } from '@/api/navraptop.js'
import SuspensionVue from './SuspensionVue.vue';
import { getproduct } from "@/api/home";
export default {
  components: { SuspensionVue },
  name: 'NavBarTop',
  data() {
    return {
      isShow: false,
      isFixed: false,
      parentName: [],
      parentlist: [],
      typeList: {
        "服饰": [],
        "鞋类": [],
        "配件": [],
        "儿童专区": [],
      },
    };

  },
  methods: {
    getParentName() {
      getParentName().then(data => {
        console.log(data)
        this.parentName = data.data
        this.parentlist = data.result
      })
    },
    getproduct(name) {
      console.log({ name });
      getproduct(name).then((data) => {
        console.log(data.data);
        this.typeList[name] = data.res;
        console.log(this.typeList);
      });
    },
    parentNamehandle(item) {
      console.log(item)
      this.$router.push('/proimary?parentName=' + item)
    }
  },
  created() {
    this.getParentName()
    this.getproduct("服饰");
    this.getproduct("鞋类");
    this.getproduct("配件");
    this.getproduct("儿童专区");
  },
  mounted() {
    let navTopDom = this.$refs['nav'];
    let h = parseFloat(getComputedStyle(navTopDom)['height']);
    let p = parseFloat(getComputedStyle(navTopDom)['paddingTop']);
    let pb = parseFloat(getComputedStyle(navTopDom)['paddingBottom']);
    let H = h + p + pb;
    window.addEventListener("scroll", () => {
      // console.log(H);
      if (scrollY > H - 10) {
        this.isFixed = true;
        this.isShow = true;
      } else {
        this.isFixed = false;
        this.isShow = false;
      }
    });
  }
};
</script>

<style lang="scss" scoped>
a {
  color: white;
}

li {
  display: inline-block;

  a {
    font-size: 14px;
  }
}


nav {
  background-color: wheat;
  margin: 0;
  padding: 0;
  z-index: 999;
  min-width: 1500px;
  height: 60px;

  .nav {
    width: 100%;
    height: 60px;
    background-color: black;
    min-width: 1500px;
    position: relative;

    .img {
      width: 150px;
      height: 60px;
      position: absolute;
      top: 0px;
      left: 7%;
      float: left;
    }

    .classify {
      width: 60%;
      height: 60px;
      margin: 0 auto;

      li {
        margin-left: 5%;

        text-align: center;
        font-size: 20px;
        color: white;

        a {
          line-height: 60px;
        }

        div {
          display: none;
        }
      }

      li:hover a {
        color: rgb(70, 163, 129);

      }

      li:hover div {
        display: block;
      }
    }

    .member {
      width: 213px;
      height: 60px;
      position: absolute;
      top: 0px;
      right: 5%;
      float: left;

      li {
        width: 60px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        font-size: 20px;
        padding: 0 auto;
      }

      li:hover {
        background-color: #999;
      }
    }
  }
}

.navFixed {
  position: fixed;
  top: 0;
  width: 100% !important;
  z-index: 10;
  animation: backtop 0.5s;
}
</style>