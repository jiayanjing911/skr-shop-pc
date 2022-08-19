<template>
    <div class="Register">
        <h1>注册</h1>
        <div class="joinStep">
            <span>
                <img src="../../assets/image/sign.png" alt="">

            </span>
            <span>
                <img src="../../assets/image/sign2.png" alt="">

            </span>
            <span>
                <img src="../../assets/image/sign1.png" alt="">
            </span>
        </div>
        <div>
            <div class="infoTable">
                <div class="hint">
                    <h3>如果您注册成为会员，您将获得10％的折扣券,可以立即使用。</h3><span>（每个完成自我认证的帐户只能使用一次）</span>
                </div>
                <el-form label-position="left" :model="ruleForm" :rules="rules" label-width="80px">
                    <el-form-item label="用户名" prop="username">
                        <el-input v-model="ruleForm.username"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input type="password" v-model="ruleForm.password"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱" prop="email">
                        <el-input v-model="ruleForm.email"></el-input>
                    </el-form-item>
                    <el-form-item label="手机号" prop="tel" >
                        <div class="yazheng">
                            <el-input v-model="ruleForm.tel" size=""></el-input>
                        <el-button>获取验证码</el-button>
                        </div>
                        
                    </el-form-item>
                    <el-form-item label="验证码" prop="verificationCode">
                        <el-input v-model="ruleForm.verificationCode"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <div class="sinupbutton">
                <button>取消</button><button @click="register">注册</button>
            </div>

        </div>


    </div>
</template>

<script>
import {getregister} from '@/api/register.js'
export default {
    name: 'Register',
    data() {
        var validateUser1 = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('请输入用户名'))
            }
            if (value) {


                return callback(new Error('该用户名已经被注册'))

            }

        }
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'))
            } else {
               /*  if (this.ruleForm.checkPass !== '') {
                    this.$refs.ruleForm.validateField('checkPass')
                } */
                callback()
            }
        }
        var validatePass1 = async (rule, value, callback) => {
            if (value === '') {
                callback(new Error('邮箱不能为空'))
            } else {
                const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
                // eslint-disable-next-line no-useless-escape
                const reg2 = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
                if ((reg.test(value) || reg2.test(value))) {
                    this.yzmshow = true
                    callback()
                } else {
                    callback(new Error('请输入正确的邮箱'))
                }
            }
        }
        return {

            ruleForm: {
                username: '',
                password: '',
                email: '',
                tel: '',
                verificationCode: '',
            },
            rules: {
                username: [{
                    required: true,
                    validator: validateUser1,
                    trigger: 'blur'
                }],
                password: [{
                    required: true,
                    validator: validatePass,
                    trigger: 'blur'
                },
                {
                    min: 6,
                    message: '长度在不少于6个字符',
                    trigger: 'blur'
                }
                ],

                email: [{
                    required: true,
                    validator: validatePass1,
                    trigger: 'blur'
                }],
                tel: [
                    { required: true, message: '请输入您的手机号码', trigger: 'blur' },
                    { min: 11, max: 11, message: '请输入11位手机号', trigger: 'blur' }
                ],
                verificationCode: [
                    { required: true, message: '请输入验证码', trigger: 'blur' },
                    { min: 4, max: 4, message: '格式错误', trigger: 'blur' }
                ],
            },
        }
    },
    methods: {
          register(){
              let username=this.ruleForm.username
              let password=this.ruleForm.password
              let email=this.ruleForm.email
              let data={
                  username,
                  password,
                  email,
              }
              getregister(data).then(data=>{
                  console.log(data)
                  if(data.code==200){
                      this.$router.push('/login')
                      return this.$message.success('用户注册成功')
                  }else{
                      return this.$message.error('用户注册失败')
                  }
              })
          }
    }
}
</script>

<style lang="scss">
.Register {
    width: 1200px;
    margin: 0 auto;

    h1 {
        margin-top: 20px;
    }

    .joinStep {
        margin-top: 50px;

        span {
            width: 30px;
            height: 30px;
            padding: 30px;
            border-radius: 50%;
            display: inline-block;
        }

        span:first-of-type {

            background-color: black;
        }

        span:last-of-type {
            background-color: rgb(181, 181, 181);
        }
    }

    .infoTable {
        margin-top: 30px;
        border-top: 3px solid #000;
        border-bottom: 3px solid #000;

        .hint {
            color: white;
            background-color: rgb(231, 50, 18);
            padding: 10px;
            *{
                display: inline-block;
            }
        }

        .el-form {

            .el-form-item {
                border-top: 1px solid rgb(93, 93, 93);
                font-weight: bold;
                font-size: 18px;
                padding: 0 10px;
                padding-top: 18px;
                
                .el-input {
                    width: 500px;
                    display: inline-block;
                }
                .el-input__inner{
                    background-color: rgb(228, 228, 228) !important;
                }
                div{
                width:750px;
                padding-left: 10px;
                .yazheng{
                    margin-left: 45px;
                }
            }
            }
            
        }



    }

    .sinupbutton {
        margin: 20px;

        button {
            width: 150px;
            padding: 20px;
            background-color: #fff;
            margin: 20px;
            font-size: 18px;
        }

        button:last-of-type {
            color: #fff;
            background-color: #000;
        }
    }
}
</style>