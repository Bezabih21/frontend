import { AlertService } from '@eltnt/core';
import { Button, Form, Input, Select, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  getHotelBasicInfo,
  saveHotelBasicInfoApi,
  updateHotelBasicInfoApi,
} from '../../../api/hotel.api';
import { HotelBasicInformation } from '../../../models/hotel';
import FooterLayOut from './footer-layout';
import PageLayout from './page-layout';
const { Option } = Select;
function BasicInfoForm(props: { hotelId?: any }) {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [hotelName, setHotelName] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [addressLineOne, setAddressLineOne] = useState('');
  const [addressLineTwo, setAddressLineTwo] = useState('');
  const [starRating, setStarRating] = useState(undefined);
  const [contactFirstName, setContactFirstName] = useState('');
  const [contactLastName, SetContactLastName] = useState('');
  const [contactEmail, SetContactEmail] = useState('');
  const [contactPhone, SetContactPhone] = useState('');
  const [createResponse, setCreateResponse] = useState<HotelBasicInformation>(
    null
  );
  const [basicInfoFormTitle, setTitle] = useState('Property Details');
  const [ContactPersonFormTitle, setContactPersonFormTitle] = useState(
    'Contact Information'
  );
  const [starRatings, setStarRatings] = useState([
    { id: 0, name: 'none' },
    { id: 1, name: '1 Star' },
    { id: 2, name: '2 Star' },
    { id: 3, name: '3 Star' },
    { id: 4, name: '4 Star' },
    { id: 5, name: '5 Star' },
  ]);
  const [urlId] = useState(useParams);
  const onFinish = (values: HotelBasicInformation) => {
    setIsLoading(true);
    if (props.hotelId !== undefined && props.hotelId !== null) {
      values.id = props.hotelId;
      updateHotelBasicInfoApi(values)
        .then((result: HotelBasicInformation) => {
          setCreateResponse(result);
          setIsLoading(false);
          new AlertService().success('Hotel Updated Successfully');
          history.push('../' + urlId.id + '/room-pricing');
        })
        .catch((e) => {
          new AlertService().error(e.message);
          setIsLoading(false);
        });
    } else {
      saveHotelBasicInfoApi(values)
        .then((result: HotelBasicInformation) => {
          setCreateResponse(result);
          setIsLoading(false);
          new AlertService().success('Hotel Added Successfully');
          history.push(result + '/room-pricing');
        })
        .catch((e) => {
          new AlertService().error(e.message);
          setIsLoading(false);
        });
    }
  };
  const basicInfoForm = (
    <div className="grid grid-cols-2 gap-4">
      <Form.Item label="Hotel Name">
        <Form.Item
          name="hotelName"
          rules={[
            {
              required: true,
              message: 'Hotel name is required',
            },
          ]}
        >
          <Input placeholder="Hotel Name" id="hotel_name" />
        </Form.Item>
      </Form.Item>
      <Form.Item label="Street Address">
        <Form.Item
          name="addressLineOne"
          rules={[
            {
              required: true,
              message: 'Street address is required',
            },
          ]}
        >
          <Input id="street_address" placeholder="Street Address" />
        </Form.Item>
      </Form.Item>
      <Form.Item label="Country/Region">
        <Form.Item
          name="country"
          rules={[
            {
              required: true,
              message: 'County or Region is required',
            },
          ]}
        >
          <Select id="country">
            <Option value="">Please Select</Option>
            <Option value="ethiopia">Ethiopia</Option>
          </Select>
        </Form.Item>
      </Form.Item>
      <Form.Item label="Address Line 2">
        <Form.Item
          name="addressLineTwo"
          rules={[
            {
              required: false,
              message: 'Address line two is required',
            },
          ]}
        >
          <Input id="address_line_two" placeholder="Address Line 2" />
        </Form.Item>
      </Form.Item>
      <Form.Item label="City">
        <Form.Item
          name="city"
          rules={[
            {
              required: true,
              message: 'City is required',
            },
          ]}
        >
          <Input id="city" placeholder="City" />
        </Form.Item>
      </Form.Item>
      <Form.Item label="Star Rating">
        <Form.Item
          name="starRating"
          rules={[
            {
              required: false,
              message: 'Star rating is required',
            },
          ]}
        >
          <Select id="star_rating">
            {/* <Option value="">Please Select</Option> */}
            {starRatings.map((star, s) => (
              <Option value={star.id} key={s}>
                {star.name}
              </Option>
            ))}
          </Select>
        </Form.Item>
      </Form.Item>
    </div>
  );
  const contactPersonForm = (
    <div className="grid grid-cols-2 gap-4">
      <Form.Item label="Contact First Name">
        <Form.Item
          name="contactFirstName"
          rules={[
            {
              required: true,
              message: 'Contact first Name is required',
            },
          ]}
        >
          <Input id="contact_first_name" placeholder="First Name" />
        </Form.Item>
      </Form.Item>
      <Form.Item label="Contact Last Name">
        <Form.Item
          name="contactLastName"
          rules={[
            {
              required: true,
              message: 'Contact last name is required',
            },
          ]}
        >
          <Input id="contact_last_name" placeholder="Last Name" />
        </Form.Item>
      </Form.Item>
      <Form.Item label="Contact Email Address">
        <Form.Item
          name="contactEmail"
          rules={[
            {
              required: true,
              message: 'Contact email is required',
            },
            {
              type: 'email',
              message: 'Contact email is not a valid email',
            },
          ]}
        >
          <Input id="contact_email" placeholder="Email Address" />
        </Form.Item>
      </Form.Item>
      <Form.Item label="Contact Phone Number">
        <Form.Item
          name="contactPhone"
          rules={[
            {
              required: true,
              message: 'Contact phone number is required',
            },
          ]}
        >
          <Input id="contact_phone" placeholder="Phone Number" />
        </Form.Item>
      </Form.Item>
    </div>
  );
  const nextBtn = (
    <Button type="primary" htmlType="submit" form="Basic_info">
      Continue
    </Button>
  );

  useEffect(() => {
    console.log(props);
    getHotelBasic();
  }, []);
  function getHotelBasic() {
    if (props.hotelId !== undefined && props.hotelId !== null) {
      setIsLoading(true);
      getHotelBasicInfo(props.hotelId)
        .then((result: HotelBasicInformation) => {
          if (result) {
            bindFormData(result);
          }
        })
        .catch((e) => {
          new AlertService().error(e.message);
          setIsLoading(false);
        });
    }
  }
  function bindFormData(result: HotelBasicInformation) {
    setHotelName(result.name);
    setCountry(result.address.country);
    setCity(result.address.city);
    setAddressLineOne(result.address.addressLineOne);
    setAddressLineTwo(result.address.addressLineTwo);
    setStarRating(result.starRate);
    setContactFirstName(result.contactPerson.firstName);
    SetContactLastName(result.contactPerson.lastName);
    SetContactEmail(result.contactPerson.email);
    SetContactPhone(result.contactPerson.phoneNumber);
    setIsLoading(false);
  }
  function HotelBasicInfoForm() {
    return (
      <Form
        layout="vertical"
        id="Basic_info"
        initialValues={{
          hotelName: hotelName,
          country: country,
          city: city,
          addressLineOne: addressLineOne,
          addressLineTwo: addressLineTwo,
          starRating: starRating,
          contactFirstName: contactFirstName,
          contactLastName: contactLastName,
          contactPhone: contactPhone,
          contactEmail: contactEmail,
        }}
        onFinish={onFinish}
      >
        <div className="flex flex-col gap-4">
          <PageLayout title={basicInfoFormTitle} content={basicInfoForm} />
          <PageLayout
            title={ContactPersonFormTitle}
            content={contactPersonForm}
          />
        </div>
        <FooterLayOut nextBtn={nextBtn} />
      </Form>
    );
  }
  return isLoading ? (
    <div className="w-full h-96 flex justify-center items-center">
      <Spin></Spin>
    </div>
  ) : (
    HotelBasicInfoForm()
  );
}

export default BasicInfoForm;
