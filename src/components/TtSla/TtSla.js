import React, { Component } from 'react';
import { Menu, Icon, Row, Col, Tabs } from 'antd';
import BacklogTickets from './BacklogTickets';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;

class TtSla extends Component {
  constructor(props) {
    super(props);

    const panes = [ ];
    this.state = {
      activeKey: null,
      panes,
      windowHeight: window.innerHeight
    };
  }

  onChange = (activeKey) => {
    this.setState({ activeKey });
  }
  
  onEdit = (targetKey, action) => {
    this[action](targetKey);
  }
  
  add = ({ key }) => {
    const panes = this.state.panes;
    const activeKey = `${key}:tab`;

    let pane = { title: key, content: 'New Tab Pane', key: activeKey };

    for (let i=0; i<panes.length; i++){
      if (panes[i].key == pane.key){
        this.setState({ panes, activeKey });
        return true;
      }
    }

    switch(key) {
      case "Backlog Tickets": pane.content = <BacklogTickets />;
    }

    panes.push(pane);
    this.setState({ panes, activeKey });
  }

  remove = (targetKey) => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });

    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
    }
    this.setState({ panes, activeKey });
  }

  render() {
    const minHeight = this.state.windowHeight;
    
    return (
      <div>
        <Menu
        mode="horizontal"
        onClick={this.add}
        className="background-dark"
        >
          <SubMenu title="Backlog">
            <Menu.Item key="Backlog Tickets">Ticket</Menu.Item>
            <Menu.Item key="Backlog Task">Task</Menu.Item>
            <SubMenu title="FTTS">
              <Menu.Item key="FTTS Congiunti">Congiunti</Menu.Item>
              <Menu.Item key="FTTS Anomalie">Anomalie</Menu.Item>
              <Menu.Item key="FTTS Backlog">Backlog</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu title="Storico">
            <Menu.Item key="Storico Ticket">Ticket</Menu.Item>
            <Menu.Item key="Storico Task">Task</Menu.Item>
          </SubMenu>
          <SubMenu title="Monitoring">
            <Menu.Item key="Monitoring Disservizi">Disservizi di Rete</Menu.Item>
            <Menu.Item key="Monitoring Catene">Catene Aperte</Menu.Item>
            <Menu.Item key="Monitoring Switch">Switch</Menu.Item>
          </SubMenu>
          <SubMenu title="Analisi">
            <Menu.Item key="Analisi L1AM">L1AM</Menu.Item>
          </SubMenu>
        </Menu>
        <Row>
          <Col md={24} lg={24} xl={24}>
            <Tabs
              hideAdd
              onChange={this.onChange}
              activeKey={this.state.activeKey}
              type="editable-card"
              onEdit={this.onEdit}
              style={{ height: minHeight-113, overflowY: "auto" }}
            >
              {this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key}>{pane.content}</TabPane>)}
            </Tabs>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TtSla;