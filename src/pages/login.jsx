import {
  Button,
  Row,
  Col,
  Form,
  Input,
  Divider,
  notification,
  message,
} from "antd";
import { Link, useNavigate } from "react-router-dom";
import { loginAPI } from "../services/api.service";
import { useState } from "react";
const LoginPage = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    const res = await loginAPI(values.email, values.password);
    if (res.data) {
      message.success("Đăng nhập thành công");
      navigate("/");
    } else {
      notification.error({
        message: "Error login",
        description: JSON.stringify(res.message),
      });
    }
    setLoading(false);
  };
  return (
    <div>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        style={{ margin: "50px" }}
        // onFinishFailed={onFinishFailed}
      >
        <Row justify={"center"}>
          <Col xs={24} md={8}>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Email không được để trống",
                },
                {
                  type: "email",
                  message: "Email không đúng định dạng",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row justify={"center"}>
          <Col xs={24} md={8}>
            <Form.Item
              label="Pass Word"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập mật khẩu  ",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
          </Col>
        </Row>

        <Row justify={"center"}>
          <Col xs={24} md={8}>
            <div>
              <Button
                loading={loading}
                onClick={() => form.submit()}
                type="primary"
              >
                Login
              </Button>
              <Divider />
            </div>
          </Col>
        </Row>
        <Row style={{ margin: "20px 0" }} justify={"center"}>
          <Col xs={24} md={8}>
            <div>
              <p>
                Chưa có tài khoản?
                <Link to={"/register"}>Đăng kí tại đây</Link>
              </p>
            </div>
          </Col>
        </Row>
        <Row justify={"center"}>
          <Col xs={24} md={8}>
            <Link to={"/"}>Go to home page</Link>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default LoginPage;
