<template>
  <el-table
    :data="tableData"
    ref="multipleTable"
    border
    style="width: 80%">
    <el-table-column
      fixed
      prop="number"
      label="序号"
      width="100">
    </el-table-column>
    <el-table-column
      fixed
      prop="type"
      label="支出类型"
      width="150">
    </el-table-column>
    <el-table-column
      fixed
      prop="subtype"
      label="支出子分类"
      width="150">
    </el-table-column>
    <el-table-column
      prop="number"
      label="数目"
      width="100">
    </el-table-column>
    <el-table-column
      prop="time"
      label="时间"
      width="150">
    </el-table-column>
    <el-table-column
      prop="beizhu"
      label="详细备注"
      >
    </el-table-column>

    
  </el-table>
</template>

<script>
// @ is an alias to /src

export default {
  name: "reason",
  components: {},
  data() {
    return {
      tableData: []
    };
  },
  mounted() {
    
  },
  methods: {
  },
};
</script>
<style scoped>
.el-form-item {
  margin-bottom: 7px;
}
</style>