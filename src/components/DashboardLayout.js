import React, {useState} from "react";
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import "./dashstyle.css"
import { Link } from "react-router-dom";
import { Layout, Menu } from 'antd';
import HomeLayout from "../components/homelayout";

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;


const Dashlayout = ({ children }) => {
    const [collapsed,setcollapsed]=useState(false);

    const toggle=()=>{
        setcollapsed(!collapsed);
    }

    return(
      <HomeLayout>
        <Layout>
        <Sider  collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu  theme ="dark"mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to ="../dashboard"> Overview</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              
            <Link to ="../appointments"> Manage All appointment</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              <Link to ="../home">Logout</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
            {/* <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: toggle,
              })}
            </Header> */}
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            
            {children}
          </Content>
        </Layout>
      </Layout>
      </HomeLayout>
    )
}
export default Dashlayout;