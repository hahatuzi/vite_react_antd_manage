import { Layout} from 'antd';
const { Content } = Layout;
import './index.module.scss'
import { Outlet } from 'react-router-dom';

const MainContent = function () {
  return (
    <div>
      <Content>
        <Outlet></Outlet>
      </Content>
    </div>
  )
}
export default MainContent