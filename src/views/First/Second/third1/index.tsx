import * as echarts from 'echarts'
import { useEffect } from 'react'
import BarChart from '@/component/echarts'

  const initEcharts = function () {
  const dom = document.getElementById('chart')
  const mychart = echarts.init(dom)
  // const chartRef = useRef(null)
  // const mychart = echarts.init(chartRef.current)
  const option = {
    xAxis:{
      type:'category',
      data:['1号', '2号']
    },
    yAxis:{type:'value'},
    series:[
      {data:[100,100],type:'bar'}
    ]
  }
  option && mychart.setOption(option)
}
const S_third1 = function () {
  useEffect(() => {
    // initEcharts()
  },[])
  return (
    <div>
      <BarChart title="echarts图表"></BarChart>
      {/* <div id='chart' style={{width:'150px', height:'300px'}}></div> */}
    </div>
  )
}
export default S_third1