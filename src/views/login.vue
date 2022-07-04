<template>
  <div>
    <div style="display: flex; justify-content: center; margin-top: 50px">
      <el-card style="width: 400px">
        <h2>管家婆收支管理</h2>
        <h3>登录</h3>
        <el-form
            ref="loginFormRef"
            :model="form"
            :rules="formRules"
            label-width="80px"
        >
          <el-form-item prop="username" label="用户名">
            <el-input
                v-model="form.username"
                autocomplete="off"
                placeholder="请输入用户名"
            >
            </el-input>
          </el-form-item>
          <el-form-item prop="password" label="密码">
            <el-input
                v-model="form.password"
                autocomplete="off"
                placeholder="请输入密码"
                show-password
            >
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" round @click="login">登录</el-button>
            <el-button round @click="register">注册</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
    <div class="block">
      <span class="demonstration"><h2>网页介绍</h2></span>
      <el-carousel height="600px" type="card" interval="3000">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
<script>
// @ is an alias to /src

import axios from "axios";

export default {
  name: "login",
  components: {},
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      formRules: {
        username: [
          {required: true, message: "请输入用户名", trigger: "change"},
        ],
        password: [
          {required: true, message: "请输入密码", trigger: "change"},
        ],
      },
    };
  },
  methods: {
    login() {
      // this.$refs.loginFormRef.validate(async (valid) => {
      //   if (valid) {
      //     const { data: res } = await this.$http.post(
      //       "/",
      //       JSON.stringify(this.form)
      //     );
      //     console.log(res.data);
      //     const errorCode = res.errorCode;
      //     window.localStorage.setItem("id", res.userid);
      //     if (errorCode === 0) {
      //       await this.$router.push("/index");
      //     } else {
      //       return this.$message.error("用户名或密码错误!");
      //     }
      //   }
      // });
      console.log(this.$data.form.username)
      axios.post("/login", {
        username: this.$data.form.username,
        password: this.$data.form.password
      }).then(data => {
        if (data.status == 200) {
          this.$router.push("/index");
        } else {
          return this.$message.error("用户名或密码错误!");
        }
      })
    },
    register() {
      this.$router.push("/register");
    },
  },
};
</script>
<style scoped>
.el-form-item {
  margin-bottom: 30px;
}
</style>