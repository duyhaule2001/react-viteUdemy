import React, { Children, useContext } from "react";
import { Link } from "react-router-dom";
import {
  LoginOutlined,
  AliwangwangOutlined,
  HomeOutlined,
  UserAddOutlined,
  BookOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useState } from "react";
import { AuthContext } from "../context/auth.context";

const Header = () => {
  const [current, setCurrent] = useState("mail");

  const { user } = useContext(AuthContext);

  const onClick = (e) => {
    setCurrent(e.key);
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
                label: <Link to={"/login"}>Đăng xuất</Link>,
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
