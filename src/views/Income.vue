<template><div>
  <el-button @click="clearFilter">清除所有过滤器</el-button>
  <el-table
    :data="tableData"
    height="250"
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
        label="收入类型"
        width="150"
        :filters="[{text: '工资', value: '工资'},
          {text: '红包', value: '红包'}, {text: '借贷', value: '借贷'},
          {text: '退款', value: '退款'},{text: '转账', value: '转账'},
          {text: '提现', value: '提现'}, {text: '理财', value: '理财'},
          {text: '其他', value: '其他'}]"
        :filter-method="filterType">
    </el-table-column>
    <el-table-column
      prop="object"
      label="对象"
      width="150"
      :filters="[{text: '现金', value: '现金'},
        {text: '银行卡', value: '银行卡'}, {text: '支付宝', value: '支付宝'},
        {text: '微信', value: '微信'},{text: 'Paypal', value: 'Paypal'},
        {text: 'Visa', value: 'Visa'}, {text: 'ApplePay', value: 'ApplePay'},
        {text: '其他', value: '其他'}]"
      :filter-method="filterObject"
      filter-placement="bottom-end">
    </el-table-column>
    <el-table-column
      prop="number"
      label="数目"
      :formatter="formatter"
      width="200"
      >
    </el-table-column>
    <el-table-column
        prop="text"
        label="详细备注"
    >
    </el-table-column>
  </el-table>
</div></template>

<script>
// @ is an alias to /src

export default {
  name: "Income",
  components: {},
  data() {
    return {
      tableData: [{time:"",type:"",object:"",number:"",text:""}]
    };
  },
  methods: {
    clearFilter(){
      this.$refs.multipleTable.clearFilter();
    },
    formatter(row) {
      return row.address;
    },
    filterType(value, row, column) {
      const property = column['property'];
      return row[property] === value;
    },
    filterObject(value, row, column) {
      const property = column['property'];
      return row[property] === value;
    },

    onSubmit() {
      // const { data: res } = await this.$http.post(process.env.API_ROOT + "/", {

      console.log(this.tableData)
      // if (res.errorCode === 0) {
      //   this.$message.success("发布成功");
      // } else {
      //   return this.$message.error("发布失败 标题、通知班级、内容不能为空");
      // }
    }

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
  }
}
</script>
<style scoped>
.el-form-item {
  margin-bottom: 7px;
}
</style>