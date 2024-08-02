import { Input, Button, Form, notification } from "antd";
import { useNavigate } from "react-router-dom";
import { registerUserAPI } from "../services/api.service";

const RegisterPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = async ( values) => {
    console.log(values)

    const res = await registerUserAPI(
      values.fullName, 
      values.email, 
      values.password, 
      values.phone)
    
    if(res.data){
      notification.success({
        message:"Register User",
        description:"Đăng kí tài khoản thành công"
      })
      navigate("/login")
    }else{
      notification.error({
        message:"Register User Error",
        description:JSON.stringify(res.message)
      })
    }
    

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
        label="Full Name"
        name="fullName"
        rules={[
          {
            required: true,
            message: 'Please input your Full Name!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Pass Word"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your PassWord!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="Phone Number"
        name="phone"
        rules={[
          {
            required: true,
            pattern: new RegExp(/\d+/g),
            message: "Please input number"
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Button onClick={() => form.submit()} type="primary">Đăng kí</Button>
      {/* <Button onClick={() => {
        form.setFieldsValue({
          email: "leduyhau@gmail.com",
          fullName: "LE DUY HAU"
        })
      }}>Test</Button> */}
    </div>
      
      </Form>
  );
};

export default RegisterPage;
