// 路由守卫，可以放置在layout文件夹下的index文件中，或者也可以单独生成一个鉴权文件routeAuth.js
import React from 'react'
import {Navigate} from 'react-router-dom'

const getToken = () => {
  return localStorage.token
}

function RouterAuth({children}) {
  const token = getToken()
  if (token) {
    return <>{children}</>
  } else {
    return <Navigate to="/login"></Navigate>
  }
}

export default RouterAuth