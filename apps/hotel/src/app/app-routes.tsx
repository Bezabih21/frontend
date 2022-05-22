import { AdminLayout, AdminLayoutProps, NavListGroup } from "@eltnt/shared-components";
import {
  AuthenticatedRoute,
  SharedAuth,
  useAuthState
} from '@eltnt/shared/auth';
import { Button, Input, Spin } from 'antd';
import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { FinancialIcon, FrontDeskIcon, HouseKeepIcon, MaintainIcon, ReportIcon, RoomsIcon } from "./icons";

const { Search } = Input;

function AppRoutes() {
  const { loading } = useAuthState();
  const adminSidebarHeader = (
    <div className="flex items-center justify-center my-4">
      <img src="../../../../assets/images/logo.svg" />
    </div>
  );
  const adminNavHeader = (
    <>
      <Search placeholder="Search Guests" style={{ width: 300, padding: 18 }} />
      <Button type="primary">New Reservation</Button>
    </>
  );
  const adminMenus: NavListGroup[] = [
    {
      key: 'frontDesk',
      icon: <FrontDeskIcon />,
      title: 'Front Desk',
      subMenus: [
        {
          key: 'guestProfile',
          to: 'guestProfile',
          children: 'Guest Profiles',
        },
        {
          key: 'reservations',
          to: 'reservations',
          children: 'Reservations',
        },
      ],
    },
    {
      key: 'rooms',
      icon: <RoomsIcon />,
      title: 'Rooms',
      subMenus: [
        {
          key: 'all',
          to: 'all',
          children: 'All Rooms',
        },
        {
          key: 'rates',
          to: 'rates',
          children: 'Daily Rates',
        },
        {
          key: 'discounts',
          to: 'discounts',
          children: 'Discounts',
        },
      ],
    },
    {
      key: 'financial',
      icon: <FinancialIcon />,
      title: 'Financial',
      subMenus: [
        {
          key: 'billing',
          to: 'billing',
          children: 'Billing',
        },
        {
          key: 'accounts',
          to: 'accounts',
          children: 'Account Receivable',
        },
        {
          key: 'financialWorkspace',
          to: 'financialWorkspace',
          children: 'Financial Workspace',
        },
      ],
    },
    {
      key: 'housekeeping',
      icon: <HouseKeepIcon />,
      title: 'Housekeeping',
    },
    {
      key: 'maintains',
      icon: <MaintainIcon />,
      title: 'Maintenance',
    },
    {
      key: 'reports',
      icon: <ReportIcon />,
      title: 'Reports',
    }
  ];
  const adminSidebar: AdminLayoutProps = {
    sideBarHeader: adminSidebarHeader,
    navHeader: adminNavHeader,
    menus: adminMenus,
    children: 'Content',
  };

  return loading ? (
    <div className="h-screen w-full flex justify-center items-center">
      <Spin size="large"></Spin>
    </div>
  ) : (
    <Router>
      <div style={{ height: '100%' }}>
        <Switch>
          <AuthenticatedRoute
            exact
            path="/"
            component={
              <div>
                <AdminLayout {...adminSidebar} > testing</AdminLayout>
              </div>
            }
          />
          <SharedAuth></SharedAuth>
        </Switch>
      </div>
    </Router>
  );

}

export default AppRoutes;
