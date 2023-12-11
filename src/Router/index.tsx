import {Navigate} from 'react-router-dom'
import  {lazy, Suspense} from 'react'
import MainLayout from "@/layout"

// eslint-disable-next-line react-refresh/only-export-components
const Login = lazy(() => import('@/views/Login/index'))
const Home = lazy(() => import('@/views/Home/index'))
const MenuManage = lazy(() => import('@/views/System/MenuManage'))
const UserManage = lazy(() => import('@/views/System/UserManage'))

const withLoadingComponent = (comp:JSX.Element) => {
  return <Suspense fallback={<div>loading...</div>}>{comp}</Suspense>
}
const routes = [
  { path:"/",element:<Navigate to="/home"></Navigate> },
  { path:"/login",element:withLoadingComponent(<Login></Login>) },
  // {
  //   path:"/",
  //   element:<Home></Home>,
  //   children:[
  //     { path:"/page1",element:withLoadingComponent(<Page1></Page1>) },
  //     { path:"/page2",element:withLoadingComponent(<Page2></Page2>) }
  //   ]
  // },
  {
    path:"/",
    element:<MainLayout></MainLayout>,
    children:[
      { path:"/home",name:"首页",element:withLoadingComponent(<Home></Home>) },
      { path:"/system/menu",name:"菜单管理",element:withLoadingComponent(<MenuManage></MenuManage>) },
      { path:"/system/user",name:"用户管理",element:withLoadingComponent(<UserManage></UserManage>) },
    ]
  }
]
export default routes