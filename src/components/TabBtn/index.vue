<template>
  <div class="tab-btn">
    <ul>
      <li v-for="(item, index) in tabData" :key="index">
        <button :class="{ select: index == selected }" @click="select(index, item)">
          {{ item }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TabBtn",
  data() {
    return {
      tabData: ["服饰", "鞋类", "配件", "儿童专区"],
      selected: 0,
    };
  },
  created() {
    this.tabData.unshift("All");
  },
  methods: {
    select(index, item) {
      this.selected = index;
      if (item === "All") {
        item = "全部"
      }
      this.$emit('tabBtn', item)
    }
  },
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0 auto;
}

.tab-btn {
  width: 100%;
  height: 60px;
  background-color: #ccc;
}

ul {
  padding: 0;
  margin: 0 auto;
  display: flex;
  border-bottom: 1px solid #000;
}

li {
  width: 20%;
}

button {
  width: 100%;
  height: 60px;
  background-color: #fff;
  border: 1px solid #ccc;
  cursor: pointer;
  position: relative;
}

.select {
  border: 1px solid #000;

  &::before {
    content: "";
    width: 100%;
    height: 2px;
    background-color: #fff;
    position: absolute;
    left: 0;
    bottom: -2px;
  }
}
</style>