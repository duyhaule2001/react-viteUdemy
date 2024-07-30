import React from "react";
import { Link } from "react-router-dom";
import { HomeOutlined, UserAddOutlined, BookOutlined } from "@ant-design/icons";
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
