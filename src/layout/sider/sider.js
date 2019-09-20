import React from 'react'
import { Menu,Icon } from 'antd'
import MenuConfig from '../../config/menuConfig'

const {SubMenu} = Menu

class SiderPage extends React.Component {
  componentWillMount () {
    const menuTreeNode = this.renderMenu(MenuConfig)
    this.setState({
      menuTreeNode
    })
  }

  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
      //  const title = `<span><Icon type="user" />' ${item.name}</span>`
        return (
          <SubMenu
            title={
              <span>
                <Icon type="setting" />
                <span>{item.name}</span>
            </span>
            }
            key={item.path}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item key={item.path}>{item.name}</Menu.Item>
    })
  }

  render () {
    return (
      <div className="sider">
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
        >
          {this.state.menuTreeNode}
        </Menu>

      </div>
    )
  }
}

export default SiderPage