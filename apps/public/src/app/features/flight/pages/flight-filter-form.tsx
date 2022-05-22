import { Checkbox, Collapse, Slider } from 'antd';
import React, { useState } from 'react';

export interface FlightFilterProps {
  flightFilter: any;
}

const { Panel } = Collapse;

function FlightFilter(props: FlightFilterProps) {
  const [stops, setStops] = useState(props.flightFilter.stops);
  const [collapse, setCollapseValue] = useState(props.flightFilter.collapse);
  const changeStops = (value, index) => {
    let currentValue = stops[index];
    currentValue.checked = value;
    stops[index] = currentValue;
    setStops([...stops]);
  };

  const changeCollapseValue = (value, collapseIndex, checkboxIndex, index) => {
    let currentValue =
      collapse[collapseIndex].Collapse[checkboxIndex].inGroup[index];
    currentValue.checked = value;
    collapse[collapseIndex].Collapse[checkboxIndex].inGroup[
      index
    ] = currentValue;
    setCollapseValue([...collapse]);
  };

  return (
    <div
      className="bg-gray-50"
      style={{ maxWidth: '326px', minWidth: '326px' }}
    >
      <div className="p-3 bg-primary-500">
        <div className="flex justify-between p-2 text-gray-100">
          <span>338 out of 338</span>
          <span>Reset</span>
        </div>
      </div>

      <div className="p-3.5">
        <p className="font-bold text-gray-700 pb-2">Stops:</p>
        {stops.map((stop, i) => (
          <div className="flex justify-between" key={i}>
            <Checkbox
              className="font-medium"
              checked={stop.checked}
              onChange={(e) => changeStops(e.target.checked, i)}
            >
              {stop.stop}
            </Checkbox>
            <span className="font-medium font-bold">{stop.price}</span>
          </div>
        ))}
      </div>
      <div className="">
        <Collapse defaultActiveKey={['0']}>
          {props.flightFilter.collapse.map((item, i) => (
            <Panel header={item.name} key={i}>
              <div>
                {item.contentType === 'checkBox' ? (
                  <div>
                    {item.Collapse.map((checkboxes, c) => (
                      <div className="p-2.5" key={c}>
                        <span className="text-gray-400">
                          {checkboxes.group}
                        </span>
                        {checkboxes.inGroup.map((checkbox, j) => (
                          <div className="flex justify-between" key={j}>
                            <Checkbox
                              className="font-medium"
                              checked={checkbox.checked}
                              onChange={(e) =>
                                changeCollapseValue(e.target.checked, i, c, j)
                              }
                            >
                              {checkbox.name}
                            </Checkbox>
                            <span className="font-medium font-bold">
                              {checkbox.price}
                            </span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div>
                    {item.Collapse.map((slider, s) => (
                      <div className="flex flex-col" key={s}>
                        <span className="text-gray-400">
                          {slider.status} - {slider.city} ({slider.airport})
                        </span>

                        <Slider
                          className="primary-500"
                          range={{ draggableTrack: false }}
                          defaultValue={[0, 100]}
                        />
                        <div className="flex justify-between">
                          <span>{slider.start}</span>
                          <span>{slider.end}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Panel>
          ))}
        </Collapse>
      </div>
    </div>
  );
}

export default FlightFilter;
