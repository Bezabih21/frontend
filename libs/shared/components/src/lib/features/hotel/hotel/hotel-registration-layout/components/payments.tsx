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
import DiscoverSVG from 'libs/shared/components/src/lib/icons/discover.svg';
import ElsabiSVG from 'libs/shared/components/src/lib/icons/elasbi.svg';
import MasterCardSVG from 'libs/shared/components/src/lib/icons/masterCard.svg';
import VisaSVG from 'libs/shared/components/src/lib/icons/visa.svg';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  addHotelPayments,
  getHotelPayments,
  getPaymentOptions,
  updateHotelPayments,
} from '../../../api/hotel.api';
import { HotelBasicInformation } from '../../../models/hotel';
import { ListQuery } from '../../../models/list.query';
import FooterLayOut from './footer-layout';
import PageLayout from './page-layout';

function Payments() {
  const [urlId] = useState(useParams);
  const history = useHistory();
  const { Option } = Select;
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdateHotelPayment, setIsUpdateHotelPayment] = useState<boolean>(
    true
  );
  const [chargeCreditCards, setChargeCreditCards] = useState<boolean>();
  const [isChargeCreditCards, setIsChargeCreditCards] = useState<string>();
  const [selectedPaymentOptions, setSelectedPaymentOptions] = useState([]);
  // const [paymentOptions, setPaymentOptions] = useState([]);
  const paymentOptions = [
    {
      label: 'Euro / MasterCard',
      value: '1',
      icon: <MasterCardSVG />,
    },
    { label: 'Discover', value: '2', icon: <DiscoverSVG /> },
    { label: 'Visa', value: '3', icon: <VisaSVG /> },
    { label: 'El Sabi', value: '4', icon: <ElsabiSVG /> },
  ];
  const [companyName, setCompanyName] = useState();
  const [recipientCountry, setRecipientCountry] = useState();
  const [recipientCity, setRecipientCity] = useState();
  const [recipientStreetAddress, setRecipientStreetAddress] = useState();
  const [requestId, setRequestId] = useState();
  const [optionQuery, setOptionQuery] = useState<ListQuery>(null);
  function onChange(checkedValues) {
    setSelectedPaymentOptions(checkedValues);
  }
  function handleChange(value: any, method: any) {
    method(JSON.parse(value));
  }
  const guestPaymentForm = (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <Form.Item label=" Can you charge credit cards at the property?">
          <Form.Item
            name="chargeCreditCards"
            rules={[
              {
                required: true,
                message: 'Set as property is required',
              },
            ]}
          >
            <Select onSelect={(e) => handleChange(e, setChargeCreditCards)}>
              <Option value="true">Yes</Option>
            </Select>
          </Form.Item>
        </Form.Item>
      </div>
      <Form.Item>
        <Form.Item
          name="paymentOption"
          rules={[
            {
              required: false,
              message: 'Payment option is required',
            },
          ]}
        >
          <div className="flex">
            <Checkbox.Group
              style={{ width: '100%' }}
              onChange={onChange}
              defaultValue={selectedPaymentOptions}
            >
              <Row>
                {paymentOptions.map((opt, o) => (
                  <Col span={12}>
                    <Checkbox value={opt.value} key={o}>
                      <div className="flex gap-4">
                        <span className="border-2 border-gray-200 p-2 rounded">
                          {opt.icon}
                        </span>
                        <span className="mt-5">{opt.label}</span>
                      </div>
                    </Checkbox>
                    <Divider />
                  </Col>
                ))}
              </Row>
            </Checkbox.Group>
          </div>
        </Form.Item>
      </Form.Item>
    </div>
  );
  const commissionPaymentForm = (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <Form.Item label="What name should be placed on the invoice?">
          <Form.Item>
            <Select className="w-full" placeholder="Yes" value={'1'}>
              <Option value="1">Legal company name (please specify)</Option>
            </Select>
          </Form.Item>
        </Form.Item>
        <Form.Item label="Is this recipient’s address same as your property?">
          <Form.Item>
            <Select className="w-full" value={'1'}>
              <Option value="1">No (please specify)</Option>
            </Select>
          </Form.Item>
        </Form.Item>
      </div>
      <div>
        <Form.Item label="Legal Company Name">
          <Form.Item
            name="legalCompany"
            rules={[
              {
                required: true,
                message: 'Legal company name is required',
              },
            ]}
          >
            <Input placeholder="example" className="w-full" />
          </Form.Item>
        </Form.Item>
        <Form.Item label="Recipient Country/Region">
          <Form.Item
            name="recipientCountry"
            rules={[
              {
                required: true,
                message: 'Recipient country is required',
              },
            ]}
          >
            <Select className="w-full" placeholder="Please select">
              <Option value="Ethiopia">Ethiopia</Option>
            </Select>
          </Form.Item>
        </Form.Item>
        <Form.Item label="Recipient City">
          <Form.Item
            name="recipientCity"
            rules={[
              {
                required: true,
                message: 'Recipient city is required',
              },
            ]}
          >
            <Input placeholder="example" className="w-full" />
          </Form.Item>
        </Form.Item>
        <Form.Item label="Recipient Street Address">
          <Form.Item
            name="recipientStreet"
            rules={[
              {
                required: true,
                message: 'Recipient street is required',
              },
            ]}
          >
            <Input placeholder="example" className="w-full" />
          </Form.Item>
        </Form.Item>
      </div>
    </div>
  );
  const backBtn = (
    <a
      className="bg-white py-2 rounded px-4"
      onClick={() => history.push('../../' + urlId.id + '/policies')}
    >
      Back
    </a>
  );
  const nextBtn = (
    <Button type="primary" htmlType="submit" form="Payment">
      Complete Registration
    </Button>
  );

  useEffect(() => {
    paymentOptionsGet();
  }, []);

  function paymentOptionsGet() {
    getPaymentOptions().then((result) => {
      if (result) {
        //setPaymentOptions(result);
        fetchHotelPayments();
      }
    });
  }

  function fetchHotelPayments() {
    setIsLoading(true);
    getHotelPayments(urlId.id)
      .then((result: any) => {
        if (result) {
          bindFormData(result);
        }
      })
      .catch((e) => {
        if (e.message !== 'Network Error') {
          setIsUpdateHotelPayment(false);
        } else {
          new AlertService().error(e.message);
        }
        setIsLoading(false);
      });
  }

  function bindFormData(result: any) {
    setRequestId(result.id);
    setChargeCreditCards(result.chargeCreditCards);
    setIsChargeCreditCards(result.chargeCreditCards.toString());
    const checkedValues = [];
    result.paymentMethods.forEach((method) => {
      checkedValues.push(method.name);
    });
    setSelectedPaymentOptions(checkedValues);
    setCompanyName(result.legalCompanyName);
    setRecipientCountry(result.recipientCountry);
    setRecipientCity(result.recipientCity);
    setRecipientStreetAddress(result.recipientStreetAddress);
    setIsLoading(false);
  }

  const onFinish = (values: any) => {
    values.id = requestId;
    values.hotelId = urlId.id;
    values.chargeCreditCards = chargeCreditCards;
    values.paymentOption = selectedPaymentOptions;

    if (isUpdateHotelPayment) {
      updateHotelPayments(values)
        .then((result: HotelBasicInformation) => {
          new AlertService().success('Hotel Payment Updated Successfully');
        })
        .catch((e) => {
          new AlertService().error(e.message);
          setIsLoading(false);
        });
    } else {
      addHotelPayments(values)
        .then((result: HotelBasicInformation) => {
          new AlertService().success('Hotel Payment added Successfully');
          // history.push('../' + '/hotels');
        })
        .catch((e) => {
          new AlertService().error(e.message);
          setIsLoading(false);
        });
    }
  };
  function PaymentForm() {
    return (
      <Form
        layout="vertical"
        size="middle"
        id="Payment"
        onFinish={onFinish}
        initialValues={{
          chargeCreditCards: isChargeCreditCards,
          legalCompany: companyName,
          recipientCountry: recipientCountry,
          recipientCity: recipientCity,
          recipientStreet: recipientStreetAddress,
        }}
      >
        <div className="flex flex-col gap-4">
          <PageLayout
            title="Guest Payment Options"
            content={guestPaymentForm}
          ></PageLayout>
          <PageLayout
            title="Commission Payments"
            subTitle="At the beginning of each month we’ll send your invoice for all complete bookings in the previous month."
            content={commissionPaymentForm}
          ></PageLayout>
          <FooterLayOut backBtn={backBtn} nextBtn={nextBtn} />
        </div>
      </Form>
    );
  }
  return isLoading ? (
    <div className="w-full h-96 flex justify-center items-center">
      <Spin></Spin>
    </div>
  ) : (
    PaymentForm()
  );
}

export default Payments;
