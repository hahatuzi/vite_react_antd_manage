import React, { useState, useEffect } from 'react';
import { Button, Select, Form, Input } from 'antd';
import TemplateUpload from '@/component/TemplateUpload/index'
const { Option } = Select

type FieldType = {
  articleName?: string;
  articleType?: string;
  articleText?: string;
};

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
const onTypeChange = (value) => {
  console.log(value)
}

const getTypeList = () => {
  return [
  {label:"类型一", value:'1'},
  {label:"类型二", value:'2'},
  {label:"类型三", value:'3'},
]
}
const initTinyMCE = () => {
  tinymce.init({
    selector: '#tinyMCE'
  });
}
const ArticleAdd: React.FC = () => {
  
  const [typeList, setTypeList] = useState([])
  const [form] = Form.useForm();

  useEffect(() => {
    const data = getTypeList()
    setTypeList(data)
    initTinyMCE()
  },[])

return (
  <Form
    name="basic"
    form={form}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="文章标题"
      name="articleName"
      style={{ maxWidth: 400 }}
      rules={[{ required: true, message: '文章标题不能为空!' }]}
    >
      <Input placeholder="请输入文章标题"/>
    </Form.Item>

    <Form.Item name="articleType" label="文章类型" rules={[{ required: true }]} style={{ maxWidth: 400 }}>
      <Select
        placeholder="请选择文章类型"
        onChange={onTypeChange}
        allowClear
      >
        {typeList.map(item => <Option value={item.value}>{item.label}</Option> )}
      </Select>
    </Form.Item>
    <Form.Item label="文章封面" name="articleImg">
      <TemplateUpload></TemplateUpload>
    </Form.Item>
    <Form.Item<FieldType>
      label="文章内容"
      name="articleText"
      style={{ maxWidth: 800 }}
      rules={[{ required: true, message: '文章内容不能为空!' }]}
    >
      <div id='tinyMCE'></div>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        发布文章
      </Button>
    </Form.Item>
  </Form>
  )
};

export default ArticleAdd