import './App.scss'
import { useRoutes } from 'react-router-dom'
// import {useNavigate, useRoutes,useLocation } from 'react-router-dom'
import routes from './router/index'
// import { message } from 'antd'

function BeforeRouterEnter() {
  const outlet = useRoutes(routes)
  // const token = localStorage.getItem('token')
  // const navigateTo = useNavigate()
  // const location = useLocation()
  //   if (!token) {
  //   if (location.pathname === '/login') {
  //     useEffect(() => {
  //       navigateTo('/home')
  //     },[])
  //   }
  // } else {
  //   useEffect(() => {
  //     navigateTo('/login')
  //     message.error('请先登录')
  //   },[])
  // }
  return outlet
}
function App() {
  return (
    <div>
      <BeforeRouterEnter></BeforeRouterEnter>
    </div>
  )
}

export default App
