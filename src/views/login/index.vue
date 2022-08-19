<template>
  <div>
    <div class="box">
      <h1>登录</h1>
      <hr />
      <div class="item">
        <div class="item_left">
          <el-form ref="loginsform" :model="loginform" label-width="80px" :rules="loginrules">
            <!-- 用户名输入框 -->
            <el-form-item label="用户名" prop="username">
              <el-input v-model="loginform.username" placeholder="请输入您的用户名" class="ipt"></el-input>
            </el-form-item>
            <!-- 表单密码框 -->
            <el-form-item label="密码" prop="password">
              <el-input v-model="loginform.password" placeholder="请输入您的密码"></el-input>
            </el-form-item>
          </el-form>
          <p>
            <SvgIcon v-show="!loginform.iconshow" icon-class="icon_对号-面 (1)" @click="loginform.iconshow = true"></SvgIcon>
            <SvgIcon v-show="loginform.iconshow" icon-class="icon_对号-面 (2)" @click="loginform.iconshow = false"></SvgIcon>记住账号
          </p>
        </div>
        <div class="item_right">
          <div class="right_one">
            <h2 @click="login">登录</h2>
          </div>
          <div class="right_two">
            <ul>
              <li>找回用户名</li>
              <li @click="Forgotpassword">忘记密码</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="clear"></div>
      <div class="avg">
        <div class="avg_one">
          <p>第三方登录</p>
        </div>
        <ul>
          <li>

            <a href="#"><img src="../../assets/images/qq.png">

            </a>

          </li>
          <li>
            <a href="#"><img src="../../assets/images/vx.png"></a>
          </li>
        </ul>
      </div>
      <Loginfooter></Loginfooter>
    </div>
  </div>
</template>

<script>
import Loginfooter from '@/views/login/footer/index.vue'
import SvgIcon from '@/components/SvgIcon/index.vue';
export default {
  name: "Login",
  components: {
    Loginfooter,
    SvgIcon
  },
  data() {

    return {
      /* 表单的数据 */
      loginform: {
        username: this.$store.getters.username,
        password: this.$store.getters.password,
        iconshow: true,
      },
      //是否记住密码
      
      //表单的验证规则
      loginrules: {
        username: [
          {
            required: true, message: '请输入你的用户名', trigger: 'blur'
          }
        ],
        password: [
          {
            required: true, message: '请输入你的密码', trigger: 'blur'
          }
        ]
      }
    };
  },
  created() {
    console.log(this.$store.getters.username, this.$store.getters.password, 111111);
  },
  methods: {
    login() {
     
      this.$refs.loginsform.validate(valid => {
        if (!valid) return
        console.log('1111')

        this.$store.dispatch('user/login', this.loginform).then(data => {

           this.$router.push({path:this.redirect || '/'})
          console.log(this.$store.getters.token);
          

          return this.$message.success('用户登录成功')
        }).catch(error => {
          return error
        })
      })
    },
    /* 忘记密码事件 */
    Forgotpassword() {
      this.$router.push('/changePassword')
    }
  },


};
</script>

<style lang="scss" scoped>
.box {
  width: 1240px;
  margin: 100px auto;

  h1 {
    font-size: 40px;
    padding-bottom: 70px;
    font-family: "Microsoft YaHei", 微软雅黑, "MicrosoftJhengHei", 华文细黑,
      STHeiti, MingLiu;
  }

  hr {
    border: 0.5px solid black;
  }

  .item {

    display: flex;

    .item_left {
      width: 525px;
      margin: 50px 200px 0px;

      .el-form-item {
        width: 490px;
        margin-left: 50px;
      }
    }

    ;

    .right_one {
      width: 190px;
      height: 105px;
      line-height: 100px;
      background-color: black;
      margin-left: -150px;

      margin-top: 48px;

      h2 {
        color: white;
        font-size: 16px;
        cursor: pointer;
      }
    }

    .right_two {
      width: 200px;
      margin-top: 20px;
      margin-left: -150px;

      ul {
        display: flex;

        li {
          flex-grow: 1;
        }
      }
    }
  }

  .avg {
    margin-top: 70px;
    /*   background-color: red; */
    /*   overflow: hidden */
    ;
    position: relative;
    margin-bottom: 70px;

    .avg_one {
      display: inline-block;
      font-size: 18px;
      margin-top: 20px;
      /* background-color: blue; */
      margin-left: -700px;

    }

    ul {
      position: absolute;
      margin-top: -50px;
      margin-left: 330px;

      li {
        float: left;
        margin-right: 20px;

        a {
          width: 32px;

          img {
            width: 100%;
            margin-top: 20px;
          }
        }
      }
    }

  }

  clear {
    clear: both;
  }
}
</style>