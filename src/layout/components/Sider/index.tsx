import React from 'react'
import { Layout} from 'antd';
import styles from  './index.module.scss'
import SiderMenu from './SiderMenu'


const { Sider} = Layout;
const siderStyle: React.CSSProperties = {
  height:'calc(100% - 64px)',
  backgroundColor:'#01a79a',
  boxShadow: '0px 0px 10px #01a79a'
}

const MainSider = function () {
  return (
    <div className={styles['sider_container']}>
      <div className={styles['side_title']}>管理系统</div>
      <Sider style={siderStyle}>
        <div className={styles['menu_container']}>
          <SiderMenu></SiderMenu>
        </div>
      </Sider>
    </div>
  )
}
export default MainSider