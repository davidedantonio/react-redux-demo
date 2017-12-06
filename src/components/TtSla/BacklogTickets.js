import React, { Component } from 'react';
import { Select, Radio, Table, Row, Col, Button, Icon, List } from 'antd';
import 'font-awesome/css/font-awesome.min.css'; 

const Option = Select.Option;
const ButtonGroup = Button.Group;

const columns = [
  { title: <i className="fa fa-microchip"></i>, width: 50, dataIndex: 'status', key: 'status', fixed: 'left', textAlign: "center" },
  { title: <i className="fa fa-bell"></i>, width: 50, dataIndex: 'bell', key: 'age', fixed: 'left' },
  { title: 'Area', width: 50, dataIndex: 'area', key: 'area', fixed: 'left', textAlign: "center" },
  { title: 'Column 1', dataIndex: 'address', key: '1'},
  { title: 'Column 2', dataIndex: 'address', key: '2'},
  { title: 'Column 3', dataIndex: 'address', key: '3'},
  { title: 'Column 4', dataIndex: 'address', key: '4'},
  { title: 'Column 5', dataIndex: 'address', key: '5'},
  { title: 'Column 6', dataIndex: 'address', key: '6'},
  { title: 'Column 7', dataIndex: 'address', key: '7'},
  { title: 'Column 1', dataIndex: 'address', key: '8'},
  { title: 'Column 2', dataIndex: 'address', key: '9'},
  { title: 'Column 3', dataIndex: 'address', key: '10'},
  { title: 'Column 4', dataIndex: 'address', key: '11'},
  { title: 'Column 5', dataIndex: 'address', key: '12'},
  { title: 'Column 6', dataIndex: 'address', key: '13'},
  { title: 'Column 7', dataIndex: 'address', key: '14'}
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    bell: '',
    status: <i className="fa fa-circle"></i>,
    area: 'CE',
    age: 32,
    address: `London Park no. ${i}`,
  });
}

class BacklogTickets extends Component {
  state = {
		windowHeight: window.innerHeight
  };
  
  render() {
    const minHeight = this.state.windowHeight;
    return (
      <div>
        <Row gutter={8} style={{ paddingLeft:10, paddingRight: 10}}>
          <Col span={8}>
            <Button size="small"><Icon type="filter" /></Button> 
            <Select
              size="small"
              style={{ width: 200, marginLeft: '5px' }}
            >
              <Option key="1" value="1">Query 1</Option>
              <Option key="2" value="2">Query 2</Option>
              <Option key="3" value="3">Query 3</Option>
              <Option key="4" value="4">Query 4</Option>
              <Option key="5" value="5">Query 5</Option>
            </Select>
          </Col>
          <Col span={4}></Col>
          <Col span={4}></Col>
          <Col span={4}></Col>
          <Col span={4} style={{ textAlign: 'right' }}>
            <ButtonGroup size="small">
              <Button type="primary" icon="reload" />
              <Button type="primary" icon="fork" />
              <Button type="primary" icon="cloud-download" />
            </ButtonGroup>
          </Col>
        </Row>
        <Table style={{ marginTop:"10px", height: minHeight-203  }} pagination={{ pageSize: 50 }} columns={columns} size="small" dataSource={data} scroll={{ x: 2300, y: minHeight-300 }} />
      </div>
    );
  }
}

export default BacklogTickets;