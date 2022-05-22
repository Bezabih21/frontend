import { AlertService } from '@eltnt/core';
import {
  Button,
  Checkbox,
  Col,
  Divider,
  Form,
  Input,
  Row,
  Select,
  Spin,
} from 'antd';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  addHotelBenefits,
  getHotelBasicInfo,
  getPopularFacilities,
  updateHotelFacilities,
} from '../../../api/hotel.api';
import { HotelBasicInformation } from '../../../models/hotel';
import { ListQuery } from '../../../models/list.query';
import FooterLayOut from './footer-layout';
import PageLayout from './page-layout';
const { Option } = Select;
function FacilitiesAndServices() {
  const [urlId] = useState(useParams);
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);
  const [popularFacilities, setPopularFacilities] = useState([]);
  const [isParkingAvailable, setIsParkingAvailable] = useState<boolean>();
  const [isParkingReserved, setIsParkingReserved] = useState<boolean>();
  const [isBreakfastAvailable, setIsBreakfastAvailable] = useState<boolean>();
  const [provideExtraBed, setProvideExtraBed] = useState<boolean>();

  const [currency, setCurrency] = useState<number>();
  const [parkingAvailability, setParkingAvailability] = useState<string>();
  const [parkingReserve, setParkingReserve] = useState<string>();
  const [parkingType, setParkingType] = useState<number>();
  const [parkingLocation, setParkingLocation] = useState<number>();
  const [parkingPrice, setParkingPrice] = useState<string>();
  const [breakFastIsAvailable, setBreakFastIsAvailable] = useState<string>();
  const [availableBreakfastLists, setAvailableBreakfastLists] = useState<
    any[]
  >();
  const [breakfastPrice, setBreakfastPrice] = useState<string>();
  const [availableExtraBed, setAvailableExtraBed] = useState<string>();
  const [language, setLanguage] = useState([]);
  const [selectedPopularFacilities, setSelectedPopularFacilities] = useState(
    []
  );
  const [checkBoxError, setCheckBoxError] = useState<boolean>(false);
  const [selectedFacilities, setSelectedFacilities] = useState([]);
  const [currencyList, setCurrencyList] = useState([
    { id: 1, name: 'ETB', icon: '' },
    { id: 2, name: 'EUR', icon: '' },
    { id: 3, name: 'USD', icon: '' },
  ]);
  const [parkingTypeList, setParkingTypeList] = useState([
    { id: 1, type: 'Private' },
  ]);
  const [parkingLocationList, setParkingLocationList] = useState([
    { id: 1, location: 'on Site' },
  ]);
  const availableBreakfastOptions = [
    { id: '1', name: 'Buffet' },
    { id: '2', name: 'Ethiopian' },
    { id: '3', name: 'American' },
    { id: '4', name: 'British' },
    { id: '5', name: 'Italian' },
    { id: '6', name: 'Breakfast to go' },
  ];
  const languageSpokenOptions = [
    { id: '1', name: 'English' },
    { id: '2', name: 'Amharic' },
  ];
  function handleChange(value: any, method: any) {
    method(JSON.parse(value));
  }

  function checkedFacilities(value) {
    selectedPopularFacilities.push(popularFacilities[value]);
  }
  function updatePayable(value, index) {
    const updatedOne = {
      ...popularFacilities[index],
      isFree: JSON.parse(value),
    };
    popularFacilities[index] = { ...updatedOne };
  }

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
  const parkingForm = (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <Form.Item label="Is parking available to guests?">
          <Form.Item
            name="parkingAvailable"
            rules={[
              {
                required: true,
                message: 'Parking Available is required',
              },
            ]}
          >
            <Select
              id="parking"
              onSelect={(e) => handleChange(e, setIsParkingAvailable)}
            >
              <Option value="">Please Select</Option>
              <Option value="true">Yes, Paid</Option>
              <Option value="false">No</Option>
            </Select>
          </Form.Item>
        </Form.Item>
        <div className="grid grid-cols-2 gap-4">
          <Form.Item label="Type" className="">
            <Form.Item
              name="parkingType"
              rules={[
                {
                  required: true,
                  message: 'Parking type is required',
                },
              ]}
            >
              <Select id="parking_type">
                {parkingTypeList.map((type, t) => (
                  <Option key={t} value={type.id} selected>
                    {type.type}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Form.Item>
          <Form.Item label="Location" className="">
            <Form.Item
              name="parkingLocation"
              rules={[
                {
                  required: true,
                  message: 'Parking location is required',
                },
              ]}
            >
              <Select id="parking_location">
                {parkingLocationList.map((location, l) => (
                  <Option key={l} value={location.id} selected>
                    {location.location}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Form.Item>
        </div>
        <Form.Item label="Do guest need to reserve a parking space?">
          <Form.Item
            name="parkingReserve"
            rules={[
              {
                required: true,
                message: 'Parking reservation is required',
              },
            ]}
          >
            <Select
              id="parking_reserve"
              onSelect={(e) => handleChange(e, setIsParkingReserved)}
            >
              <Option value="false">No reservation needed</Option>
              <Option value="true">Yes reservation needed</Option>
            </Select>
          </Form.Item>
        </Form.Item>
        <Form.Item label="Price for parking">
          {/* consider the input to include price and currency */}
          <Form.Item
            name="parkingPrice"
            rules={[
              {
                required: true,
                message: 'Parking price is required',
              },
            ]}
          >
            <Input
              addonAfter={currencySelector}
              placeholder="add parking price"
              type="number"
              id="price"
            />
          </Form.Item>
        </Form.Item>
      </div>
    </div>
  );
  const breakFastForm = (
    <div className="grid grid-cols-2 gap-4">
      <Form.Item label="Is breakfast available to guests?">
        <Form.Item
          name="breakfastAvailable"
          rules={[
            {
              required: true,
              message: 'Breakfast is required',
            },
          ]}
        >
          <Select
            id="breakfast"
            onSelect={(e) => handleChange(e, setIsBreakfastAvailable)}
          >
            <Option value="true" selected>
              yes
            </Option>
            <Option value="false" selected>
              No
            </Option>
          </Select>
        </Form.Item>
      </Form.Item>
      <Form.Item label="What kind of breakfast is available?">
        <Form.Item
          name="breakfastType"
          rules={[
            {
              required: true,
              message: 'Breakfast is required',
            },
          ]}
        >
          <Select
            id="breakfast_type"
            mode="tags"
            // onSelect={(e) => addToSelectedBreakfast(e)}
          >
            {availableBreakfastOptions.map((option, o) => (
              <Option key={o} value={option.id}>
                {option.name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <div className="py-4">
          {/* create a class that accept primary color for the tags */}
        </div>
      </Form.Item>
      <Form.Item label="Price (per person, including all fees & taxes)">
        <Form.Item
          name="breakfastPrice"
          rules={[
            {
              required: true,
              message: 'Breakfast price is required',
            },
          ]}
        >
          <Input
            addonAfter={currencySelector}
            placeholder="add breakfast price"
            id="breakfast_price"
            type="number"
          />
        </Form.Item>
      </Form.Item>
    </div>
  );
  const languageForm = (
    <div>
      <Form.Item label="Language spoken">
        <Form.Item
          name="language"
          rules={[
            {
              required: true,
              message: 'Language is required',
            },
          ]}
        >
          <Select
            mode="tags"
            // onSelect={(e) => addToSelectedLanguage(e)}
            id="language"
          >
            {languageSpokenOptions.map((language, l) => (
              <Option key={l} value={language.id}>
                {language.name}
              </Option>
            ))}
          </Select>
        </Form.Item>
      </Form.Item>
    </div>
  );
  const facilitiesForm = (
    <div>
      <Checkbox.Group
        style={{ width: '100%' }}
        defaultValue={selectedFacilities}
      >
        <Row gutter={16}>
          {popularFacilities.map((facility, f) => (
            <Col span={12}>
              <div className="flex justify-between">
                <Checkbox
                  value={facility.guid}
                  key={f}
                  onChange={(e) => checkedFacilities(f)}
                >
                  {facility.benefitName}
                </Checkbox>
                <>
                  {facility.isPayable ? (
                    <Form
                      initialValues={{ payable: facility.isFree.toString() }}
                      style={{ width: '20%' }}
                    >
                      <Form.Item name="payable">
                        <Select onChange={(e) => updatePayable(e, f)}>
                          <Option value="true">Free</Option>
                          <Option value="false">Paid</Option>
                        </Select>
                      </Form.Item>
                    </Form>
                  ) : (
                    <></>
                  )}
                </>
              </div>
              <Divider />
            </Col>
          ))}
        </Row>
      </Checkbox.Group>
      {checkBoxError ? (
        <span style={{ color: 'red' }}>Popular facilities required</span>
      ) : (
        <></>
      )}
    </div>
  );
  const bedOptionForm = (
    <div>
      <Form.Item label="Can you provide extra beds?">
        <Form.Item
          name="extraBed"
          rules={[
            {
              required: true,
              message: 'provide_extra_bed is required',
            },
          ]}
        >
          <Select
            id="provide_extra_bed"
            onSelect={(e) => handleChange(e, setProvideExtraBed)}
          >
            <Option value="true">Yes</Option>
            <Option value="false">No</Option>
          </Select>
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
    <Button type="primary" htmlType="submit" form="Facilities_services">
      Continue
    </Button>
  );
  useEffect(() => {
    getHotelBasic();
    fetchPopularFacilities();
  }, []);
  function fetchPopularFacilities() {
    const facilitiesList: ListQuery = {};
    getPopularFacilities(facilitiesList)
      .then((result: any) => {
        if (result) {
          setPopularFacilities(result);
        }
      })
      .catch((e) => {
        new AlertService().error(e.message);
      });
  }
  function getHotelBasic() {
    setIsLoading(true);
    getHotelBasicInfo(urlId.id)
      .then((result: any) => {
        if (result) {
          bindFormData(result);
        }
      })
      .catch((e) => {
        new AlertService().error(e.message);
        setIsLoading(false);
      });
  }
  function bindFormData(result: HotelBasicInformation) {
    if (result.breakfast !== null) {
      setBreakFastIsAvailable(result.breakfast.availableToGuest.toString());
      setAvailableBreakfastLists(result.breakfast.avialableBreakFasts);
      setBreakfastPrice(result.breakfast.price.toString());
      setCurrency(result.breakfast.currency);
    }
    if (result.parking !== null) {
      setParkingAvailability(result.parking.availableToGuest.toString());
      setParkingReserve(result.parking.reservationNeeded.toString());
      setParkingType(result.parking.parkingType);
      setParkingLocation(result.parking.parkingLocation);
      setParkingPrice(result.parking.price.toString());
    }
    if (result.languages.length !== 0) {
      setLanguage(result.languages);
    }
    if (result.facilities.length !== 0) {
      result.facilities.forEach((facilities) => {
        facilities.services.forEach((services) => {
          selectedFacilities.push(services.guid);
          selectedPopularFacilities.push(services);
        });
      });
    }
    //setAvailableExtraBed(result.extraBed.toString()); //value is not being passed on backend
    setIsLoading(false);
  }

  const onFinish = (values: any) => {
    if (selectedPopularFacilities.length == 0) {
      setCheckBoxError(true);
    } else {
      setIsLoading(true);
      values.id = urlId.id;
      values.breakfastAvailable = isBreakfastAvailable;
      values.breakfastPrice = Number(values.breakfastPrice);
      values.availableBreakfasts = values.breakfastType;
      values.parkingLocation = Number(values.parkingLocation);
      values.parkingReserve = isParkingReserved;
      values.parkingPrice = Number(values.parkingPrice);
      values.parkingType = Number(values.parkingType);
      values.parkingAvailable = isParkingAvailable;
      values.extraBed = provideExtraBed;
      values.popularFacilities = popularFacilities;
      updateHotelFacilities(values)
        .then((result: HotelBasicInformation) => {
          updateSelectedFacilities();
        })
        .catch((e) => {
          new AlertService().error(e.message);
          setIsLoading(false);
        });
    }
  };
  function updateSelectedFacilities() {
    const values: any = {};
    values.id = urlId.id;
    var benefits = [];
    selectedPopularFacilities.forEach((facilities) => {
      benefits.push({
        hotelBenefitId: facilities.guid,
        isFree: facilities.isFree !== null ? facilities.isFree : true,
      });
    });
    values.benefits = benefits;
    addHotelBenefits(values)
      .then((result: HotelBasicInformation) => {
        new AlertService().success(
          'Hotel facilities and services updated Successfully'
        );
        history.push('../' + urlId.id + '/amenities');
      })
      .catch((e) => {
        new AlertService().error(e.message);
        setIsLoading(false);
      });
  }
  function HotelFacilitiesAndServices() {
    return (
      <Form
        layout="vertical"
        size="middle"
        id="Facilities_services"
        onFinish={onFinish}
        initialValues={{
          currency: currency,
          parkingAvailable: parkingAvailability,
          parkingReserve: parkingReserve,
          parkingType: parkingType,
          parkingLocation: parkingLocation,
          parkingPrice: parkingPrice,
          breakfastAvailable: breakFastIsAvailable,
          breakfastType: availableBreakfastLists,
          breakfastPrice: breakfastPrice,
          extraBed: availableExtraBed,
          language: language,
        }}
      >
        <div className="flex flex-col gap-4">
          <PageLayout
            title="Parking details"
            subTitle="You’ll be able to make changes to your facilities & services later on - this is just to get you started."
            font="italic"
            content={parkingForm}
          />
          <PageLayout title="Breakfast" content={breakFastForm} />
          <PageLayout title="Language" content={languageForm} />
          <PageLayout
            title="Popular facilities"
            subTitle="Guests look for these facilities the most when they are searching for properties."
            content={facilitiesForm}
          />
          <PageLayout
            title="Extra bed options"
            subTitle="These are the options for beds that can be added upon request."
            content={bedOptionForm}
          />
        </div>
        <FooterLayOut backBtn={backBtn} nextBtn={nextBtn} />
      </Form>
    );
  }

  return isLoading ? (
    <div className="w-full h-96 flex justify-center items-center">
      <Spin></Spin>
    </div>
  ) : (
    HotelFacilitiesAndServices()
  );
}

export default FacilitiesAndServices;
