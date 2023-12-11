import React from 'react'
import { Menu} from 'antd'
import type { MenuProps } from 'antd'
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons'

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

const SiderMenu = function () {
  return (
    <>
    <Menu style={menuStyle}  mode="inline"  defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} items={items2} />
    </>
  )
}
export default SiderMenu