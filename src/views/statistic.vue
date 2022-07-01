<template>
<div>
  <h1>月度账单</h1><el-button type="primary" round>账单导出</el-button><el-row>
  
</el-row>
  <img src="https://s1.ax1x.com/2022/07/01/jlGWOH.png" alt="jlGWOH.png" border="0" width="800" height="800"/>
  <h1>日度账单</h1><el-button type="primary" round>账单导出</el-button><el-row>
  
</el-row>
<img src="https://s1.ax1x.com/2022/07/01/jlJmA1.png" alt="jlJmA1.png" border="0" width="800" height="800"/>

<h1>本月收入/支出类别统计</h1>
<img src="https://s1.ax1x.com/2022/07/01/jlYGxU.png" alt="jlYGxU.png" border="0" width="800" height="1400"/>

</div>
  

</template>

<script>
// @ is an alias to /src
// import axios from 'axios';
export default {
  name: "birthapply",
  components: {},
  data() {
    return {
      filter: {
          name: '',
          check: ''
        },
      tableData: [],
      
    };
  },
  methods: {
    check(){
    
// axios.post(
//       "/get"
//       ,{
//           "status": "confirmed"
//         }
//         // headers:{'Content-Type': 'application/json', 'Accept': 'application/json'}
//       )
//         .then(res=>{
//             var a =JSON.parse(res.request.response)
//             var tableData = a.data.contractList
//             console.log(tableData)
//             var len = tableData.length
//             var checkname = this.filter.name
//             var array = []
//             for(var i =0;i<len;i++){
//               tableData[i].seriousness = "低"
//               tableData[i].beizhu = "无"
//               tableData[i].firmpeople = 'lmr'
//               if(tableData[i].userName ==checkname || checkname==''){
//                 tableData[i].firmapplytime = "2022/06/29"        
//                 tableData[i].firmchecktime = "2022/06/29"        
                
//                 array.push(tableData[i])
//               }
//             }

//             this.tableData = array
//             console.log(this.tableData)
//         })
//         .catch(error=>{
//           console.log(error)
//         })
        },
        

    //     axios.post(
    //     "/get/opt"
    //     ,{
    //       "id":"5"
    //     }
    // ).then(res=>{console.log(JSON.parse(res.request.response))

    // }).catch(error=>{console.log(error)})
    
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