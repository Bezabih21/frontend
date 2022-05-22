import Icon from '@ant-design/icons';
import React from 'react';
import DashboardSvg from './dashboard.svg';
import FinancialSvg from './financial.svg';
import FrontDeskSvg from './frontDesk.svg';
import HouseKeepSvg from './houseKeep.svg';
import MaintainSvg from './maintain.svg';
import MessageSvg from './message.svg';
import MiscellaneousSvg from './miscellaneous.svg';
import NotificationSvg from './notification.svg';
import ReportSvg from './report.svg';
import RoomsSvg from './rooms.svg';
import SettingsSvg from './settings.svg';
import TimeSvg from './time.svg';
export const MessageIcon = (props) => (
  <Icon component={MessageSvg} {...props} />
);
export const NotificationIcon = (props) => (
  <Icon component={NotificationSvg} {...props} />
);

export const SettingsIcon = (props) => (
  <Icon component={SettingsSvg} {...props} />
);
export const MiscellaneousIcon = (props) => (
  <Icon component={MiscellaneousSvg} {...props} />
);
export const TimeIcon = (props) => <Icon component={TimeSvg} {...props} />;
export const ReportIcon = (props) => <Icon component={ReportSvg} {...props} />;
export const MaintainIcon = (props) => (
  <Icon component={MaintainSvg} {...props} />
);
export const HouseKeepIcon = (props) => (
  <Icon component={HouseKeepSvg} {...props} />
);
export const FinancialIcon = (props) => (
  <Icon component={FinancialSvg} {...props} />
);
export const RoomsIcon = (props) => <Icon component={RoomsSvg} {...props} />;
export const FrontDeskIcon = (props) => (
  <Icon component={FrontDeskSvg} {...props} />
);
export const DashboardIcon = (props) => (
  <Icon component={DashboardSvg} {...props} />
);
