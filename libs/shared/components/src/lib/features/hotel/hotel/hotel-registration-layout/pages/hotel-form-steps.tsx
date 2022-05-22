import { Steps } from 'antd';
import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import Amenities from '../components/amenities';
import EmptyRoomInput from '../components/empty-room-input';
import FacilitiesAndServices from '../components/facilities-services';
import Payments from '../components/payments';
import Photos from '../components/photos';
import Policies from '../components/policies';
import AddBasicInfo from './add-basic-info';
import AddRoomType from './add-room-type';
import RoomTypeList from './room-type-list';
import UpdateBasicInfo from './update-basic-info';
import UpdateRoomType from './update-room-type';
export function HotelFormSteps() {
  const { Step } = Steps;
  const history = useHistory();
  const location = useLocation();

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let urlElements = window.location.href.split('/');
    if (
      urlElements[urlElements.length - 1] === 'add-hotel' &&
      urlElements[urlElements.length - 1] === 'edit-hotel'
    ) {
      setCurrent(0);
    } else if (urlElements[urlElements.length - 1] === 'room-pricing') {
      setCurrent(1);
    } else if (urlElements[urlElements.length - 1] === 'facilities-services') {
      setCurrent(2);
    } else if (urlElements[urlElements.length - 1] === 'amenities') {
      setCurrent(3);
    } else if (urlElements[urlElements.length - 1] === 'photos') {
      setCurrent(4);
    } else if (urlElements[urlElements.length - 1] === 'policies') {
      setCurrent(5);
    } else if (urlElements[urlElements.length - 1] === 'payment') {
      setCurrent(6);
    }
  }, [window.location.href]);

  return (
    <div>
      <Steps size="small" current={current} progressDot>
        <Step title="Basic Info" className="step-child" />
        <Step title="Room & Pricing" className="step-child" />
        <Step title="Facilities & Services" className="step-child" />
        <Step title="Amenities" className="step-child" />
        <Step title="Photos" className="step-child" />
        <Step title="Policies" className="step-child" />
        <Step title="Payments" className="step-child" />
      </Steps>
      <div className="container py-10">
        <Switch>
          <Route path="/add-hotel" exact render={() => <AddBasicInfo />} />
          <Route
            path="/:id/edit-hotel/"
            exact
            render={() => <UpdateBasicInfo />}
          />
          <Route
            path="/:id/room-pricing"
            exact
            render={() => <RoomTypeList />}
          />
          <Route
            path="/:id/empty/room-pricing"
            exact
            render={() => <EmptyRoomInput />}
          />
          <Route
            path="/:id/add/room-pricing"
            exact
            render={() => <AddRoomType />}
          />

          <Route
            path="/:id/edit/room-pricing"
            exact
            render={() => <UpdateRoomType />}
          />
          <Route
            path="/:id/facilities-services"
            exact
            render={() => <FacilitiesAndServices />}
          />
          <Route path="/:id/amenities" exact render={() => <Amenities />} />
          <Route path="/:id/photos" exact render={() => <Photos />} />
          <Route path="/:id/policies" exact render={() => <Policies />} />
          <Route path="/:id/payment" exact render={() => <Payments />} />
        </Switch>
      </div>
    </div>
  );
}
