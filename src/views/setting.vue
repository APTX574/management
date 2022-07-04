<template>
  <div>
    <el-card class="box-card" style="width: 750px" shadow="hover">
    <div slot="header" class="clearfix" >
      <span>额度设置</span>
      <el-button style="float: right; padding: 3px 0" type="text">提交</el-button>
    </div>
      <el-form :inline="true" :model="formInline" class="demo-form-inline" style="margin-top:30px">
        <el-form-item label="本月剩余额度">
          <el-input v-model="formInline.month" readonly="true"></el-input>
        </el-form-item>
        <el-form-item label="更改本月额度">
          <el-input v-model="formInline.month_money" placeholder="请设置本月额度"></el-input>
        </el-form-item>
      </el-form>
      <el-form :inline="true" :model="formInline" class="demo-form-inline" style="margin-top:30px">
        <el-form-item label="今年剩余额度">
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
<!--<template>
<div>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
  <el-form-item label="客户名称">
    <el-input v-model="filter.name" placeholder="客户名称"></el-input>
  </el-form-item>
   <el-form-item label="审核状态">
    <el-select v-model="filter.check" placeholder="审核状态">
      <el-option label="已审核" value="1"></el-option>
      <el-option label="未审核" value="0"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="check">查询</el-button>
  </el-form-item>
</el-form>

<el-table
    :data="tableData"
    style="width: 90%;margin-top: 20px;">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="违约重生id">
            <span>{{ props.row.id }}</span>
          </el-form-item>
          <el-form-item label="违约名称">
            <span>{{ props.row.userName }}</span>
          </el-form-item>
          <el-form-item label="最新外部等级">
            <span>{{ props.row.outLevel }}</span>
          </el-form-item>
          <el-form-item label="违约原因">
            <span>{{ props.row.reason }}</span>
          </el-form-item>
          <el-form-item label="违约严重性">
            <span>{{ props.row.seriousness }}</span>
          </el-form-item>
          <el-form-item label="备注">
            <span>{{ props.row.beizhu }}</span>
          </el-form-item>
          <el-form-item label="认定人">
            <span>{{ props.row.firmpeople }}</span>
          </el-form-item>
          <el-form-item label="认定申请时间">
            <span>{{ props.row.firmapplytime }}</span>
          </el-form-item>
          <el-form-item label="认定审核时间">
            <span>{{ props.row.firmchecktime }}</span>
          </el-form-item>
          <el-form-item label="重生原因">
            <span>{{ props.row.reason }}</span>
          </el-form-item>



        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="违约重生id"
      prop="id"
      width="120">
    </el-table-column>
    <el-table-column
      label="客户名称"
      prop="userName"
      width="100">
    </el-table-column>
    <el-table-column
      label="违约严重性"
      prop="seriousness"
      width="120">
    </el-table-column>
    <el-table-column
      label="违约原因"
      prop="reason" width="300">
    </el-table-column>

    <el-table-column
      label="重生原因"
      prop="reason" width="300">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button type="text" size="small" @click="acceptrebirth(scope.row.id)">接受</el-button>
        <el-button type="text" size="small" @click="refuserebirth(scope.row.id)">拒绝</el-button>
      </template>
    </el-table-column>

  </el-table>

</div>

</template>-->

<script>
// @ is an alias to /src
import axios from 'axios';

export default {
  name: "setting",
  components: {},
  data() {
    return {
      formInline: {
        month_money: '',
        year_money: '',
        month: '5000',
        year: '60000'
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
    onSubmit() {

    },
    exp() {
      window.open("http://47.96.72.124:8080/download")
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