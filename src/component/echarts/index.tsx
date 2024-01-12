import * as echarts from 'echarts'
import { useEffect } from 'react'

const BarChart = ({title}) => {
  useEffect(() => {
    const dom = document.getElementById('chart')
    const mychart = echarts.init(dom)
    const option = {
      title:{
        text:title
      },
      xAxis:{
        type:'category',
        data:['周一', '周二']
      },
      yAxis:{type:'value'},
      series:[
        {data:[100,100],type:'bar'}
      ]
    }
    option && mychart.setOption(option)
  },[])
  return <div id='chart' style={{width:'150px', height:'300px'}}></div>
}
export default BarChart