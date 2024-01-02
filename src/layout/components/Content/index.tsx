import { Layout} from 'antd';
const { Content } = Layout;
import './index.module.scss'
import { Navigate, Route,Routes  } from 'react-router-dom'

import router from '@/router/data.jsx'

const MainContent = function () {
  const handleRouter = function (arr, path) {
    const res = []
    arr.forEach( item => {
      // 非/开头的子级路径拼接父级路径处理
      if (!item.path.startsWith('/')) {
        item.path = path + item.path
        console.log(item)
      }
      if (!item.children) {
        res.push(<Route path={item.path} key={item.path} element={item.element}></Route>)
      } else {
        res.push(...handleRouter(item.children, item.path + '/'))
      }
    })
    return res
  }
  return (
    <div>
      <Content>
        <Routes>
          {handleRouter(router, '/')}
          <Route path="*" element={<Navigate to='/404'/>} ></Route>
        </Routes>
      </Content>
    </div>
  )
}
export default MainContent