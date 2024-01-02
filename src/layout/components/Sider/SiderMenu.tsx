import React,{useEffect} from 'react'
import { Menu } from "antd";
import * as Icon from '@ant-design/icons'
import router from '@/router/data.jsx'
// import {asyncRoutes} from '@/router/index'
import { useNavigate } from 'react-router-dom'
const menuStyle:React.CSSProperties = {
  height:"100%",
  borderRight: 0,
  backgroundColor:'#01a79a',
  color:'#fff',
  fontSize:'15px',
}

const getMenu = function (arr, path) {
  const res = arr.map(item => {
    if (!item.path.startsWith('/')) {
      item.path = path + item.path
    }
    const obj =  {
      key: item.path,
      icon: item.meta && React.createElement(Icon[item.meta.icon]),
      label: item.label,
    }
    if (item.children && item.children.length !== 0) {
      obj.children = getMenu(item.children, item.path + '/')
    }
    return obj
  })
  return res
}

const SiderMenu = function () {
  const navigate = useNavigate()
  const item = getMenu(router)
  const handleMenuClick = function (e) {
    navigate(e.key)
  }
  // 浏览器刷新时返回default页面路由
  useEffect(() => {
    navigate('/home')
  },[])
  return (
    <>
    <Menu style={menuStyle}  mode="inline"  defaultSelectedKeys={['/home']} defaultOpenKeys={['sub1']} items={item} onClick={handleMenuClick}/>
    </>
  )
}
export default SiderMenu