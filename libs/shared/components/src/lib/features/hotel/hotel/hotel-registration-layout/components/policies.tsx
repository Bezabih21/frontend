import DownOutlined from '@ant-design/icons/lib/icons/DownOutlined';
import { AlertService } from '@eltnt/core';
import { Button, Form, Radio, Select, Spin, TimePicker } from 'antd';
import BellSVG from 'apps/admin/src/app/icons/bell.svg';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { getHotelPolicies } from '../../../api/hotel.api';
import FooterLayOut from './footer-layout';
import PageLayout from './page-layout';
function Policies() {
  const [urlId] = useState(useParams);
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdateHotelPolicies, setIsUpdateHotelPolicies] = useState(true);
  const [checkInFrom, setCheckInFrom] = useState();
  const [checkInTo, setCheckInTo] = useState();
  const [checkOutFrom, setCheckOutFrom] = useState();
  const [checkOutTo, setCheckOutTo] = useState();
  const [requestId, setRequestId] = useState();
  const [
    accidentalBookingProtection,
    setAccidentalBookingProtection,
  ] = useState<boolean>();
  const [accommodateChildren, setAccommodateChildren] = useState<boolean>();
  const [additionalCharges, setAdditionalCharges] = useState<boolean>();
  const [allowPets, setAllowPets] = useState<boolean>();

  const [
    isAccidentalBookingProtection,
    setIsAccidentalBookingProtection,
  ] = useState<string>();
  const [isAccommodateChildren, setIsAccommodateChildren] = useState<string>();
  const [isAdditionalCharges, setIsAdditionalCharges] = useState<string>();
  const [isAllowPets, setIsAllowPets] = useState<string>();

  const [cancellationDay, setCancellationDay] = useState();
  const [cancellationFee, setCancellationFee] = useState();

  const { Option } = Select;

  const format = 'HH:mm';
  const [value, setValue] = useState(1);
  const options = [
    { label: '12:00 PM', value: '12:00' },
    { label: '2:00 PM', value: '2:00' },
    { label: '3:00 PM', value: '3:00' },
  ];

  const cancellationFeeOptions = [{ id: 1, label: 'of the first night' }];

  function handleChange(value: any, method: any) {
    method(JSON.parse(value));
  }
  function handleValueChange(value: any, method: any) {
    method(value);
  }

  const onRadioChange = (value: any, method: any) => {
    debugger;
    method(value);
    setCheckInFrom(value);
    console.log(value, checkInForm);
  };

  const checkInForm = (
    <Form.Item>
      <div className="flex">
        <div className="w-1/2">
          <span className="font-bold">From</span>
          <div className="flex">
            <Radio.Group
              options={options}
              onChange={(e) => onRadioChange(e.target.value, setCheckInFrom)}
              optionType="button"
              buttonStyle="solid"
            />

            <Form.Item>
              <Form.Item
                name="checkInFrom"
                rules={[
                  {
                    required: false,
                    message: 'check in from is required',
                  },
                ]}
              >
                <TimePicker
                  placeholder="Other"
                  //defaultValue={moment(checkInFrom, format)}
                  format={format}
                  suffixIcon={<DownOutlined />}
                />
              </Form.Item>
            </Form.Item>
          </div>
        </div>
        <div className="w-1/2">
          <span className="font-bold">To</span>
          <div className="flex">
            <Radio.Group
              options={options}
              onChange={(e) => onRadioChange(e.target.value, setCheckInTo)}
              optionType="button"
              buttonStyle="solid"
            />
            <Form.Item>
              <Form.Item
                name="checkInTo"
                rules={[
                  {
                    required: false,
                    message: 'check in to is required',
                  },
                ]}
              >
                <TimePicker
                  placeholder="Other"
                  // defaultValue={moment(checkInTo, format)}
                  format={format}
                  suffixIcon={<DownOutlined />}
                />
              </Form.Item>
            </Form.Item>
          </div>
        </div>
      </div>
    </Form.Item>
  );
  const checkOutForm = (
    <Form.Item>
      <div className="flex">
        <div className="w-1/2">
          <span className="font-bold">From (Optional)</span>
          <div className="flex">
            <Radio.Group
              options={options}
              onChange={(e) => onRadioChange(e.target.value, setCheckOutFrom)}
              optionType="button"
              buttonStyle="solid"
            />
            <Form.Item>
              <Form.Item
                name="checkOutFrom"
                rules={[
                  {
                    required: false,
                    message: 'check out from is required',
                  },
                ]}
              >
                <TimePicker
                  placeholder="Other"
                  //defaultValue={moment(checkOutFrom, format)}
                  format={format}
                  suffixIcon={<DownOutlined />}
                />
              </Form.Item>
            </Form.Item>
          </div>
        </div>
        <div className="w-1/2">
          <span className="font-bold">To</span>
          <div className="flex">
            <Radio.Group
              options={options}
              onChange={(e) => onRadioChange(e.target.value, setCheckOutTo)}
              optionType="button"
              buttonStyle="solid"
            />
            <Form.Item>
              <Form.Item
                name="checkOutTo"
                rules={[
                  {
                    required: false,
                    message: 'check out to is required',
                  },
                ]}
              >
                <TimePicker
                  placeholder="Other"
                  //defaultValue={moment(checkOutTo, format)}
                  format={format}
                  suffixIcon={<DownOutlined />}
                />
              </Form.Item>
            </Form.Item>
          </div>
        </div>
      </div>
    </Form.Item>
  );
  const cancellationForm = (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <Form.Item label="How many days in advance can guests cancel for free?">
          <Form.Item
            name="cancellationDay"
            rules={[
              {
                required: true,
                message: 'Cancellation day is required',
              },
            ]}
          >
            <Select onSelect={(e) => handleValueChange(e, setCancellationDay)}>
              <Option value="1">1 day</Option>
              <Option value="2">2 days</Option>
              <Option value="3">3 days</Option>
              <Option value="4">4 days</Option>
              <Option value="5">5 days</Option>
            </Select>
          </Form.Item>
        </Form.Item>
        <Form.Item label="or guests will pay 100%">
          <Form.Item
            name="cancellationFee"
            rules={[
              {
                required: true,
                message: 'Cancellation Fee is required',
              },
            ]}
          >
            <Select onSelect={(e) => handleValueChange(e, setCancellationFee)}>
              {cancellationFeeOptions.map((cancel, c) => (
                <Option value={cancel.id} key={c}>
                  {cancel.label}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Form.Item>
      </div>
      <div className="bg-gray-100 flex gap-3 p-3">
        <BellSVG color="#16586F" />
        <p>
          The guests must cancel {cancellationDay} days in advance or pay 100%
          of the price for the{' '}
          {cancellationFeeOptions
            .filter((option) => option.id == cancellationFee)
            .map((filteredDay) => (
              <>{filteredDay.label}</>
            ))}
          .
        </p>
      </div>
    </div>
  );
  const accBookingForm = (
    <div className="grid grid-cols-2 gap-4">
      <Form.Item label="Protection Against Accidental Bookings?">
        <Form.Item
          name="accidentalBookingProtection"
          rules={[
            {
              required: true,
              message: 'Protection Against Accidental Bookings is required',
            },
          ]}
        >
          <Select
            onSelect={(e) => handleChange(e, setAccidentalBookingProtection)}
          >
            <Option value="true">Enable</Option>
            <Option value="false">Disable</Option>
          </Select>
        </Form.Item>
      </Form.Item>
    </div>
  );
  const childrenForm = (
    <div className="grid grid-cols-2 gap-4">
      <Form.Item label="Can you accommodate children?">
        <Form.Item
          name="accommodateChildren"
          rules={[
            {
              required: true,
              message: 'accommodate children is required',
            },
          ]}
        >
          <Select onSelect={(e) => handleChange(e, setAccommodateChildren)}>
            <Option value="true">Yes</Option>
            <Option value="false">No</Option>
          </Select>
        </Form.Item>
      </Form.Item>
    </div>
  );
  const petsForm = (
    <div className="grid grid-cols-2 gap-4">
      <Form.Item label="Do you allow pets?">
        <Form.Item
          name="allowPets"
          rules={[
            {
              required: true,
              message: 'Allow pets is required',
            },
          ]}
        >
          <Select onSelect={(e) => handleChange(e, setAllowPets)}>
            <Option value="true">Yes</Option>
            <Option value="false">No</Option>
          </Select>
        </Form.Item>
      </Form.Item>
      <Form.Item label="Are there additional charges for pets?">
        <Form.Item
          name="additionalCharges"
          rules={[
            {
              required: true,
              message: 'Additional charges for pets is required',
            },
          ]}
        >
          <Select onSelect={(e) => handleChange(e, setAdditionalCharges)}>
            <Option value="true">Charges may apply</Option>
            <Option value="false">Charges not apply</Option>
          </Select>
        </Form.Item>
      </Form.Item>
    </div>
  );
  const backBtn = (
    <a
      className="bg-white py-2 rounded px-4"
      onClick={() => history.push('../../' + urlId.id + '/photos')}
    >
      Back
    </a>
  );
  const nextBtn = (
    <Button type="primary" htmlType="submit" form="Policies">
      Continue
    </Button>
  );
  useEffect(() => {
    fetchHotelPolicies();
  }, []);

  function fetchHotelPolicies() {
    //setIsLoading(true);
    getHotelPolicies(urlId.id)
      .then((result: any) => {
        if (result) {
          bindFormData(result);
        }
      })
      .catch((e) => {
        if (e.message !== 'Network Error') {
          setIsUpdateHotelPolicies(false);
        } else {
          new AlertService().error(e.message);
        }
        setIsLoading(false);
      });
  }
  function bindFormData(result: any) {
    setRequestId(result.id);
    // setCheckInFrom(result.checkinFrom);
    // setCheckInTo(result.checkinTo);
    // setCheckOutFrom(result.checkOutFrom);
    // setCheckOutTo(result.checkOutTo);
    setIsAccidentalBookingProtection(result.enableAccidentalBooking.toString());
    setIsAccommodateChildren(result.childrenAccommodation.toString());
    setIsAdditionalCharges(result.haveChargeForPets.toString());
    setIsAllowPets(result.allowPets.toString());
    setCancellationDay(result.cancellationDays.toString());
    // setCancellationFee(result);
    setIsLoading(false);
  }
  const onFinish = (values: any) => {
    //setIsLoading(true);
    // values.id = requestId;
    // values.hotelId = urlId.id;
    // values.checkInFrom = checkInFrom;
    // values.checkInTo = checkInTo;
    // values.checkOutFrom = checkOutFrom;
    // values.checkOutTo = checkOutTo;
    // values.accidentalBookingProtection = accidentalBookingProtection;
    // values.accommodateChildren = accommodateChildren;
    // values.additionalCharges = additionalCharges;
    // values.allowPets = allowPets;
    // values.cancellationDay = Number(values.cancellationDay);
    // values.cancellationFee = Number(values.cancellationFee);
    // if (isUpdateHotelPolicies) {
    //   updateHotelPolicies(values)
    //     .then((result: any) => {
    //       setIsLoading(false);
    //       new AlertService().success('Hotel Policies updated Successfully');
    //       history.push('../' + urlId.id + '/payment');
    //     })
    //     .catch((e) => {
    //       new AlertService().error(e.message);
    //       setIsLoading(false);
    //     });
    // } else {
    //   addHotelPolicies(values)
    //     .then((result: HotelBasicInformation) => {
    //       new AlertService().success('Hotel Policies added Successfully');
    //       history.push('../' + urlId.id + '/payment');
    //     })
    //     .catch((e) => {
    //       new AlertService().error(e.message);
    //       setIsLoading(false);
    //     });
    // }
    new AlertService().success('Hotel Policies updated Successfully');
    history.push('../' + urlId.id + '/payment');
  };

  function PoliciesForm() {
    return (
      <Form
        layout="vertical"
        size="middle"
        id="Policies"
        onFinish={onFinish}
        initialValues={{
          cancellationDay: cancellationDay,
          accidentalBookingProtection: isAccidentalBookingProtection,
          accommodateChildren: isAccommodateChildren,
          allowPets: isAllowPets,
          additionalCharges: isAdditionalCharges,
        }}
      >
        <div className="flex flex-col gap-4">
          <PageLayout
            title="Check in period"
            subTitle=" You’ll be able to make changes to your policies later on - this
                is just to get you started."
            font="italic"
            content={checkInForm}
          ></PageLayout>
          <PageLayout
            title="Check out period"
            content={checkOutForm}
          ></PageLayout>
          <PageLayout
            title="Cancellations"
            content={cancellationForm}
          ></PageLayout>
          <PageLayout
            title="Accidental bookings"
            subTitle="To save you time handling accidental bookings, we automatically waive cancellation fees for guests who cancel within the first 24 hours of a booking being made. You can change this period of time later in your dashboard."
            content={accBookingForm}
          ></PageLayout>
          <PageLayout
            title="Children"
            subTitle="If you accommodate children, you can specify the ages and prices later"
            content={childrenForm}
          ></PageLayout>
          <PageLayout
            title="Pets"
            subTitle="Some guests like to travel with their furry friends. indicate if you allow pets and if any charges apply."
            content={petsForm}
          ></PageLayout>
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
    PoliciesForm()
  );
}

export default Policies;
