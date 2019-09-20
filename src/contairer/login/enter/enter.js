import React from 'react'
import './enter.less'

class Enter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isTelMsg: false,
      isPassMsg: false,
      telMsg: '',
      passMsg: ''
    }
  }

  submitForm = () => {
    alert(444455)
  }

  render () {
    return (
      <div className="loginbtns">
        <div className='loginarea'>
          <div className="loginleft">
            <div className="download">DownLoad</div>
            <div className="qrcode">
              <div className="qrarea"></div>
              <div className='down'>扫一扫下载APP</div>
            </div>
          </div>
          <div className="loginright">
            <div className="welcome">Welcome</div>
            <div className="loginform">

              <form action="" className="el-form">
                <div className="el-form-item">
                  <div className="el-form-item__content">
                    <i className="usericon"></i>
                    <b></b>
                    <div className="el-input">
                      <input type="text" className="el-input__inner" placeholder="手机号"/>
                    </div>
                    {this.state.isTelMsg ? <div className="el-form-item__error">{this.state.telMsg}</div> : null}
                  </div>
                </div>
                <div className="el-form-item">
                  <div className="el-form-item__content">
                    <i className="passicon"></i>
                    <b></b>
                    <div className="el-input">
                      <input type="password"
                             className="el-input__inner" placeholder="密码"/>
                    </div>
                    {this.state.isPassMsg ? <div className="el-form-item__error">{this.state.passMsg}</div> : null}
                  </div>
                </div>
                <div className="loginbottom">
                  <span>忘记密码?</span>
                  <p>立即注册 ＞</p>
                </div>
                <div className="loginbtn" onClick={this.submitForm}>登录</div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Enter