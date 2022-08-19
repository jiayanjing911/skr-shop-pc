<template>
  <div class="addAddresses" v-show="flag">
    <div class="add-title">
      <h3>收货地址</h3>
      <h3 @click="changeflag()">x</h3>
    </div>
    <div class="add-content1">
      <div class="add-content1-name">
        <p>收货人</p>
        <el-input type="text" v-model="name" />
      </div>
      <div class="add-content1-tel">
        <p>手机号码</p>
        <el-input type="text" v-model="tel" />
      </div>
    </div>
    <div class="add-content2">
      <div class="add-content2-label">
        <ul>
          <li>国家/地区</li>
          <li>省/直辖市</li>
          <li>市</li>
          <li>区/县</li>
        </ul>
      </div>
      <div class="add-content2-input">
        <el-form>
          <!-- 国家 -->
          <el-form-item class="el-form-item">
            <el-select v-model="country" placeholder="中国大陆">
              <el-option label="中国大陆" value="shanghai"></el-option>
            </el-select>
          </el-form-item>
          <!-- 省 -->
          <el-form-item>
            <el-select
              v-model="provinceCode"
              placeholder="请选择"
              @change="provinceChange(provinceCode)"
            >
              <el-option
                :label="province.name"
                :value="code"
                v-for="(province, code) in provinces"
                :key="code"
                >{{ province.name }}</el-option
              >
            </el-select>
          </el-form-item>
          <!-- 市 -->
          <el-form-item>
            <el-select
              v-model="cityCode"
              placeholder="请选择"
              @change="cityChange(cityCode)"
            >
              <el-option
                v-for="(city, code) in cities"
                :label="city.name"
                :value="code"
                :key="code"
              ></el-option>
            </el-select>
          </el-form-item>
          <!-- 区 -->
          <el-form-item>
            <el-select v-model="areaCode" placeholder="请选择">
              <el-option
                v-for="(area, code) in areas"
                :value="area"
                :key="code"
                >{{ area }}</el-option
              >
            </el-select>
          </el-form-item></el-form
        >
      </div>
    </div>
    <div class="add-content3">
      <!-- 详细地址 -->
      <p>详细地址</p>
      <el-input type="text" v-model="detailAddress" />
    </div>
    <div class="add-content4">
      <!-- checkout复选框 -->
      <el-checkbox label="是否设置为默认地址" v-model="isDefault"></el-checkbox>
    </div>
    <div class="add-button">
      <div class="submit">
        <!-- 返回和保存按钮 -->
        <button type="button" class="back-btn" @click="changeflag()">
          <span>返 回</span>
        </button>
        <button
          type="button"
          class="save-btn"
          v-if="id == undefined ? true : false"
          @click="saveAddress"
        >
          <span>保存地址</span>
        </button>
        <button type="button" class="save-btn" v-else @click="updateAddress">
          <span>更新地址</span>
        </button>
      </div>
    </div>
  </div>
</template>


<script>
import { addAddress, updateAddress } from "@/api/addAddress.js";
import { addressData } from "../../../plugins/addressData/data.js";
export default {
  name: "AddAddresses",
  data() {
    return {
      country: "",
      detailAddress: "",
      isDefault: 0,
      name: "",
      tel: "",
      proCode: "",
      provinces: addressData,
      cities: {},
      areas: {},
      provinceCode: "请选择",
      cityCode: "请选择",
      areaCode: "请选择",
    };
  },
  props: {
    flag: {
      type: Boolean,
      default: true,
    }, //控制表单是否显示
    id: {
      type: Number,
      default: undefined,
    },
  },
  methods: {
    provinceChange(value) {
      this.cities = this.provinces[value].child;
      this.cityCode = "请选择";
      this.areaCode = "请选择";
    },
    cityChange(value) {
      this.areas = this.cities[value].child;
      this.areaCode = "请选择";
    },
    saveAddress() {
      // 点击保存隐藏新增地址表单
      this.changeflag();
      // 保存地址
      let provinceName = addressData[this.provinceCode].name;
      let cityName = addressData[this.provinceCode].child[this.cityCode].name;
      let customer_id = this.$store.getters.id; //用户id
      let name = this.name; //用户名
      let tel = this.tel; //电话
      let address = `${provinceName}${cityName}${this.areaCode}${this.detailAddress}`; //地址
      let prime = this.isDefault ? 1 : 0;
      let options = { customer_id, name, tel, address, prime };
      console.log(options);
      // 发送请求
      addAddress(options)
        .then((res) => {
          console.log(res);
          // 在此页面提示新增收货地址成功
          this.$message({
            showClose: true,
            message: "成功",
            type: "success",
          });
          this.changeflag()
        })
        .catch((error) => {
          // console.log(error);
          this.$message({
            showClose: true,
            message: "新增失败",
            type: "error",
          });
        });
    },
    changeflag() {
      this.$emit("changeflag", false);
    },
    updateAddress() {
      // 点击保存隐藏新增地址表单
      // 保存地址
      let provinceName = addressData[this.provinceCode].name;
      let cityName = addressData[this.provinceCode].child[this.cityCode].name;
      // let customer_id = this.$store.getters.id; //用户id
      let id = this.id;
      let name = this.name; //用户名
      let tel = this.tel; //电话
      let address = `${provinceName}${cityName}${this.areaCode}${this.detailAddress}`; //地址
      // let prime = this.isDefault?1:0;
      let data = { id, name, tel, address };
      console.log(data);
      updateAddress(data).then((res) => {
        console.log(data);
        this.changeflag();
      });
    },
  },
  created() {},
};
</script>

<style lang="scss" scoped>
.addAddresses {
  text-align: left;
  width: 700px;
  height: 560px;
  background-color: #fff;
  margin: 0 auto;
  border: 1px solid gray;
  padding: 50px 10px;
  box-sizing: border-box;
  font-size: 14px;
  .add-title {
    width: 660px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgb(216, 216, 216);
    line-height: 60px;
    h3 {
      font-weight: 500;
    }
  }
  .add-content1 {
    width: 660px;
    height: 103px;
    display: flex;
    justify-content: left;
    .add-content1-name {
      width: 200px;
      margin: 0 200px 0 15px;
    }
    .add-content1-tel {
      width: 200px;
      margin: 0 200px 0 15px;
    }
    p {
      text-align: left;
      margin: 10px 0;
      font-size: 14px;
    }
  }
  .add-content2 {
    width: 690px;
    height: 36px;
    .add-content2-label {
      ul {
        display: flex;
        justify-content: space-around;
        li {
          display: inline-block;
        }
      }
    }
    .add-content2-input {
      display: flex;
      justify-content: space-around;
      .el-form-item {
        // display: flex;
        // justify-content: space-around;
        display: inline-block;
        width: 150px;
        margin: 15px 10px;
      }
    }
  }
  .add-content3 {
    width: 660px;
    height: 60px;
    margin-top: 60px;
    margin-left: 15px;
  }
  .add-content4 {
    width: 660px;
    margin-left: 15px;
    margin-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid rgb(200, 200, 200);
  }
  .add-button {
    width: 660px;
    display: flex;
    justify-content: right;
    margin-top: 50px;
    .back-btn {
      box-sizing: border-box;
      font-family: inherit;
      overflow: visible;
      text-transform: none;
      position: relative;
      display: inline-block;
      font-weight: 400;
      white-space: nowrap;
      text-align: center;
      background-image: none;
      box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      user-select: none;
      touch-action: manipulation;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.65);
      background-color: #fff;
      outline: 0;
      margin: 0;
      -webkit-appearance: button;
      padding: 0 25px;
      height: 40px;
      line-height: 38px;
      border: 1px solid #979797;
      border-radius: 0;
      margin-right: 10px;
    }
    .save-btn {
      font-feature-settings: "tnum";
      box-sizing: border-box;
      font-family: inherit;
      overflow: visible;
      text-transform: none;
      position: relative;
      display: inline-block;
      font-weight: 400;
      white-space: nowrap;
      text-align: center;
      background-image: none;
      box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      user-select: none;
      touch-action: manipulation;
      font-size: 14px;
      outline: 0;
      margin: 0;
      -webkit-appearance: button;
      padding: 0 25px;
      height: 40px;
      line-height: 38px;
      border: 1px solid #979797;
      border-radius: 0;
      margin-right: 10px;
      background-color: #4c4c4c;
      color: #ffffff;
    }
  }
}
</style>