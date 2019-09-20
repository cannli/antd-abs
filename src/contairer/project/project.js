import React from 'react'
import { Layout } from 'antd'
import HeaderPage from '../../layout/header/header'
import Home from '../../layout/home/home'
import SiderPage from '../../layout/sider/sider'
import FooterPage from '../../layout/footer/footer'


import axios from 'axios'

const {Header, Sider, Footer} = Layout

function getdata () {
  axios.post('https://abstest.tenpay.com/abs-gateway/abs/project/getProjectList.do').then(res => {
    console.log(res,3333)
    if (res.status === 200 && res.data.code === 0) {

    } else {

    }
  })
}

function App () {
  getdata()
  return (
    <div className="App">
      {/*  <BasicLayout logo={<Logo></Logo>} className="basicLayout"></BasicLayout>*/}
      <Layout className="layout">
        <Header className="header">
          <HeaderPage/>
        </Header>
        <Layout className="siderOrHome">
          <Sider className="sider" width={200}>
            <SiderPage></SiderPage>
          </Sider>
          <Layout className="content">
            <Home></Home>
            <Footer className="footer">
              <FooterPage></FooterPage>
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  )
}

export default App
