import { PlusOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Input, Table, Tag } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function UserList() {
  const [data, setData] = useState([]);
  const { Search } = Input;

  useEffect(() => {
    (async () => {
      const result = await axios('https://api.tvmaze.com/search/shows?q=snow');
      setData(result.data);
      console.log(data);

      console.log('hello');
    })();
  }, []);

  const dataSource = [
    {
      key: '1',
      id: 'user/001/',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
      status: ['Active'],
    },
    {
      key: '2',
      id: 'user/002/',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
      status: ['Pending'],
    },
  ];

  const columns = [
    {
      title: 'Full Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status, color) => (
        <>
          {status.map((stat, s) => {
            if (stat == 'Active') {
              color = 'blue';
            } else {
              color = 'orange';
            }
            return (
              <span>
                <Tag color={color} key={s}>
                  {status}
                </Tag>
              </span>
            );
          })}
        </>
      ),
    },
  ];
  return (
    <div>
      <div className="flex header justify-between">
        <div className="flex flex-col">
          <span className="text-2xl text-primary-700">All Users</span>
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">User Management</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Users List</a>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <div className="flex">
          <Search
            placeholder="Search by full name"
            style={{ width: 264, padding: 18 }}
          />

          <div className="py-4 flex gap-4">
            <div>
              <Button type="primary" icon={<PlusOutlined />}>
                New User
              </Button>
            </div>
            <div>
              <Button type="primary" icon={<PlusOutlined />}>
                Advanced Search
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </div>
  );
}

export default UserList;
