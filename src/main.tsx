import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// antdesign 中文
import {ConfigProvider } from 'antd'; // 引入ConfigProvider全局化配置
import zhCN from 'antd/es/locale/zh_CN';  // 引入中文包

import './index.css'
import '@/styles/global.scss'
import '@/assets/font/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <RouterProvider router={router}></RouterProvider> */}
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider >
  </React.StrictMode>
)
