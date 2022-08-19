<template>
  <div class="best_view">
    <div class="best">
      <h1>最好的</h1>
      <div class="best_top_one">
        <tab-btn @tabBtn="getValue"></tab-btn>
      </div>
      <div class="best_top_two">
        <div class="tabitem">
          <ul>
            <li
              v-for="(item, index) in sort[this.msg]"
              :key="index"
              @click="underLine(index)"
            >
              <span :class="{ active: isShow == index ? true : false }">{{
                item
              }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="el-select">
        <el-select v-model="value" filterable placeholder="日常的">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="best_list">
        <list :getmsg="msg"></list>
      </div>
    </div>
  </div>
</template>

<script>
import List from "./ChildCompss/List.vue";
export default {
  name: "Best",
  components: {
    List,
  },
  data() {
    return {
      isShow: 0,
      msg: "All",
      sort: {
        All: [],
        鞋类: ["ALL WOMEN", "APPAREL", "BAG", "SHOES", "ACC"],
        服饰: ["ALL MEN", "APPAREL", "BAG", "SHOES", "ACC"],
        配件: [
          "ALL LIFE",
          "LIFEWEAR",
          "HOME",
          "TRAVEL",
          "DIGITAL",
          "PET",
          "GOODS",
        ],
        儿童专区: [
          "ALL BEAUTY",
          "FACIAL BEAUTY",
          "SALON BEAUTY",
          "SCENT BEAUTY",
          "INNER BEAUTY",
          "for MEN",
        ],
      },
      value: "",
      options: [
        {
          value: "选项1",
          label: "日常的",
        },
        {
          value: "选项2",
          label: "每周",
        },
        {
          value: "选项3",
          label: "每月一次",
        },
      ],
    };
  },
  methods: {
    getValue(item) {
      this.msg = item;
    },
    underLine(index) {
      this.isShow = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.best_view {
  // width: 100%;
  width: 1500px;
  margin: 0 auto;
  & > .best {
    width: 80%;
    margin: 0 auto;
    position: relative;
    & > h1 {
      color: #333;
      font-family: "ProximaNova-Thin";
      font-size: 48px;
      text-transform: uppercase;
      text-align: center;
      margin: 60px 0 20px 0;
      font-weight: 100;
    }
    & > .el-select {
      width: 120px;
      height: 32px !important;
      line-height: 21px;
      position: absolute;
      right: 0px;
    }
  }
}
.tabitem {
  width: 90%;
  margin: 0 auto;
  ul {
    width: 100%;
    height: 32px;
    margin: 25px auto 20px;
    li:first-child {
      border: none;
    }
    li {
      display: inline-block;
      text-align: center;
      line-height: 15px;
      padding: 0 20px;
      font-size: 12px;
      cursor: pointer;
      border-left: 1px solid #bbb;
      span {
        padding-bottom: 5px;
      }
    }
  }
}
.active {
  border-bottom: 1px solid #333;
}
</style>