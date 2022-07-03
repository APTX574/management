<template>
  <div>
    <div style="height: 300px;width: 800px" ref="myChart"></div>

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
  mounted() {
    // 1.配置图表的数据和参数
    let option = {
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          roseType: 'angle',
          data: [
            {value: 235, name: '视频广告'},
            {value: 274, name: '联盟广告'},
            {value: 310, name: '邮件营销'},
            {value: 335, name: '直接访问'},
            {value: 400, name: '搜索引擎'}
          ]
        }
      ]
    }

    // 2.创建图表
    let chart = this.$echarts.init(this.$refs.myChart)

    // 3，导入图表的配置
    chart.setOption(option)

    // 4添加窗口大小改变监听事件，当窗口大小改变时，图表会重新绘制，自适应窗口大小
    window.addEventListener('resize', function () {
      chart.resize()
    })
  },
  methods: {
    check() {

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