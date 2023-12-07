import React from 'react'
import { Layout} from 'antd';
import styles from  './index.module.scss'
import type { MenuProps } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Menu} from 'antd'

const { Sider} = Layout;
const siderStyle: React.CSSProperties = {
  height:'calc(100% - 64px)',
  backgroundColor:'#01a79a',
  boxShadow: '0px 0px 10px #01a79a'
}
const menuStyle:React.CSSProperties = {
  height:"100%",
  borderRight: 0,
  backgroundColor:'#01a79a',
  color:'#fff',
  fontSize:'15px',
}
const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,

      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  },
);

const MainSider = function () {
  return (
    <div className={styles['sider_container']}>
      <div className={styles['side_title']}>管理系统</div>
      <Sider style={siderStyle}>
        <div className={styles['menu_container']}>
          <Menu style={menuStyle}  mode="inline"  defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} items={items2} />
        </div>
      </Sider>
    </div>
  )
}
export default MainSider