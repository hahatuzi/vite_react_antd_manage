import Login from '@/views/login/index'
import Home from '@/views/Home/index'
import User from '@/views/User/index'
import MainMenu from '@/Layot/index'

const GetRouters = () => {
  const routes:RouteObject[] = useRoutes([
    {
      path:'/layout',
      element:<MainMenu></MainMenu>,
      children:[
        {path:'user', element:<User></User>, index:true},
        {path:'home', element:<Home></Home>},
      ]
    }
  ])
  return routes
}
export default GetRouters