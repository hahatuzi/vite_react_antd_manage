import {useNavigate, useRoutes,useLocation } from 'react-router-dom'
// import {constantRoutes} from './router/index'
// import routes from './router/config'
import routes from './router/index'
import {useEffect } from 'react';
import { message } from 'antd'
import './App.scss'

 
function BeforeRouterEnter() {
  const outlet = useRoutes(routes)
  // const token = localStorage.getItem('token')
  // const navigateTo = useNavigate()
  // const {pathname} = useLocation()
  // if (token) {
  //   if (pathname === '/login') {
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
