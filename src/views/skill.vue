<template>
<div>
<el-row :gutter="20" align="middle">
  <el-col :span="6"><div class="grid-content bg-purple">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
    <span>技能证书</span>
    </div>
      <el-form ref="form" :model="stu" label-width="80px">
        <el-form-item>
          <el-form-item label="奖项1">
          <el-input v-model="stu.identity"></el-input> </el-form-item>
          <el-form-item label="奖项2">
          <el-input v-model="stu.school"></el-input> </el-form-item>
          <el-form-item label="奖项3">
          <el-input v-model="stu.school"></el-input> </el-form-item>
          <el-form-item label="奖项4">
          <el-input v-model="stu.school"></el-input> </el-form-item>
          <el-form-item label="奖项5">
          <el-input v-model="stu.school"></el-input> </el-form-item>
          <el-form-item label="奖项6">
          <el-input v-model="stu.school"></el-input> </el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-card></div></el-col>
</el-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "skill",
  components: {},
  data() {
    return {
      stu: {
        stugrade: "",
      },
    };
  },
  methods: {
    onSubmit() {
      alert("submit!");
    },
  },
};
</script>
<style scoped>
.el-form-item {
  margin-bottom: 7px;
}
</style>