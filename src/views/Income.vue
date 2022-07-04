<template>
  <div>
    <el-button @click="clearFilter">清除所有过滤器</el-button>
    <el-button @click="getincome">刷新</el-button>
    <el-button type="primary" @click="getsearch">查询</el-button>
    <el-table
        :data="tableData"
        stripe
        ref="multipleTable"
        border
        style="width: 100%"
        :default-sort = "{prop: 'createTime', order: 'descending'}"
    >

      <el-table-column
          fixed
          prop="createTime"
          label="时间"
          sortable
          :formatter="formatTime"
          width="225px">
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

      <el-table-column
          fixed="right"
          label="操作"
          width="160">
        <template #default="scope">
          <el-button
              @click="handleEdit(scope.row,scope.row.courseID)"
              type="text"
              size="small">
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

    <el-dialog title="查询"  :visible = "searchVisible" width="40%" :append-to-body="true" :show-close= false>
      <el-form :model="inputbeizhu" label-width="120px">
        <el-form-item label="详细备注">
          <el-input v-model="inputbeizhu" style="width: 80%"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
                <span class="dialog-footer">
                  <el-button @click="searchVisible = false">取 消</el-button>
                  <el-button type="primary" @click="find(inputbeizhu)" searchVisible=false>确 定</el-button>
                </span>
      </template>
    </el-dialog>

    <!-- 弹窗 -->
    <el-dialog title="提示"  :visible = "dialogVisible" width="40%" :append-to-body="true" :show-close= false>
      <el-form :model="form" label-width="120px">
        <el-form-item label="时间">
          <div class="block">
            <el-date-picker
                style="width:80%"
                v-model="form.createTime"
                align="right"
                type="datetime"
                placeholder="选择日期"
            >
            </el-date-picker>
          </div>
        </el-form-item>
      </el-form>

      <!--      <el-form :model="form" label-width="120px">-->
      <!--        <el-form-item label="时间">-->
      <!--          <el-input v-model="form.createTime" v-show="dialogVisible" style="width: 80%"></el-input>-->
      <!--        </el-form-item>-->
      <!--      </el-form>-->

      <el-form :model="form" label-width="120px">
        <el-form-item label="收入类型">
          <el-select
              v-model="form.type"
              placeholder="请选择收入类型"
              style="width: 80%">
            <el-option label="工资" value="工资"></el-option>
            <el-option label="红包" value="红包"></el-option>
            <el-option label="借贷" value="借贷"></el-option>
            <el-option label="退款" value="退款"></el-option>
            <el-option label="转账" value="转账"></el-option>
            <el-option label="提现" value="提现"></el-option>
            <el-option label="理财" value="理财"></el-option>
            <el-option label="其他" value="其他"></el-option>
          </el-select>
        </el-form-item>
      </el-form>



      <el-form :model="form" label-width="120px">
        <el-form-item label="金额" >
          <el-input placeholder="请输入消费额" v-model="form.account" class="input-with-select" style="width: 80%">
            <el-select
                v-model="form.way"
                slot="prepend"
                placeholder="消费方式"
                style="width: 120px">
              <el-option label="现金" value="现金"></el-option>
              <el-option label="银行卡" value="银行卡"></el-option>
              <el-option label="支付宝" value="支付宝"></el-option>
              <el-option label="微信" value="微信"></el-option>
              <el-option label="Paypal" value="Paypal"></el-option>
              <el-option label="Visa" value="Visa"></el-option>
              <el-option label="ApplePay" value="ApplePay"></el-option>
              <el-option label="其他" value="其他"></el-option>
            </el-select>
          </el-input>
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
  name: "Income",
  components: {},
  data() {
    return {
      tableData: [{createTime: "", type: "", way: "", account: "", beizhu: ""}],
      id:"",
      form:{createTime: "", type: "", way: "", account: "", beizhu: "",inputbeizhu:""},
      dialogVisible: false,
      searchVisible: false,
      inputbeizhu:""
      // props: {
      //   status: -1
      // }
    };
  },
  // watch: {
  //   props: {
  //     deep:true, //深度监听设置为 true
  //     handler:function(){
  //       console.log(this.props.status)
  //       this.getincome()
  //     }
  //
  //
  //   }
  // },


  methods: {
    find(input){
      let output = this.tableData.filter(item => {
        if(!item.beizhu){
          if(!input){
            return 1
          }
          return false
        }
        let b=item.beizhu.includes(input)
        return b
      })
      this.tableData=output
      this.searchVisible=false
    },
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
        axios.post("/insert/income", this.form).then(res => {
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
    getincome(){
      axios.post(
          "/get/income", {}
      ).then(data => {
            console.log(data)
            this.tableData = data.data
          }
      )
    },

    getsearch(){
      this.searchVisible = true
    }
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