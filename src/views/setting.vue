<template>
  <div>
    <el-card class="box-card" style="width: 750px" shadow="hover">
    <div slot="header" class="clearfix" >
      <span>额度设置</span>
      <el-button style="float: right; padding: 3px 0" type="text" @click="onSubmit0(formInline.month_money,formInline.year_money)">提交</el-button>
    </div>
      <el-form :inline="true" :model="formInline" class="demo-form-inline" style="margin-top:30px">
        <el-form-item label="本月设置额度">
          <el-input v-model="formInline.month" readonly="true"></el-input>
        </el-form-item>
        <el-form-item label="更改本月额度">
          <el-input v-model="formInline.month_money" placeholder="请设置本月额度"></el-input>
        </el-form-item>
      </el-form>
      <el-form :inline="true" :model="formInline" class="demo-form-inline" style="margin-top:30px">
        <el-form-item label="今年设置额度">
          <el-input v-model="formInline.year" readonly="true"></el-input>
        </el-form-item>

        <el-form-item label="更改今年额度">
          <el-input v-model="formInline.year_money" placeholder="请设置今年额度"></el-input>
        </el-form-item>
      </el-form>
    </el-card>

    <div style="margin: 15px 0;"></div>

    <el-card class="box-card" style="width: 750px" shadow="hover">
      <div slot="header" class="clearfix" >
        <span>个人信息设置</span>
        <el-button style="float: right; padding: 3px 0" type="text">提交</el-button>
      </div>
      <el-form :inline="true" :model="userkeysetting" class="demo-form-inline" style="margin-top:30px">
        <el-form-item label="用户名">
          <el-input v-model="userkeysetting.user" readonly="true"></el-input>
        </el-form-item>
        <el-form-item label="更改密码">
          <el-input v-model="userkeysetting.key" placeholder="请设置新密码"></el-input>
        </el-form-item>
      </el-form>

      <el-form :inline="true" :model="usersetting" class="demo-form-inline" style="margin-top:30px">
        <el-form-item label="更改号码">
          <el-input v-model="usersetting.phonenumber" placeholder="请设置新手机号"></el-input>
        </el-form-item>
        <el-form-item label="更改住地">
          <el-input v-model="usersetting.country" placeholder="请设置新居住地"></el-input>
        </el-form-item>
        <el-form-item label="更改地址">
          <el-input v-model="usersetting.dirc" placeholder="请设置新联系地址"></el-input>
        </el-form-item>
        <el-form-item label="更改备注">
          <el-input v-model="usersetting.beizhu" placeholder="请设置新备注"></el-input>
        </el-form-item>
      </el-form>
    </el-card>

    <div style="margin: 15px 0;"></div>
    <el-card class="box-card" style="width: 750px" shadow="hover">
        <el-button type="primary" @click="exp">导出</el-button>
    </el-card>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';

export default {
  name: "setting",
  components: {},
  data() {

    return {
      monthlimit:"",
      yearlimit:"",
      formInline: {
        month_money: '',
        year_money: '',
        month: '',
        year: ''
      },
      userkeysetting:{
        user:'wqs',
        key:''
      },
      usersetting:{
        phonenumber:'',
        country:'',
        dirc:'',
        beizhu:''
      }

    };
  },
  mounted(){
    this.dl_month_limit()
    this.dl_year_limit()
  },
  methods: {

    check() {

      axios.post(
          "/get", {
            "status": "remake_unconfirmed"
          }
          // headers:{'Content-Type': 'application/json', 'Accept': 'application/json'}
      ).then(res => {
        var a = JSON.parse(res.request.response)
        var tableData = a.data.contractList
        console.log(tableData)
        var len = tableData.length
        var checkname = this.filter.name
        var array = []
        for (var i = 0; i < len; i++) {
          tableData[i].seriousness = "低"
          tableData[i].beizhu = "无"
          tableData[i].firmpeople = 'lmr'
          if (tableData[i].userName == checkname || checkname == '') {
            tableData[i].firmapplytime = "2022/06/29"
            tableData[i].firmchecktime = "2022/06/29"

            array.push(tableData[i])
          }
        }

        this.tableData = array
        console.log(this.tableData)
      })
          .catch(error => {
            console.log(error)
          })
    },
    dl_month_limit()
    {
      axios.post(
          "/monthlimit", {}
      ).then(data => {
            console.log(data)
            this.formInline.month = data.data.data
          }
      )
    },
    dl_year_limit()
    {
      axios.post(
          "/yearlimit", {}
      ).then(data => {
            console.log(data)
            this.formInline.year = data.data.data
          }
      )
    },
    onSubmit0(input0,input1) {
      if(input0)
      {
        axios.post("/setmonthlimit", {
          monthlimit: this.formInline.month_money,
        })
      }
      if(input1)
      {
        axios.post("/setyearlimit", {
          yearlimit: this.formInline.year_money,
        })
      }
      this.$notify({
        title: '提交成功',
        type: 'success'
      });
    },
    exp() {
      window.open("http://localhost:8080/download")
    }
  },
};
</script>
<style scoped>
.el-form-item {
  margin-bottom: 7px;
}

.demo-table-expand {
  font-size: 0;
}

.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}

.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>