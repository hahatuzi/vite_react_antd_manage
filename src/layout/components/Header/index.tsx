import React, { useState } from 'react';
import { Layout,  Modal} from 'antd';
import { useNavigate } from 'react-router-dom'
const { Header } = Layout;
import styles from  './index.module.scss'


const headerStyle: React.CSSProperties = {
  backgroundColor:'#fff'
};


const MainHeader = function () {
  const navigate = useNavigate()
  const logout = function () {
    setIsModalOpen(true);
  }
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    localStorage.removeItem('token')
    setIsModalOpen(false);
    navigate('/login')
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
    <Header style={headerStyle}>
      <span className={styles['title']}>header</span>
      <span className={styles['logout']} onClick={logout}>退出登录</span>
    </Header>
    <Modal title="是否确认退出登录？" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}></Modal>
  </>
  )
}
export default MainHeader