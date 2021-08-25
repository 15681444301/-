<template>
  <div class="login_container">
    <div class="bg"><img src="../assets/img/bg.jpg" alt="" /></div>
    <Header></Header>
    <div class="login_container-head">
      —————————————————— 登录 —————————————————
    </div>

    <div class="login-mid">
      <!-- 二维码登录 -->
      <div class="login-code">
        <div class="login-code-img">
          <img src="../assets/img/erma.png" alt="" />
        </div>
        <div class="login-code-wx">请使用微信扫一扫登录</div>
      </div>
      <!-- 账号密码登录 -->
      <div class="logon-passwod">
        <el-form
          :model="loginfrom"
          ref="loginref"
          label-width="55px"
          :rules="loginrules"
          class="login_from"
        >
          <!-- 账号 -->
          <el-form-item label="账号" prop="name">
            <el-input
              v-model="loginfrom.name"
              type="text"
              prefix-icon="el-icon-user-solid"
            ></el-input>
          </el-form-item>
          <!-- 密码 -->
          <el-form-item label="密码" prop="password">
            <el-input
              v-model="loginfrom.password"
              type="password"
              prefix-icon="el-icon-question"
            ></el-input>
          </el-form-item>
          <!-- 按钮区域 -->
          <el-form-item class="btns">
            <el-button type="primary" @click="login">登录</el-button>
            <el-button type="info" @click="reloginfrom">重置</el-button>
            <el-button type="warning" @click="goRegister">立马注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../components/Header";
export default {
  components: {
    Header,
  },
  data() {
    return {
      loginfrom: {
        name: "",
        password: "",
      },
      loginrules: {
        name: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 6, max: 20, message: "长度在 6 到 10个字符", trigger: "blur" },
        ],
        //验证密码是否合法
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 15, message: "长度在 6 到 15个字符", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    //重置表单
    reloginfrom() {
      this.$refs.loginref.resetFields();
    },

    //登录
    login() {
      this.$refs.loginref.validate((valid) => {
        if (!valid) return;
        this.$axios
          .post("http://localhost:5000/api/v1/login", this.loginfrom)
          .then((res) => {
            console.log(res);
            if (res.data.code == 1) {
              this.$router.push("/Home");
              this.$message({
                message: res.data.msg,
                type: "success",
              });
            } else {
              this.$message({
                message: res.data.msg,
                type: "warning",
              });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      });
    },

    // 前往注册页面
    goRegister() {
      this.$router.push("/register");
    },
  },
};
</script>

<style lang="less" scoped>
.btns {
  margin-top: 50px;
}
.logon-passwod {
  margin-top: 100px;
  margin-left: 300px;
}
.login-code {
  margin-top: 100px;
  margin-left: 100px;
  .login-code-img {
    width: 100px;
    height: 100px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .login-code-wx {
    margin-top: 30px;
    margin-left: -20px;
  }
}
.bg {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.login_container-head {
  color: white;
  font-size: 24px;
  text-align: center;
  margin-top: 50px;
}
.login-mid {
  display: flex;
  width: 900px;
  height: 400px;
  position: absolute;
  background-color: white;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
