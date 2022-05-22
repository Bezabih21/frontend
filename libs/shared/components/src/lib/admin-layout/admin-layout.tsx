import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Input, Layout, Menu } from 'antd';
import React, { ReactNode, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './admin-layout.module.scss';
import {
  DashboardIcon,
  FrontDeskIcon,
  MessageIcon,
  NotificationIcon,
} from './icons';

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;
const { Search } = Input;
export interface AdminLayoutProps {
  children: ReactNode;
  sideBarHeader: ReactNode;
  navHeader: ReactNode;
  dashboardTitle?: string;
  menus: NavListGroup[];
}

export interface NavListGroup {
  key: string;
  icon: ReactNode;
  title: string;
  to?: string;
  subMenus?: NavListItem[];
}

export interface NavListItem {
  key: string;
  to: string;
  children: ReactNode;
}

export function AdminLayout(props: AdminLayoutProps) {
  const [collapse, setCollapse] = useState(false);
  const history = useHistory();

  const onToggle = () => {
    setCollapse(!collapse);
  };
  const onMobileToggle = () => {
    setCollapse(!collapse);
  };
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        width="256"
        theme="light"
        className="side"
        breakpoint="sm"
        trigger={null}
        collapsible
        collapsed={collapse}
      >
        {props.sideBarHeader}

        <Menu mode="inline" defaultSelectedKeys={['dashboard']}>
          <Menu.Item
            key="dashboard"
            icon={<DashboardIcon />}
            onClick={() => history.push('/')}
          >
            {props.dashboardTitle ?? 'Dashboard'}
          </Menu.Item>
          {props.menus.map((menu) => {
            if (menu.subMenus && menu.subMenus.length > 0) {
              return (
                <SubMenu
                  key={menu.key}
                  icon={menu.icon ? <FrontDeskIcon /> : null}
                  title={menu.title}
                >
                  {menu.subMenus.map((subMenu) => {
                    return (
                      <Menu.Item
                        key={subMenu.key}
                        onClick={() => history.push(subMenu.to)}
                      >
                        {subMenu.children}
                      </Menu.Item>
                    );
                  })}
                </SubMenu>
              );
            } else {
              return (
                <Menu.Item
                  key={menu.key}
                  onClick={() => history.push(menu.to)}
                  icon={menu.icon}
                >
                  {menu.title}
                </Menu.Item>
              );
            }
          })}
        </Menu>
      </Sider>
      <Layout>
        <Header
          className="header"
          style={{ padding: '0', backgroundColor: '#fff' }}
        >
          <div className="flex justify-between px-4">
            <div className="flex items-center ">
              {collapse ? (
                <div>
                  <MenuUnfoldOutlined
                    className="hidden md:inline-flex trigger text-2xl"
                    onClick={onToggle}
                  ></MenuUnfoldOutlined>
                  <MenuUnfoldOutlined
                    className="md:hidden trigger text-2xl"
                    onClick={onMobileToggle}
                  ></MenuUnfoldOutlined>
                </div>
              ) : (
                <MenuFoldOutlined
                  className="trigger text-2xl"
                  onClick={onToggle}
                ></MenuFoldOutlined>
              )}
              <>{props.navHeader}</>
            </div>
            <div className="flex items-center justify-between space-x-4">
              <MessageIcon className="side-Actions" />
              <NotificationIcon className="side-Actions" />
              <span className="side-Actions pl-2">
                <img src="../../../../assets/images/avatar.png" />
              </span>
            </div>
          </div>
        </Header>
        <Content>{props.children}</Content>
        <Footer className="flex items-end justify-center space-x-2 bg-white py-4">
          <img
            style={{ height: '28px' }}
            src="../../../../assets/images/footer-logo.svg"
          />
          <small className="hidden md:inline text-gray-400">
            Eltnt Cloud.© All Rights Reserved. {new Date().getFullYear()}
          </small>
        </Footer>
      </Layout>
    </Layout>
  );
}

export default AdminLayout;
