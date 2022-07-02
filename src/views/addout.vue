<template>
  <el-row :gutter="50" align="middle">
  <el-col :span="80"><div class="grid-content bg-purple">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
    <span>支出</span>
  </div>
      <el-form ref="form" :model="addout" label-width="100px" label-position="right">

          <el-form-item label="支出类型">
          <el-select
            v-model="addout.type"
            placeholder="请选择支出类型"
            style="width: 700px">
            <el-option label="餐饮" value="餐饮"></el-option>
            <el-option label="购物" value="购物"></el-option>
            <el-option label="生活" value="生活"></el-option>
            <el-option label="出行" value="出行"></el-option>
            <el-option label="大件消费" value="大件消费"></el-option>
            <el-option label="其他" value="其他"></el-option> 
          </el-select> </el-form-item>

          <el-form-item label="支出子分类">
          <el-select
            v-model="addout.subtype"
            placeholder="请选择支出子分类"
            style="width: 700px">
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

          </el-select> </el-form-item>

          <el-form-item label="数目">
          <el-input v-model="addout.numbers"></el-input>
        </el-form-item>

        <el-form-item label="时间">
          <div class="block">
            <el-date-picker
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
        addout:{
          type:"",
          subtype:"",
          numbers:"",
          time:"",
          location:"",
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
.el-date-editor.el-input, .el-date-editor.el-input__inner {
  width: 220px;
}
</style>