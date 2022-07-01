<template>
  <el-container>
    <el-header><index-header /></el-header>
    <el-container>
      <el-aside width="200px"><index-aside /></el-aside>
      <el-main><index-main /></el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
import indexHeader from "../components/indexHeader.vue";
import indexAside from "../components/indexAside.vue";
import indexMain from "../components/indexMain.vue";

export default {
  name: "index",
  components: { indexHeader, indexAside, indexMain },
};
</script>
