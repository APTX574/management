<template>
  <div>
    <div style="display: flex; justify-content: center; margin-top: 50px">
      <el-card style="width: 400px">
        <h2>登录</h2>
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
  </div>
</template>

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
      axios.post("/login", {
        "username": this.$data.form.username,
        "password": this.$data.form.password
      }).then(data => {
        if (data.code == 200) {
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