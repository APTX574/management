<template>
  <div>
    <el-button @click="clearFilter">清除所有过滤器</el-button>
    <el-button type="primary" @click="exp">导出</el-button>
    <el-table
        :data="tableData"
        stripe
        ref="multipleTable"
        border
        style="width: 100%">

      <el-table-column
          fixed
          prop="createTime"
          label="时间"
          :formatter="formatTime"
          width="225px">
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

    <!-- 弹窗 -->
    <el-dialog title="提示"  :visible = "dialogVisible" width="30%" :append-to-body="true" show-close="false">
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
        <el-form-item label="支出类型">
          <el-select
              v-model="form.type"
              placeholder="请选择支出类型"
              style="width: 80%">
            <el-option label="餐饮" value="餐饮"></el-option>
            <el-option label="购物" value="购物"></el-option>
            <el-option label="生活" value="生活"></el-option>
            <el-option label="出行" value="出行"></el-option>
            <el-option label="大件消费" value="大件消费"></el-option>
            <el-option label="其他" value="其他"></el-option>
          </el-select>
        </el-form-item>
      </el-form>

      <el-form :model="form" label-width="120px">
        <el-form-item label="详细类型">
          <el-select
              v-model="form.sort"
              placeholder="请选择详细类型"
              style="width: 80%">
            <el-option label="个人就餐" value="个人就餐" v-if="form.type == '餐饮'"></el-option>
            <el-option label="外卖" value="外卖" v-if="form.type == '餐饮'"></el-option>
            <el-option label="零食" value="零食" v-if="form.type == '餐饮'"></el-option>
            <el-option label="饮料" value="饮料" v-if="form.type == '餐饮'"></el-option>
            <el-option label="请客" value="请客" v-if="form.type == '餐饮'"></el-option>
            <el-option label="其他" value="其他" v-if="form.type == '餐饮'"></el-option>

            <el-option label="服饰装扮" value="服饰装扮" v-if="form.type == '购物'"></el-option>
            <el-option label="日用百货" value="日用百货" v-if="form.type == '购物'"></el-option>
            <el-option label="家居用品" value="家居用品" v-if="form.type == '购物'"></el-option>
            <el-option label="数码电器" value="数码电器" v-if="form.type == '购物'"></el-option>
            <el-option label="母婴用品" value="母婴用品" v-if="form.type == '购物'"></el-option>
            <el-option label="宠物用品" value="宠物用品" v-if="form.type == '购物'"></el-option>
            <el-option label="其他" value="其他" v-if="form.type == '购物'"></el-option>

            <el-option label="运动健身" value="运动健身" v-if="form.type == '生活'"></el-option>
            <el-option label="美容美发" value="美容美发" v-if="form.type == '生活'"></el-option>
            <el-option label="住房物业" value="住房物业" v-if="form.type == '生活'"></el-option>
            <el-option label="汽车保养" value="汽车保养" v-if="form.type == '生活'"></el-option>
            <el-option label="酒店旅游" value="酒店旅游" v-if="form.type == '生活'"></el-option>
            <el-option label="书籍教育" value="书籍教育" v-if="form.type == '生活'"></el-option>
            <el-option label="音乐影视" value="音乐影视" v-if="form.type == '生活'"></el-option>
            <el-option label="医疗健康" value="医疗健康" v-if="form.type == '生活'"></el-option>
            <el-option label="文与休闲" value="文与休闲" v-if="form.type == '生活'"></el-option>
            <el-option label="充值消费" value="充值消费" v-if="form.type == '生活'"></el-option>
            <el-option label="其他" value="其他" v-if="form.type == '生活'"></el-option>

            <el-option label="公共交通" value="公共交通" v-if="form.type == '出行'"></el-option>
            <el-option label="汽车加油" value="汽车加油" v-if="form.type == '出行'"></el-option>
            <el-option label="机票" value="机票" v-if="form.type == '出行'"></el-option>
            <el-option label="船票" value="船票" v-if="form.type == '出行'"></el-option>
            <el-option label="景区门票" value="景区门票" v-if="form.type == '出行'"></el-option>
            <el-option label="其他" value="其他" v-if="form.type == '出行'"></el-option>

            <el-option label="购房" value="购房" v-if="form.type == '大件消费'"></el-option>
            <el-option label="购车" value="购车" v-if="form.type == '大件消费'"></el-option>
            <el-option label="其他" value="其他" v-if="form.type == '大件消费'"></el-option>


            <el-option label="转账" value="转账" v-if="form.type == '其他'"></el-option>
            <el-option label="红包" value="红包" v-if="form.type == '其他'"></el-option>
            <el-option label="公益" value="公益" v-if="form.type == '其他'"></el-option>
            <el-option label="保险" value="保险" v-if="form.type == '其他'"></el-option>
            <el-option label="信用借还" value="信用借还" v-if="form.type == '其他'"></el-option>
            <el-option label="理财" value="理财" v-if="form.type == '其他'"></el-option>
            <el-option label="银行存储" value="银行存储" v-if="form.type == '其他'"></el-option>


            <el-option label="其他" value="其他" v-if="form.type == '其他'"></el-option>

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
      tableData: [{createTime: "", type: "", way: "", sort: "", account: "", location:"",text: ""}],
      id:"",
      form:{createTime: "", type: "", way: "", sort: "", account: "", location:"",text: ""},
      dialogVisible: false,
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
        this.getoutput()
      })
    },
    save() {
      console.log(this.form)
      if (this.id !== 0) {
        axios.post("/update", this.form).then(res => {
          console.log(res)
          this.getoutput()                   //更新数据
          this.dialogVisible = false   //关闭弹窗
        })
      } else {
        axios.post("/insert/output", this.form).then(res => {
          console.log(res)
          this.getoutput()                   //更新数据
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

    getoutput() {
      axios.post(
          "/get/output", {}
      ).then(data => {
            console.log(data)
            this.tableData = data.data
          }
      )
    },
    exp() {
      window.open("http://localhost:8080/download")
    }
  },
  mounted() {
    this.getoutput()
  },
}
</script>
<style scoped>
.el-form-item {
  margin-bottom: 7px;
}
</style>