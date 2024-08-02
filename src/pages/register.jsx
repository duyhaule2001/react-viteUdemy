import { Input, Button, Form } from "antd";

const RegisterPage = () => {
  const [form] = Form.useForm();

  const onFinish = ( values) => {
    console.log(values)
  }
  return (
    <Form
    form={form}
    layout="vertical"
    onFinish={onFinish}
    // onFinishFailed={onFinishFailed}
  >
    <div style={{
      margin: "50px",
    }}>
      <Form.Item
        label="FullName"
        name="fullName"
        // rules={[
        //   {
        //     required: true,
        //     message: 'Please input your username!',
        //   },
        // ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        // rules={[
        //   {
        //     required: true,
        //     message: 'Please input your username!',
        //   },
        // ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="PassWord"
        name="passWord"
        // rules={[
        //   {
        //     required: true,
        //     message: 'Please input your username!',
        //   },
        // ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="Phone Number"
        name="phone"
        // rules={[
        //   {
        //     required: true,
        //     message: 'Please input your username!',
        //   },
        // ]}
      >
        <Input />
      </Form.Item>
      <Button onClick={() => form.submit()} type="primary">Đăng kí</Button>
    </div>
      
      </Form>
  );
};

export default RegisterPage;
