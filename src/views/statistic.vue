<template>
  <div>
    <el-card shadow="hover">
      <div slot="header" class="clearfix">
        <span>in_out_type_cof</span>
      </div>
      <div class="block">
        <span class="demonstration">choose_day_to_cof</span>
        <el-date-picker
            v-model="choice.today"
            type="date"
            placeholder="选择日期">
        </el-date-picker>
      </div>
      <div>
        <el-radio-group v-model="choice.type">
          <el-radio-button label="日"></el-radio-button>
          <el-radio-button label="月"></el-radio-button>
          <el-radio-button label="年"></el-radio-button>
        </el-radio-group>
        <el-switch
            style="display: block"
            v-model="choice.is_out"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-text="支出"
            inactive-text="收入">
        </el-switch>
      </div>
      <div style="height: 500px;width: 800px" ref="myChart"></div>
      <div style="height: 500px;width: 800px" ref="myChart2"></div>
      <div style="height: 500px;width: 800px" ref="myChart3"></div>
      <div style="height: 500px;width: 800px" ref="myChart4"></div>
    </el-card>
    <el-card shadow="hover">
      <div slot="header" class="clearfix">
        <span>in_out_type_cof</span>
      </div>
      <div class="block">
        <div class="block">
          <span class="demonstration"></span>
          <el-date-picker
              v-model="choice.month"
              type="month"
              placeholder="选择月">
          </el-date-picker>
        </div>

      </div>
    </el-card>
    <el-card shadow="hover">
      <div slot="header" class="clearfix">
        <span>check_type_cof</span>
      </div>

    </el-card>



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
      choice: {
        type:'',
        today: '',
        month:'',
        time: '',
        is_out:''
      },
    };
  },
  mounted() {
    this.getPie()
    // 1.配置图表的数据和参数
    this.getDay()
    this.getLine()
    this.getLineSon()
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
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
      axios.post("/get/day/sum", {
            year: 2022,
            month: 7,
            userId: 1
          }
      ).then(data1 => {
        axios.post("/get/day/sum", {
              year: 2022,
              month: 7,
              userId: 0
            }
        ).then(data => {
          console.log(data.data.data.day)
          console.log("new")
          let option = {
            title: {
              text: '当月收支'
            },
            tooltip: {},
            legend: {
              data: ['当月收支']
            },
            xAxis: {
              data: data.data.data.day
            },
            yAxis: {},
            series: [{
              name: '支出',
              type: 'line',
              data: data.data.data.sum
            }, {
              name: '收入',
              type: 'line',
              data: data1.data.data.sum
            }]
          };

          // 2.创建图表
          let chart = this.$echarts.init(this.$refs.myChart2)

          // 3，导入图表的配置
          chart.setOption(option)

          // 4添加窗口大小改变监听事件，当窗口大小改变时，图表会重新绘制，自适应窗口大小
          window.addEventListener('resize', function () {
            chart.resize()
          })
        })
      })
    },
    getLineSon() {
      axios.post("/get/typeson/sum", {
            year: 2022,
            month: 7,
            day: 4,
            userId: 0,
            type:"餐饮"
          }
      ).then(data => {
        console.log(data)
        let option = {
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '55%',
              data: data.data.data,
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
        let chart = this.$echarts.init(this.$refs.myChart4)

        // 3，导入图表的配置
        chart.setOption(option)

        // 4添加窗口大小改变监听事件，当窗口大小改变时，图表会重新绘制，自适应窗口大小
        window.addEventListener('resize', function () {
          chart.resize()
        })
      })
    },

  getLine() {
    axios.post("/get/type/sum", {
          year: 2022,
          month: 7,
          day: -1,
          userId: 0
        }
    ).then(data => {
      console.log(data)
      let option = {
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            data: data.data.data,
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
      let chart = this.$echarts.init(this.$refs.myChart3)

      // 3，导入图表的配置
      chart.setOption(option)

      // 4添加窗口大小改变监听事件，当窗口大小改变时，图表会重新绘制，自适应窗口大小
      window.addEventListener('resize', function () {
        chart.resize()
      })
    })
  },

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