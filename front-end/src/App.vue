<template>
  <div class="container">
    <!--头部开始-->
    <div class="header-box">
      <div class="header">
        <div class="header-left">
          <div class="yk-logo">
            <a href="#">
              <span class="youkulogo"></span>
            </a>
            <div class="handle yk-chanel">
              <i class="ico-channel"></i>
              <span><a  href="#">频道</a></span>
            </div>
          </div>
        </div>
        <div class="header-right">
          <div class="handle yk-search">
            <i class="ico-search"></i>
            <span><a href="#">搜索</a></span>
          </div>
          <div class="handle yk-center">
            <i class="ico-user"></i>
            <span><a href="#">登录</a></span>
          </div>
        </div>
      </div>
      <!--头部搜索栏-->
      <div class="search-box">
        <form action="" method="post" class="form-search">
          <input type="text" name="search" class="input-search"/>
          <button type="submit" class="btn-search">
            <i class="ico-so"></i>
            搜库
          </button>
        </form>
      </div>
    </div>
    <!--头部结束-->
    <!--导航栏开始-->
    <ul id="nav">
      <li v-for="nav in navlist">
        <a href="#">
          {{ nav.txt }}
        </a>
      </li>
    </ul>
    <!--导航栏结束-->

    <div class="videolist">
      <!--幻灯片开始-->
      <div class="thumbnail">
          <div class="p-taglt">
            <i class="ico-isvip"></i>
          </div>
          <div class="thumb-pic">
            <img src="http://r1.ykimg.com/050C000059609755ADC0AE17B902E817" class="thumb-real-pic">
            <a href="http://m.youku.com" class="p-link"></a>
          </div>
          <div class="p-metadata">
              <div class="p-title"><军师联盟>司马懿柏灵筠生死较量 醋缸上线画风跑偏</div>
              <div class="p-desc">
                <span class="p-check">更新至41</span>
                <i class="ico-stat-play"></i>
                <span class="p-num">52.3亿</span>
                <i class="ico-stat-comment"></i>
                <span class="p-num">10.1万</span>
              </div>
          </div>
      </div>
      <!--幻灯片结束-->
      <!--推荐视频开始-->
      <div class="v-recommend">
        <div class="v-item">
          <img src="http://r1.ykimg.com/0515000059609933ADC0AE0E60013AAE">
          <div class="v-info">
            <div class="v-title">[快男]养鸡带假发变身</div>
            <div class="v-desc">
              <span class="v-status">更新至46</span>
              <i class="ico-stat-play"></i>
              <span class="v-num">播放</span>
              <i class="ico-stat-comment"></i>
              <span class="v-num">评论</span>
            </div>
          </div>
        </div>
        <div class="v-item">
          <img src="http://r1.ykimg.com/0515000059609933ADC0AE0E60013AAE">
          <div class="v-info">
            <div class="v-title">[快男]养鸡带假发变身</div>
            <div class="v-desc">
              <i class="ico-stat-play"></i>
              <span class="v-num">播放</span>
              <i class="ico-stat-comment"></i>
              <span class="v-num">评论</span>
            </div>
          </div>
        </div>
        <div class="v-item">
          <img src="http://r1.ykimg.com/0515000059609933ADC0AE0E60013AAE">
          <div class="v-info">
            <div class="v-title">[快男]养鸡带假发变身</div>
            <div class="v-desc">
              <i class="ico-stat-play"></i>
              <span class="v-num">播放</span>
              <i class="ico-stat-comment"></i>
              <span class="v-num">评论</span>
            </div>
          </div>
        </div>
        <div class="v-item">
          <img src="http://r1.ykimg.com/0515000059609933ADC0AE0E60013AAE">
          <div class="v-info">
            <div class="v-title">[快男]养鸡带假发变身</div>
            <div class="v-desc">
              <i class="ico-stat-play"></i>
              <span class="v-num">播放</span>
              <i class="ico-stat-comment"></i>
              <span class="v-num">评论</span>
            </div>
          </div>
        </div>
        <div class="v-item">
          <img src="http://r1.ykimg.com/0515000059609933ADC0AE0E60013AAE">
          <div class="v-info">
            <div class="v-title">[快男]养鸡带假发变身</div>
            <div class="v-desc">
              <i class="ico-stat-play"></i>
              <span class="v-num">播放</span>
              <i class="ico-stat-comment"></i>
              <span class="v-num">评论</span>
            </div>
          </div>
        </div>
        <div class="v-item">
          <img src="http://r1.ykimg.com/0515000059609933ADC0AE0E60013AAE">
          <div class="v-info">
            <div class="v-title">[快男]养鸡带假发变身</div>
            <div class="v-desc">
              <i class="ico-stat-play"></i>
              <span class="v-num">播放</span>
              <i class="ico-stat-comment"></i>
              <span class="v-num">评论</span>
            </div>
          </div>
        </div>
      </div>
      <!--推荐视频结束-->
    </div>
    <!--右下角固定工具栏-->
    <div class="rsidebar">
      <ul>
        <li><a ><i class="ico-gotop"></i></a></li>
        <li><a><i class="ico-feedback"></i></a></li>
        <li><a><i class="ico-user"></i></a></li> 
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      navlist: [
      { txt: '首页' },
      { txt: '娱乐' },
      { txt: '文化' },
      { txt: '纪实' },
      { txt: '财经' },
      { txt: '体育' },
      { txt: '直播' },
      { txt: '历史' }
      ]
    }
  }
}
</script>

<style>

body,div,a,span,ul,li,button,input,img{
  margin:0px;
  padding:0px;
}

.container{
  overflow: auto;
  height: 100%;
}

a {
  text-decoration: none;
  color:inherit;
}

.youkulogo{
  background:url(http://static.youku.com/index/img/mheader/yklogo.png);
  height: 26px;
  width: 120px;
  display: inline-block;
  margin-left:10px;
}

/*header小图标通用样式*/
.handle {
  width: 24px;
  font-size:12px;
  text-align: center;
  padding:4px 10px;
  color:#555;
}

.ico-channel,.ico-search,.ico-user,.ico-so {
  width:16px;
  height: 16px;
  background: url(http://static.youku.com/index/img/mheader/mheader@2x.png) no-repeat;
  background-size:96px 144px;
  display: inline-block; 
  vertical-align: middle;
}

.ico-channel{
  background-position: 0 0;
}

.ico-search{
  background-position: -24px 0;
}

.ico-user{
  background-position: 0 -24px;
}

.ico-so {
  background-position: 0 -120px;
}

.btn-search {
  background-color:#2E8EE2;
  font-size: 14px;
}

.middle-container {
  margin: 0 10px;
}

/*其他小图标*/
.ico-stat-play,.ico-stat-comment,.ico-isvip {
  background: url(http://static.youku.com/index/img/mobile/yk@2x.png) no-repeat;
  background-size:300px 300px;
  display: inline-block;
}

.ico-stat-play,.ico-stat-comment{
  height: 12px;
  width:12px;
  vertical-align: middle;
}

.ico-isvip {
  width:44px;
  height: 44px;
}

.p-metadata i,.p-metadata .p-num{
  vertical-align: bottom;
}

.ico-stat-play {
  background-position: -30px 0;
}

.ico-stat-comment {
  background-position: -60px 0;
}

.ico-isvip {
  background-position: -60px -60px;
}

/*header*/
.header {
  width:100%;
  height:40px;
  background-color: #f6f6f6;
}

.header-left,.header-right{
  display:inline-block;
}

.header-right{
  position: absolute;
  right: 0px;
}

.handle {
  display: inline-block;
}

/*搜索栏*/
.search-box{
  margin:10px;
}

.input-search{
  width: 80%;
  float:left;
  height: 28px;
  border:1px solid #a0a0a0;
  border-right:0px;
}

.btn-search {
  border:0px;
  width:66px;
  height: 30px;
  margin-left:1px;
  background-color: #2E8EE2;
  color:#fff;
}

/*菜单栏*/
#nav {
  border-bottom: 4px solid #ccc;
  overflow-x: auto;
  white-space: nowrap;
  margin:0 10px;
  color:#555;
}

/*隐藏滚动条*/
#nav::-webkit-scrollbar {
  display:none;
}

#nav li {
  list-style: none;
  display: inline-block;
  margin-top:12px;
  margin-right:18px;
  padding-bottom: 8px;
  font-size: 18px;
}

#nav li .current{
  border-bottom-color:#06a7e1;
  color:#3399e0;
}

/*大图*/
.thumbnail{
  margin:15px 10px 10px 10px;
  position: relative;
}

.thumb-pic{
  margin-bottom: -4px;
}

.thumb-real-pic {
  width:100%;
  height: 100%;
}

.p-link{
  position: absolute;
  top:0;
  left:0;
  width:100%;
  height: 100%;
}

.p-taglt{
  position: absolute;
  top:0;
  left:0;
}

/*大图媒体信息*/
.p-metadata {
  background-color: #f5f5f5;
  padding:5px;
}

.p-title {
  font-size:14px;
  color:#555;
}


/*大图媒体信息*/
.p-check {
  font-size:12px;
  position: absolute;
  bottom:52px;
  color:#ddd;
}

.p-num {
  font-size:10px;
  color:#555;
}

/*小视频列表*/
.v-item {
  float:left;
  width: 50%;
  box-sizing:border-box;
  -moz-box-sizing:border-box; /* Firefox */
  -webkit-box-sizing:border-box; /* Safari */
  padding-left: 10px;
  padding-right:10px;
  margin-bottom:15px;
}

.v-item img{
  max-width: 100%;
  
}

.v-info{
  background-color: #ddd;
  margin-top:-2px;
  max-width: 100%;
}

.v-status{
  font-size: 12px;
  color:#fff;
  position: absolute;
  bottom:10px;
  left:15px;
}

.v-title{
  font-size:14px;
}

.v-num{
  font-size: 12px;
  color:#909090;
}

/*右下角固定工具栏*/
.rsidebar {
  position: fixed;
  right:10px;
  bottom: 50px;
  background-color: 
}

.rsidebar li{
  list-style: none;
  text-align: center;
  margin-top:1px;
}
.rsidebar li a {
  display: block; /*inline元素不能设置宽高*/
  width:50px;
  height: 50px;
  background-color: rgba(0,0,0,0.5);
  border-radius: 5px;
}

/*sidebar小图标样式*/
.rsidebar .ico-gotop,.rsidebar .ico-feedback,.rsidebar .ico-user{
  background: url(http://static.youku.com/index/img/mobile/sidebar@2x.png) no-repeat; 
  background-size:32px 130px; /*图片尺寸64 260 图片为什么要缩小一倍*/
  display: inline-block;
  margin-top:10px;
}

.rsidebar .ico-gotop {
  width:24px;
  height: 26px;
  background-position: 0 0;
}

.rsidebar .ico-user {
  width:26px;
  height: 26px;
  background-position: 0 -100px; /*位置定位*/
}

.rsidebar .ico-feedback {
  width:22px;
  height: 24px;
  background-position: 0 -40px;
}

</style>

