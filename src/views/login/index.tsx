import { Button, Checkbox, Form, Input } from 'antd';
import { UserOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import styles from './index.module.scss'
import { useNavigate, Navigate } from 'react-router-dom';
import { reqLogin } from "@/api/index.ts";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const Login = function () {
  const token = localStorage.getItem('token')
  if (token) {
    return <Navigate to="/"></Navigate >
  }

  const onFinish = (values:object) => {
    reqLogin(values)
    localStorage.setItem('token', 'fgeshekesj===')
    // const dispatch = useDispatch()
// dispatch(Login({name:'', password:''}))
    console.log('Success:', values);
    navigate('/home')
  };
  
  const navigate = useNavigate()
  const onFinishFailed = (errorInfo: object) => {
    // localStorage.setItem('token', 'fgeshekesj===')
    console.log('Failed:', errorInfo);
    // navigate('/')
  };
  return(
    <div className={styles['login_container']}>
      <div className={styles['form']}>
        <div className={styles['title']}>登录</div>
        <Form name="basic" initialValues={{ remember: true }}  onFinish={onFinish} onFinishFailed={onFinishFailed}  autoComplete="off" >
          <Form.Item<FieldType> name="username" rules={[{ required: true, message: '姓名不能为空！' }]} >
            <Input placeholder="请输入姓名" prefix={<UserOutlined style={{'color':'#01a79a'}}/>} />
          </Form.Item>
          <Form.Item<FieldType> name="password" >
            <Input.Password placeholder="请输入密码" prefix={<LockOutlined  style={{'color':'#01a79a'}}/>} iconRender={(visible) => (visible ? <EyeTwoTone  style={{'color':'#01a79a'}}/> : <EyeInvisibleOutlined  style={{'color':'#01a79a'}}/>)}/>
          </Form.Item>
          <Form.Item<FieldType> name="remember" valuePropName="checked" >
            <Checkbox>记住我</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">登录</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
export default Login