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
        <template #default="scope">
          <el-button @click="handleEdit(scope.row,scope.row.courseID)" type="text" size="small">编辑</el-button>
          <el-button
              @click.native.prevent="deleteRow(scope.row.id)"
              type="danger"
              size="small">
            删除
          </el-button>
        </template>
      </el-table-column>

    </el-table>

    <!-- 弹窗 -->
    <el-dialog title="提示"  :visible = "dialogVisible" width="30%" :append-to-body="true">
      <el-form :model="form"  label-width="120px">
        <el-form-item label="时间">
          <el-input v-model="form.createTime" v-show="dialogVisible" style="width: 80%"></el-input>
        </el-form-item>
      </el-form>
      <el-form :model="form" label-width="120px">
        <el-form-item label="支出类型">
          <el-input
              v-model="form.type"
              style="width: 80%"
              :filters="[{text: '餐饮', value: '餐饮'},
          {text: '购物', value: '购物'}, {text: '生活', value: '生活'},
          {text: '出行', value: '出行'},{text: '大件消费', value: '大件消费'},
          {text: '其他', value: '其他'}]"
              :filter-method="filterType"></el-input>
        </el-form-item>
      </el-form>
      <el-form :model="form" label-width="120px">
        <el-form-item label="详细类型">
          <el-input v-model="form.sort" style="width: 80%"></el-input>
        </el-form-item>
      </el-form>
      <el-form :model="form" label-width="120px">
        <el-form-item label="对象">
          <el-input v-model="form.way" style="width: 80%"></el-input>
        </el-form-item>
      </el-form>
      <el-form :model="form" label-width="120px">
        <el-form-item label="金额">
          <el-input v-model="form.account" style="width: 80%"></el-input>
        </el-form-item>
      </el-form>
      <el-form :model="form" label-width="120px">
        <el-form-item label="地点">
          <el-input v-model="form.location" style="width: 80%"></el-input>
        </el-form-item>
      </el-form>
      <el-form :model="form" label-width="120px">
        <el-form-item label="详细备注">
          <el-input v-model="form.beizhu" style="width: 80%"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
                <span class="dialog-footer">
                  <el-button @click="dialogVisible = false">取 消</el-button>
                  <el-button type="primary" @click="save" dialogVisible=false>确 定</el-button>
                </span>
      </template>
    </el-dialog>
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
  name: "reason",
  components: {},
  data() {
    return {
      tableData: [{createTime: "", type: "", way: "", sort: "", account: "", location:"",text: ""}],
      id:"",
      form:{createTime: "", type: "", way: "", sort: "", account: "", location:"",text: ""},
      dialogVisible: false,
    };
  },


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
    save() {
      console.log(this.form)
      if (this.id !== 0) {
        axios.post("/update", this.form).then(res => {
          console.log(res)
          this.getincome()                   //更新数据
          this.dialogVisible = false   //关闭弹窗
        })
      } else {
        axios.post("/insert/output", this.form).then(res => {
          console.log(res)
          this.getincome()                   //更新数据
          this.dialogVisible = false   //关闭弹窗
        })
      }
    },
    handleEdit(row, id) {
      console.log(1)
      this.form = JSON.parse(JSON.stringify(row))
      this.dialogVisible = true
      this.id = id

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
    getincome() {
      axios.post(
          "/get/output", {}
      ).then(data => {
            console.log(data)
            this.tableData = data.data
          }
      )
    }

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