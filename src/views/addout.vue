<template>
  <el-row :gutter="40" align="middle">
    <el-col :span="20">
      <div class="grid-content bg-purple">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>支出</span>
          </div>
          <el-form ref="form" :model="addout" label-width="100px" label-position="right">
            <el-form-item label="支出类型">
              <el-select
                  v-model="addout.type"
                  placeholder="请选择支出类型"
                  style="width: 100%">
                <el-option label="餐饮" value="餐饮"></el-option>
                <el-option label="购物" value="购物"></el-option>
                <el-option label="生活" value="生活"></el-option>
                <el-option label="出行" value="出行"></el-option>
                <el-option label="大件消费" value="大件消费"></el-option>
                <el-option label="其他" value="其他"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="支出子分类">
              <el-select
                  v-model="addout.subtype"
                  placeholder="请选择支出子分类"
                  style="width: 100%">
                <el-option label="个人就餐" value="个人就餐" v-if="addout.type == '餐饮'"></el-option>
                <el-option label="外卖" value="外卖" v-if="addout.type == '餐饮'"></el-option>
                <el-option label="零食" value="零食" v-if="addout.type == '餐饮'"></el-option>
                <el-option label="饮料" value="饮料" v-if="addout.type == '餐饮'"></el-option>
                <el-option label="请客" value="请客" v-if="addout.type == '餐饮'"></el-option>
                <el-option label="其他" value="其他" v-if="addout.type == '餐饮'"></el-option>

                <el-option label="服饰装扮" value="服饰装扮" v-if="addout.type == '购物'"></el-option>
                <el-option label="日用百货" value="日用百货" v-if="addout.type == '购物'"></el-option>
                <el-option label="家居用品" value="家居用品" v-if="addout.type == '购物'"></el-option>
                <el-option label="数码电器" value="数码电器" v-if="addout.type == '购物'"></el-option>
                <el-option label="母婴用品" value="母婴用品" v-if="addout.type == '购物'"></el-option>
                <el-option label="宠物用品" value="宠物用品" v-if="addout.type == '购物'"></el-option>
                <el-option label="其他" value="其他" v-if="addout.type == '购物'"></el-option>

                <el-option label="运动健身" value="运动健身" v-if="addout.type == '生活'"></el-option>
                <el-option label="美容美发" value="美容美发" v-if="addout.type == '生活'"></el-option>
                <el-option label="住房物业" value="住房物业" v-if="addout.type == '生活'"></el-option>
                <el-option label="汽车保养" value="汽车保养" v-if="addout.type == '生活'"></el-option>
                <el-option label="酒店旅游" value="酒店旅游" v-if="addout.type == '生活'"></el-option>
                <el-option label="书籍教育" value="书籍教育" v-if="addout.type == '生活'"></el-option>
                <el-option label="音乐影视" value="音乐影视" v-if="addout.type == '生活'"></el-option>
                <el-option label="医疗健康" value="医疗健康" v-if="addout.type == '生活'"></el-option>
                <el-option label="文与休闲" value="文与休闲" v-if="addout.type == '生活'"></el-option>
                <el-option label="充值消费" value="充值消费" v-if="addout.type == '生活'"></el-option>
                <el-option label="其他" value="其他" v-if="addout.type == '生活'"></el-option>

                <el-option label="公共交通" value="公共交通" v-if="addout.type == '出行'"></el-option>
                <el-option label="汽车加油" value="汽车加油" v-if="addout.type == '出行'"></el-option>
                <el-option label="机票" value="机票" v-if="addout.type == '出行'"></el-option>
                <el-option label="船票" value="船票" v-if="addout.type == '出行'"></el-option>
                <el-option label="景区门票" value="景区门票" v-if="addout.type == '出行'"></el-option>
                <el-option label="其他" value="其他" v-if="addout.type == '出行'"></el-option>

                <el-option label="购房" value="购房" v-if="addout.type == '大件消费'"></el-option>
                <el-option label="购车" value="购车" v-if="addout.type == '大件消费'"></el-option>
                <el-option label="其他" value="其他" v-if="addout.type == '大件消费'"></el-option>


                <el-option label="转账" value="转账" v-if="addout.type == '其他'"></el-option>
                <el-option label="红包" value="红包" v-if="addout.type == '其他'"></el-option>
                <el-option label="公益" value="公益" v-if="addout.type == '其他'"></el-option>
                <el-option label="保险" value="保险" v-if="addout.type == '其他'"></el-option>
                <el-option label="信用借还" value="信用借还" v-if="addout.type == '其他'"></el-option>
                <el-option label="理财" value="理财" v-if="addout.type == '其他'"></el-option>
                <el-option label="银行存储" value="银行存储" v-if="addout.type == '其他'"></el-option>


                <el-option label="其他" value="其他" v-if="addout.type == '其他'"></el-option>

              </el-select>
            </el-form-item>

            <el-form-item label="金额">
              <el-input placeholder="请输入消费额" v-model="addout.numbers" class="input-with-select">
                <el-select
                    v-model="addout.way"
                    slot="prepend"
                    placeholder="消费方式"
                    style="width: 120px"
                >
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

            <!--<el-form-item label="金额">
              <el-input v-model="addout.numbers"></el-input>
            </el-form-item>

            <el-form-item label="消费方式">
              <el-select
                  v-model="addout.way"
                  placeholder="请输入消费方式"
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
            </el-form-item>-->
            <!--{“现金”,“银行卡”,“支付宝”,“微信”,“Paypal”,“Visa”,“ApplePay”,“其他”}-->

            <el-form-item label="时间">
              <div class="block">
                <el-date-picker
                    style="width:100%"
                    v-model="addout.time"
                    align="right"
                    type="datetime"
                    placeholder="选择日期"
                >
                </el-date-picker>
              </div>
            </el-form-item>

            <el-form-item label="地点">
              <el-input v-model="addout.location"></el-input>
            </el-form-item>

            <el-form-item label="详细备注">
              <el-input v-model="addout.beizhu"></el-input>
            </el-form-item>

            <div class="block">
              <span class="demonstration">支出类型</span>
              <el-cascader
                  v-model="addout.type"
                  :options="addout.options"
                  @change="handleChange"></el-cascader>
            </div>

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
import axios from "axios";

export default {
  data() {
    return {
      addout: {
        type: [],
        options: [{
          value: '餐饮',
          label: '餐饮',
          children: [{
            value: '个人就餐',
            label: '个人就餐'
          },{
            value: '外卖',
            label: '外卖'
          },{
            value: '零食',
            label: '零食'
          },{
            value: '饮料',
            label: '饮料'
          },{
            value: '请客',
            label: '请客'
          },{
            value: '其他',
            label: '其他'
          }]
        },{
          value: '购物',
          label: '购物',
          children: [{
            value: '服饰装扮',
            label: '服饰装扮'
          },{
            value: '日用百货',
            label: '日用百货'
          },{
            value: '家居用品',
            label: '家居用品'
          },{
            value: '数码电器',
            label: '数码电器'
          },{
            value: '母婴用品',
            label: '母婴用品'
          },{
            value: '宠物用品',
            label: '宠物用品'
          },{
            value: '其他',
            label: '其他'
          }]
        },{
          value: '生活',
          label: '生活',
          children: [{
            value: '运动健身',
            label: '运动健身'
          },{
            value: '美容美发',
            label: '美容美发'
          },{
            value: '住房物业',
            label: '住房物业'
          },{
            value: '汽车保养',
            label: '汽车保养'
          },{
            value: '酒店旅游',
            label: '酒店旅游'
          },{
            value: '书籍教育',
            label: '书籍教育'
          },{
            value: '音乐影视',
            label: '音乐影视'
          },{
            value: '医疗健康',
            label: '医疗健康'
          },{
            value: '文与休闲',
            label: '文与休闲'
          },{
            value: '充值消费',
            label: '充值消费'
          },{
            value: '其他',
            label: '其他'
          }]
        },{
          value: '出行',
          label: '出行',
          children: [{
            value: '公共交通',
            label: '公共交通'
          },{
            value: '汽车加油',
            label: '汽车加油'
          },{
            value: '机票',
            label: '机票'
          },{
            value: '船票',
            label: '船票'
          },{
            value: '景区门票',
            label: '景区门票'
          },{
            value: '其他',
            label: '其他'
          }]
        },{
          value: '大件消费',
          label: '大件消费',
          children: [{
            value: '购房',
            label: '购房'
          },{
            value: '购车',
            label: '购车'
          },{
            value: '其他',
            label: '其他'
          }]
        },{
          value: '其他',
          label: '其他',
          children: [{
            value: '转账',
            label: '转账'
          },{
            value: '红包',
            label: '红包'
          },{
            value: '公益',
            label: '公益'
          },{
            value: '保险',
            label: '保险'
          },{
            value: '信用借还',
            label: '信用借还'
          },{
            value: '理财',
            label: '理财'
          },{
            value: '银行存储',
            label: '银行存储'
          },{
            value: '其他',
            label: '其他'
          }]
        }],
        subtype: "",
        numbers: "",
        time: "",
        way:"",
        location: "",
        beizhu: ""
      },
    }
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    submitForm() {
      axios.post(
          "/insert/outcome", {
            type: this.addout.type,
            subtype: this.addout.subtype,
            time: this.addout.time,
            location: this.addout.location,
            way:this.addout.way,
            beizhu: this.addout.beizhu,
            account: this.addout.numbers
          }
      ).then(data => {
        console.log(data)
      })
      alert("提交成功")
    },


  }
}


</script>

<style scoped>
.el-form-item {
  margin-bottom: 7px;
}

.el-date-editor.el-input, .el-date-editor.el-input__inner {
  width: 220px;
}
</style>