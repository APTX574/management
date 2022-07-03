<template>
  <el-row :gutter="40" align="middle">
    <el-col :span="20">
      <div class="grid-content bg-purple">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>添加收入</span>
          </div>
          <el-form ref="form" :model="form" label-width="100px" label-position="right">


            <el-form-item label="收入类型">
              <el-select
                  v-model="addin.reason"
                  placeholder="请选择收入类型"
                  style="width: 100%">
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

            <el-form-item label="数目">
              <el-input v-model="addin.numbers" placeholder="请输入消费额"></el-input>
            </el-form-item>

            <el-form-item label="收入对象">
              <el-select
                  v-model="addin.way"
                  placeholder="请输入收入对象"
                  style="width: 100%">
                <el-option label="现金" value="现金"></el-option>
                <el-option label="银行卡" value="银行卡"></el-option>
                <el-option label="支付宝" value="支付宝"></el-option>
                <el-option label="微信" value="微信"></el-option>
                <el-option label="Paypal" value="Paypal"></el-option>
                <el-option label="Visa" value="Visa"></el-option>
                <el-option label="ApplePay" value="ApplePay"></el-option>
                <el-option label="其他" value="其他"></el-option>
              </el-select>
            </el-form-item>
            <!--{“现金”,“银行卡”,“支付宝”,“微信”,“Paypal”,“Visa”,“ApplePay”,“其他”}-->

            <el-form-item label="时间">
              <el-input v-model="addin.time"></el-input>
            </el-form-item>
            <el-form-item label="消费时间">
              <div class="block">

                <el-date-picker
                    v-model="addin.time"
                    align="right"
                    type="datetime"
                    style="width:100%"
                    placeholder="选择时间"
                >
                </el-date-picker>
              </div>

            </el-form-item>


            <el-form-item label="详细备注">
              <el-input v-model="addin.text"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm">提交</el-button>
            </el-form-item>

          </el-form>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      addin: {
        reason: "",
        numbers: "",
        time: "",
        text: "",
      },

    }
  },
  methods: {

    submitForm() {

      axios.post(
          "/insert/income", {
            type: this.addin.reason,
            account: this.addin.numbers,
            time: this.addin.time,
            beizhu: this.addin.beizhu
          }
      ).then(res => {
        console.log(res)

      })
          .catch(error => {
            console.log(error)
          })
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