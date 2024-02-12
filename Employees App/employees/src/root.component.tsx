import { Space, Table, Tag } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Root() {
  const [employees , setEmployees] = useState()
  useEffect(() => {
    fetchEmployees();
  },[])
  const fetchEmployees = async () => {
    const res = await axios.get('https://reqres.in/api/users');
    setEmployees(res.data.data)
    console.log(res.data.data)
  }

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'First Name',
      dataIndex: 'first_name',
      key: 'firstname',
    },
    {
      title: 'Last Name',
      dataIndex: 'last_name',
      key: 'lastname',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Actions',
      dataIndex: 'View',
      key: 'View',
    },

  ];
  return (
    <Table dataSource={employees} columns={columns} />
  );
}
