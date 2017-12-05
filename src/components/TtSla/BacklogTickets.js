import React, { Component } from 'react';
import { Select, Radio, Table, Row, Col, Button, Icon, List } from 'antd';

const Option = Select.Option;
const ButtonGroup = Button.Group;

const columns = [
  { title: 'Full Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
  { title: 'Age', width: 100, dataIndex: 'age', key: 'age', fixed: 'left' },
  { title: 'Column 1', dataIndex: 'address', key: '1', width: 150 },
  { title: 'Column 2', dataIndex: 'address', key: '2', width: 150 },
  { title: 'Column 3', dataIndex: 'address', key: '3', width: 150 },
  { title: 'Column 4', dataIndex: 'address', key: '4', width: 150 },
  { title: 'Column 5', dataIndex: 'address', key: '5', width: 150 },
  { title: 'Column 6', dataIndex: 'address', key: '6', width: 150 },
  { title: 'Column 7', dataIndex: 'address', key: '7', width: 150 },
  { title: 'Column 1', dataIndex: 'address', key: '8', width: 150 },
  { title: 'Column 2', dataIndex: 'address', key: '9', width: 150 },
  { title: 'Column 3', dataIndex: 'address', key: '10', width: 150 },
  { title: 'Column 4', dataIndex: 'address', key: '11', width: 150 },
  { title: 'Column 5', dataIndex: 'address', key: '12', width: 150 },
  { title: 'Column 6', dataIndex: 'address', key: '13', width: 150 },
  { title: 'Column 7', dataIndex: 'address', key: '14', width: 150 }
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
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

    console.log(minHeight);
    return (
      <div>
        <Row gutter={8} style={{ paddingLeft:10, paddingRight: 10}}>
          <Col span={4}>
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
          <Col span={4}></Col>
          <Col span={4} style={{ textAlign: 'right' }}>
            <ButtonGroup size="small">
              <Button type="primary" icon="reload" />
              <Button type="primary" icon="fork" />
              <Button type="primary" icon="cloud-download" />
            </ButtonGroup>
          </Col>
        </Row>
        <Table style={{ marginTop:"10px" }} columns={columns} size="small" dataSource={data} scroll={{ x: 2300, y: 300 }} />
      </div>
    );
  }
}

export default BacklogTickets;