import { MoreOutlined, PlusOutlined } from '@ant-design/icons';
import { AlertService } from '@eltnt/core';
import { Breadcrumb, Button, Dropdown, Input, Menu, Table, Tag } from 'antd';
import AdvancedSVG from 'apps/admin/src/app/icons/advanced.svg';
import { HotelListItem } from 'apps/admin/src/app/models/hotel';
import { ListQuery } from 'apps/admin/src/app/models/list.query';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getAllHotels } from '../../api/hotel.api';

function HotelList() {
  const { Search } = Input;
  const [isLoading, setIsLoading] = useState(false);
  const [hotelQuery, setHotelQuery] = useState<ListQuery>(null);
  const [hotels, setHotels] = useState<HotelListItem[]>([]);
  // const [paramQuery, setParamQuery] = useQueryParams({
  //   pageIndex: NumberParam,
  // });

  useEffect(() => {
    const hotelList: ListQuery = {};
    setHotelQuery(hotelList);

    return () => {
      setHotelQuery(null);
    };
  }, []);

  useEffect(() => {
    if (hotelQuery) {
      setIsLoading(true);
      getAllHotels(hotelQuery)
        .then((result: HotelListItem[]) => {
          if (result) {
            setHotels(result);
          }
          setIsLoading(false);
        })
        .catch((e) => {
          new AlertService().error(e.message);
          setIsLoading(false);
        });
    }
  }, [hotelQuery]);

  const history = useHistory();

  const onViewClick = (id) => {
    history.push(`${id}/edit-hotel`);
  };

  const popUpMenus = (id) => {
    return (
      <Menu data-id={id}>
        <Menu.Item data-id={id} key={id} onClick={(e) => onViewClick(id)}>
          view
        </Menu.Item>
      </Menu>
    );
  };

  const columns = [
    {
      title: 'id',
      sorter: (a, b) => a.id.length - b.id.length,
    },
    {
      title: 'Hotel Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: 'Rooms',
      render: () => {
        return <span>4</span>;
      },

      // sorter: (a, b) => a.id.length - b.id.length,
      // render(rooms) {
      //   return <>{rooms.counts}</>;
      // },
    },
    {
      title: 'Address',
      dataIndex: 'address',
      render(address) {
        return (
          <>
            {address.city}, {address.street} {address.addressLineOne}
          </>
        );
      },
    },
    {
      title: 'Email',
      dataIndex: 'contactPerson',
      render(contactPerson) {
        return <>{contactPerson.email} </>;
      },
    },
    {
      title: 'Phone Number',
      dataIndex: 'contactPerson',
      render(contactPerson) {
        return <>{contactPerson.phoneNumber} </>;
      },
    },
    // {
    //   title: 'Status',
    //   dataIndex: 'Status',
    //   key: 'Status',
    //   render(status, color) {
    //     {
    //       if (status === 'Active') {
    //         color = 'blue';
    //       } else if (status === 'Pending') {
    //         color = 'orange';
    //       } else if (status === 'Suspended') {
    //         color = 'red';
    //       }
    //     }
    //     return {
    //       children: <Tag color={color}>{status}</Tag>,
    //     };
    //   },
    // },
    {
      title: 'Status',
      render: () => {
        return <Tag color="orange">Pending</Tag>;
      },
    },
    {
      title: 'Action',
      dataIndex: 'id',
      key: 'id',
      render: (action) => {
        return (
          <>
            <Dropdown overlay={popUpMenus(action)} trigger={['click']}>
              <a data-id={action} className="ant-dropdown-link">
                <MoreOutlined />
              </a>
            </Dropdown>
          </>
        );
      },
    },
  ];

  return (
    <div className="p-4">
      <div className="flex header justify-between">
        <div className="flex flex-col">
          <span className="text-2xl text-primary-700">All Hotels</span>
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Hotels</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">All Hotels</a>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <div className="flex">
          <Search
            placeholder="Search by hotel name"
            style={{ width: 264, padding: 18 }}
          />

          <div className="py-4 flex gap-4">
            <div>
              <Button
                type="primary"
                icon={<PlusOutlined />}
                onClick={() => history.push('/add-hotel')}
              >
                New Hotel
              </Button>
            </div>
            <div>
              <span className="flex gap-2 bg-primary-500 text-white py-1.5 rounded px-1.5">
                <AdvancedSVG />
                <a>Advanced Search</a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Table dataSource={hotels} columns={columns} />
      </div>
    </div>
  );
}

export default HotelList;
