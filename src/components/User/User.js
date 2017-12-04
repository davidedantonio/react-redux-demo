import React, { Component } from 'react';
import { Button, Card, Row, Col, Table, Tabs,  Form, Input, Select } from 'antd';

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const Option = Select.Option;

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  width: 150,
}, {
  title: 'Age',
  dataIndex: 'age',
  width: 150,
}, {
  title: 'Address',
  dataIndex: 'address',
}];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}


class User extends Component {
	state = {
		windowHeight: window.innerHeight
	};

	render() {
		const minHeight = this.state.windowHeight - 230;
		
		const children = [];
		for (let i = 10; i < 36; i++) {
			children.push(<Option key={i.toString(36) + i}>Gruppo {i}</Option>);
		}

		const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 16 }
		};
		
		const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 24,
          offset: 0,
        },
      },
    };

		return (
			<Card title="Users List" extra={<Button>Create</Button>} bodyStyle={{ padding: 0 }}>
				<Row>
					<Col md={16} lg={16} xl={16}>
						<Table size="small" columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: minHeight }} />
					</Col>
					<Col md={8} lg={8} xl={8}>
						<Form layout="horizontal">
						<Tabs defaultActiveKey="1" style={{ height: minHeight+40, overflowY: "auto" }}>	
								<TabPane tab="Anagrafica" key="1">
									<FormItem
											label="Name"
											{...formItemLayout}
										>
										<Input placeholder="Nome..." />
									</FormItem>

									<FormItem
											label="Surname"
											{...formItemLayout}
										>
										<Input placeholder="Cognome..." />
									</FormItem>

									<FormItem
											label="Phone"
											{...formItemLayout}
										>
										<Input placeholder="telefono..." />
									</FormItem>

									<FormItem
											label="Mobile Phone"
											{...formItemLayout}
										>
										<Input placeholder="Cellulare..." />
									</FormItem>

									<FormItem
											label="Email"
											{...formItemLayout}
										>
										<Input placeholder="Email..." />
									</FormItem>
								</TabPane>
								<TabPane tab="Groups" key="2">
									<FormItem
											label="Groups"
											{...formItemLayout}
										>
										<Select
												mode="multiple"
												style={{ width: '100%' }}
												placeholder="Please select"
											>
											{children}
										</Select>
									</FormItem>
								</TabPane>
						</Tabs>
						<Row style={{ paddingBottom: 0 }}>
							<Col md={12} lg={12} xl={12} style={{ padding: "10px 10px 0px 10px" }}>
								<FormItem {...tailFormItemLayout} style={{ marginBottom: 0 }}>
									<Button type="danger" htmlType="button" style={{ width:"100%" }}>Delete</Button>
								</FormItem>
							</Col>
							<Col md={12} lg={12} xl={12} style={{ padding: "10px 10px 0px 10px" }}>
								<FormItem {...tailFormItemLayout} style={{ marginBottom: 0 }}>
									<Button type="primary" htmlType="submit" style={{ width:"100%" }}>Save</Button>
								</FormItem>
							</Col>
						</Row>
						</Form>
					</Col>
				</Row>
			</Card>
		);
	};
}

export default User;