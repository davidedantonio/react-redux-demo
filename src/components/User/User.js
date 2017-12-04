import React, { Component } from 'react';
import { Button, Card, Row, Col, Table, Tabs,  Form, Input } from 'antd';

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

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
		const minHeight = this.state.windowHeight - 206;
		
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
			<Card bodyStyle={{ padding: 0 }}>
				<div className="subhead background-blue">
					<div className="subhead-title">Users List</div>
					<div className="ant-card-extra">
						<Button ghost>Create</Button>
					</div>
				</div>
				<Row>
					<Col md={16} lg={16} xl={16}>
						<Table size="small" columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: minHeight }} />
					</Col>
					<Col md={8} lg={8} xl={8}>
						<Form layout="horizontal">
						<Tabs defaultActiveKey="1" style={{ height: minHeight+40, overflowY: "auto" }}>	
								<TabPane tab="Anagrafica" key="1">
									<FormItem
											label="Nome"
											{...formItemLayout}
										>
										<Input placeholder="Nome..." />
									</FormItem>

									<FormItem
											label="Cognome"
											{...formItemLayout}
										>
										<Input placeholder="Cognome..." />
									</FormItem>

									<FormItem
											label="Telefono"
											{...formItemLayout}
										>
										<Input placeholder="telefono..." />
									</FormItem>

									<FormItem
											label="Cellulare"
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
								<TabPane tab="Tab 2" key="2">Content of tab 2</TabPane>
								<TabPane tab="Tab 3" key="3">Content of tab 3</TabPane>
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