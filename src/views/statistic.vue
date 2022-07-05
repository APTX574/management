<template>
  <div>
    <el-card shadow="hover" style="width: 850px">
      <div slot="header" class="clearfix">
        <h3>整体收支一览</h3>
      </div>
      <div>
        <el-radio-group v-model="choice.type"
                        @change="getnow(choice.type)">
          <el-radio-button label="日"></el-radio-button>
          <el-radio-button label="月"></el-radio-button>
          <el-radio-button label="年"></el-radio-button>
        </el-radio-group>
        <!--        <div style="margin: 15px 0;"></div>
                <el-switch
                    style="display: block"
                    v-model="choice.is_out0"
                    active-color="#13ce66"
                    inactive-color="#ff4949"
                    active-text="支出"
                    inactive-text="收入">
                </el-switch>-->
      </div>
      <div style="height: 500px;width: 800px" ref="myChart"></div>


    </el-card>
    <div style="margin: 15px 0;"></div>
    <el-card shadow="hover" style="width: 850px">
      <div slot="header" class="clearfix">
        <span><h3>月份收支趋势</h3></span>
      </div>
      <div class="block">
        <span class="demonstration"></span>
        <el-date-picker
            v-model="choice.month"
            type="month"
            placeholder="选择月"
            :change="getDay(choice.month)">
        </el-date-picker>
      </div>
      <div style="height: 500px;width: 800px" ref="myChart2"></div>
    </el-card>
    <div style="margin: 15px 0;"></div>
    <el-card shadow="hover" style="width: 850px">
      <div slot="header" class="clearfix">
        <span><h3>明细类目筛选</h3></span>
      </div>
      <div class="block">
        <span class="demonstration">时间段</span>
        <el-date-picker
            v-model="choice.time"
            type="monthrange"
            range-separator="至"
            start-placeholder="开始月份"
            end-placeholder="结束月份">
        </el-date-picker>
        <div style="margin: 15px 0;"></div>
        <el-switch
            style="display: block"
            v-model="choice.is_out1"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-text="支出"
            inactive-text="收入">
        </el-switch>
        <div style="margin: 15px 0;"></div>
        <el-switch
            style="display: block"
            v-model="choice.out_dtl"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-text="详细分类"
            inactive-text="所有分类"
            v-show="choice.is_out1 == true">
        </el-switch>
        <div style="margin: 15px 0;"></div>
        <el-checkbox :indeterminate="isIndeterminate"
                     v-model="choice.checkAll"
                     @change="handleCheckAllChange"
                     v-show="choice.is_out1 == true && choice.out_dtl == true">全选
        </el-checkbox>
        <el-button type="primary" @click="getLine()">查询</el-button>
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="choice.checkList"
                           @change="handleCheckedTypeChange"
                           v-show="choice.is_out1 == true && choice.out_dtl == true">
          <el-checkbox v-for="type in all_type" :label="type" :key="type">{{ type }}</el-checkbox>
        </el-checkbox-group>
        <div style="height: 500px;width: 800px" ref="myChart3"></div>
      </div>
    </el-card>


  </div>


</template>

<script>
// @ is an alias to /src
// import axios from 'axios';

import axios from "axios";

const allType = ['餐饮', '购物', '生活', '出行', '大件消费', '其他']
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
        type: '',
        today: '',
        month: '',
        time: 0,
        is_out1: false,
        out_dtl: false,
        checkAll: '',
        checkList: []
      },
      checkAll: false,
      all_type: allType,
      isIndeterminate: true
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

    handleCheckAllChange(val) {
      this.choice.checkList = val ? allType : [];
      this.isIndeterminate = false;
    },
    handleCheckedTypeChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.all_type.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.all_type.length;
    },
    handleChange(value) {
      console.log(value);
    },
    check() {
      let a = {
        start: this.choice.time[0],
        end: this.choice.time[1],
        is_out: this.choice.is_out1,   //1->支出
        out_dtl: this.choice.out_dtl,  //1->输出sort
        checkList: this.choice.checkList
      }
      console.log(a)

    },
    getnow(input) {

      if (input == '日') {
        console.log(0)
        this.GetPie(0)
      } else if (input == '月') {
        console.log(1)
        this.GetPie(1)
      } else {
        console.log(2)
        this.GetPie(2)
      }
    },
    /*    if(input==0)
    {
      "/get/nowdaysum", {}
    }
    else if(input==1)
    {
      "/get/nowmonthsum", {}
    }
    else
    {
      "/get/nowyearsum", {}
    }*/
    GetPie(input) {
      if (input == 0) {
        console.log(0)
        console.log(0)
        console.log(0)
        axios.post(
            "/get/nowdaysum", {}
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
      } else if (input == 1) {

        axios.post(
            "/get/nowmonthsum", {}
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
      } else {
        console.log(2)
        console.log(2)
        console.log(2)
        axios.post(
            "/get/nowyearsum", {}
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
      }
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
    getDay(date) {
      if (date == 0) {
        date = 7
      } else {
        let date1 = new Date(date);
        date = date1.getMonth() + 1;
      }
      axios.post("/get/day/sum", {
            year: 2022,
            month: date,
            userId: 1
          }
      ).then(data1 => {
        axios.post("/get/day/sum", {
              year: 2022,
              month: date,
              userId: 0
            }
        ).then(data => {
          console.log(data.data.data.day)
          console.log("new")
          console.log(data.data.data.sum)

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
    // getLineSon() {
    //   axios.post("/get/typeson/sum", {
    //         year: 2022,
    //         month: 7,
    //         day: 4,
    //         userId: 0,
    //         type:"餐饮"
    //       }
    //   ).then(data => {
    //     console.log(data)
    //     let option = {
    //       series: [
    //         {
    //           name: '访问来源',
    //           type: 'pie',
    //           radius: '55%',
    //           data: data.data.data,
    //           itemStyle: {
    //             emphasis: {
    //               shadowBlur: 10,
    //               shadowOffsetX: 0,
    //               shadowColor: 'rgba(0, 0, 0, 0.5)'
    //             },
    //             normal: {
    //               label: {
    //                 show: true,
    //                 //formatter: '{b} : {c} ({d}%)' //带当前图例名 + 百分比
    //                 formatter: '{b} : \n{c}元 ({d}%)' //只要百分比
    //               },
    //               labelLine: {show: true}
    //             }
    //           }
    //         }
    //       ]
    //
    //     }
    //
    //     // 2.创建图表
    //     let chart = this.$echarts.init(this.$refs.myChart4)
    //
    //     // 3，导入图表的配置
    //     chart.setOption(option)
    //
    //     // 4添加窗口大小改变监听事件，当窗口大小改变时，图表会重新绘制，自适应窗口大小
    //     window.addEventListener('resize', function () {
    //       chart.resize()
    //     })
    //   })
    // },

    getLine: function () {
      axios.post("/get/pie", {
            start: this.choice.time[0],
            end: this.choice.time[1],
            is_out: this.choice.is_out1,   //1->支出
            out_dtl: this.choice.out_dtl,  //1->输出sort
            checkList: this.choice.checkList
          }
      ).then(data => {
        console.log(data)
        console.log(this.choice.out_dtl)
        if (this.choice.out_dtl) {
          data.data.data = data.data.data.filter(data => {
            let type = ["餐饮", "购物", "生活", "出行", "大件"]
            console.log(data.name)
            let b = type.includes(data.name);
            console.log(b)
            if (b==true) {
              return false;
            } else {
              return true;
            }
          })
        }
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