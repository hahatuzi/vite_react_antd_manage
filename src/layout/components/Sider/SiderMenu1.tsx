import React,{useEffect} from 'react'
import { Menu } from "antd";
import * as Icon from '@ant-design/icons'
import {asyncRoutes} from '@/router/index'
import { useNavigate } from 'react-router-dom'
const menuStyle:React.CSSProperties = {
  height:"100%",
  borderRight: 0,
  backgroundColor:'#01a79a',
  color:'#fff',
  fontSize:'15px',
}

type node = {
  name:'',
  icon:React.Component,
  label:'',
  path:'',
  meta:{icon:string, title:string},
  children:[{path:string,label:string,meta:{icon:string}}]
}
const getMenuTree = function (arr:Array<node>):Array<object> {
  if (!arr || arr.length === 0) return []
  const res = arr.map(item => {
    let obj = {}
    if (!item.meta) {
      // 单级路由
      obj = {
        key:item.children[0].path,
        icon:  React.createElement(item.children[0].meta.icon),
        label: item.children[0].label,
      }
    } else {
      obj = {
        key: item.path,
        icon: item.meta && React.createElement(Icon[item.meta.icon]),
        label: item.label,
      }
      if (item.children && item.children.length !== 0) {
        obj.children = getMenuTree(item.children)
      }
    }
    return obj
  })
  return res
}

const SiderMenu = function () {
  const navigate = useNavigate()
  const item3 = getMenuTree(asyncRoutes)
  const handleMenuClick = function (e) {
    navigate(e.key)
  }
  // 浏览器刷新时返回default页面路由
  useEffect(() => {
    navigate('/home')
  },[])
  return (
    <>
    <Menu style={menuStyle}  mode="inline"  defaultSelectedKeys={['/home']} defaultOpenKeys={['sub1']} items={item3} onClick={handleMenuClick}/>
    </>
  )
}
export default SiderMenu