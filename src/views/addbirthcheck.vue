<template>
  <el-row :gutter="40" align="middle">
  <el-col :span="10"><div class="grid-content bg-purple">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
    <span>违约重生申请</span>
  </div>
      <el-form ref="form" :model="form" label-width="100px" label-position="right">

      <el-form-item label="违约信息id">
          <el-input v-model="rebirthapply.id"></el-input>
        </el-form-item>
     
        <el-form-item label="重生原因">
          <el-select
            v-model="rebirthapply.rebirthreason"
            placeholder="请选择违约原因"
            style="width: 350px">
            <el-option label="正常结算后解除" value="正常结算后解除"></el-option>
            <el-option label="在其他金融机构违约接触或外部评级显示为非违约级别" value="在其他金融机构违约接触或外部评级显示为非违约级别"></el-option>
            <el-option label="计提比例小于设置界限" value="计提比例小于设置界限"></el-option>
            <el-option label="客户的还款意愿和还款能力明显好转,已偿付各项逾期本金、逾期利息和其他费用,且连续12个月内按时支付本金、利息" value="客户的还款意愿和还款能力明显好转,已偿付各项逾期本金、逾期利息和其他费用,且连续12个月内按时支付本金、利息"></el-option>
            <el-option label="导致违约的关联集团内其他发生违约的客户已经违约重生,解除关联成员的违约设定" value="导致违约的关联集团内其他发生违约的客户已经违约重生,解除关联成员的违约设定"></el-option>
          </el-select> </el-form-item>

        <el-form-item>
    <el-button type="primary" @click="submitForm">提交</el-button>
  </el-form-item>
        
      </el-form>
    </el-card></div></el-col>
</el-row>
</template>

<script>
import axios from 'axios';

  export default {
    data() {
      return {
        rebirthapply: {
        id:"",
        rebirthreason:"",
      },
      }
    },
    methods: {
      
      submitForm(){
        var rebirthapply = this.rebirthapply 

        axios.post(
      "/apply/remake"
      ,{
          "id":rebirthapply.id,
          "reason":rebirthapply.rebirthreason
        }
        // headers:{'Content-Type': 'application/json', 'Accept': 'application/json'}
      )
        .then(res=>{
            var a = JSON.parse(res.request.response)
            console.log(a)
        })
        .catch(error=>{
          console.log(error)
        })
        }
    },
    created(){
      
        var rebirthapply = this.rebirthapply
        rebirthapply.breakid= this.$store.state.temp.breakid
        rebirthapply.name= this.$store.state.temp.name
        rebirthapply.outlevel= this.$store.state.temp.outlevel
        rebirthapply.reason= this.$store.state.temp.reason
        rebirthapply.seriousness= this.$store.state.temp.seriousness
        rebirthapply.beizhu= this.$store.state.temp.beizhu
        rebirthapply.firmpeople= this.$store.state.temp.firmpeople
        rebirthapply.firmapplytime = this.$store.state.temp.firmapplytime
        rebirthapply.firmchecktime = this.$store.state.temp.firmchecktime
        this.rebirthapply = rebirthapply
      
    }
  }
</script>

<style scoped>
.el-form-item {
  margin-bottom: 7px;
}
</style>