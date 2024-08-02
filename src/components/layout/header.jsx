import React, { Children } from "react";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  UserAddOutlined,
  BookOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useState } from "react";

const Header = () => {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
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
    {
      label: "Cài đặt",
      key: "settings",
      icon: <SettingOutlined />,
      children: [
        {
          label: <Link to={"/login"}>Đăng nhập</Link>,
          key: "login",
        },
        {
          label: "Đăng xuất",
          key: "logout",
        },
      ],
    },
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
