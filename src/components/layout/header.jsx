import React, { Children, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  LoginOutlined,
  AliwangwangOutlined,
  HomeOutlined,
  UserAddOutlined,
  BookOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu, message } from "antd";
import { useState } from "react";
import { AuthContext } from "../context/auth.context";
import { logOutApi } from "../../services/api.service";

const Header = () => {
  const [current, setCurrent] = useState("mail");
  const navigate = useNavigate();

  const { user, setUser } = useContext(AuthContext);

  const onClick = (e) => {
    setCurrent(e.key);
  };

  const handleLogout = async () => {
    const res = await logOutApi();
    if (res.data) {
      localStorage.removeItem("access_token");
      setUser({
        email: "",
        phone: "",
        fullName: "eric",
        role: "",
        avatar: "",
        id: "",
      });
      message.success("Đăng xuất thành công");
      navigate("/");
    }
  };

  const items = [
    {
      label: <Link to="/">Home</Link>,
      key: "home",
      icon: <HomeOutlined />,
    },
    {
      label: <Link to="/users">User</Link>,
      key: "user",
      icon: <UserAddOutlined />,
    },

    {
      label: <Link to="/books">Book</Link>,
      key: "books  ",
      icon: <BookOutlined />,
    },
    ...(!user.id
      ? [
          {
            label: <Link to="/login">Đăng nhập</Link>,
            key: "login  ",
            icon: <LoginOutlined />,
          },
        ]
      : []),
    ...(user.id
      ? [
          {
            label: `Welcome ${user.fullName}`,
            key: "settings",
            icon: <AliwangwangOutlined />,
            children: [
              {
                label: <span onClick={handleLogout}>Đăng xuất</span>,
                key: "logout",
              },
            ],
          },
        ]
      : []),
  ];
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default Header;
