<template>
  <el-row :gutter="40" align="middle">
  <el-col :span="20"><div class="grid-content bg-purple">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
    <span>违约认定申请</span>
  </div>
      <el-form ref="form" :model="form" label-width="100px" label-position="right">

      

          <el-form-item label="收入类型">
          <el-select
            v-model="addin.reason"
            placeholder="请选择收入类型"
            style="width: 350px">
            <el-option label="工资" value="工资"></el-option>
            <el-option label="红包" value="红包"></el-option>
            <el-option label="借贷" value="借贷"></el-option>
            <el-option label="退款" value="退款"></el-option>
            <el-option label="转账" value="转账"></el-option>
            <el-option label="提现" value="提现"></el-option>
            <el-option label="理财" value="理财"></el-option>
            <el-option label="其他" value="其他"></el-option>
          </el-select> </el-form-item>

          <el-form-item label="数目">
          <el-input v-model="addin.numbers"></el-input>
        </el-form-item>

        <el-form-item label="详细备注">
          <el-input v-model="addin.beizhu"></el-input>
        </el-form-item>
        <el-form-item>
    <el-button type="primary" @click="submitForm">提交</el-button>
  </el-form-item>
        
      </el-form>
    </el-card></div></el-col>
</el-row>
</template>

<script>
// import axios from 'axios'
  export default {
    data() {
      return {
        addin:{
          reason:"",
          numbers:"",
          beizhu:""
        },
      }
    },
    methods: {
      
      submitForm(){
        
      //   axios.post(
      // "/insert"
      // ,{
      //     userName:firmapply.name,
      //     reason:firmapply.reason,
      //     seriousness:firmapply.seriousness,
      //     outLevel:firmapply.outlevel,
      //     beizhu:firmapply.beizhu
      //   }
      //   // headers:{'Content-Type': 'application/json', 'Accept': 'application/json'}
      // )
      //   .then(res=>{
      //       this.datas = JSON.parse(res.request.response)
            
      //   })
      //   .catch(error=>{
      //     console.log(error)
      //   })
        alert("提交成功")
        }
        
    }
  }
</script>

<style scoped>
.el-form-item {
  margin-bottom: 7px;
}
</style>