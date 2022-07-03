<template>
  <div>
    <el-button @click="clearFilter">清除所有过滤器</el-button>
    <el-table
        :data="tableData"
        stripe
        ref="multipleTable"
        border
        style="width: 100%"
    >

      <el-table-column
          fixed
          prop="createTime"
          label="时间"
          :formatter="formatTime"
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
          prop="way"
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
          prop="account"
          label="金额（元）"
          width="200"
      >
      </el-table-column>
      <el-table-column
          prop="beizhu"
          label="详细备注"
      >
      </el-table-column>

    </el-table>
    <div class="block">
      <span class="demonstration"></span>
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400">
      </el-pagination>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import axios from "axios";

export default {
  name: "Income",
  components: {},
  data() {
    return {
      tableData: [{createTime: "", type: "", way: "", account: "", beizhu: ""}],
      props: {
        status: -1
      }
    };
  },
  watch: {
    props: {
      deep:true, //深度监听设置为 true
      handler:function(){
        console.log(this.props.status)
        this.get()
      }


    }
  },

  mounted() {
    console.log(this.props.status)
    this.get()
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    formatTime(row, column) {

      let data = row[column.property]
      let dtime = new Date(data)
      const year = dtime.getFullYear()
      let month = dtime.getMonth() + 1
      if (month < 10) {
        month = '0' + month
      }
      let day = dtime.getDate()
      if (day < 10) {
        day = '0' + day
      }
      let hour = dtime.getHours()
      if (hour < 10) {
        hour = '0' + hour
      }
      let minute = dtime.getMinutes()
      if (minute < 10) {
        minute = '0' + minute
      }
      let second = dtime.getSeconds()
      if (second < 10) {
        second = '0' + second
      }
      return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second

    },
    clearFilter() {
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
    },
    get(){
      axios.post(
          "/get/income", {}
      ).then(data => {
            console.log(data)
            this.tableData = data.data
          }
      )
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