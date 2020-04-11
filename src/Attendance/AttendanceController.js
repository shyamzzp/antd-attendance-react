import React from 'react';
import { Layout, Menu, Breadcrumb, Row, Col, Divider, Switch, Card, Statistic, Popover } from 'antd';
import './Attendance.css';

import 'antd/dist/antd.css';
import { CloseCircleOutlined, CheckCircleOutlined, UserOutlined, PlusSquareOutlined } from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);
class Attendance extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  onContent = prop => {
    return <div>
      <p>{prop}</p>
    </div>
  };

  createTable = (prop) => {
    console.log(prop % 3);

    let table = [];
    let data = {
      "students": [
        { "name": "Shyam", "rollno": 1, "attendance": "present" },
        { "name": "Inder", "rollno": 2, "attendance": "present" },
        { "name": "Param", "rollno": 3, "attendance": "present" },
        { "name": "Karam", "rollno": 4, "attendance": "present" },
        { "name": "Charam", "rollno": 5, "attendance": "present" },
        { "name": "Nitya", "rollno": 6, "attendance": "present" },
        { "name": "Aditya", "rollno": 7, "attendance": "present" },
        { "name": "Ravi", "rollno": 8, "attendance": "present" },
        { "name": "Kushal", "rollno": 9, "attendance": "present" },
        { "name": "Manoj", "rollno": 10, "attendance": "present" },
        { "name": "Adityas", "rollno": 11, "attendance": "present" }
      ]
    };
    prop = data.students.length;
    for (let i = 0; i < Math.floor(prop / 3); i++) {

      //Create the parent and add the children
      table.push(<>
        <Row gutter={16}>
          <Col className="gutter-row" span={8}>
            <Popover content={this.onContent("Roll Number: " + data.students[3 * i].rollno)} title={data.students[3 * i].name}>
              <Switch checkedChildren={data.students[3 * i].name} unCheckedChildren={data.students[3 * i].name} defaultChecked />
            </Popover>

          </Col>
          <Col className="gutter-row" span={8}>
            <Popover content={this.onContent("Roll Number: " + data.students[3 * i + 1].rollno)} title={data.students[3 * i + 1].name}>
              <Switch checkedChildren={data.students[3 * i + 1].name} unCheckedChildren={data.students[3 * i + 1].name} defaultChecked />
            </Popover>
          </Col>
          <Col className="gutter-row" span={8}>
            <Popover content={this.onContent("Roll Number: " + data.students[3 * i + 2].rollno)} title={data.students[3 * i + 2].name}>
              <Switch checkedChildren={data.students[3 * i + 2].name} unCheckedChildren={data.students[3 * i + 2].name} defaultChecked />
            </Popover>
          </Col>
        </Row>
        <br /></>
      );
    }
    if (prop % 3 === 2) {
      table.push(<>
        <Row gutter={16}>
          <Col className="gutter-row" span={8}>
          <Popover content={this.onContent("Roll Number: " + data.students[Math.floor(prop / 3) * 3].rollno)} title={data.students[Math.floor(prop / 3) * 3].name}>
            <Switch checkedChildren={data.students[Math.floor(prop / 3) * 3].name} unCheckedChildren={data.students[Math.floor(prop / 3) * 3].name} defaultChecked />
            </Popover>
          </Col>
          <Col className="gutter-row" span={8}>
          <Popover content={this.onContent("Roll Number: " + data.students[Math.floor(prop / 3) * 3 + 1].rollno)} title={data.students[Math.floor(prop / 3) * 3 + 1].name}>
            <Switch checkedChildren={data.students[Math.floor(prop / 3) * 3 + 1].name} unCheckedChildren={data.students[Math.floor(prop / 3) * 3 + 1].name} defaultChecked />
            </Popover>
          </Col>
        </Row>
        <br /></>
      );
    }
    if (prop % 3 === 1) {
      table.push(<>
        <Row gutter={16}>
          <Col className="gutter-row" span={8}>
          <Popover content={this.onContent("Roll Number: " + data.students[Math.floor(prop / 3) * 3].rollno)} title={data.students[Math.floor(prop / 3) * 3].name}>
            <Switch checkedChildren={data.students[Math.floor(prop / 3) * 3].name} unCheckedChildren={data.students[Math.floor(prop / 3) * 3].name} defaultChecked />
            </Popover>
          </Col>
        </Row>
        <br /></>
      );
    }

    return table
  }
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div style={{ height: '32px', background: 'yellow', margin: '16px' }} />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <SubMenu
              key="sub1"
              title={
                <span>
                  <UserOutlined />
                  <span>Attendance</span>
                </span>
              }
            >
              <Menu.Item key="3">11th April 2020</Menu.Item>
              <Menu.Item key="4">12th April 2020</Menu.Item>
              <Menu.Item key="5">13th April 2020</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: '100%' }}>

              <Row gutter={16}>
                <Col span={8}>
                  <Card>
                    <Statistic
                      title="Total"
                      value={59}
                      valueStyle={{ color: '#FFC107' }}
                      prefix={<PlusSquareOutlined />}

                    />
                  </Card>
                </Col>
                <Col span={8}>
                  <Card>
                    <Statistic
                      title="Present"
                      value={50}
                      valueStyle={{ color: '#3f8600' }}
                      prefix={<CheckCircleOutlined />}

                    />
                  </Card>
                </Col>
                <Col span={8}>
                  <Card>
                    <Statistic
                      title="Absent"
                      value={9}
                      valueStyle={{ color: '#cf1322' }}
                      prefix={<CloseCircleOutlined />}

                    />
                  </Card>
                </Col>
              </Row><Divider orientation="center" style={{ color: '#333', fontWeight: 'normal' }}>Attendance</Divider>
              {this.createTable(28)}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Attendance Management System ©2020 Created by shyamzzp</Footer>
        </Layout>
      </Layout>
    );
  }
}
export default Attendance;