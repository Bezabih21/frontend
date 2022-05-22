import {
  AdminLayout,
  AdminLayoutProps,
  NavListGroup,
} from '@eltnt/shared-components';
import {
  AuthenticatedRoute,
  SharedAuth,
  useAuthState,
} from '@eltnt/shared/auth';
import { Input, Spin } from 'antd';
import { FrontDeskIcon } from 'libs/shared/components/src/lib/admin-layout/icons';
import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Dashebord from './features/dashebord/pages/dashebord';
import HotelAdd from './features/hotel-management/hotel/pages/hotel-add';
import HotelList from './features/hotel-management/hotel/pages/hotel-list';
import UserList from './features/user-management/user/pages/user-list';

const { Search } = Input;

function AppRoutes() {
  const { loading } = useAuthState();
  const adminSidebarHeader = (
    <div className="items-center flex flex-col p-6">
      <div className="flex">
        <img src="../assets/images/admin-logo.png" />
      </div>
    </div>
  );
  const adminNavHeader = (
    <>
      <Search placeholder="Search" style={{ width: 300, padding: 18 }} />
    </>
  );
  const adminMenus: NavListGroup[] = [
    {
      key: 'hotels',
      icon: <FrontDeskIcon />,
      title: 'Hotels',
      subMenus: [
        {
          key: 'all-hotels',
          to: 'hotels',
          children: 'All Hotels',
        },
        {
          key: 'hotel-reports',
          to: 'hotel/reports',
          children: 'Reports',
        },
      ],
    },
    // {
    //   key: 'userManagement',
    //   icon: <FrontDeskIcon />,
    //   title: 'User Management',
    //   subMenus: [
    //     {
    //       key: 'user-management',
    //       to: 'user-management',
    //       children: 'User',
    //     },
    //   ],
    // },
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
                <AdminLayout {...adminSidebar}>
                  <Dashebord />
                </AdminLayout>
              </div>
            }
          />
          <AuthenticatedRoute
            exact
            path="/hotels"
            component={
              <div>
                <AdminLayout {...adminSidebar}>
                  <HotelList />
                </AdminLayout>
              </div>
            }
          />
          <AuthenticatedRoute
            exact
            path="/add-hotel"
            component={
              <div>
                <AdminLayout {...adminSidebar}>
                  <HotelAdd />
                </AdminLayout>
              </div>
            }
          />
          <AuthenticatedRoute
            exact
            path="/:id/edit-hotel"
            component={
              <div>
                <AdminLayout {...adminSidebar}>
                  <HotelAdd />
                </AdminLayout>
              </div>
            }
          />
          <AuthenticatedRoute
            exact
            path="/:id/room-pricing"
            component={
              <div>
                <AdminLayout {...adminSidebar}>
                  <HotelAdd />
                </AdminLayout>
              </div>
            }
          />
          <AuthenticatedRoute
            exact
            path="/:id/room-pricing"
            component={
              <div>
                <AdminLayout {...adminSidebar}>
                  <HotelAdd />
                </AdminLayout>
              </div>
            }
          />
          <AuthenticatedRoute
            exact
            path="/:id/empty/room-pricing"
            component={
              <div>
                <AdminLayout {...adminSidebar}>
                  <HotelAdd />
                </AdminLayout>
              </div>
            }
          />
          <AuthenticatedRoute
            exact
            path="/:id/add/room-pricing"
            component={
              <div>
                <AdminLayout {...adminSidebar}>
                  <HotelAdd />
                </AdminLayout>
              </div>
            }
          />
          <AuthenticatedRoute
            exact
            path="/:id/edit/room-pricing"
            component={
              <div>
                <AdminLayout {...adminSidebar}>
                  <HotelAdd />
                </AdminLayout>
              </div>
            }
          />
          <AuthenticatedRoute
            exact
            path="/:id/facilities-services"
            component={
              <div>
                <AdminLayout {...adminSidebar}>
                  <HotelAdd />
                </AdminLayout>
              </div>
            }
          />
          <AuthenticatedRoute
            exact
            path="/:id/amenities"
            component={
              <div>
                <AdminLayout {...adminSidebar}>
                  <HotelAdd />
                </AdminLayout>
              </div>
            }
          />
          <AuthenticatedRoute
            exact
            path="/:id/photos"
            component={
              <div>
                <AdminLayout {...adminSidebar}>
                  <HotelAdd />
                </AdminLayout>
              </div>
            }
          />
          <AuthenticatedRoute
            exact
            path="/:id/policies"
            component={
              <div>
                <AdminLayout {...adminSidebar}>
                  <HotelAdd />
                </AdminLayout>
              </div>
            }
          />
          <AuthenticatedRoute
            exact
            path="/:id/payment"
            component={
              <div>
                <AdminLayout {...adminSidebar}>
                  <HotelAdd />
                </AdminLayout>
              </div>
            }
          />
          <AuthenticatedRoute
            exact
            path="/user-management"
            component={
              <div>
                <AdminLayout {...adminSidebar}>
                  <UserList />
                </AdminLayout>
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
