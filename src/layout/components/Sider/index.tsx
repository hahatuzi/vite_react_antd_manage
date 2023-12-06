import { Layout} from 'antd';
const { Sider} = Layout;
import styles from  './index.module.scss'

const siderStyle: React.CSSProperties = {
  height:'calc(100% - 64px)',
  backgroundColor:'#5AA7A7',
  boxShadow: '0px 0px 10px #5AA7A7'
};

const MainSider = function () {
  return (
    <div className={styles['sider_container']}>
      <div className={styles['side_title']}>管理系统</div>
      <Sider style={siderStyle}></Sider>
    </div>
  )
}
export default MainSider