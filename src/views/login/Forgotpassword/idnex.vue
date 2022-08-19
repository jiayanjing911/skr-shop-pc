<template>
  <div>
      <h1>修改密码</h1>
  <div class="forgotpass">
       <el-form ref="updateformref" :model="updateform" label-width="80px" :rules="updateformrules">
  <el-form-item label="用户名" prop="username">
    <el-input v-model="updateform.username"></el-input>
  </el-form-item>
  <el-form-item label="新的密码" prop="password">
    <el-input v-model="updateform.password"></el-input>
  </el-form-item>
  <el-form-item label="手机号" prop="phone">
    <el-input v-model="updateform.phone"></el-input>
  </el-form-item>
  <el-form-item label="验证码">
    <el-input v-model="updateform.Verification" class="Verificationipt"></el-input>
  </el-form-item>
  <el-button type="primary" style="width:200px" @click="submit">提交</el-button>
     </el-form>
  </div>
  </div>
</template>

<script>
import {Changepassword} from '@/api/login.js'
export default {
 name:'CPD',
 data(){
   let phone = (rule, value, callback) => {
      /*  let regphone=/^(0|86|17951)?(13[0-9]|15[0123456789]|17[678]|18[0-9]|14[57])[0-9]{8}$/ */
      let regphone = /^1[34578]\d{9}$/g;
      if (regphone.test(value)) {
        return callback();
      } else {
        callback(new Error("请输入合法的手机号"));
      }
    };
   return{
     updateform:{
       username:'',
       password:'',
       phone:''
     },
     updateformrules:{
       username:[
         {
           required:true, message:'请输入你的账号', trigger:'blur',
         },
        
       ],
       password:[
         {
           required:true, message:'请输入你的新密码', trigger:'blur',
         },
          {
           min:6,max:12,message:'密码必须6-12位',trigger:'blur'
         }
       ],
       phone:[
           {
           required:true, message:'请输入你的新手机号', trigger:'blur',
         },
          {
            validator:phone,trigger:'blur'
          }
       ]
     }
   }
 },
 methods:{
   submit(){
     let username=this.updateform.username
     let password=this.updateform.password
     let user={
       username,
       password,
     }
     Changepassword(user).then(data=>{
     
      if(data.data.code!==200){
        return this.$message.error('用户名不存在')
      }
       this.$router.push('/login')
       return this.$message.success('用户密码修改成功')
     })
   }
 }
}
</script>

<style scoepd lang="scss">
 .forgotpass{
   width: 500px;
   margin: 100px auto;
 }
 .Verificationipt{
   width: 100px;
    margin-left: -320px;
 }
</style>