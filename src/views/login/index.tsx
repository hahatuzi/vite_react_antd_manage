import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { UserOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import styles from './index.module.scss'
import { useNavigate } from 'react-router-dom';


type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const Login = function () {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  
  const navigator = useNavigate()
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
    navigator('/home')
  };
  return(
    <div className={styles['login_container']}>
      <div className={styles['form']}>
        <div className={styles['title']}>登录</div>
        <Form name="basic" initialValues={{ remember: true }}  onFinish={onFinish} onFinishFailed={onFinishFailed}  autoComplete="off" >
          <Form.Item<FieldType> name="username" rules={[{ required: true, message: '姓名不能为空！' }]} >
            <Input placeholder="请输入姓名" prefix={<UserOutlined />} />
          </Form.Item>
          <Form.Item<FieldType> name="password" >
            <Input.Password placeholder="请输入密码" prefix={<LockOutlined />} iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}/>
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