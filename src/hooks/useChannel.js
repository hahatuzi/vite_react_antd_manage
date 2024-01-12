import { useEffect, useState } from "react"

function useChannel() {
  const [channelList, setChannelList] = useState([])
  useEffect(() =>{
    setChannelList([])
  },[])
  return {
    channelList
  }
}
export {useChannel}
// 使用方法：
import {useChannel} from 'XXX'
const App = () => {
  const {channelList} = useChannel()
  return (
    <div>
      {channelList.map(item => <span>{item.label}</span>)}
    </div>
  )
}