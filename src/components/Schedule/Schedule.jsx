import { Button, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchScheduleData, setCartItem } from "../../redux/Slice/AppSlice";

const Schedule = () => {
  const dispatch = useDispatch();
  const { scheduleData } = useSelector((state) => state.app);
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
      title: "Availablity",
      dataIndex: "availablity",
      key: "availablity",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) =>
        record.availablity ? (
          <Button onClick={() => dispatch(setCartItem(record))}>Book</Button>
        ) : (
          <Button disabled>Full</Button>
        ),
    },
  ];

  const data = scheduleData?.map((data) => {
    return {
      class: data?.className,
      date: data?.date,
      time: `${data?.startTime} - ${data?.endTime}`,
      availablity: data?.availableSeats,
      key: data?.date,
    };
  });

  useEffect(() => {
    dispatch(fetchScheduleData());
  }, []);

  return (
    <div className="Schedule-Container">
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default Schedule;
