import React, { Component } from 'react';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';

// Import from Antd
import { Layout, Icon, Menu, Dropdown, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import MenuApp from './../Layout/MenuApp';

const { Header, Sider, Content } = Layout;


class Rmp extends Component {
  state = {
    collapsed: true
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const menu = (
      <Menu selectedKeys={[]}>
        <Menu.Item><Icon type="setting" /> Settings</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout"><Icon type="logout" /> Logout</Menu.Item>
      </Menu>
    );

    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <MenuApp />
        </Sider>
        <Layout>
          <Header className="navigation navigation-fixed navigation-raised">
            <Icon
              className="navigation-sidebar-button"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />

            <span className="right">
              <Dropdown overlay={menu}>
                <Avatar className="avatar" shape="square" size="large" icon="user" />
              </Dropdown>
            </span>
          </Header>
          <Content className="app-layout-content">
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
      isAuthenticated: state.auth.token !== null
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)( Rmp );
