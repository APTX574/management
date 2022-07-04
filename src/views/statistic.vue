<template>
  <div>
    <div style="height: 500px;width: 800px" ref="myChart"></div>

  </div>


</template>

<script>
// @ is an alias to /src
// import axios from 'axios';

import axios from "axios";


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
    this.getPie()
    // 1.配置图表的数据和参数
    axios.post("/get/day/sum", {
      year: 2022,
      month: 7
    }).then(data => {
      console.log(data)
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

    getPie() {
      axios.post(
          "/get/sum", {}
      ).then(data => {
        data = data.data.data
        let option = {
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '55%',
              data: data,
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
                normal: {
                  label: {
                    show: true,
                    //formatter: '{b} : {c} ({d}%)' //带当前图例名 + 百分比
                    formatter: '{b} : \n{c}元 ({d}%)' //只要百分比
                  },
                  labelLine: {show: true}
                }
              }
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
      })
    },
    getDay() {
      axios.post(
          "/get/sum", {}
      ).then(data => {
        console.log(data)
        data = data.data.data
        let option = {
          title: {
            text: '每日支出'
          },
          tooltip: {},
          legend: {
            data: ['支出']
          },
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        };

        // 2.创建图表
        let chart = this.$echarts.init(this.$refs.myChart)

        // 3，导入图表的配置
        chart.setOption(option)

        // 4添加窗口大小改变监听事件，当窗口大小改变时，图表会重新绘制，自适应窗口大小
        window.addEventListener('resize', function () {
          chart.resize()
        })
      })
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