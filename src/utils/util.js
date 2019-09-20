import $ from 'jquery'

export function animateds (el, animatename) {
  // 获取页面滚动高度
  let scrollHeight = $(document).scrollTop()
  // 获取浏览器窗口可视高度
  let screenHeight = document.documentElement.clientHeight
  // 获取元素位于文档所在高度
  if ($(el).offset()) {
    var elHeight = $(el).offset().top
  }
  if ((scrollHeight + screenHeight - 100) > elHeight) {
    $(el).addClass('animated ' + animatename)
  }
}