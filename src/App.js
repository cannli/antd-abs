import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { Index, Login, Project } from './contairer/views'
import './assets/style/layout.less'
import './assets/static/less/common.less' // 共用样式
import './assets/static/less/mixins.less' // 共用less函数
import './assets/static/less/animate.less' //animate.css
import './assets/static/less/style.less' //字体图标
import '@ant-design/pro-layout'

function App () {

  return (
    <div className="App">
      <BrowserRouter>
        {/* <AuthRoute></AuthRoute>*/}
        <Switch>
          <Route path='/' exact component={Index}></Route>
         {/* <Route path='/login/' exact component={Login}></Route>*/}
          <Route path='/index' exact component={Index}></Route>
          <Route path='/project' exact component={Project}></Route>
          <Route component={Login}></Route>
          {/* <Route component={Dashboard}></Route>*/}
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
