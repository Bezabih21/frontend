import DownOutlined from '@ant-design/icons/lib/icons/DownOutlined';
import UpOutlined from '@ant-design/icons/lib/icons/UpOutlined';
import { AlertService } from '@eltnt/core';
import {
  Button,
  Checkbox,
  Col,
  Collapse,
  Divider,
  Form,
  Row,
  Select,
  Spin,
} from 'antd';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import {
  addHotelBenefits,
  getAminities,
  getHotelBasicInfo,
  getPopularAminities,
} from '../../../api/hotel.api';
import { HotelBasicInformation } from '../../../models/hotel';
import { ListQuery } from '../../../models/list.query';
import FooterLayOut from './footer-layout';
import PageLayout from './page-layout';
const { Panel } = Collapse;
const { Option } = Select;
function Amenities() {
  const [urlId] = useState(useParams);
  const history = useHistory();
  const [popularAminities, setPopularAminities] = useState([]);
  const [aminities, setAminities] = useState([]);
  const [aminitiesServices, setAminitiesServices] = useState([]);
  const [options, setOptions] = useState([
    { label: 'Air conditioning', value: 1 },
    { label: 'Bathtub', value: 2 },
    { label: 'Spa tub', value: 3 },
    { label: 'Flat-screen TV', value: 4 },
    { label: 'Electric Kettle', value: 5 },
    { label: 'Balcony', value: 6 },
    { label: 'View', value: 7 },
    { label: 'Terrace', value: 8 },
  ]);
  const [collapses, setCollapses] = useState([
    { label: 'Room Amenities', value: 1 },
    { label: 'Bathroom', value: 2 },
    { label: 'Media & Technology', value: 3 },
    { label: 'Food & Drink ', value: 4 },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [showAmenities, setShowAmenities] = useState<boolean>(true);
  const [checkBoxError, setCheckBoxError] = useState<boolean>(false);
  const [selectedAminities, setSelectedAminities] = useState([]);
  const [responseData, setResponseData] = useState([]);
  const amenitiesToggle = () => {
    setShowAmenities(!showAmenities);
  };

  const [selectedPopularFacilities, setSelectedPopularFacilities] = useState(
    []
  );

  const selectCount = (total) => (
    <span className="font-bold">4/{total} selected</span>
  );
  function checkedAminities(value) {
    selectedAminities.push(aminitiesServices[value]);
  }
  function updatePayable(value, index) {
    const updatedOne = {
      ...selectedAminities[index],
      isFree: JSON.parse(value),
    };
    selectedAminities[index] = { ...updatedOne };
  }
  const amenitiesForm = (
    <div className="w-full">
      <span className="font-bold">Most requested by guests</span>
      <div className="container py-5">
        <div>
          <Checkbox.Group
            style={{ width: '100%' }}
            defaultValue={selectedPopularFacilities}
          >
            <Row gutter={16}>
              {popularAminities.map((popular, p) => (
                <Col span={12}>
                  <div className="flex justify-between">
                    <Checkbox
                      value={popular.guid}
                      key={p}
                      onChange={(e) => checkedAminities(p)}
                    >
                      {popular.benefitName}
                    </Checkbox>
                    <>
                      {popular.isPayable ? (
                        <Form
                          initialValues={{
                            payable: popular.isFree.toString(),
                          }}
                          style={{ width: '20%' }}
                        >
                          <Form.Item name="payable">
                            <Select onChange={(e) => updatePayable(e, p)}>
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
            <span style={{ color: 'red' }}>Aminities are required</span>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div
        className="w-1/5 text-center border border-gray-400 px-2 py-1"
        onClick={amenitiesToggle}
      >
        <div>
          {showAmenities ? (
            <div className="flex gap-5">
              <span className="p-0.5">Hide all amenities</span>
              <span>
                <UpOutlined />
              </span>
            </div>
          ) : (
            <div className="flex gap-5">
              <span className="p-0.5">Show all amenities</span>
              <span>
                <DownOutlined />
              </span>
            </div>
          )}
        </div>
      </div>
      <div className={`${showAmenities ? 'block' : 'hidden'} py-6`}>
        <Collapse defaultActiveKey={[0]}>
          {aminities.map((col, c) => (
            <Panel
              header={col.group}
              key={col.group}
              extra={selectCount(col.services.length)}
            >
              <Form.Item>
                <Form.Item
                  name="amenities"
                  rules={[
                    {
                      required: false,
                      message: 'Popular amenities is required',
                    },
                  ]}
                >
                  <div>
                    <Checkbox.Group
                      style={{ width: '100%' }}
                      defaultValue={selectedPopularFacilities}
                    >
                      <Row gutter={16}>
                        {col.services.map((service, s) => (
                          <Col span={12}>
                            <div className="flex justify-between">
                              <Checkbox
                                value={service.guid}
                                key={s}
                                onChange={(e) => checkedAminities(s)}
                              >
                                {service.benefitName}
                              </Checkbox>
                              <>
                                {service.isPayable ? (
                                  <Form
                                    initialValues={{
                                      payable: service.isFree.toString(),
                                    }}
                                    style={{ width: '20%' }}
                                  >
                                    <Form.Item name="payable">
                                      <Select
                                        onChange={(e) => updatePayable(e, s)}
                                      >
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
                      <span style={{ color: 'red' }}>
                        Aminities are required
                      </span>
                    ) : (
                      <></>
                    )}
                  </div>
                </Form.Item>
              </Form.Item>
            </Panel>
          ))}
        </Collapse>
      </div>
    </div>
  );
  const backBtn = (
    <a
      className="bg-white py-2 rounded px-4"
      onClick={() => history.push('../../' + urlId.id + '/facilities-services')}
    >
      Back
    </a>
  );
  const nextBtn = (
    <Button type="primary" htmlType="submit" form="Amenities">
      Continue
    </Button>
  );

  useEffect(() => {
    getAmenities();
    getPopularAmenities();
    fetchHotelAminities();
  }, []);
  function fetchHotelAminities() {
    setIsLoading(true);
    getHotelBasicInfo(urlId.id)
      .then((result: any) => {
        if (result) {
          bindForm(result);
          setIsLoading(false);
        }
      })
      .catch((e) => {
        new AlertService().error(e.message);
        setIsLoading(false);
      });
  }
  function getAmenities() {
    setIsLoading(true);
    const aminitiesList: ListQuery = {};
    getAminities(aminitiesList)
      .then((result: any) => {
        if (result) {
          setAminities(result);
          result.forEach((group) => {
            group.services.forEach((service) => {
              aminitiesServices.push(service);
            });
          });
          setIsLoading(false);
        }
      })
      .catch((e) => {
        new AlertService().error(e.message);
        setIsLoading(false);
      });
  }

  function getPopularAmenities() {
    setIsLoading(true);
    const popularAminitiesList: ListQuery = {};
    getPopularAminities(popularAminitiesList)
      .then((result: any) => {
        if (result) {
          setPopularAminities(result);
          setIsLoading(false);
        }
      })
      .catch((e) => {
        new AlertService().error(e.message);
        setIsLoading(false);
      });
  }

  function bindForm(result: any) {
    result.amenities.forEach((group) => {
      group.services.forEach((service) => {
        if (service.length !== 0) {
          selectedPopularFacilities.push(service.guid);
        }
      });
    });
  }
  const onFinish = (values: any) => {
    setIsLoading(true);
    values.id = urlId.id;
    var benefits = [];

    selectedAminities.forEach((aminity) => {
      benefits.push({
        hotelBenefitId: aminity.guid,
        isFree: aminity.isFree !== null ? aminity.isFree : true,
      });
    });
    values.benefits = benefits;
    addHotelBenefits(values)
      .then((result: HotelBasicInformation) => {
        new AlertService().success('Hotel Aminities updated Successfully');
        history.push('../' + urlId.id + '/photos');
      })
      .catch((e) => {
        new AlertService().error(e.message);
        setIsLoading(false);
      });
  };

  function AmenitiesForm() {
    return (
      <Form layout="vertical" size="middle" id="Amenities" onFinish={onFinish}>
        <div className="flex flex-col gap-4">
          <PageLayout
            title="Amenities"
            subTitle=" You’ll be able to make changes to your amenities later on - this
                is just to get you started."
            font="italic"
            content={amenitiesForm}
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
    AmenitiesForm()
  );
}

export default Amenities;
