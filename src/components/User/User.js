import React, { Component } from 'react';
import { Button, Card, Row, Col, Table, Tabs,  Form, Input, Select, Tree } from 'antd';

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const Option = Select.Option;
const TreeNode = Tree.TreeNode;

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

const treeData = [
	{
		title: 'Module *',
		key: '1',
		children: [{
			title: 'Portal Admin',
			key: '1.1',
		}],
	},
	{
		title: 'Module TNO',
		key: '2',
		children: [{
			title: 'Consultation',
			key: '2.1',
		},{
			title: 'Governance FN',
			key: '2.2',
		}],
	}
];


class User extends Component {
	state = {
		windowHeight: window.innerHeight
	};

	renderTreeNodes = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <TreeNode title={item.title} key={item.key} dataRef={item}>
            {this.renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode {...item} />;
		});
	}

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
			<Card className="card-head-dark" title="Users List" extra={<Button className="primary" ghost>Create</Button>} bodyStyle={{ padding: 0 }}>
				<Row>
					<Col md={16} lg={16} xl={16}>
						<Table size="small" bordered={true} columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: minHeight }} />
					</Col>
					<Col md={8} lg={8} xl={8}>
						<Form layout="horizontal">
							<Tabs defaultActiveKey="1" size="small" style={{ height: minHeight+40, overflowY: "auto" }}>	
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
									<TabPane tab="Filter" key="2">
										<FormItem
												label="Filter"
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
									<TabPane tab="Access" key="3">
										<FormItem
												label="Last"
												{...formItemLayout}
											>
											<Input placeholder="" value="Monday 10 December 10:15" disabled />
										</FormItem>

										<FormItem
												label="IP"
												{...formItemLayout}
											>
											<Input placeholder="" value="10.24.67.128" disabled />
										</FormItem>

										<FormItem
												label="Status"
												{...formItemLayout}
											>
											<Select
													style={{ width: '100%' }}
													placeholder="Please select"
												>
												<Option key="allowed">Allowed</Option>
												<Option key="banned">Banned</Option>
											</Select>
										</FormItem>

										<FormItem
												label="Change"
												{...formItemLayout}
											>
											<Input placeholder="" value="Monday 3 December 22:15" disabled />
										</FormItem>

									</TabPane>
									<TabPane tab="Profiles" key="4">
										<FormItem>

											<Tree
												checkable
												selectedKeys={[]}
											>
												{this.renderTreeNodes(treeData)}
											</Tree>
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