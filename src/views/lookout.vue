<template>
  <el-table
    :data="tableData"
    ref="multipleTable"
    border
    style="width: 100%">
    <el-table-column
        fixed
        prop="time"
        label="时间"
        width="150">
    </el-table-column>
    <el-table-column
        fixed
        prop="type"
        label="支出类型"
        width="250">
    </el-table-column>
    <el-table-column
        prop="object"
        label="对象"
        width="150">
    </el-table-column>
    <el-table-column
        prop="number"
        label="数目"
        width="200"
    >
    </el-table-column>
    <el-table-column
        prop="text"
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
    

    //提交
    // async onSubmit() {
    //   // const { data: res } = await this.$http.post(process.env.API_ROOT + "/", {
    //   const { data: res } = await this.$http.post("/", {
    //     stuname: this.stu.stuname,
    //     identity: this.stu.identity,
    //     school: this.stu.school,
    //     studentnumber: this.stu.studentnumber,
    //     birthday: this.stu.birthday,
    //     enrollyear: this.stu.enrollyear,
    //     gender: this.stu.gender,
    //     isworked: this.stu.isworked,
    //     politics: this.stu.politics,
    //     nationality: this.stu.nationality,
    //     place: this.stu.place,
    //     religion: this.stu.religion,
    //     phone: this.stu.phone,
    //     qqnumber: this.stu.qqnumber,
    //     email: this.stu.email,
    //   });

    //   if (res.errorCode === 0) {
    //     this.$message.success("发布成功");
    //   } else {
    //     return this.$message.error("发布失败 标题、通知班级、内容不能为空");
    //   }
    // },

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