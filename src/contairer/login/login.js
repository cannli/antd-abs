import React from 'react'
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import LoginHeader from './header/login-header'
import './login.less'
import Home from './home/home'
import Enter from './enter/enter'
class Login extends React.Component {
  componentDidMount () {

  }

  render () {
    const pathName = this.props.location.pathname
    console.log(pathName,'8888888')
    return (
      <div>
        <LoginHeader></LoginHeader>

          {/* <AuthRoute></AuthRoute>*/}
          <Switch>
            <Route path='/login/' exact component={Home}></Route>
            <Route path='/login/home' exact component={Home}></Route>
            <Route path='/login/enter' exact component={Enter}></Route>
            {/*<Route path='/project' exact component={Project}></Route>*/}
            {/* <Route component={Dashboard}></Route>*/}
          </Switch>

        <footer>
          Copyright © 2005-2019 Tenpay All Rights Reserved 财付通公司 版权所有
        </footer>
      </div>
    )
  }
}

export default Login