import React from 'react';
import { Layout} from 'antd';
import {Navigate} from 'react-router-dom'

import MainHeader from './components/Header';
import MainSider from './components/Sider';
import MainContent from './components/Content';

const layoutStyle: React.CSSProperties = {
  width: '100vw',
  height: '100vh',
  display: 'flex'
};

const MainLayout: React.FC  = function () {
  // token跳转路由
  const token = localStorage.getItem('token')
  if (!token) {
    return <Navigate to="/login"></Navigate >
  }

  return (
    <Layout style={layoutStyle}>
      <MainSider></MainSider>
      <Layout>
        <MainHeader></MainHeader>
        <MainContent></MainContent>
      </Layout>
    </Layout>
  )
}
export default MainLayout