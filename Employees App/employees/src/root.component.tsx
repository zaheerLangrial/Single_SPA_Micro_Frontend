import { Space, Table, Button, Modal } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Root() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    const res = await axios.get('https://reqres.in/api/users');
    setEmployees(res.data.data);
  }

  const handleViewClick = (record) => {
    setSelectedEmployee(record);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

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
      key: 'actions',
      render: (text, record) => (
        <Space size="middle">
          <Button onClick={() => handleViewClick(record)}>View</Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Table dataSource={employees} columns={columns} />
      <Modal
        title="Employee Details"
        visible={modalVisible}
        onCancel={handleCloseModal}
        footer={null}
      >
        {selectedEmployee && (
          <div>
            <p>Name: {selectedEmployee.first_name} {selectedEmployee.last_name}</p>
            <p>Email: {selectedEmployee.email}</p>
            <img src={selectedEmployee.avatar} alt="Employee Avatar" style={{ maxWidth: '100%' }} />
          </div>
        )}
      </Modal>
    </div>
  );
}
