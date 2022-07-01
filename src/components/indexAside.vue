<template>
  <el-menu :default-openeds="['0', '1']">
    <el-submenu index="0">
      <template slot="title"><i class="el-icon-news"></i>个人信息</template>
      <el-menu-item index="0-1" @click="toProfile">个人主页</el-menu-item>
      <el-menu-item index="0-2" @click="toSetting">设置</el-menu-item>
    </el-submenu>
    <el-submenu index="1">
      <template slot="title"><i class="el-icon-message"></i>功能</template>
      <el-menu-item index="1-1" @click="toIncome">查看收入</el-menu-item>
      <el-menu-item index="1-2" @click="toEnterIncome">添加收入</el-menu-item>
      <el-menu-item index="1-3" @click="toOutcome">查看支出</el-menu-item>
      <el-menu-item index="1-4" @click="toEnterOutcome">添加支出</el-menu-item>
      <el-menu-item index="1-5" @click="toSort">统计</el-menu-item>
      <!-- <el-menu-item index="1-6" @click="tophysicalquality"
        >违约重生审核</el-menu-item
      >
      <el-menu-item index="1-7" @click="toeconomy"
        >增加违约重生</el-menu-item
      > -->
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: "indexAside",
  components: {},

  methods: {
    toProfile() {
      this.$store.commit("toProfile");
    },
    toSetting() {
      this.$store.commit("toSetting");
    },
    toIncome() {
      this.$store.commit("toIncome");
    },
    toEnterIncome() {
      this.$store.commit("toEnterIncome");
    },
    toOutcome() {
      this.$store.commit("toOutcome");
    },
    toEnterOutcome() {
      this.$store.commit("toEnterOutcome");
    },
    toSort() {
      this.$store.commit("toSort");
    }
  },
};
</script>


<style>
</style>
