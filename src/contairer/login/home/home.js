import React from 'react'
import { Carousel } from 'antd'
import { animateds } from '../../../utils/util'
import './home.less'
import $ from 'jquery'

class Home extends React.Component {
  componentDidMount () {
    $(window).on('scroll', function () {
      animateds('.indexBanner1 .banCon li i', 'fadeInUp')
      // 多元推广动画
      animateds('.icon-tg1', 'fadeInUp')
      animateds('.icon-tg2', 'fadeInUp')
      animateds('.icon-tg3', 'fadeInUp')
      animateds('.icon-tg4', 'fadeInUp')
      animateds('.icon-tg5', 'fadeInUp')
      // 数据同步动画
      animateds('.banCon li .btn', 'bounceIn')
    })
  }

  render () {
    const imgArr = ['indexBan4.png', 'banner.jpg', 'planban1.png']
    return (
      <div className="index">
        <div className="banner">
          <Carousel autoplay>
            {imgArr.map((img, index) =>
              (
                <img className="slick-slide" key={index} src={require(`../../../assets/static/img/${img}`)} alt=""/>
              )
            )}
          </Carousel>
        </div>

        <div className="indexBanner1">
          <ul className="banCon w1200 clearfix">
            <li className="fl">
              <i className="icon-data indexhas"></i>
              <div className="title">我们拥有</div>
              <div className="userNum">125个用户公司</div>
            </li>
            <li className="fl">
              <i className="icon-data indexagent"></i>
              <div className="title">代理过</div>
              <div className="gameNum">454645个用户</div>
            </li>
            <li className="fl">
              <i className="icon-data indexamount"></i>
              <div className="title">总交易额</div>
              <div className="money">4365465476547元</div>
            </li>
          </ul>
        </div>

        <div className="indexBanner2">
          <div className="w1200">
            <div className="clearfix tese-info">
              <div className="fl">
                <div>
                  <img className="items-outer1" src={require('../../../assets/static/img/items-outer1.png')} alt=""/>
                  <img className="items-outer2" src={require('../../../assets/static/img/items-outer2.png')} alt=""/>
                  <img className="items-outer3" src={require('../../../assets/static/img/items-outer3.png')} alt=""/>
                  <img className="items-inner" src={require('../../../assets/static/img/items-inner.png')} alt=""/>
                </div>
              </div>
              <div className="fr">
                <img src={require('../../../assets/static/img/ts-title.png')} alt=""/>
              </div>
            </div>
          </div>
        </div>

        <div className="indexBanner2plus">

        </div>

        <div className="indexBanner3">
          <div className="banBg">
            <div className="tg-wrapper">
              <i className="icon-tg icon-tg1"></i>
              <i className="icon-tg icon-tg2"></i>
              <i className="icon-tg icon-tg3"></i>
              <i className="icon-tg icon-tg4"></i>
              <i className="icon-tg icon-tg5"></i>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Home