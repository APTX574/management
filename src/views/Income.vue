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
        width="150">
    </el-table-column>
    <el-table-column
        fixed
        prop="type"
        label="收入类型"
        width="150">
    </el-table-column>
    <el-table-column
        prop="number"
        label="数目"
        width="200">
    </el-table-column>
    <el-table-column
        prop="time"
        label="时间"
        width="200">
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
  name: "Income",
  components: {},
  data() {
    return {
      tableData: []
    };
  },
  mounted() {

  },
  methods: {


    async onSubmit() {
      // const { data: res } = await this.$http.post(process.env.API_ROOT + "/", {

console.log(this.tableData)
      // if (res.errorCode === 0) {
      //   this.$message.success("发布成功");
      // } else {
      //   return this.$message.error("发布失败 标题、通知班级、内容不能为空");
      // }
    },

    //获取基本信息
    // async getBasicInfo() {
    //   const { data: res } = await this.$http.get(
    //     "/" + window.localStorage["id"]
    //   );
    //   console.log(res.data);
    //   (this.stuname = res.stuname),
    //     (this.identity = res.identity),
    //     (this.school = res.school),
    //     (this.studentnumber = res.studentnumber),
    //     (this.birthday = res.birthday),
    //     (this.enrollyear = res.enrollyear),
    //     (this.gender = res.gender),
    //     (this.isworked = res.isworked),
    //     (this.politics = res.politics),
    //     (this.nationality = res.nationality),
    //     (this.place = res.place),
    //     (this.religion = res.religion),
    //     (this.phone = res.phone),
    //     (this.qqnumber = res.qqnumber),
    //     (this.email = res.email);
    // },
  },
};
</script>
<style scoped>
.el-form-item {
  margin-bottom: 7px;
}
</style>