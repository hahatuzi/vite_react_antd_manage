import React,{useEffect} from 'react'
import { Menu } from "antd";
import * as Icon from '@ant-design/icons'
import router from '@/router/data.jsx'
// import {asyncRoutes} from '@/router/index'
import { useLocation, useNavigate } from 'react-router-dom'
import {userInfo} from './mock.jsx'
const menuStyle:React.CSSProperties = {
  height:"100%",
  borderRight: 0,
  backgroundColor:'#01a79a',
  color:'#fff',
  fontSize:'15px',
}

const getMenu = function (arr, path) {
  const res = arr.reduce((result,item) => {
    if (!item.path.startsWith('/')) {
      item.path = path + item.path
    }
    if (!item.hidden) {
      const obj =  {
        key: item.redirect ? item.redirect : item.path, // 路由重定向
        icon: item.meta && React.createElement(Icon[item.meta.icon]),
        label: item.label,
        hidden:item.hidden
      }
      result.push(obj)
      if (item.children && item.children.length !== 0) {
        // 如果子路由都是hidden，那么不显示子菜单
        const hiddenChild = item.children.every(el => el.hidden)
        if (!hiddenChild) {
          obj.children = getMenu(item.children, item.path + '/')
        }
      }
    }
    return result
  }, [])
  return res
}


const getUserMenu = function (arr) {
  const menu = userInfo.reduce((res,item) => {
    res.push(arr.find(el => {
      console.log(el)
      el.key === item.path
    }))
    return res
  },[])
  return menu
}
const SiderMenu = function () {
  const navigate = useNavigate()
  const selectedkey = useLocation().pathname
    const item = getMenu(router)
  const handleMenuClick = function (e) {
    navigate(e.key)
  }
  // useEffect(() => {
  //   console.log(location)
  //   // 浏览器刷新时返回default页面路由
  //   navigate('/home')
  // },[])
  return (
    <>
    <Menu style={menuStyle}  mode="inline" selectedKeys={[selectedkey]} defaultOpenKeys={['sub1']} items={item} onClick={handleMenuClick}/>
    </>
  )
}
export default SiderMenu