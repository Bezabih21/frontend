import { AlertService } from '@eltnt/core';
import { Button, Form, Input, Select, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import {
  getHotelRoomInfo,
  saveHotelRoomTypeApi,
  updateHotelRoomTypeApi,
} from '../../../api/hotel.api';
import { RoomType } from '../../../models/hotel';
import FooterLayOut from './footer-layout';
import PageLayout from './page-layout';

const { Option } = Select;

function AddRoomTypeForm(props: { roomId?: any; hotelId?: any }) {
  const [urlId] = useState(useParams);
  const history = useHistory();
  const [roomTypes, setRoomTypes] = useState([
    { id: 1, name: 'Single Room' },
    { id: 2, name: 'Double bed' },
  ]);
  const [roomType, setRoomType] = useState(null);
  const [roomName, setRoomName] = useState('');
  const [smokingPolicy, setSmokingPolicy] = useState([
    { id: 1, name: 'Smoking' },
    { id: 2, name: 'Non-smoking' },
    //{ id: 2, name: 'Both smocking and non-smoking' },
  ]);
  const [currencyList, setCurrencyList] = useState([
    { id: 1, name: 'ETB', icon: '' },
    { id: 2, name: 'EUR', icon: '' },
    { id: 3, name: 'USD', icon: '' },
  ]);
  const [unitList, setUnitList] = useState([{ id: 1, name: 'Square Meter' }]);
  const [policy, setPolicy] = useState(null);
  const [roomQuantity, setRoomQuantity] = useState(0);
  const [roomSize, setRoomSize] = useState(null);
  const [sizeUnit, setSizeUnit] = useState(null);
  const [currency, setCurrency] = useState(null);
  const [roomPrice, setRoomPrice] = useState(null);
  const [priceUnit, setPriceUnit] = useState();
  const [roomFormTitle, setRoomFormTitle] = useState('Room details');
  const [basePriceTitle, setBasePriceTitle] = useState('Base price per night');
  const [baseSubTitle, setBaseSubTitle] = useState(
    ' This is the lowest price that we will automatically apply to this room for all dates. Before your property goes live, you can set seasonal pricing on your property dashboard.'
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getRoomType();
  }, []);
  function getRoomType() {
    if (props.roomId !== undefined && props.roomId !== null) {
      setIsLoading(true);
      getHotelRoomInfo(props.roomId.id)
        .then((result: any) => {
          if (result) {
            bindFormData(result.data);
          }
        })
        .catch((e) => {
          new AlertService().error(e.message);
          setIsLoading(false);
        });
    }
  }
  function bindFormData(values: any) {
    setRoomType(values.roomType);
    setRoomName(values.roomName);
    //setPolicy(1);
    setRoomQuantity(values.quantity);
    setRoomSize(values.roomSize);
    setSizeUnit(values.priceUnit);
    setCurrency(values.currency);
    setRoomPrice(values.price);
    setPriceUnit(values.priceUnit);
    setIsLoading(false);
  }
  const onFinish = (values: RoomType) => {
    if (props.roomId !== undefined && props.roomId !== null) {
      setIsLoading(true);
      values.id = props.roomId.id;
      console.log(values, props.roomId.id);
      updateHotelRoomTypeApi(values)
        .then((result: any) => {
          setIsLoading(false);
          new AlertService().success('Room Type updated Successfully');
          //think abt this redirection
          history.push('../../hotels');
        })
        .catch((e) => {
          new AlertService().error(e.message);
          setIsLoading(false);
        });
    } else {
      setIsLoading(true);
      values.hotelId = urlId.id;
      saveHotelRoomTypeApi(values)
        .then((result: any) => {
          setIsLoading(false);
          new AlertService().success('Room Type added Successfully');
          history.push('../../' + values.hotelId + '/room-pricing');
        })
        .catch((e) => {
          new AlertService().error(e.message);
          setIsLoading(false);
        });
    }
  };

  const currencySelector = (
    <Form.Item
      name="currency"
      noStyle
      rules={[{ required: true, message: 'Currency is required' }]}
    >
      <Select
        style={{
          width: 100,
        }}
      >
        {currencyList.map((currency, c) => (
          <Option value={currency.id} key={c}>
            <i>{currency.icon}</i>
            <span>{currency.name}</span>
          </Option>
        ))}
      </Select>
    </Form.Item>
  );
  const unitSelector = (
    <Form.Item
      name="unit"
      noStyle
      rules={[{ required: true, message: 'Unit is required' }]}
    >
      <Select
        style={{
          width: 100,
        }}
      >
        {unitList.map((unit, u) => (
          <Option value={unit.id} key={u}>
            <small>{unit.name}</small>
          </Option>
        ))}
      </Select>
    </Form.Item>
  );
  const roomForm = (
    <div className="grid grid-cols-2 gap-4">
      <Form.Item label="Room Type">
        <Form.Item
          name="room_type"
          rules={[{ required: true, message: 'Room type is required' }]}
        >
          <Select id="room_type">
            {roomTypes.map((room, r) => (
              <Option value={room.id} key={r}>
                {room.name}
              </Option>
            ))}
          </Select>
        </Form.Item>
      </Form.Item>
      <Form.Item label="Room Name">
        <Form.Item
          name="room_name"
          rules={[
            {
              required: true,
              message: 'Room name is required',
            },
          ]}
        >
          <Input placeholder="Single Large Room" id="room_name" />
        </Form.Item>
      </Form.Item>
      <Form.Item label="Smoking Policy">
        <Form.Item
          name="smoking_policy"
          rules={[
            {
              required: false,
              message: 'Smoking policy is required',
            },
          ]}
        >
          <Select id="smoking_policy">
            {smokingPolicy.map((smoking, s) => (
              <Option value={smoking.id} key={s}>
                {smoking.name}
              </Option>
            ))}
          </Select>
        </Form.Item>
      </Form.Item>
      <Form.Item label="Number of Rooms (of this type)">
        <Form.Item
          name="room_quantity"
          rules={[
            {
              required: true,
              message: 'Room quantity is required',
            },
          ]}
        >
          <Input id="room_quantity" />
        </Form.Item>
      </Form.Item>
      <Form.Item label="Room Size">
        <Form.Item
          name="room_size"
          rules={[
            {
              required: true,
              message: 'Room size is required',
            },
          ]}
        >
          <Input
            addonAfter={unitSelector}
            placeholder="add size value"
            id="room_size"
          />
        </Form.Item>
      </Form.Item>
    </div>
  );
  const basePriceForm = (
    <div className="grid grid-cols-2 gap-4">
      <Form.Item label="Price for 1 person">
        {/* consider the input to include price and currency */}
        <Form.Item
          name="price"
          rules={[
            {
              required: true,
              message: 'Room price is required',
            },
          ]}
        >
          <Input
            addonBefore={currencySelector}
            placeholder="add room price"
            id="price"
          />
        </Form.Item>
      </Form.Item>
    </div>
  );
  const backBtn = (
    <a
      className="bg-white py-2 rounded px-4"
      onClick={() => history.push('../../' + urlId.id + '/room-pricing')}
    >
      Back
    </a>
  );
  const nextBtn = (
    <Button type="primary" htmlType="submit" form="Add_room">
      Continue
    </Button>
  );
  function HotelRoomTypeForm() {
    return (
      <div>
        <Form
          id="Add_room"
          layout="vertical"
          initialValues={{
            room_type: roomType,
            room_name: roomName,
            room_quantity: roomQuantity,
            room_size: roomSize,
            price: roomPrice,
            currency: currency,
            unit: sizeUnit,
          }}
          onFinish={onFinish}
        >
          <div className="flex flex-col gap-4">
            <PageLayout title={roomFormTitle} content={roomForm} />
            <PageLayout
              title={basePriceTitle}
              subTitle={baseSubTitle}
              content={basePriceForm}
            />
            <FooterLayOut backBtn={backBtn} nextBtn={nextBtn} />
          </div>
        </Form>
      </div>
    );
  }
  return isLoading ? (
    <div className="w-full h-96 flex justify-center items-center">
      <Spin></Spin>
    </div>
  ) : (
    HotelRoomTypeForm()
  );
}

export default AddRoomTypeForm;
