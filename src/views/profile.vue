<template>
  <div>
    <el-card class="box-card" shadow="hover">
    <div>
      <el-avatar src="https://empty" @error="errorHandler" :size="120">
        <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"/>
      </el-avatar>
    </div>
      <h2>{{"wqs"}}</h2>

      <el-descriptions  direction="vertical" :column="4" border>

        <el-descriptions-item label="手机号">123456789</el-descriptions-item>
        <el-descriptions-item label="居住地" :span="2">杭州市</el-descriptions-item>
        <el-descriptions-item label="备注">
          <el-tag size="small">学校</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="联系地址">浙江省杭州市钱塘区杭州电子科技大学</el-descriptions-item>
      </el-descriptions>

      <el-form :inline="true" :model="formInline" class="demo-form-inline" style="margin-top:30px">
        <el-form-item label="本月剩余额度">
          <el-input v-model="formInline.month" readonly="true"></el-input>
        </el-form-item>
        <el-form-item label="今年剩余额度">
          <el-input v-model="formInline.year" readonly="true"></el-input>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
 
import axios from "axios";

export default {
  name: "profile",

 
  data() {
    return {
        formInline: {
          month: '5000',
          year: '60000'
        }
      }
  },
  mounted(){
    this.dl_month_limit()
    this.dl_year_limit()
  },
  methods: {
    dl_month_limit()
    {
      axios.post(
          "/leftmonthlimit", {}
      ).then(data => {
            console.log(data)
            this.formInline.month = data.data
          }
      )
    },
    dl_year_limit()
    {
      axios.post(
          "/leftyearlimit", {}
      ).then(data => {
            console.log(data)
            this.formInline.year = data.data
          }
      )
    },
    errorHandler() {
      return true
    },
   onSubmit() {
        console.log('submit!');
      }
  },
};
</script>

<style>
</style>