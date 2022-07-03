<template>
  <div>
    <el-button @click="clearFilter">清除所有过滤器</el-button>
    <el-table
        :data="tableData"
        ref="multipleTable"
        border
        style="width: 100%">

      <el-table-column
          fixed
          prop="createTime"
          label="时间"
          :formatter="formatTime"
          width="200">
      </el-table-column>
      <el-table-column
          fixed
          prop="type"
          label="支出类型"
          width="100"
          :filters="[{text: '餐饮', value: '餐饮'},
          {text: '购物', value: '购物'}, {text: '生活', value: '生活'},
          {text: '出行', value: '出行'},{text: '大件消费', value: '大件消费'},
          {text: '其他', value: '其他'}]"
          :filter-method="filterType">
      </el-table-column>
      <el-table-column
          fixed
          prop="sort"
          label="详细类型"
          width="100">
      </el-table-column>
      <el-table-column
          prop="way"
          label="对象"
          width="100"
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
          prop="location"
          label="地点"
      >
      </el-table-column>
      <el-table-column
          prop="beizhu"
          label="详细备注"
      >
      </el-table-column>

      <el-table-column
          fixed="right"
          label="操作"
          width="160">
        <template slot-scope="scope">
          <el-button
              size="small"
              @click="handleEdit(scope.$index, scope.row)">
            编辑
          </el-button>
          <el-button
              @click.native.prevent="deleteRow(scope.row.id)"
              type="danger"
              size="small">
            删除
          </el-button>
        </template>
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
          :total="40">
      </el-pagination>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import axios from "axios";

export default {
  name: "reason",
  components: {},
  data() {
    return {
      tableData: [{createTime: "", type: "", way: "", sort: "", account: "", text: ""}]
    };
  },

  // props: {
  //   Status: String
  // },

  methods: {

    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    deleteRow(id) {
      axios.post("/delete", {
        "id": id
      }).then(() => {


        this.$message({
          type: "success",
          message: "删除成功"
        })
        this.getincome()
      })
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

    // computed: {
    //   name() {
    //     return props.Status;
    //   }
    // },
    // getincome() {
    //   watch:{
    //     props:{ //监听的对象
    //       axios.post(
    //           "/get/output", {}
    //       ).then(data => {
    //             console.log(data)
    //             this.tableData = data.data
    //           }
    //       )
    //     }
    //   }
    // }

  },
  mounted() {
    this.getincome()
  },
}
</script>
<style scoped>
.el-form-item {
  margin-bottom: 7px;
}
</style>