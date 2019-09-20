import React from 'react'
import { Breadcrumb, Layout,Row, Col } from 'antd'

const {Content} = Layout

class Home extends React.Component {
  render () {
    return (
      <div className="home">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content className="home-content">
          <Row>
            <Col span={24}>rterterrrrrrrrrrrrrrfdteryter
              rterterrrrrrrrrrrrrrfdteryter rterterrrrrrrrrrrrrrfdteryter
              rterterrrrrrrrrrrrrrfdteryter
              rterterrrrrrrrrrrrrrfdteryter当然疼特容易投入与他
              人于一体于一体u医院推提提-12
            </Col>
          </Row>

        </Content>
      </div>
    )
  }
}


export default Home