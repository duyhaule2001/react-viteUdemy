import { Input, Button } from "antd";
import { useState } from "react";

const UserForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleClick = () => {
    console.log({ fullName, email, password, phone });
  };

  return (
    <div className="user-form" style={{ margin: "20px 0" }}>
      <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
        <span>FulName</span>
        <Input
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
        />
      </div>
      <div>
        <span>Email</span>
        <Input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <span>Password</span>
        <Input.Password
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <span>Phone number</span>
        <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div>
        <Button onClick={handleClick} type="primary">
          Create User
        </Button>
      </div>
    </div>
  );
};

export default UserForm;
