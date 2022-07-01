<template>
  <div>
    <el-descriptions  direction="vertical" :column="4" border>
  <el-descriptions-item label="用户名">wqs</el-descriptions-item>
  <el-descriptions-item label="手机号">123456789</el-descriptions-item>
  <el-descriptions-item label="居住地" :span="2">杭州市</el-descriptions-item>
  <el-descriptions-item label="备注">
    <el-tag size="small">学校</el-tag>
  </el-descriptions-item>
  <el-descriptions-item label="联系地址">浙江省杭州市钱塘区杭州电子科技大学</el-descriptions-item>
</el-descriptions>

<el-form :inline="true" :model="formInline" class="demo-form-inline" style="margin-top:30px">
  <el-form-item label="当月剩余额度">
    <el-input v-model="formInline.user" ></el-input>
  </el-form-item>
  <el-form-item label="设置当月额度">
    <el-input v-model="formInline.region" placeholder="请设置当月额度"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">提交</el-button>
  </el-form-item>
</el-form>

  </div>
</template>

<script>
 
export default {
  name: "profile",

 
  data() {
    return {
        formInline: {
          user: '5000',
          region: ''
        }
      }
  },
  methods: {
   onSubmit() {
        console.log('submit!');
      }
  },
};
</script>

<style>
</style>