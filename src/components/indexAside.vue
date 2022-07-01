<template>
  <el-menu :default-openeds="['0', '1']">
    <el-submenu index="0">
      <template slot="title"><i class="el-icon-news"></i>个人信息</template>
      <el-menu-item index="0-1" @click="toprofile">查看个人信息</el-menu-item>
    </el-submenu>
    <el-submenu index="1">
      <template slot="title"><i class="el-icon-message"></i>功能</template>
      <el-menu-item index="1-1" @click="tobasic">查看收入</el-menu-item>
      <el-menu-item index="1-2" @click="togrades">添加收入</el-menu-item>
      <el-menu-item index="1-3" @click="tolessons">查看支出</el-menu-item>
      <el-menu-item index="1-4" @click="tosocial">添加支出</el-menu-item>
      <el-menu-item index="1-5" @click="towork">统计</el-menu-item>
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
    toprofile() {
      this.$store.commit("toprofile");
    },
    tobasic() {
      this.$store.commit("tobasic");
    },
    togrades() {
      this.$store.commit("togrades");
    },
    tolessons() {
      this.$store.commit("tolessons");
    },
    tosocial() {
      this.$store.commit("tosocial");
    },
    towork() {
      this.$store.commit("towork");
    },
    tophysicalquality() {
      this.$store.commit("tophysicalquality");
    },
    toeconomy() {
      this.$store.commit("toeconomy");
    },
    toskill() {
      this.$store.commit("toskill");
    },
  },
};
</script>


<style>
</style>
