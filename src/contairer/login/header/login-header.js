import React from 'react'
import './login-header.less'
import logo from '../../../assets/img/logo.png'

class LoginHeader extends React.Component {
  // // 登录页面
  // goLogin = () => {
  //   alert('登录')
  // }
  // // 注册页面
  // goRegister = () => {
  //   alert('注册')
  // }

  render () {
    return (
      <header>
        <div className="content">
          <div className="w1200 clearfix">
            <div className="fl logo">
              <img src={logo}/>
            </div>
            <div className="fr nav-login">
              <div className="nav fl">
                <a href="/index">首页<i></i></a>
                <a href="/product">产品中心<i></i></a>
                <a href="currentNav" to="/plan">方案定制<i></i></a>
                <a href="/customer">客服中心<i></i></a>
              </div>
              <div className="login fr clearfix">
                <div className="login-err" v-if="!isLogin">
                  <div className="btn fl btn-login">登录</div>
                  <div className="btn fr btn-register">注册</div>
                </div>
                {/*<div v-else className="login-success clearfix">
              <div className="fr go-survey" onClick="goSurvey">
              进入主页
            </div>
            <div className="fr agent">总代理</div>
            <div className="fr is-renzheng">
              <div v-if="isRenzheng" className="icon-renzheng has-renzheng">已认证</div>
              <div v-else className="icon-renzheng no-renzheng">未认证</div>
            </div>
            <div className="fr name">{{username}}</div>*/}
              </div>
            </div>
          </div>
        </div>
        <div className="whiteBlock"></div>
      </header>
    )
  }
}

export default LoginHeader