import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { fetchAllUserAPI } from "./../services/api.service";
import { useEffect, useState } from "react";

const UserPage = () => {
  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
    loadUSer();
  }, []);

  const loadUSer = async () => {
    const res = await fetchAllUserAPI();
    setDataUser(res.data);
  };

  return (
    <div style={{ padding: "20px" }}>
      <UserForm loadUSer={loadUSer} />
      <UserTable dataUser={dataUser} />
    </div>
  );
};

export default UserPage;
