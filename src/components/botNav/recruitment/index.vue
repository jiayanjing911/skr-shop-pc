<!-- 招聘信息 -->
<template>
  <div class="recruitment">
    <!-- 标题 -->
    <div class="recruitment-our">
      <span>招聘信息</span>
    </div>
    <!-- 图片 -->
    <div class="recruitment-img">
      <img src="../../../assets/images/recruitment.jpg" alt="" />
    </div>
    <!-- 招聘程序 -->
    <div class="recruitment-process">
      <h3>招聘程序</h3>
      <p>每次筛选的成功申请者公告均单独进行。</p>
      <p>如果申请表中有任何虚假信息，入场可能会被取消。</p>
      <div class="process">
        <el-steps :active="2" align-center>
          <el-step title="收到文件"></el-step>
          <el-step title="面试"></el-step>
          <el-step title="第二次面试"></el-step>
          <el-step title="加入"></el-step>
        </el-steps>
      </div>
      <div class="prcess-desc">
        <div class="desc1">
          <p>薪资条件</p>
          <p>根据公司章程-最终面试后的决定</p>
        </div>
        <div class="desc2">
          <p>工作地点</p>
          <p>首尔特别市江南区德黑兰路14街16号5楼（线馆驿三洞）</p>
        </div>
      </div>
    </div>
    <!-- 表单 -->
    <div class="recruitment-apply">
      <h3>应用</h3>
      <div class="apply-form">
        <el-form :model="form" label-width="80px">
          <div class="cent">
            <el-form-item label="支援区域">
              <div class="wid">
                <el-radio-group v-model="form.name">
                  <el-radio label=" 产品计划(w概念频道MD) "></el-radio>
                  <el-radio label="营销"></el-radio>
                  <el-radio label="手术"></el-radio>
                  <el-radio label="开发"></el-radio>
                  <el-radio label="其他"></el-radio>
                </el-radio-group>
              </div>
            </el-form-item>
          </div>
          <div class="cent">
            <el-form-item label="申请人姓名">
              <div class="wid">
                <el-input v-model="form.region"></el-input>
              </div>
            </el-form-item>
          </div>
          <div class="cent">
            <el-form-item label="出生日期">
              <div class="wid">
                <el-input v-model="form.date1"></el-input>
              </div>
            </el-form-item>
          </div>
          <div class="cent">
            <el-form-item label="性别">
              <div class="wid">
                <el-radio-group v-model="form.date2">
                  <el-radio label="男"></el-radio>
                  <el-radio label="女"></el-radio>
                </el-radio-group>
              </div>
            </el-form-item>
          </div>
          <div class="cent">
            <el-form-item label="电子邮件">
              <div class="wid">
                <div class="flex">
                  <el-input v-model="form.delivery"></el-input>@
                  <el-input v-model="form.delivery"></el-input>
                  <el-select placeholder="请选择活动区域" v-model="form.date2">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </div>
              </div>
            </el-form-item>
          </div>
          <div class="cent">
            <el-form-item label="手机号码">
              <div class="wid">
                <div class="flex">
                  <el-select placeholder="请选择活动区域" v-model="form.date2">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                  <el-input v-model="form.type"></el-input>
                  <el-input v-model="form.resource"></el-input>
                </div>
              </div>
            </el-form-item>
          </div>
          <div class="cent">
            <el-form-item label="电话号码">
              <div class="wid">
                <div class="flex">
                  <el-select placeholder="请选择活动区域" v-model="form.date2">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                  <el-input v-model="form.desc"></el-input>
                  <el-input v-model="form.desc"></el-input>
                </div>
              </div>
            </el-form-item>
          </div>
          <div class="cent">
            <el-form-item label="教育">
              <div class="wid">
                <el-select placeholder="请选择活动区域" v-model="form.desc">
                  <el-option label="区域一" value="1"></el-option>
                  <el-option label="区域二" value="2"></el-option>
                </el-select>
                <el-radio-group v-model="form.desc">
                  <el-radio label="已毕业"></el-radio>
                  <el-radio label="参加"></el-radio>
                  <el-radio label="休假"></el-radio>
                  <el-radio label="辍学"></el-radio>
                </el-radio-group>
              </div>
            </el-form-item>
          </div>
          <div class="cent">
            <el-form-item label="学校名">
              <div class="wid">
                <el-input v-model="form.date2"></el-input>
              </div>
            </el-form-item>
          </div>
          <div class="cent">
            <el-form-item label="主要的">
              <div class="wid">
                <el-input v-model="form.date2"></el-input>
              </div>
            </el-form-item>
          </div>
          <div class="cent">
            <el-form-item label="附上简历">
              <div class="wid">
                <el-input v-model="form.date2"></el-input>
                <input type="file" name="" id="" style="line-height: 3" />
              </div>
            </el-form-item>
          </div>
          <div class="cent">
            <el-form-item>
              <div class="wid">
                <el-checkbox
                  label="同意收集和使用个人信息"
                  name="type"
                  style="margin-left: -200px"
                  v-model="form.date2"
                ></el-checkbox>
                <button
                  style="
                    margin-left: 200px;
                    width: 80px;
                    height: 30px;
                    margin-top: 10px;
                  "
                >
                  查看内容
                </button>
              </div>
            </el-form-item>
          </div>
          <el-form-item>
            <div class="button">
              <el-button>取消</el-button>
              <el-button type="primary" @click="onSubmit">申请</el-button>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recruitment",
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: "",
        type: "",
        resource: "",
        desc: "",
      },
    };
  },
  methods: {
    onSubmit() {
      this.$message.warning("请选择查询类型");
    },
  },
};
</script>

<style lang="scss">
.recruitment {
  width: 100%;

  .recruitment-our {
    box-sizing: border-box;
    height: 200px;
    width: 1342px;
    padding-top: 80px;
    margin: 0 auto;
    span {
      font-size: 44px;
      line-height: 100%;
    }
  }
  .recruitment-img {
    margin: 0 auto;
    img {
      width: 1008px;
      height: 406px;
    }
  }
  .recruitment-process {
    width: 990px;
    margin: 0 auto;
    margin-top: 60px;
    h3 {
      line-height: 1.5;
      text-align: left;
      box-sizing: border-box;
      color: rgba(0, 0, 0, 0.85);
      margin: 0;
      padding: 0;
      font-weight: 700;
      font-size: 24px;
    }
    p {
      line-height: 1.5;
      text-align: left;
      color: rgba(0, 0, 0, 0.65);
      margin: 0;
      padding: 0;
      // font-weight: 500;
      font-size: 16px;
    }
    .process {
      width: 1090px;
      margin-left: -50px;
      margin-top: 20px;
    }
    .prcess-desc {
      width: 894px;
      height: 60px;
      display: flex;
      justify-content: center;
      margin-top: 15px;
      color: rgb(0, 0, 0, 0.65);

      .desc1 {
        p {
          text-align: center;
          font-size: 12px;
          line-height: 1.5;
        }
        width: 340px;
        border-left: 1px solid rgb(126, 126, 126);
        height: 60px;
      }
      .desc2 {
        p {
          text-align: center;
          font-size: 12px;
          line-height: 1.5;
        }
        width: 340px;
        height: 60px;
        border-left: 1px solid rgb(126, 126, 126);
      }
    }
  }
  .recruitment-apply {
    width: 1007px;
    margin: 0 auto;

    h3 {
      text-align: left;
      font-size: 24px;
      border-bottom: 2px solid #333;
      display: block;
      padding-bottom: 10px;
      color: rgba(0, 0, 0, 0.85);
      font-weight: 500;
      margin-bottom: 20px;
    }
  }
}
.el-input__inner {
  width: 230px;
  display: inline-block;
  margin: 0 5px;
}
.flex {
  display: flex;
  justify-content: left;
}
.el-form-item__label {
  padding: 0 10px 0 0;
}
.el-form-item {
  width: 750px;
  margin: 0 auto;
  line-height: 60px;
  height: 60px;
  margin-top: 15px;
}
.wid {
  margin: 0 auto;
  width: 750px;
  display: flex;
  justify-content: center;
  line-height: 3;
}
.el-radio__label {
  line-height: 3;
}
.el-form-item__content {
  width: 100px;
  // display: flex;
  // justify-content: left;
}
.cent {
  width: 1007px;
  height: 60px;
  border-bottom: 1px solid rgb(204, 204, 204);
}
.el-button--default {
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  background-image: none;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  user-select: none;
  touch-action: manipulation;
  background-color: #fff;
  outline: 0;
  margin: 0;
  min-width: 180px;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  text-align: center;
  padding: 0 20px;
  border: 1px solid #000;
  border-radius: 0;
  color: #000;
  display: inline-block;
}
.el-button--primary {
  box-sizing: border-box;
  font-family: inherit;
  overflow: visible;
  text-transform: none;
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  background-image: none;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  user-select: none;
  touch-action: manipulation;
  outline: 0;
  margin: 0;
  min-width: 180px;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  text-align: center;
  padding: 0 20px;
  border: 1px solid #000;
  border-radius: 0;
  background-color: #000;
  color: #fff;
  margin-left: 20px;
  display: inline-block;
}
.button {
  width: 600px;
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
}
.el-input{
  display: flex;
  justify-content: left;
  margin: 0;
}
.el-radio-group{
  width: 100%;
  text-align: left;
}
</style>