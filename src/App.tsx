import {useNavigate, useRoutes,useLocation } from 'react-router-dom'
// import {constantRoutes} from './router/index'
// import routes from './router/config'
import routes from './router/index'
import './App.scss'
import { BrowserRouter,Routes,Route, RouterProvider, Navigate  } from "react-router-dom"

import  {lazy, Suspense} from 'react'
import MainLayout from "@/layout"

// eslint-disable-next-line react-refresh/only-export-components
const Login = lazy(() => import('@/views/Login/index'))
const NotFound = lazy(() => import('@/views/404'))

function BeforeRouterEnter() {
  const outlet = useRoutes(routes)
  return outlet
  // ========================================
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
}
function App() {
  return (
    <div>
          {/* <BeforeRouterEnter></BeforeRouterEnter> */}
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login></Login>} />
          <Route path="/*" element={<MainLayout />} ></Route>
          {/* '/404' ,最后一项必须为404页面！ */}
          <Route path="/404" element={<NotFound />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
