<template>
  <div class="container">
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
          <div class="thumb-pic">
            <img src="http://r1.ykimg.com/050C000059609755ADC0AE17B902E817" class="thumb-real-pic">
            <a href="http://m.youku.com" class="thumb-link"></a>
          </div>
          <div class="p-metadata">
              <div class="p-title"><军师联盟>司马懿柏灵筠生死较量 醋缸上线画风跑偏</div>
              <div class="p-desc">
                <i class="ico-stat-play"></i>
                <span class="p-num">52.3亿</span>
                <i class="ico-stat-comment"></i>
                <span class="p-num">10.1万</span>
              </div>
          </div>
      </div>
      <!--幻灯片结束-->
      <!--视频列表开始-->
      <div class="v-item">
        <img src="http://r1.ykimg.com/0515000059609933ADC0AE0E60013AAE">
        <div class="v-info">
          <div class="v-title">[快男]养鸡带假发变身</div>
          <div class="v-desc">
            <span class="v-num">播放</span>
            <span class="v-num">评论</span>
          </div>
        </div>
      </div>
      <div class="v-item">
        <img src="http://r1.ykimg.com/0515000059609933ADC0AE0E60013AAE">
        <div class="v-info">
          <div class="v-title">[快男]养鸡带假发变身</div>
          <div class="v-desc">
            <i class="ico-stat-play" title="播放"></i>
            <span class="v-num">播放</span>
            <span class="v-num">评论</span>
          </div>
        </div>
      </div>
      <!--视频列表结束-->
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
}

.thumb-pic{
  margin-bottom: -4px;
}

.thumb-real-pic {
  width:100%;
  height: 100%;
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

/*其他小图标*/
.ico-stat-play,.ico-stat-comment {
  background: url(http://static.youku.com/index/img/mobile/yk@2x.png) no-repeat;
  background-size:300px 300px;
  height: 12px;
  width:12px;
  display: inline-block;
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

.p-num {
  font-size:10px;
  color:#555;
}

.v-item {
  float:left;
  width: 50%;
  box-sizing:border-box;
  -moz-box-sizing:border-box; /* Firefox */
  -webkit-box-sizing:border-box; /* Safari */
  padding-left: 10px;
  padding-right:10px;
}
.v-item img{
  max-width: 100%;
}

.v-info{
  background-color: #ddd;
}

.v-title{
  font-size:14px;
}

.v-num{
  font-size: 12px;
  color:#909090;
}
</style>

