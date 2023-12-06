import { Layout} from 'antd';
const { Header } = Layout;
import styles from  './index.module.scss'


const headerStyle: React.CSSProperties = {
  backgroundColor:'#fff'
};


const MainHeader = function () {
  return (
    <Header style={headerStyle}>
      <div className={styles['title']}>header</div>
    </Header>
  )
}
export default MainHeader