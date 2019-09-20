import React from 'react'
import logoImg from '../../assets/img/logo.png'
import './logo.less'

class Logo extends React.Component {
    render() {
        return (
            <div className="logo-container">
                <img src={logoImg} className="logoImg" alt=""/>
            </div>
        )
    }
}
export default Logo;