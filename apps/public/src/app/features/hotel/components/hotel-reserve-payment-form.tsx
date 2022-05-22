import { Button, Checkbox, Form, Input, Radio } from 'antd';
import React from 'react';

function HotelReservePaymentForm() {
  return (
    <div className="w-2/3">
      <Form layout="vertical">
        <div className="flex flex-col md:gap-6">
          <div className="bg-white rounded p-4">
            <div className="pb-10">
              <span
                className="font-bold"
                style={{ fontWeight: 600, fontSize: 18 }}
              >
                How do you want to pay?
              </span>
            </div>
            <div className="w-1/2">
              <Form.Item label="Cardholder’s name">
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: 'Cardholder’s name is required',
                    },
                  ]}
                  name="card_owner"
                >
                  <Input placeholder="Enter name" id="card_owner" />
                </Form.Item>
              </Form.Item>
            </div>
            <Form.Item label="Card type">
              <Form.Item name="card_type">
                <Radio />
              </Form.Item>
            </Form.Item>
            <div className="grid grid-cols-3 gap-4">
              <Form.Item label="Card number">
                <Form.Item name="card_number">
                  <Input placeholder="Enter card number" />
                </Form.Item>
              </Form.Item>
              <Form.Item label="DD/MM">
                <Form.Item name="date_month">
                  <Input />
                </Form.Item>
              </Form.Item>
              <Form.Item label="Year">
                <Form.Item name="year">
                  <Input />
                </Form.Item>
              </Form.Item>
            </div>

            <div className="flex flex-col gap-2">
              <span style={{ fontWeight: 600, fontSize: 14 }}>CVC-code</span>
              <small>
                You do not need to enter a CVC code for this booking.
              </small>
            </div>
          </div>
          <div className="bg-white rounded p-4">
            <Checkbox>
              <span style={{ fontWeight: 600, fontSize: 14 }}>
                Get access to members-only deals, just like the millions of
                other email subscribers
              </span>
            </Checkbox>
          </div>
          <div className="bg-white rounded p-4">
            <span style={{ fontWeight: 600, fontSize: 14 }}>
              Your booking is with Ethiopian Skylight Hotel directly and by
              completing this booking you agree to the booking conditions,
              general terms, and privacy policy.
            </span>
          </div>
          <div className="bg-gray-100">
            <div className="flex justify-end gap-2">
              <Button className="border-primary-500 border">
                Check your booking
              </Button>
              <Button type="primary" htmlType="submit">
                Complete Booking
              </Button>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default HotelReservePaymentForm;
