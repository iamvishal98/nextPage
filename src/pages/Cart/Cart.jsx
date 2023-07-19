import { Button, Table } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCartItem } from "../../redux/Slice/AppSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartData } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const navigate = useNavigate("/");

  const columns = [
    {
      title: "Class",
      dataIndex: "class",
      key: "class",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <Button onClick={() => dispatch(removeCartItem(record))}>Remove</Button>
      ),
    },
  ];

  const data = cartData?.map((cartitem) => {
    return {
      class: cartitem.class,
      date: cartitem.date,
      time: cartitem.time,
      key: cartitem.date,
    };
  });

  return (
    <div className="Cart-Container">
      <h2 className="Back-Home" onClick={() => navigate("/")}>
        Back to home
      </h2>
      <h1>Your Schedules</h1>
      {cartData.length > 0 ? (
        <Table columns={columns} dataSource={data} />
      ) : (
        <p>No Schedules Booked</p>
      )}
    </div>
  );
};

export default Cart;
