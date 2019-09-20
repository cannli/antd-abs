import React from 'react'
import { Layout,Breadcrumb,Divider, Table, Tag  } from 'antd'
import FooterPage from '../../layout/footer/footer'
import HeaderPage from '../../layout/header/header'

const {Header, Footer} = Layout
class Index extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      columns: [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: text => <a>{text}</a>,
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Tags',
          key: 'tags',
          dataIndex: 'tags',
          render: tags => (
            <span>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green'
          if (tag === 'loser') {
            color = 'volcano'
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          )
        })}
      </span>
          ),
        },
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <span>
        <a>Invite {record.name}</a>
        <Divider type="vertical"/>
        <a>Delete</a>
      </span>
          ),
        },
      ],
      data: [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser'],
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
      ]
    }
  }

  render () {
    return (

      <div className="App">
        {/*  <BasicLayout logo={<Logo></Logo>} className="basicLayout"></BasicLayout>*/}
        <Layout className="layout">
          <Header className="header">
            <HeaderPage/>
          </Header>

            <Layout className="index-content" style={{marginTop:'64px'}}>
              <Breadcrumb className="index-breadcrumb">
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Table columns={this.state.columns} dataSource={this.state.data}/>
              <Footer className="footer">
                <FooterPage></FooterPage>
              </Footer>
            </Layout>
        </Layout>
      </div>
    )
  }
}

export default Index
