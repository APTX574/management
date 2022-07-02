<template>
  <div style="display: flex; justify-content: center; margin-top: 50px">
    <el-card style="width: 400px">
      <h2>注册</h2>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button @click="onClick">取消</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
// @ is an alias to /src

import axios from "axios";

export default {
  name: "register",
  components: {},
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit() {
      axios.post("/register", {
        username: this.form.username,
        password: this.form.password
      }).then(data => {
        console.log(data)
        if (data.status === 200) {
          alert("创建成功");
          this.$router.push("/index");
        }
      })
    },
    onClick() {
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
.el-form-item {
  margin-bottom: 7px;
}
</style>