import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

const SubMenu = Menu.SubMenu;

class MenuApp extends Component {
  render() {
    return (
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Link to="/dashboard">
            <Icon type="global" />
            <span>Dashboard</span>
          </Link>
        </Menu.Item>
        <SubMenu theme="dark" key="sub1" title={<span><Icon type="setting" /><span>Administrator</span></span>}>
          <Menu.Item key="2">
            <Link to="/global">
              <Icon type="global" />
              <span>Global</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/users">
              <Icon type="user" />
              <span>Users</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/groups">
              <Icon type="folder" />
              <span>Groups</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/profiles">
              <Icon type="smile" />
              <span>Profiles</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Link to="/functions">
              <Icon type="edit" />
              <span>Functions</span>
            </Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default MenuApp;