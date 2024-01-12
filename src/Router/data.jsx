import  {lazy, Suspense} from 'react'

const NotFound = lazy(() => import('@/views/404'))
const Home = lazy(() => import('@/views/Home/index'))
const MenuManage = lazy(() => import('@/views/System/MenuManage'))
const UserManage = lazy(() => import('@/views/System/UserManage'))
const ArticleList = lazy(() => import('@/views/Article/list'))
const ArticleAdd = lazy(() => import('@/views/Article/add'))
// 三级路由测试
const S_third1 = lazy(() => import('@/views/First/Second/third1'))
const S_third2 = lazy(() => import('@/views/First/Second/third2'))
const S1_third1 = lazy(() => import('@/views/First/Second1/third1'))
const S1_third2 = lazy(() => import('@/views/First/Second1/third2'))

// 路由组件加载中
const withLoadingComponent = (comp) => {
  return <Suspense fallback={<div>loading...</div>}>{comp}</Suspense>
}
/*
* 路由菜单数组
* path: 路由地址，可以为由/开头的全级路由名字或者非/开头的子级路由名字
* label: 路由地址对应的菜单名称
* element: 路由地址对应的组件
* redirect: 路由重定向，有就写，没有可以不写
* hidden: 是否隐藏路由地址对应的菜单，默认false为不隐藏，true为隐藏
* meta: 路由地址对应的属性，包括icon：路由地址对应的菜单图标
* children: 路由地址对应的子级路由，最好仅包括两层子级路由即两层children！！children的每一项也包括path，label,element,meta
*/
const router = [
  { path:'/home',label:'首页',element: <Home></Home>,meta:{icon:'HomeOutlined'} },
  { path:'/system',label:'系统管理',meta:{icon:'UnorderedListOutlined'},children:[
    { path:"menu",element:withLoadingComponent(<MenuManage></MenuManage>),label:'菜单管理', meta:{ icon:'AppstoreOutlined'} },
    { path:"user",element:withLoadingComponent(<UserManage></UserManage>),label:'用户管理', meta:{icon:'TeamOutlined'} },
  ] },
  { path:'/article',label:'文章管理',meta:{icon:'UnorderedListOutlined'},redirect:'/article/add',children:[
    { path:"add",element:withLoadingComponent(<ArticleAdd></ArticleAdd>),label:'新增文章', hidden:true },
    { path:"list",element:withLoadingComponent(<ArticleList></ArticleList>),label:'文章列表', hidden:true},
  ] },
  { path:'/articleadd',label:'文章发布',element: <ArticleAdd></ArticleAdd>,hidden:true,meta:{icon:'HomeOutlined'} },
  {
    path:"/first",
    label:'一级菜单',
    meta:{icon:'UserOutlined'},
    children:[
      { path:"second",label:'二级1',meta:{title:'二级1', icon:'LaptopOutlined'},children:[
        { path:"third1",element:withLoadingComponent(<S_third1></S_third1>), label:'三级1',meta:{icon:'LaptopOutlined'} },
        { path:"third2",element:withLoadingComponent(<S_third2></S_third2>), label:'三级2',meta:{icon:'LaptopOutlined'} },
      ]},
      { path:"second1", label:'二级2',meta:{icon:'LaptopOutlined'},children:[
        { path:"third1", element:withLoadingComponent(<S1_third1></S1_third1>), label:'三级1',meta:{icon:'LaptopOutlined'} },
        { path:"/first/second1/third2", element:withLoadingComponent(<S1_third2></S1_third2>), label:'三级2',meta:{ icon:'LaptopOutlined'} },
      ]},
    ]
  }
]
export default router