import { AlertService } from '@eltnt/core';
import { Button, Checkbox, Form, Input, Radio, Select, Spin } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { TaxiIcon } from '../../../components/icons';
import { reserveRoomApi } from '../api/hotel.api';

const { Option } = Select;

export const HotelReserveForm = () => {
  const [urlId] = useState(useParams);
  const history = useHistory();
  const [countryIndex, setCountryIndex] = useState();
  const [errorMsg, setErrorMsg] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const countryList = [
    { name: 'Ethiopia', Code: 'ETH', init: '+251' },
    { name: 'Kenya', Code: 'KEN', init: '+252' },
    { name: 'Sudan', Code: 'SUD', init: '+253' },
  ];
  const smockingStatusList = [
    { id: 1, name: 'Non-Smoking' },
    { id: 2, name: 'Smoking' },
  ];
  function emailConfirm(value) {
    if (email === value.target.value) {
      setErrorMsg(false);
    } else {
      setErrorMsg(true);
    }
  }
  const selectBefore = (
    <Select defaultValue={countryList[0].init} style={{ width: '80px' }}>
      {countryList.map((init, i) => (
        <Option value={init.init} key={i}>
          {init.init}
        </Option>
      ))}
    </Select>
  );

  const onFinish = (values) => {
    values.roomId = urlId.id;
    values.startDate = '';
    values.endDate = '';
    values.freeCancellation = '';
    values.unitPrice = 0;
    reserveRoomApi(values)
      .then((result: any) => {
        setIsLoading(false);
        new AlertService().success('Room reserved Successfully');
        //think abt this redirection
        //history.push('../../hotels');
      })
      .catch((e) => {
        new AlertService().error(e.message);
        setIsLoading(false);
      });
  };

  function RoomReserveForm() {
    return (
      <Form
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          forSelf: false,
          bookTaxi: true,
          rentCar: false,
          smokingStatus: 1,
        }}
      >
        {/* <div className="flex flex-col md:gap-6"> */}
        <div className="bg-white rounded p-4">
          <p className="font-bold text-gray-700 pb-2">Enter your details</p>
          <div className="grid grid-cols-2 gap-4">
            <Form.Item label="First Name">
              <Form.Item
                name="firstName"
                rules={[{ required: true, message: 'First name is required' }]}
              >
                <Input placeholder="First Name" id="first_name" />
              </Form.Item>
            </Form.Item>
            <Form.Item label="Last Name">
              <Form.Item
                name="lastName"
                rules={[{ required: true, message: 'Last name is required' }]}
              >
                <Input placeholder="Last Name" id="last_name" />
              </Form.Item>
            </Form.Item>
            <Form.Item label="Email Address">
              <Form.Item
                name="email"
                rules={[{ required: true, message: 'Email is required' }]}
              >
                <Input
                  placeholder="Email Address"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Item>
              <small
                className="text-red-500"
                style={errorMsg ? {} : { display: 'none' }}
              >
                Email didn't match
              </small>
            </Form.Item>
            <Form.Item label="Confirm Email Address">
              <Form.Item
                rules={[{ required: true, message: 'Last name is required' }]}
              >
                <Input
                  placeholder="Confirm Email Address"
                  id="confirm_email"
                  onChange={emailConfirm}
                />
              </Form.Item>
            </Form.Item>
          </div>
          <div className="mr-64 p-2 pb-12">
            <small>
              we will send your booking confirmation (including the hotel's
              contact information) to this email. Please ensure your email is
              entered correctly.
            </small>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Form.Item label="Country">
              <Form.Item
                name="country"
                rules={[{ required: true, message: 'Country is required' }]}
              >
                <Select style={{ width: '220px' }} showSearch id="country">
                  {countryList.map((country, c) => (
                    <Option value={c} key={c}>
                      {country.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Form.Item>
            <Form.Item label="Phone Number">
              <Form.Item
                name="phoneNumber"
                rules={[
                  { required: true, message: 'Phone number is required' },
                ]}
              >
                <Input
                  placeholder="Phone number"
                  addonBefore={selectBefore}
                  id="phone_number"
                />
              </Form.Item>
            </Form.Item>
          </div>
          <Form.Item name="forSelf" valuePropName="checked">
            <Checkbox className="font-semibold">
              Please tick if you’re making this booking for someone else.
            </Checkbox>
          </Form.Item>
        </div>
        {/* </div> */}
        <div className="bg-white rounded p-4">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <div className="taxi-rent-form">
                <div>
                  <Form.Item name="bookTaxi" valuePropName="checked">
                    <Checkbox className="font-bold">
                      Want to book a private taxi in advance?
                    </Checkbox>
                  </Form.Item>
                </div>
                <div className="py-2.5">
                  <small>
                    Avoid surprises - get from the airport to your accommodation
                    without a hitch. We'll add taxi options to your booking
                    confirmation.
                  </small>
                </div>

                <div>
                  <Form.Item name="rentCar" valuePropName="checked">
                    <Checkbox className="font-bold">
                      I'm interested in renting a car
                    </Checkbox>
                  </Form.Item>
                </div>
                <div>
                  <small>
                    Avoid surprises - get from the airport to your accommodation
                    without a hitch. We'll add taxi options to your booking
                    confirmation.
                  </small>
                </div>
              </div>
            </div>
            <span style={{ margin: 'auto', display: 'block' }}>
              <TaxiIcon className="text-gray-300 h-24"></TaxiIcon>
            </span>
          </div>
        </div>

        <div className="bg-white rounded p-4">
          <p className="font-bold text-gray-700 pb-2">Special Requests</p>
          <div>
            <small>
              Your requests will be passed on to the hotel but cannot be
              guaranteed.
            </small>
          </div>

          <div className="py-6">
            <Form.Item>
              <Form.Item name="smokingStatus">
                <Radio.Group className="">
                  {smockingStatusList.map((status, s) => (
                    <Radio value={status.id} key={s} id="smoking_status">
                      {status.name} room preferred
                    </Radio>
                  ))}
                </Radio.Group>
              </Form.Item>
            </Form.Item>
          </div>
          <div>
            <Form.Item label="Other Requested">
              <Form.Item
                name="otherRequests"
                rules={[
                  { required: false, message: 'otherRequests is required' },
                ]}
              >
                <TextArea rows={4} id="other_request" />
              </Form.Item>
            </Form.Item>
          </div>
          <div className="bg-white rounded p-4">
            <span className="font-semibold">
              By proceeding, I acknowledge that I have read and agree to
              Eltnt.com's Terms of Use and Privacy Statement.
            </span>
          </div>
          <div className="bg-white rounded p-4">
            <div className="flex justify-between">
              <div className="flex gap-12 justify-around">
                <span>Pay online</span>
                <div className="flex gap-6 p-1">
                  <small>for 7 nights</small>
                  <span>-</span>
                  <span>$1,190.00 </span>
                  <span>/ </span>
                  <small>47,600.00 Birr</small>
                </div>
              </div>

              <Form.Item>
                <Button
                  className="px-10 rounded"
                  type="primary"
                  htmlType="submit"
                >
                  Book
                </Button>
              </Form.Item>
            </div>
          </div>
        </div>
      </Form>
    );
  }

  return isLoading ? (
    <div className="w-full h-96 flex justify-center items-center">
      <Spin></Spin>
    </div>
  ) : (
    RoomReserveForm()
  );
};

export default HotelReserveForm;
