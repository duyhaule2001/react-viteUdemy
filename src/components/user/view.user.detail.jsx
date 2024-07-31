import React, { useEffect, useState } from "react";
import { Drawer } from "antd";

const ViewUserDetail = (props) => {
  const { dataDetail, setDataDetail, setIsDetailOpen, isDetailOpen } = props;

  return (
    <Drawer
      width={"40vw"}
      title="Thông tin user"
      onClose={() => {
        setIsDetailOpen(false);
        setDataDetail(null);
      }}
      open={isDetailOpen}
    >
      {dataDetail ? (
        <>
          <p>ID:{dataDetail._id}</p>
          <p>Full name:{dataDetail.fullName}</p>
          <p>Email:{dataDetail.mail}</p>
          <p>Phone number:{dataDetail.phone}</p>
          <div>
            <img
              height={250}
              width={300}
              src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${
                dataDetail.avatar
              }`}
            />
          </div>
          <div>
            <label
              htmlFor="btnUpload"
              style={{ background: "orange", padding: "5px" }}
            >
              Upload Avatar
            </label>
            <input type="file" hidden id="btnUpload" />
          </div>
        </>
      ) : (
        <div>khong co du lieu</div>
      )}
    </Drawer>
  );
};

export default ViewUserDetail;
