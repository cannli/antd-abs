import React from 'react'
import { Menu, Avatar, Dropdown, Icon} from 'antd'
import Logo from '../../components/logo/Logo'

class HeaderPage extends React.Component {
  constructor (props) {
    super(props)
    //  this.headerMenuFn = this.headerMenu.bind(this)
    this.state = {
      current: '',
      MenuListItem: null
    }
  }

  componentWillMount () {
    const headerMenu = [
      {key: 'A', name: '我的项目'},
      {key: 'B', name: '财务管理'},
      {key: 'C', name: '系统管理'},
    ]
    const MenuListItem = this.headerMenuFn(headerMenu)
    console.log(MenuListItem, 'MenuListItem')
    this.setState({
      current: 'A',
      MenuListItem
    })
  }

  handleClick = e => {
    console.log('click ', e)
    this.setState({
      current: e.key,
    })
  }

  headerMenuFn (menuList) {
    return menuList.map(item => {
      return (<Menu.Item key={item.key}>
        {item.name}
      </Menu.Item>)
    })
  }

  render () {
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <a href="">注销</a>
        </Menu.Item>
        <Menu.Item key="1">
          <a href="">切换</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">个人中心</Menu.Item>
      </Menu>
    );
    return (
      <div>
        <Logo/>
        <div className="avatar-user">
          <Avatar className="abs-avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />

          <Dropdown className="user" overlay={menu} trigger={['click']}>
            <a className="ant-dropdown-link" href="#">
              李 灿 <Icon type="down" />
            </a>
          </Dropdown>
        </div>

        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]}  mode="horizontal"  style={{lineHeight: '62px',display: 'inline-block'}}>
          {this.state.MenuListItem}
        </Menu>

        {/*<Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{lineHeight: '62px'}}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>*/}
      </div>
    )
  }
}

export default HeaderPage