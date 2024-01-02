import  {lazy, Suspense} from 'react'
import MainLayout from "@/layout"

// eslint-disable-next-line react-refresh/only-export-components
const Login = lazy(() => import('@/views/Login/index'))
const NotFound = lazy(() => import('@/views/404'))
const Home = lazy(() => import('@/views/Home/index'))
const MenuManage = lazy(() => import('@/views/System/MenuManage'))
const UserManage = lazy(() => import('@/views/System/UserManage'))
// 三级路由测试
const S_third1 = lazy(() => import('@/views/First/Second/third1'))
const S_third2 = lazy(() => import('@/views/First/Second/third2'))
const S1_third1 = lazy(() => import('@/views/First/Second1/third1'))
const S1_third2 = lazy(() => import('@/views/First/Second1/third2'))


const withLoadingComponent = (comp:JSX.Element) => {
  return <Suspense fallback={<div>loading...</div>}>{comp}</Suspense>
}
export const constantRoutes:Array<object> = [
  { path:"/",element:<MainLayout></MainLayout>, redirect: '/home', },
  { path:"/login",element:<Login></Login>},
  { path:"/404",element:<NotFound></NotFound>},
]
// 考虑到layout侧边栏不需要添加登录等路由模块，故分开两部分路由
export const asyncRoutes:Array<object> = [
  { path:"/home",
    name:"home",
    element:<MainLayout></MainLayout>,
    // meta:{icon:'AppstoreOutlined'},
    children:[
      { path:"/home",name:"home",element:withLoadingComponent(<Home></Home>) ,label:'首页',meta:{icon:'AppstoreOutlined'} }
    ]
  },
  {
    path:"/system",
    name:'system',
    label:'系统管理',
    redirect: '/system/user',
    element:<MainLayout></MainLayout>,
    meta:{icon:'UserOutlined'},
    children:[
      { path:"/system/menu",name:"menuManage",element:withLoadingComponent(<MenuManage></MenuManage>),label:'菜单管理', meta:{ icon:'LaptopOutlined'} },
      { path:"/system/user",name:"userManage",element:withLoadingComponent(<UserManage></UserManage>),label:'用户管理', meta:{icon:'LaptopOutlined'} },
    ]
  },
  {
    path:"/first",
    name:'first',
    redirect: '/first/second/third1',
    element:<MainLayout></MainLayout>,
    label:'一级菜单',
    meta:{icon:'UserOutlined'},
    children:[
      { path:"second",name:"second", label:'二级1',meta:{title:'二级1', icon:'LaptopOutlined'},children:[
        { path:"/first/second/third1",name:"third1",element:withLoadingComponent(<S_third1></S_third1>), label:'三级1',meta:{icon:'LaptopOutlined'} },
        { path:"/first/second/third2",name:"third2",element:withLoadingComponent(<S_third2></S_third2>), label:'三级2',meta:{icon:'LaptopOutlined'} },
      ]},
      { path:"second1",name:"second1", label:'二级2',meta:{icon:'LaptopOutlined'},children:[
        { path:"/first/second1/third1",name:"third1",element:withLoadingComponent(<S1_third1></S1_third1>), label:'三级1',meta:{icon:'LaptopOutlined'} },
        { path:"/first/second1/third2",name:"third2",element:withLoadingComponent(<S1_third2></S1_third2>), label:'三级2',meta:{ icon:'LaptopOutlined'} },
      ]},
    ]
  }
]
const routes = [...constantRoutes, ...asyncRoutes]
export default routes